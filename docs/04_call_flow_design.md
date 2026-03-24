# 04 Call Flow 对话流程设计

> 覆盖行业：牙医诊所 / 法律顾问 / 家政服务
> 版本：v1.0 | 日期：2026-03-24

---

## 一、牙医诊所 Call Flow

### 1.1 开场白变体（Greeting Variants）

**变体 A — 标准工作时间**
```
"感谢致电 [诊所名称]，我是您的 AI 助理小美。
请问您是要预约复诊、新患者初诊，还是有其他需要帮助的地方？"
```

**变体 B — 午休时段（12:00–13:30）**
```
"您好，欢迎致电 [诊所名称]。
目前是午休时间，前台医护人员暂时休息，我是 AI 助理，
可以帮您登记预约信息，稍后由人工确认。请问您有什么需要？"
```

**变体 C — 非工作时间 / 节假日**
```
"您好，感谢来电。诊所当前已下班，工作时间为周一至周六 9:00–18:00。
如有紧急牙科急症，请按 1 获取急诊推荐；
如需预约，请按 2 留言，我们将在下一个工作日优先回复您。"
```

---

### 1.2 主状态机（7 个分支）

```
DENTAL_MAIN_FLOW
├── Branch 1: 新患者预约        → NEW_PATIENT_BOOKING
├── Branch 2: 复诊预约          → RETURNING_PATIENT_BOOKING
├── Branch 3: 取消 / 改约       → RESCHEDULE_CANCEL
├── Branch 4: 账单 / 保险查询   → BILLING_INQUIRY
├── Branch 5: 急症处理          → DENTAL_EMERGENCY
├── Branch 6: 诊所信息查询      → INFO_QUERY（地址/停车/营业时间）
└── Branch 7: 转人工            → TRANSFER_TO_STAFF
```

---

### 1.3 新患者预约完整对话脚本

```
[状态: GREETING]
AI:  "感谢致电 [诊所名称]，我是 AI 助理小美。请问您是新患者吗？"
用户: "是的，我是新来的。"

[状态: NEW_PATIENT_BOOKING → 收集基本信息]
AI:  "欢迎！很高兴为您服务。我先帮您登记基本信息，请问您的姓名？"
用户: "我叫李明。"

AI:  "李明您好。请问您方便提供联系电话？"
用户: "138-xxxx-xxxx"

AI:  "好的。请问您这次就诊的主要原因是什么？
     比如：常规检查与洗牙、牙痛、补牙，还是其他？"
用户: "牙痛，右下角那颗。"

[状态: COLLECTING_INFO → 症状细节]
AI:  "了解。请问牙痛持续多久了？是持续疼痛还是偶发？"
用户: "大概两天了，吃东西的时候特别疼。"

AI:  "明白了。是否有对药物过敏的情况，或者正在服用任何药物？"
用户: "没有。"

[状态: COLLECTING_INFO → 时间偏好]
AI:  "好的，我来帮您查看可用时段。
     请问您倾向于哪个时间段就诊？
     我们本周有：周三上午 10:00、周四下午 14:30、周五上午 11:00。"
用户: "周四下午吧。"

[状态: CONFIRMING]
AI:  "我来确认一下您的预约信息：
     - 姓名：李明
     - 联系电话：138-xxxx-xxxx
     - 就诊时间：本周四 14:30
     - 主诉：右下方牙痛，持续约两天
     - 医生：[诊所默认分配医生]
     以上信息正确吗？"
用户: "对的，没问题。"

[状态: CLOSING]
AI:  "预约已为您登记完成！我们会在就诊前一天发短信提醒您。
     就诊时请携带身份证件和保险卡（如有）。
     如需取消或修改，请提前 24 小时来电。祝您早日康复，再见！"
```

---

### 1.4 异常处理节点

| 异常场景 | 触发条件 | 处理策略 |
|----------|----------|----------|
| 用户沉默超过 5 秒 | 连续无输入 | 重复最后一个问题，最多 2 次，超过则提示"如需帮助请按 0 转人工" |
| 用户表述急症 | 检测关键词：剧烈疼痛/脓肿/外伤/出血不止 | 立即路由至 DENTAL_EMERGENCY，推荐就近急诊并提供 24h 急诊电话 |
| 无可用时段 | 系统查询返回空 | 告知最近可用日期，询问是否加入候补名单 |
| 用户要求折扣/保险细节 | 检测关键词：费用/多少钱/保险报销 | 告知基本收费范围，转人工或邮件发送详细报价 |
| 预约系统超时 | API 响应 > 8s | 告知系统繁忙，记录用户信息，承诺 2 小时内回电确认 |

---

## 二、法律顾问 Call Flow

### 2.1 AI 边界声明（Mandatory Disclaimer）

每次通话开始，AI 必须在 60 秒内播放以下声明（不可跳过）：

```
"您好，我是 [律所名称] 的 AI 接待助理。
请注意：我不是持牌律师，无法提供法律意见或建议。
我的职责是收集您的基本情况，安排您与律师团队的咨询预约。
我们的对话可能被录音用于服务质量改进。
如您同意，请说'同意'或按 1 继续；如需直接转人工，请按 0。"
```

> 规则：未收到"同意"确认前，禁止收集任何案件信息。

---

### 2.2 意图路由（Intent Router）

```
LEGAL_INTENT_ROUTER
├── 刑事辩护          → CRIMINAL_DEFENSE_FLOW
│   ├── 逮捕/羁押 [紧急]  → EMERGENCY_ARREST_FLOW（优先级最高）
│   ├── 刑事指控
│   └── 保释申请
├── 民事诉讼          → CIVIL_LITIGATION_FLOW
│   ├── 合同纠纷
│   ├── 侵权索赔
│   └── 劳动争议
├── 家庭法            → FAMILY_LAW_FLOW
│   ├── 离婚 / 分居
│   ├── 子女抚养权
│   └── 财产分割
├── 移民法            → IMMIGRATION_FLOW
├── 房产 / 商业       → REAL_ESTATE_BUSINESS_FLOW
└── 一般咨询预约      → GENERAL_CONSULTATION_BOOKING
```

---

### 2.3 7 步 Intake 流程

```
Step 1: DISCLAIMER_ACKNOWLEDGMENT
  - 播放 AI 边界声明
  - 等待用户确认
  - 未确认 → 转人工或结束通话

Step 2: INTENT_DETECTION
  - "请简单描述您需要哪方面的法律帮助？"
  - NLP 分类 → 路由至对应 Flow
  - 置信度 < 70% → 人工确认意图

Step 3: BASIC_INFO_COLLECTION
  - 姓名（当事人姓名）
  - 联系方式（电话 + 邮箱）
  - 首选联系时间

Step 4: CASE_SUMMARY（简要案情，限 3 个问题）
  - "事件大致发生在什么时候？"
  - "涉及哪些主要当事方？"
  - "目前是否有法院传票、期限或其他紧急截止日期？"

Step 5: CONFLICT_CHECK_TRIGGER
  - 收集对方当事人姓名/公司名（用于律所内部利益冲突检查）
  - 告知用户："我们需要 1 个工作日完成利益冲突审查，通过后才能正式接案。"

Step 6: CONSULTATION_SCHEDULING
  - 告知收费政策（如：首次咨询 30 分钟免费 / $X 收费）
  - 提供可用时段
  - 确认预约

Step 7: INTAKE_CONFIRMATION
  - 汇总所有收集信息，请用户确认
  - 发送确认邮件/短信
  - 告知后续流程（律师将在 X 小时内审阅）
```

---

### 2.4 紧急逮捕响应脚本

> 触发条件：检测到关键词 — 逮捕/被捕/警察/拘留/羁押/保释/手铐

```
[状态: EMERGENCY_ARREST_FLOW — 立即启动，跳过常规 Intake]

AI:  "我听到您提到了逮捕/拘留的情况，这是紧急状况，
     我会立即为您安排律师。
     请先回答几个快速问题：

     第一：被逮捕的人是您本人还是家人？"
用户: "我儿子刚被警察带走。"

AI:  "明白。请问他现在在哪个警察局或拘留所（如果您知道的话）？"
用户: "好像是 [辖区] 派出所。"

AI:  "好的。请问他被捕的时间大概是？"
用户: "一个小时前。"

AI:  "非常感谢。我现在立即将信息传递给值班律师。
     [律所名称] 提供 24 小时紧急刑事值班服务。
     值班律师将在 15 分钟内回电到您现在的号码。

     重要提示：请告知您儿子，在律师到场前，
     对任何问题都可以说'我选择保持沉默，我需要律师'。
     这是他的合法权利。

     您的回电号码是 [读取来电号码] 吗？"
用户: "是的。"

AI:  "已记录。律师马上联系您。请保持电话畅通。再见。"

[状态机动作:
  - 立即触发值班律师呼叫
  - 发送 SMS 给值班律师包含: 时间戳/拘留地点/来电号码
  - 记录完整通话录音
  - 标记为 PRIORITY_EMERGENCY]
```

---

## 三、家政服务 Call Flow

### 3.1 服务区域验证（Zone Validation）

```
[状态: SERVICE_AREA_CHECK — 所有来电的第一步验证]

AI:  "您好，感谢致电 [家政公司名称]！
     我是 AI 助理，请问您需要服务的地址在哪个城市/区域？"
用户: "[用户报出地址]"

[后端逻辑]
ZONE_CHECK(address):
  IF address IN service_zones:
    → 继续主流程
  ELIF address IN partner_zones:
    → 告知"该区域由我们合作团队提供服务，价格和档期略有差异，是否继续？"
  ELIF address IN future_expansion_zones:
    → "很遗憾，您的区域暂未覆盖，预计 [日期] 开通。是否加入候补通知名单？"
  ELSE:
    → "非常抱歉，您的地址目前不在我们的服务范围内。
       我可以为您推荐附近的认证合作机构，是否需要？"
```

---

### 3.2 紧急漏水完整对话脚本

> 触发关键词：漏水/水管爆了/水漫/淹水/紧急/水停不下来

```
[状态: EMERGENCY_WATER_LEAK — 跳过常规报价流程，直接进入紧急通道]

AI:  "我注意到您提到了漏水紧急情况！
     我马上为您安排紧急上门，同时请先做以下操作：

     【立即操作】请找到家中的主水阀并关闭，
     通常位于厨房橱柜下方、浴室或车库。关掉了吗？"
用户: "我在找，找到了，关掉了。"

AI:  "非常好！关掉主水阀可以防止进一步损失。
     现在请告诉我：
     漏水位置大概在哪里？（厨房/浴室/天花板/地下室）"
用户: "厨房水槽下面，管子裂了。"

AI:  "明白。请问您的具体地址？"
用户: "[报出地址]"

[区域验证通过]

AI:  "好的。[地址] 在我们的服务范围内。
     现在是 [时间]，我们的紧急上门团队最快可以在 [45–90 分钟] 内到达。

     紧急上门费用说明：
     - 上门费：$XX（紧急夜间/节假日：$XX）
     - 维修费用根据现场情况评估，师傅到场后会先报价再施工

     请问您同意我们安排紧急上门吗？"
用户: "同意，越快越好。"

AI:  "好的，正在派单。请问您的姓名和回电号码？"
用户: "张女士，139-xxxx-xxxx。"

[状态: CONFIRMING]
AI:  "确认一下：
     - 服务地址：[地址]
     - 联系人：张女士 / 139-xxxx-xxxx
     - 问题：厨房水槽下方管道破裂
     - 预计到达：[时间段]

     师傅出发后会提前 15 分钟电话通知您。
     同时我会发一条短信到您手机，包含师傅信息和实时跟踪链接。
     还有其他需要我帮您的吗？"
用户: "没有了，谢谢。"

AI:  "好的，请注意保持电话畅通。师傅马上出发！再见。"

[状态机动作:
  - 触发紧急派单系统
  - 发送 SMS（地址+问题+预计时间）给用户
  - 发送工单给最近可用师傅
  - 标记 PRIORITY: EMERGENCY]
```

---

### 3.3 报价流程两条路径

#### 路径 A — 标准报价（用户知道需求）

```
QUOTE_PATH_A: DIRECT_QUOTE
├── 收集服务类型（保洁/深度清洁/搬家保洁/定期上门）
├── 收集房屋信息（面积/房间数/楼层）
├── 询问特殊需求（宠物/过敏/特定清洁剂偏好）
├── 实时生成估价范围（调用报价引擎）
├── 提供 3 个套餐选项（基础/标准/深度）
├── 用户选择 → 进入时间预约流程
└── 确认 → 生成订单号 → 发送确认短信
```

```
[对话示例]
AI:  "请问您需要什么类型的保洁服务？"
用户: "普通家庭保洁。"
AI:  "好的，请问您家大约多少平方米，几室几厅？"
用户: "120平，三室两厅。"
AI:  "了解。根据您的信息，我们提供以下套餐：
     - 基础版（3小时）：$XX，含基础清洁
     - 标准版（5小时）：$XX，含厨房浴室深度清洁
     - 全面版（7小时）：$XX，含全屋深度+冰箱内部
     请问您倾向哪个方案？"
```

#### 路径 B — 引导报价（用户需求模糊）

```
QUOTE_PATH_B: GUIDED_QUOTE
├── 触发条件: 用户说"不确定"/"你们都有什么服务"/"帮我推荐"
├── 5 个快速诊断问题:
│   Q1: "上次专业保洁是什么时候？"（判断污垢程度）
│   Q2: "家里有宠物吗？"（影响清洁方案）
│   Q3: "主要烦恼是哪里？"（厨房油烟/浴室水垢/地板/其他）
│   Q4: "是一次性还是定期服务？"（影响定价策略）
│   Q5: "预算大致在什么范围？"（可选，用户愿意说才问）
├── AI 根据答案生成推荐方案（1–2 个）
├── 解释推荐理由
└── 进入预约流程 或 发送详细报价到邮件
```

---

## 四、通用异常处理手册

### 4.1 骚扰电话处理

```
HARASSMENT_DETECTION_FLOW

触发条件（满足以下任一）:
  - 检测到辱骂词汇（维护词库，定期更新）
  - 连续 3 次无意义输入
  - 用户明确表示测试/骚扰性质
  - 通话超过 15 分钟且无实质进展

处理层级:
  Level 1 (首次检测):
    AI: "您好，为了更好地为您服务，请问您有什么具体需要帮助的？"
    （礼貌重定向，不提及检测到骚扰）

  Level 2 (二次检测):
    AI: "抱歉，如果您现在不方便通话，可以稍后再致电。
         如需帮助，请按 0 转人工。"

  Level 3 (三次检测 / 严重辱骂):
    AI: "为了维护正常服务秩序，本次通话将要结束。
         如有业务需要，欢迎再次致电。再见。"
    [动作: 结束通话 + 记录号码 + 标记风险 + 通知主管]

黑名单机制:
  - 同一号码 24 小时内触发 3 次 Level 3 → 自动加入临时黑名单（7天）
  - 人工审核确认后可升级为永久黑名单
```

---

### 4.2 英西语言切换

```
LANGUAGE_SWITCHING_FLOW

自动检测:
  - 用户首句语言检测（置信度 > 80% 才切换）
  - 支持: 中文 / 英文 / 西班牙文

切换触发词:
  英文: "English please" / "Can you speak English?"
  西班牙文: "Español" / "Habla español?" / "En español por favor"
  中文: "请说中文" / "中文"

切换响应模板:
  → 英文: "Of course! Switching to English now. How can I help you today?"
  → 西班牙文: "¡Por supuesto! Cambiando al español. ¿En qué puedo ayudarle hoy?"
  → 中文: "好的，已切换为中文服务。请问您需要什么帮助？"

规则:
  - 语言切换后，本次通话全程保持该语言
  - 如用户再次切换语言，重新执行检测逻辑
  - 西班牙文模式下，若涉及复杂法律/医疗术语，提示"建议转接西班牙语专员以确保准确性"
  - 所有语言的转录/摘要统一存储为英文
```

---

### 4.3 老年用户慢速模式

```
SENIOR_SLOW_MODE

自动激活条件（满足 2 项以上）:
  - 语速检测: 用户说话速度 < 阈值（约 90词/分钟）
  - 多次要求重复: "你再说一遍" / "我没听清"（≥ 2次/通话）
  - 通话时长/信息收集比异常（收集少量信息耗时过长）
  - 用户主动说: "我不太会用电话" / "你能慢点吗"

激活后行为调整:
  1. TTS 语速降低 20%（从默认 1.0x 降至 0.8x）
  2. 每个问题后自动停顿 3 秒（等待用户反应）
  3. 每次只问一个问题（禁止复合问句）
  4. 重要信息重复确认两次
  5. 使用更简单的词汇（避免缩写和专业术语）
  6. 选项数量限制在 2–3 个（不超过 3 个选择）
  7. 每完成一个步骤给予正向反馈: "很好，我记下了。"

示例对比:
  普通模式: "请提供您的姓名、联系电话和服务地址。"
  慢速模式: "请告诉我您的姓名，就是您叫什么名字？"
             [3秒停顿]
             [用户回答]
             "好的，谢谢。现在请告诉我您的电话号码。"

退出慢速模式:
  - 用户说"快点" / "正常说话就行"
  - 检测到语速明显加快且理解准确率提升
```

---

### 4.4 网络质量差降级策略

```
POOR_NETWORK_DEGRADATION

质量等级定义:
  Level 0 (正常):   丢包率 < 2%，延迟 < 150ms
  Level 1 (轻微):   丢包率 2–5%，延迟 150–300ms
  Level 2 (中等):   丢包率 5–15%，延迟 300–600ms
  Level 3 (严重):   丢包率 > 15%，延迟 > 600ms 或频繁断续

各级降级策略:
  Level 1:
    - 降低 TTS 音频码率（48kbps → 32kbps）
    - 句子结尾加停顿，避免被截断
    - 增加确认步骤: "您刚才说的是 [复述]，对吗？"

  Level 2:
    - 进一步降低码率（32kbps → 16kbps）
    - 切换为更短的问句
    - 每收集一条信息立即存储（防止丢失）
    - 主动告知: "您的网络信号稍弱，如有听不清请随时说'重复'。"

  Level 3:
    - 触发 SMS 降级模式提示:
      AI: "您的通话信号很差，为确保信息准确，
           建议我们改用短信沟通，或您换个信号好的地方再来电。
           您是否同意我发短信到您的号码继续处理？"
    - 如用户同意: 结束语音通话，切换至 SMS Bot
    - 如用户拒绝: 尽可能简化通话，只收集最关键信息（姓名+电话+需求一句话）

重连处理:
  - 通话中断后 60 秒内同号码回拨: 自动恢复上下文
    AI: "您好，刚才通话好像中断了，我这里保留了您的信息，
         我们继续之前的内容好吗？"
  - 超过 60 秒: 询问是否需要重新开始或从断点继续
```

---

## 五、状态机伪代码

### 5.1 核心状态机定义

```python
# ============================================================
# Universal Call Flow State Machine
# 适用于：牙医 / 法律 / 家政（通过 industry_config 区分）
# ============================================================

from enum import Enum
from dataclasses import dataclass, field
from typing import Optional, Dict, Any, List
import time

class State(Enum):
    GREETING            = "GREETING"
    DISCLAIMER          = "DISCLAIMER"          # 仅法律行业
    INTENT_DETECTION    = "INTENT_DETECTION"
    ZONE_VALIDATION     = "ZONE_VALIDATION"      # 仅家政行业
    COLLECTING_INFO     = "COLLECTING_INFO"
    CONFIRMING          = "CONFIRMING"
    PROCESSING          = "PROCESSING"           # 调用后端 API
    CLOSING             = "CLOSING"
    TRANSFER_TO_HUMAN   = "TRANSFER_TO_HUMAN"
    EMERGENCY           = "EMERGENCY"
    ERROR               = "ERROR"
    TERMINATED          = "TERMINATED"

class Intent(Enum):
    NEW_APPOINTMENT     = "new_appointment"
    RESCHEDULE          = "reschedule"
    CANCEL              = "cancel"
    BILLING             = "billing"
    EMERGENCY           = "emergency"
    INFO_QUERY          = "info_query"
    COMPLAINT           = "complaint"
    UNKNOWN             = "unknown"

@dataclass
class CallContext:
    call_id:            str
    caller_number:      str
    industry:           str                     # dental / legal / home_service
    language:           str             = "zh"
    current_state:      State           = State.GREETING
    intent:             Optional[Intent] = None
    collected_info:     Dict[str, Any]  = field(default_factory=dict)
    is_senior_mode:     bool            = False
    network_quality:    int             = 0     # 0–3
    retry_count:        int             = 0
    state_history:      List[State]     = field(default_factory=list)
    start_time:         float           = field(default_factory=time.time)
    last_input_time:    float           = field(default_factory=time.time)


# ============================================================
# 状态转移函数
# ============================================================

def transition(ctx: CallContext, event: str, payload: Dict = {}) -> State:
    """
    核心状态转移逻辑
    GREETING → INTENT_DETECTION → COLLECTING_INFO → CONFIRMING → CLOSING
    """
    ctx.state_history.append(ctx.current_state)
    current = ctx.current_state

    # ── GREETING ──────────────────────────────────────────
    if current == State.GREETING:
        if event == "call_connected":
            play_greeting(ctx)
            if ctx.industry == "legal":
                return set_state(ctx, State.DISCLAIMER)
            else:
                return set_state(ctx, State.INTENT_DETECTION)

        if event == "no_input" and ctx.retry_count < 2:
            ctx.retry_count += 1
            play_greeting(ctx)                  # 重复开场白
            return current

        if event == "no_input" and ctx.retry_count >= 2:
            return set_state(ctx, State.TRANSFER_TO_HUMAN)

    # ── DISCLAIMER（法律专用）─────────────────────────────
    elif current == State.DISCLAIMER:
        if event == "disclaimer_accepted":
            return set_state(ctx, State.INTENT_DETECTION)

        if event == "disclaimer_rejected":
            play_message(ctx, "understood_transfer")
            return set_state(ctx, State.TRANSFER_TO_HUMAN)

        if event == "timeout":
            ctx.retry_count += 1
            if ctx.retry_count >= 3:
                return set_state(ctx, State.TRANSFER_TO_HUMAN)
            play_disclaimer(ctx)
            return current

    # ── INTENT_DETECTION ──────────────────────────────────
    elif current == State.INTENT_DETECTION:
        if event == "intent_detected":
            ctx.intent = payload.get("intent")

            # 紧急情况优先路由
            if ctx.intent == Intent.EMERGENCY:
                return set_state(ctx, State.EMERGENCY)

            # 家政服务需要先验证区域
            if ctx.industry == "home_service":
                return set_state(ctx, State.ZONE_VALIDATION)

            return set_state(ctx, State.COLLECTING_INFO)

        if event == "intent_unclear":
            ctx.retry_count += 1
            if ctx.retry_count >= 3:
                return set_state(ctx, State.TRANSFER_TO_HUMAN)
            play_intent_clarification(ctx)
            return current

    # ── ZONE_VALIDATION（家政专用）────────────────────────
    elif current == State.ZONE_VALIDATION:
        if event == "zone_valid":
            return set_state(ctx, State.COLLECTING_INFO)

        if event == "zone_partner":
            inform_partner_service(ctx)
            if payload.get("user_agrees"):
                ctx.collected_info["is_partner_zone"] = True
                return set_state(ctx, State.COLLECTING_INFO)
            else:
                return set_state(ctx, State.CLOSING)

        if event == "zone_invalid":
            play_out_of_zone_message(ctx)
            offer_waitlist(ctx)
            return set_state(ctx, State.CLOSING)

    # ── COLLECTING_INFO ────────────────────────────────────
    elif current == State.COLLECTING_INFO:
        if event == "field_collected":
            field_name  = payload.get("field")
            field_value = payload.get("value")
            ctx.collected_info[field_name] = field_value

            next_field = get_next_required_field(ctx)
            if next_field:
                ask_for_field(ctx, next_field)
                return current                  # 保持 COLLECTING_INFO 状态
            else:
                return set_state(ctx, State.CONFIRMING)

        if event == "user_wants_transfer":
            return set_state(ctx, State.TRANSFER_TO_HUMAN)

        if event == "silence_timeout":
            handle_silence(ctx)
            return current

        if event == "emergency_detected":
            return set_state(ctx, State.EMERGENCY)

    # ── CONFIRMING ────────────────────────────────────────
    elif current == State.CONFIRMING:
        if event == "user_confirmed":
            return set_state(ctx, State.PROCESSING)

        if event == "user_wants_edit":
            field_to_edit = payload.get("field")
            ctx.collected_info.pop(field_to_edit, None)
            ask_for_field(ctx, field_to_edit)
            return set_state(ctx, State.COLLECTING_INFO)

        if event == "user_denied":
            ctx.collected_info = {}             # 清空重新收集
            return set_state(ctx, State.COLLECTING_INFO)

    # ── PROCESSING ────────────────────────────────────────
    elif current == State.PROCESSING:
        if event == "api_success":
            result = payload.get("result")
            store_result(ctx, result)
            return set_state(ctx, State.CLOSING)

        if event == "api_timeout":
            ctx.collected_info["fallback"] = True
            play_message(ctx, "system_busy_callback")
            schedule_callback(ctx)
            return set_state(ctx, State.CLOSING)

        if event == "api_error":
            if ctx.retry_count < 2:
                ctx.retry_count += 1
                retry_api_call(ctx)
                return current
            return set_state(ctx, State.TRANSFER_TO_HUMAN)

    # ── EMERGENCY ──────────────────────────────────────────
    elif current == State.EMERGENCY:
        # 紧急状态根据行业执行不同脚本
        run_emergency_script(ctx)
        # 紧急处理后可能转人工或关闭
        if payload.get("human_required"):
            return set_state(ctx, State.TRANSFER_TO_HUMAN)
        return set_state(ctx, State.CLOSING)

    # ── TRANSFER_TO_HUMAN ─────────────────────────────────
    elif current == State.TRANSFER_TO_HUMAN:
        if event == "transfer_complete":
            log_handoff(ctx)
            return set_state(ctx, State.TERMINATED)

        if event == "no_agent_available":
            play_message(ctx, "all_agents_busy")
            offer_callback_or_voicemail(ctx)
            return set_state(ctx, State.CLOSING)

    # ── CLOSING ────────────────────────────────────────────
    elif current == State.CLOSING:
        play_closing(ctx)
        save_call_record(ctx)
        return set_state(ctx, State.TERMINATED)

    # 默认: 未处理的事件
    return current


# ============================================================
# 辅助函数骨架
# ============================================================

def set_state(ctx: CallContext, new_state: State) -> State:
    ctx.current_state = new_state
    ctx.retry_count   = 0           # 切换状态时重置重试计数
    return new_state

def get_next_required_field(ctx: CallContext) -> Optional[str]:
    """根据行业和意图，返回下一个需要收集的字段名；None 表示收集完毕"""
    schema = get_collection_schema(ctx.industry, ctx.intent)
    for field in schema:
        if field not in ctx.collected_info:
            return field
    return None

def get_collection_schema(industry: str, intent: Intent) -> List[str]:
    """返回该行业+意图需要收集的字段列表（有序）"""
    schemas = {
        ("dental", Intent.NEW_APPOINTMENT): [
            "patient_name", "phone", "chief_complaint",
            "pain_duration", "allergies", "preferred_time"
        ],
        ("dental", Intent.RESCHEDULE): [
            "patient_name", "phone", "existing_appointment_id",
            "new_preferred_time"
        ],
        ("legal", Intent.NEW_APPOINTMENT): [
            "client_name", "phone", "email", "legal_area",
            "case_summary", "opposing_party", "urgent_deadline"
        ],
        ("home_service", Intent.NEW_APPOINTMENT): [
            "service_address", "service_type", "area_sqm",
            "room_count", "special_requirements", "preferred_date"
        ],
        ("home_service", Intent.EMERGENCY): [
            "service_address", "contact_name", "contact_phone",
            "emergency_type", "current_status"
        ],
    }
    return schemas.get((industry, intent), ["name", "phone", "request"])


# ============================================================
# 异常处理装饰器
# ============================================================

def with_exception_handling(transition_fn):
    """包装状态转移函数，捕获所有未预期异常"""
    def wrapper(ctx: CallContext, event: str, payload: Dict = {}) -> State:
        try:
            return transition_fn(ctx, event, payload)
        except HarassmentDetected:
            handle_harassment(ctx)
            return set_state(ctx, State.TERMINATED)
        except NetworkDegraded as e:
            ctx.network_quality = e.level
            apply_network_degradation(ctx, e.level)
            return ctx.current_state    # 保持当前状态，降级后继续
        except SilenceTimeout:
            handle_silence_timeout(ctx)
            return ctx.current_state
        except UnexpectedError as e:
            log_error(ctx, e)
            play_message(ctx, "technical_difficulty")
            return set_state(ctx, State.TRANSFER_TO_HUMAN)
    return wrapper

# 应用异常处理
transition = with_exception_handling(transition)


# ============================================================
# 入口: 处理单个语音事件
# ============================================================

def handle_voice_event(ctx: CallContext, raw_event: Dict) -> Dict:
    """
    主事件处理入口
    raw_event: { "type": str, "transcript": str, "metadata": {} }
    返回: { "action": str, "tts_text": str, "state": str }
    """
    ctx.last_input_time = time.time()

    # 语言检测与切换
    detected_lang = detect_language(raw_event.get("transcript", ""))
    if detected_lang != ctx.language:
        ctx.language = detected_lang

    # 老年模式检测
    if not ctx.is_senior_mode:
        ctx.is_senior_mode = detect_senior_mode(ctx, raw_event)

    # 骚扰检测
    if detect_harassment(raw_event.get("transcript", ""), ctx):
        raise HarassmentDetected()

    # 紧急关键词检测（任意状态下均有效）
    if detect_emergency_keywords(raw_event.get("transcript", ""), ctx.industry):
        new_state = transition(ctx, "emergency_detected")
        return build_response(ctx, new_state)

    # 正常 NLU 处理
    nlu_result = run_nlu(raw_event["transcript"], ctx)
    event      = nlu_result["event"]
    payload    = nlu_result["payload"]

    new_state  = transition(ctx, event, payload)
    return build_response(ctx, new_state)


def build_response(ctx: CallContext, state: State) -> Dict:
    tts_text = generate_tts(ctx, state)
    if ctx.is_senior_mode:
        tts_text = apply_senior_mode_formatting(tts_text)
    return {
        "action":    "speak",
        "tts_text":  tts_text,
        "state":     state.value,
        "call_id":   ctx.call_id,
        "language":  ctx.language,
    }
```

---

### 5.2 状态转移图（文本表示）

```
                         ┌─────────────────────────────────────────────────────┐
                         │                   EMERGENCY (任意状态可跳入)          │
                         └──────────────────────────┬──────────────────────────┘
                                                    │ emergency_keywords
                                                    ▼
CALL_CONNECTED
    │
    ▼
GREETING ──── no_input×3 ──────────────────────────────────────┐
    │                                                            │
    │ (legal) disclaimer_req                                     │
    ▼                                                            │
DISCLAIMER ── rejected ──────────────────────────────────────── │
    │ accepted                                                   │
    │ (non-legal: skip)                                          │
    ▼                                                            ▼
INTENT_DETECTION ── unclear×3 ──────────────────────► TRANSFER_TO_HUMAN
    │ detected                                                   ▲
    │ (home_service) zone_check                                  │
    ▼                                                            │
ZONE_VALIDATION ── zone_invalid ──► CLOSING                     │
    │ zone_valid                                                 │
    │ (non-home_service: skip)                                   │
    ▼                                                            │
COLLECTING_INFO ── user_transfer ───────────────────────────────┘
    │ all_fields_done
    ▼
CONFIRMING ── user_denied ──► COLLECTING_INFO (重填)
    │ confirmed
    ▼
PROCESSING ── api_error×3 ──────────────────────────► TRANSFER_TO_HUMAN
    │ api_success
    │ api_timeout ──► (发短信/回调)
    ▼
CLOSING
    │
    ▼
TERMINATED
```

---

## 附录：关键配置常量

```python
TIMEOUTS = {
    "silence_warning":      5,      # 秒: 用户沉默多久触发提示
    "silence_disconnect":   15,     # 秒: 强制结束
    "api_timeout":          8,      # 秒: 后端 API 超时
    "reconnect_window":     60,     # 秒: 断线重连识别窗口
    "max_call_duration":    900,    # 秒: 单次通话最长 15 分钟
}

RETRY_LIMITS = {
    "greeting":         2,
    "intent_detect":    3,
    "disclaimer":       3,
    "api_call":         2,
    "silence_prompt":   2,
}

EMERGENCY_KEYWORDS = {
    "dental":       ["剧烈疼痛", "脓肿", "外伤", "出血不止", "牙脱落", "吞咽困难"],
    "legal":        ["逮捕", "被捕", "警察", "拘留", "羁押", "保释", "手铐"],
    "home_service": ["漏水", "水管爆", "水漫", "淹水", "紧急", "停不下来",
                     "着火", "煤气泄漏", "断电"],
}

SENIOR_MODE_TRIGGERS = {
    "speech_rate_threshold":    90,     # 词/分钟
    "repeat_request_threshold": 2,      # 次/通话
    "keywords":                 ["慢点", "再说一遍", "没听清", "听不懂"],
}
```
