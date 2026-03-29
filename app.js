const I18N = {
  zh: {
    nav_home:'首页', nav_blog:'博客',
    nav_overview:'概览', nav_arch:'架构', nav_collect:'采集', nav_build:'构建',
    nav_connect:'接入', nav_serve:'服务', nav_cal:'日程', nav_report:'报告', nav_tech:'技术栈',
    hero_title:'Your AI Front Desk,<br><span>Always On.</span>',
    hero_desc:'QMorph 为中小企业打造专属 AI 语音前台——从需求采集到电话接入、日程管理、智能报告，一站式全流程解决方案。',
    stat_steps:'Core Steps', stat_roles:'User Roles', stat_avail:'Availability', stat_resp:'Response',
    arch_title:'端到端流程架构',
    arch_desc:'从 SMB 注册到终端用户通话，再到智能报告推送——六步形成完整闭环。',
    arch_n1:'需求采集', arch_n1s:'多轮对话',
    arch_n2:'Agent 构建', arch_n2s:'自动配置',
    arch_n3:'PSTN 接入', arch_n3s:'号码转接',
    arch_n4:'语音服务', arch_n4s:'实时对话',
    arch_n5:'日程管理', arch_n5s:'日历同步',
    arch_n6:'智能报告', arch_n6s:'自动推送',
    arch_roles_title:'三类用户角色',
    role_sme:'SMB 业主', role_sme_d:'配置 Agent、管理日程、查看报告', role_sme_badge:'主用户',
    role_platform:'QMorph 平台', role_platform_d:'自动构建 Agent、管理基础设施', role_platform_badge:'内部',
    role_end:'终端客户', role_end_d:'通过电话与 Voice Agent 交互', role_end_badge:'终端用户',
    arch_value_title:'核心价值',
    val_5min:'5 分钟上线', val_5min_d:'从注册到电话接入不超过 5 分钟',
    val_cost:'节省 80% 成本', val_cost_d:'替代传统前台/客服人力开支',
    val_lang:'多语言支持', val_lang_d:'英语、中文、西语等自动切换',
    s1_title:'需求采集 — 多轮对话',
    s1_desc:'SMB 业主通过 QMorph 官网的智能对话窗口，描述自己的业务类型、服务内容、营业时间等。系统通过多轮引导，完成信息采集。',
    s1_user:'👤 用户：SMB 业主',
    s1_schema_title:'📋 采集字段清单',
    th_field:'字段', th_desc:'说明', th_example:'示例',
    f_bname:'企业名称', f_btype:'行业类型', f_loc:'地址', f_svc:'服务项目列表',
    f_hours:'营业时间', f_slot:'默认预约时长', f_caps:'Agent 功能',
    f_tone:'语气风格', f_esc:'升级规则', f_phone:'原客服电话',
    s2_title:'Voice Agent 自动构建',
    s2_desc:'系统根据采集到的信息，自动生成 Voice Agent 配置——包括 Prompt、TTS 音色、STT 参数、业务逻辑等。SMB 可以随时点击发布。',
    s2_user:'🔧 用户：QMorph 平台（自动化）',
    s2_flow_title:'构建流程',
    s2_f1:'采集数据 JSON', s2_f2:'生成 System Prompt', s2_f3:'配置 TTS 音色 & STT 语言',
    s2_f4:'注入业务逻辑 (Tools)', s2_f5:'配置 Calendar 集成', s2_f6:'Agent Ready → 等待发布',
    s3_title:'PSTN 电话接入',
    s3_desc:'Agent 发布后，系统通过 Twilio 将 SMB 的原有客服号码呼叫转接到 QMorph Voice Agent。终端客户拨打原号码即可直达 AI 前台。',
    s3_user:'👤 用户：SMB 业主（配置）',
    s3_flow_title:'呼叫转接流程',
    s3_f1:'👤 终端客户拨打<br><span style="font-family:var(--mono);color:var(--accent);font-size:0.85rem;">+1(512)555-0123</span>',
    s3_f2:'📞 PSTN 网络路由',
    s3_f3:'Twilio 呼叫转接<br><span style="font-size:0.78rem;color:var(--text-dim);">Call Forwarding / SIP Trunk</span>',
    s3_f4:'QMorph WebSocket 网关',
    s3_f5:'🎙️ Voice Agent 接听<br><span style="font-size:0.78rem;color:var(--text-dim);">Bright Smile Dental AI</span>',
    s4_title:'语音通话服务',
    s4_desc:'终端客户拨打电话后，QMorph Voice Agent 以自然语音进行多轮对话，完成预约、查询、分流等任务。以下以牙科诊所预约为例。',
    s4_user:'👤 用户：SMB 的终端客户',
    s4_flow_title:'对话流程引擎',
    s4_f1:'来电接入 → 问候语',
    s4_f2:'意图识别<br><span style="font-size:0.78rem;color:var(--text-dim);">Booking / Reschedule / FAQ / Emergency</span>',
    s4_f3:'信息收集<br><span style="font-size:0.78rem;color:var(--text-dim);">姓名 · 服务类型 · 时间偏好</span>',
    s4_f4:'查询日历可用时段<br><span style="font-size:0.78rem;color:var(--text-dim);">Google Calendar API</span>',
    s4_f5:'确认预约 → 写入日历',
    s4_f6:'发送短信确认 → 结束通话',
    s4_scenarios:'支持的业务场景',
    biz_dental:'牙科诊所', biz_dental_d:'预约洗牙/检查',
    biz_law:'律师事务所', biz_law_d:'预约法律咨询',
    biz_plumb:'水管工', biz_plumb_d:'预约上门维修',
    biz_hair:'美发沙龙', biz_hair_d:'预约剪发/造型',
    biz_clinic:'诊所/家医', biz_clinic_d:'预约问诊',
    biz_realty:'房产中介', biz_realty_d:'预约看房',
    s5_title:'日程与日历管理',
    s5_desc:'Voice Agent 自动将预约写入 SMB 的日历系统，支持 Google Calendar / Outlook 双向同步，SMB 可以在 Dashboard 查看和管理所有日程。',
    s5_user:'👤 用户：SMB 业主',
    s5_flow_title:'日历集成架构',
    s5_f1:'Voice Agent 完成预约',
    s5_f2:'写入 QMorph DB<br><span style="font-size:0.78rem;color:var(--text-dim);">appointments table</span>',
    s5_f3:'双向同步<br><span style="font-size:0.78rem;color:var(--text-dim);">Google Calendar / Outlook</span>',
    s5_f4:'发送短信/邮件确认<br><span style="font-size:0.78rem;color:var(--text-dim);">给终端客户 + SMB</span>',
    s5_f5:'Dashboard 实时更新',
    s5_feat_title:'日程管理功能',
    s5_feat1:' 自动避免时间冲突',
    s5_feat2:' 预约前 24h 自动提醒（短信/电话）',
    s5_feat3:' 支持取消和改期自动处理',
    s5_feat4:' 多医生/多技师日历管理',
    s5_feat5:' 等候名单自动填补空位',
    s5_feat6:' 与 Google / Outlook 双向实时同步',
    s6_title:'智能报告与提醒',
    s6_desc:'QMorph 每日/每周自动生成服务报告——包含通话统计、预约汇总、异常提醒、客户反馈——通过邮件/短信/Dashboard 推送给 SMB。',
    s6_user:'👤 用户：SMB 业主',
    tech_title:'技术选型',
    tech_desc:'基于成熟的云原生架构与 AI 基础设施构建。',
    tech_auth:'Auth0 — 身份认证',
    tech_analytics:'PostHog — 数据分析',
    api_title:'API 接口概览',
    api_endpoint:'端点', api_method:'方法', api_desc_th:'说明',
    api_d1:'提交 SMB 多轮对话采集数据',
    api_d2:'触发 Voice Agent 自动构建',
    api_d3:'发布 Agent 并绑定 PSTN 号码',
    api_d4:'Twilio 来电 Webhook',
    api_d5:'日程查询与更新',
    api_d6:'获取每日/每周报告',
    blog_hero_title:'QMorph <span>Deep Dive</span>',
    blog_hero_desc:'十篇深度文章，完整解读 AI 语音前台产品的竞品分析、行业洞察、技术架构与市场策略。',
    blog_01_title:'竞品分析：北美 AI 接线员市场全景',
    blog_01_desc:'10 家主流竞品功能矩阵对比、定价模型解析、5 大市场差异化空间。',
    blog_02_title:'行业场景研究：牙医 / 法律 / 家政',
    blog_02_desc:'三大垂直行业的来电场景分析、合规要求、核心痛点与 AI 替代率评估。',
    blog_03_title:'产品架构设计：五层系统与组件选型',
    blog_03_desc:'系统架构总览、STT/TTS/LLM/电话组件选型、多租户 SaaS 与 HIPAA 合规。',
    blog_04_title:'Call Flow 对话流程设计',
    blog_04_desc:'牙医/法律/家政三行业完整对话脚本、状态机设计、异常处理与降级策略。',
    blog_05_title:'定价策略与 GTM 市场进入方案',
    blog_05_desc:'TAM/SAM/SOM 拆解、ROI 计算模型、四档定价套餐、GTM 三阶段路线图。',
    blog_06_title:'技术栈与 Agent 研发工程',
    blog_06_desc:'Context Engineering 五层架构、Harness Engineering 测试金字塔、CI/CD 质量门。',
    blog_07_title:'常见问题 FAQ — Stakeholder 版',
    blog_07_desc:'17 个投资人/客户/顾问高频问题：并发能力、技术壁垒、号码迁移、安全合规、竞争格局。',
    blog_08_title:'北美湾区种子用户招募实战手册',
    blog_08_desc:'面向牙科/法律/家政 SMB 的可落地招募步骤、渠道打法、脚本模板与 90 天执行清单。',
    blog_09_title:'日本市场从零到一拓展手册',
    blog_09_desc:'日语敬语适配、供应商选型、种子用户招募、渠道扩展与 2-3 人运营团队组建全指南。',
    blog_10_title:'日本 Zero-to-One 行业验证调查',
    blog_10_desc:'整骨院/飲食店/出張サービス三大行业深度对比，找到日本市场最低门槛的 PMF 验证路径。',
  },
  en: {
    nav_home:'Home', nav_blog:'Blogs',
    nav_overview:'Overview', nav_arch:'Architecture', nav_collect:'Collect', nav_build:'Build',
    nav_connect:'Connect', nav_serve:'Serve', nav_cal:'Calendar', nav_report:'Reports', nav_tech:'Tech Stack',
    hero_title:'Your AI Front Desk,<br><span>Always On.</span>',
    hero_desc:'QMorph builds a dedicated AI voice receptionist for SMBs — from requirements gathering to phone integration, calendar management, and smart reports, an all-in-one solution.',
    stat_steps:'Core Steps', stat_roles:'User Roles', stat_avail:'Availability', stat_resp:'Response',
    arch_title:'End-to-End Architecture',
    arch_desc:'From SMB onboarding to end-user calls and intelligent reporting — six steps forming a complete loop.',
    arch_n1:'Requirements', arch_n1s:'Multi-turn Chat',
    arch_n2:'Agent Build', arch_n2s:'Auto Config',
    arch_n3:'PSTN Access', arch_n3s:'Call Forwarding',
    arch_n4:'Voice Service', arch_n4s:'Real-time Chat',
    arch_n5:'Scheduling', arch_n5s:'Calendar Sync',
    arch_n6:'Smart Reports', arch_n6s:'Auto Push',
    arch_roles_title:'Three User Roles',
    role_sme:'SMB Owner', role_sme_d:'Configure Agent, manage calendar, view reports', role_sme_badge:'Primary',
    role_platform:'QMorph Platform', role_platform_d:'Auto-build Agents, manage infrastructure', role_platform_badge:'Internal',
    role_end:'End Customer', role_end_d:'Interact with Voice Agent via phone', role_end_badge:'End User',
    arch_value_title:'Core Value',
    val_5min:'Live in 5 min', val_5min_d:'From sign-up to phone integration in under 5 minutes',
    val_cost:'Save 80% cost', val_cost_d:'Replace traditional receptionist / CS staffing costs',
    val_lang:'Multi-language', val_lang_d:'English, Chinese, Spanish auto-switch',
    s1_title:'Requirements Gathering — Multi-turn Chat',
    s1_desc:'SMB owners describe their business type, services, and hours through QMorph\'s smart chat window. The system guides them through multiple rounds to complete data collection.',
    s1_user:'👤 User: SMB Owner',
    s1_schema_title:'📋 Collection Fields',
    th_field:'Field', th_desc:'Description', th_example:'Example',
    f_bname:'Business Name', f_btype:'Industry Type', f_loc:'Location', f_svc:'Service List',
    f_hours:'Business Hours', f_slot:'Default Slot Duration', f_caps:'Agent Capabilities',
    f_tone:'Tone / Style', f_esc:'Escalation Rules', f_phone:'Original CS Number',
    s2_title:'Voice Agent Auto-Build',
    s2_desc:'The system automatically generates a Voice Agent configuration from collected data — including prompt, TTS voice, STT parameters, and business logic. SMBs can publish at any time.',
    s2_user:'🔧 User: QMorph Platform (Automated)',
    s2_flow_title:'Build Pipeline',
    s2_f1:'Collected Data JSON', s2_f2:'Generate System Prompt', s2_f3:'Configure TTS Voice & STT Language',
    s2_f4:'Inject Business Logic (Tools)', s2_f5:'Configure Calendar Integration', s2_f6:'Agent Ready → Awaiting Publish',
    s3_title:'PSTN Phone Integration',
    s3_desc:'After publishing, the system forwards the SMB\'s existing phone number to the QMorph Voice Agent via Twilio. End customers call the original number and reach the AI receptionist directly.',
    s3_user:'👤 User: SMB Owner (Config)',
    s3_flow_title:'Call Forwarding Flow',
    s3_f1:'👤 End Customer Dials<br><span style="font-family:var(--mono);color:var(--accent);font-size:0.85rem;">+1(512)555-0123</span>',
    s3_f2:'📞 PSTN Network Routing',
    s3_f3:'Twilio Call Forwarding<br><span style="font-size:0.78rem;color:var(--text-dim);">Call Forwarding / SIP Trunk</span>',
    s3_f4:'QMorph WebSocket Gateway',
    s3_f5:'🎙️ Voice Agent Answers<br><span style="font-size:0.78rem;color:var(--text-dim);">Bright Smile Dental AI</span>',
    s4_title:'Voice Call Service',
    s4_desc:'When end customers call, QMorph Voice Agent conducts natural multi-turn voice conversations to handle bookings, inquiries, and triage. Below is a dental clinic booking example.',
    s4_user:'👤 User: SMB\'s End Customer',
    s4_flow_title:'Conversation Flow Engine',
    s4_f1:'Incoming Call → Greeting',
    s4_f2:'Intent Recognition<br><span style="font-size:0.78rem;color:var(--text-dim);">Booking / Reschedule / FAQ / Emergency</span>',
    s4_f3:'Information Collection<br><span style="font-size:0.78rem;color:var(--text-dim);">Name · Service Type · Time Preference</span>',
    s4_f4:'Query Available Slots<br><span style="font-size:0.78rem;color:var(--text-dim);">Google Calendar API</span>',
    s4_f5:'Confirm Booking → Write to Calendar',
    s4_f6:'Send SMS Confirmation → End Call',
    s4_scenarios:'Supported Business Scenarios',
    biz_dental:'Dental Clinic', biz_dental_d:'Book cleaning / check-up',
    biz_law:'Law Firm', biz_law_d:'Book legal consultation',
    biz_plumb:'Plumber', biz_plumb_d:'Book home repair visit',
    biz_hair:'Hair Salon', biz_hair_d:'Book haircut / styling',
    biz_clinic:'Medical Clinic', biz_clinic_d:'Book doctor visit',
    biz_realty:'Real Estate', biz_realty_d:'Book property viewing',
    s5_title:'Calendar & Schedule Management',
    s5_desc:'Voice Agent automatically writes appointments to the SMB\'s calendar system, with bi-directional Google Calendar / Outlook sync. SMBs can view and manage all schedules on the Dashboard.',
    s5_user:'👤 User: SMB Owner',
    s5_flow_title:'Calendar Integration Architecture',
    s5_f1:'Voice Agent Completes Booking',
    s5_f2:'Write to QMorph DB<br><span style="font-size:0.78rem;color:var(--text-dim);">appointments table</span>',
    s5_f3:'Bi-directional Sync<br><span style="font-size:0.78rem;color:var(--text-dim);">Google Calendar / Outlook</span>',
    s5_f4:'Send SMS / Email Confirmation<br><span style="font-size:0.78rem;color:var(--text-dim);">To End Customer + SMB</span>',
    s5_f5:'Dashboard Real-time Update',
    s5_feat_title:'Scheduling Features',
    s5_feat1:' Automatic time conflict prevention',
    s5_feat2:' Auto-reminder 24h before appointment (SMS/call)',
    s5_feat3:' Auto-handle cancellations & rescheduling',
    s5_feat4:' Multi-provider calendar management',
    s5_feat5:' Waitlist auto-fills vacant slots',
    s5_feat6:' Bi-directional real-time sync with Google / Outlook',
    s6_title:'Smart Reports & Alerts',
    s6_desc:'QMorph auto-generates daily/weekly service reports — including call stats, appointment summaries, anomaly alerts, and customer feedback — pushed to SMBs via email/SMS/Dashboard.',
    s6_user:'👤 User: SMB Owner',
    tech_title:'Technology Stack',
    tech_desc:'Built on mature cloud-native architecture and AI infrastructure.',
    tech_auth:'Auth0 — Authentication',
    tech_analytics:'PostHog — Analytics',
    api_title:'API Endpoints Overview',
    api_endpoint:'Endpoint', api_method:'Method', api_desc_th:'Description',
    api_d1:'Submit SMB multi-turn chat collection data',
    api_d2:'Trigger Voice Agent auto-build',
    api_d3:'Publish Agent & bind PSTN number',
    api_d4:'Twilio incoming call webhook',
    api_d5:'Calendar query & update',
    api_d6:'Get daily/weekly reports',
    blog_hero_title:'QMorph <span>Deep Dive</span>',
    blog_hero_desc:'Ten long-form articles covering market research, industry insights, system architecture, and go-to-market strategy for an AI voice receptionist.',
    blog_01_title:'Competitive Analysis: North America AI Receptionists',
    blog_01_desc:'Feature matrix for 10 competitors, pricing model breakdowns, and five whitespace opportunities.',
    blog_02_title:'Industry Research: Dental / Legal / Home Services',
    blog_02_desc:'Call pattern analysis, compliance requirements, pain points, and AI replacement potential across three verticals.',
    blog_03_title:'Product Architecture: Five Layers and Core Components',
    blog_03_desc:'System architecture overview, STT/TTS/LLM/telephony choices, multi-tenant SaaS, and HIPAA readiness.',
    blog_04_title:'Call Flow Design',
    blog_04_desc:'Full scripts, state machines, exception handling, and degradation strategies across three industries.',
    blog_05_title:'Pricing Strategy and GTM Plan',
    blog_05_desc:'TAM/SAM/SOM sizing, ROI model, four pricing tiers, and a three-phase go-to-market roadmap.',
    blog_06_title:'Tech Stack and Agent Engineering',
    blog_06_desc:'Context Engineering, Harness Engineering, and the AI quality gate behind the voice agent.',
    blog_07_title:'Stakeholder FAQ',
    blog_07_desc:'Seventeen common questions on concurrency, moat, phone routing, safety, compliance, competition, and milestones.',
    blog_08_title:'Bay Area Seed User Recruitment Playbook',
    blog_08_desc:'Actionable steps, channels, scripts, and a 90-day execution plan to recruit SMB seed users in North America.',
    blog_09_title:'Japan Market Expansion Playbook',
    blog_09_desc:'Keigo adaptation, vendor selection, seed user recruitment, channel expansion, and 2-3 person ops team building guide.',
    blog_10_title:'Japan Zero-to-One Industry Validation',
    blog_10_desc:'Deep comparison of osteopathic clinics, restaurants, and home services to find the lowest-barrier PMF path in Japan.',
  },
  ja: {
    nav_home:'ホーム', nav_blog:'ブログ',
    nav_overview:'概要', nav_arch:'設計', nav_collect:'収集', nav_build:'構築',
    nav_connect:'接続', nav_serve:'通話', nav_cal:'予約', nav_report:'レポート', nav_tech:'技術構成',
    hero_title:'Your AI Front Desk,<br><span>Always On.</span>',
    hero_desc:'QMorph は中小事業者向けの AI 音声受付。要件収集から電話接続、予約管理、レポートまでワンストップで提供します。',
    stat_steps:'Core Steps', stat_roles:'User Roles', stat_avail:'Availability', stat_resp:'Response',
    arch_title:'エンドツーエンド設計',
    arch_desc:'登録から通話、レポート配信まで——6 ステップで完全なループを構築。',
    arch_n1:'要件収集', arch_n1s:'対話形式',
    arch_n2:'Agent 構築', arch_n2s:'自動設定',
    arch_n3:'PSTN 接続', arch_n3s:'番号転送',
    arch_n4:'音声対応', arch_n4s:'リアルタイム',
    arch_n5:'予約管理', arch_n5s:'カレンダー同期',
    arch_n6:'レポート', arch_n6s:'自動配信',
    arch_roles_title:'3 つのユーザーロール',
    role_sme:'事業オーナー', role_sme_d:'Agent 設定・予約管理・レポート閲覧', role_sme_badge:'メイン',
    role_platform:'QMorph 基盤', role_platform_d:'Agent の自動構築・インフラ管理', role_platform_badge:'内部',
    role_end:'エンドユーザー', role_end_d:'電話で Voice Agent と対話', role_end_badge:'利用者',
    arch_value_title:'提供価値',
    val_5min:'5 分で開通', val_5min_d:'登録から電話接続まで最短 5 分',
    val_cost:'コスト 80% 削減', val_cost_d:'従来の受付人件費を大幅カット',
    val_lang:'多言語対応', val_lang_d:'英語・中国語・スペイン語を自動切替',
    s1_title:'要件収集 — 対話形式',
    s1_desc:'事業オーナーが QMorph のチャットで業種・サービス・営業時間を入力。システムが対話形式で情報を収集します。',
    s1_user:'👤 ユーザー：事業オーナー',
    s1_schema_title:'📋 収集フィールド',
    th_field:'フィールド', th_desc:'説明', th_example:'例',
    f_bname:'事業名', f_btype:'業種', f_loc:'所在地', f_svc:'サービス一覧',
    f_hours:'営業時間', f_slot:'予約枠', f_caps:'Agent 機能',
    f_tone:'トーン', f_esc:'エスカレーション条件', f_phone:'既存の電話番号',
    s2_title:'Voice Agent の自動構築',
    s2_desc:'収集データから Prompt・音声・STT・業務ロジックを自動生成。いつでも公開できます。',
    s2_user:'🔧 ユーザー：QMorph（自動）',
    s2_flow_title:'構築フロー',
    s2_f1:'収集データ JSON', s2_f2:'System Prompt 生成', s2_f3:'TTS 音声 & STT 言語設定',
    s2_f4:'業務ロジック注入 (Tools)', s2_f5:'カレンダー連携設定', s2_f6:'Agent 完成 → 公開待ち',
    s3_title:'PSTN 電話接続',
    s3_desc:'公開後、既存の電話番号を Voice Agent に転送。お客様は元の番号に電話するだけで AI 受付につながります。',
    s3_user:'👤 ユーザー：事業オーナー（設定）',
    s3_flow_title:'着信転送フロー',
    s3_f1:'👤 お客様が発信<br><span style="font-family:var(--mono);color:var(--accent);font-size:0.85rem;">+1(512)555-0123</span>',
    s3_f2:'📞 PSTN ルーティング',
    s3_f3:'Twilio 転送<br><span style="font-size:0.78rem;color:var(--text-dim);">Call Forwarding / SIP Trunk</span>',
    s3_f4:'QMorph WebSocket GW',
    s3_f5:'🎙️ Voice Agent が応答<br><span style="font-size:0.78rem;color:var(--text-dim);">Bright Smile Dental AI</span>',
    s4_title:'音声通話サービス',
    s4_desc:'お客様の電話に Voice Agent が自然な音声で対応し、予約・問合せ・振分けを完了。歯科医院の予約例をご紹介します。',
    s4_user:'👤 ユーザー：お客様',
    s4_flow_title:'対話フローエンジン',
    s4_f1:'着信 → ご挨拶',
    s4_f2:'意図認識<br><span style="font-size:0.78rem;color:var(--text-dim);">予約 / 変更 / FAQ / 緊急</span>',
    s4_f3:'情報収集<br><span style="font-size:0.78rem;color:var(--text-dim);">氏名・内容・希望日時</span>',
    s4_f4:'空き状況を照会<br><span style="font-size:0.78rem;color:var(--text-dim);">Google Calendar API</span>',
    s4_f5:'予約確定 → カレンダー書込み',
    s4_f6:'SMS 確認送信 → 通話終了',
    s4_scenarios:'対応業種',
    biz_dental:'歯科医院', biz_dental_d:'検診・クリーニングの予約',
    biz_law:'法律事務所', biz_law_d:'法律相談の予約',
    biz_plumb:'水道修理', biz_plumb_d:'出張修理の予約',
    biz_hair:'美容室', biz_hair_d:'カット・スタイリングの予約',
    biz_clinic:'クリニック', biz_clinic_d:'診察の予約',
    biz_realty:'不動産仲介', biz_realty_d:'内見の予約',
    s5_title:'予約・カレンダー管理',
    s5_desc:'Voice Agent が予約をカレンダーへ自動書込み。Google Calendar / Outlook と双方向同期し、Dashboard で一括管理できます。',
    s5_user:'👤 ユーザー：事業オーナー',
    s5_flow_title:'カレンダー連携構成',
    s5_f1:'Voice Agent が予約完了',
    s5_f2:'QMorph DB へ記録<br><span style="font-size:0.78rem;color:var(--text-dim);">appointments table</span>',
    s5_f3:'双方向同期<br><span style="font-size:0.78rem;color:var(--text-dim);">Google Calendar / Outlook</span>',
    s5_f4:'SMS / メールで確認送信<br><span style="font-size:0.78rem;color:var(--text-dim);">お客様 + 事業者へ</span>',
    s5_f5:'Dashboard をリアルタイム更新',
    s5_feat_title:'予約管理機能',
    s5_feat1:' 時間の重複を自動防止',
    s5_feat2:' 予約 24 時間前に自動リマインド',
    s5_feat3:' キャンセル・変更を自動処理',
    s5_feat4:' 複数スタッフのカレンダーを一元管理',
    s5_feat5:' キャンセル待ちで空き枠を自動補填',
    s5_feat6:' Google / Outlook と双方向リアルタイム同期',
    s6_title:'レポート・通知',
    s6_desc:'QMorph が日次・週次のレポートを自動生成——通話統計・予約一覧・異常通知・お客様の声——をメール / SMS / Dashboard で配信。',
    s6_user:'👤 ユーザー：事業オーナー',
    tech_title:'技術構成',
    tech_desc:'クラウドネイティブ基盤と AI インフラで構築。',
    tech_auth:'Auth0 — 認証',
    tech_analytics:'PostHog — 分析',
    api_title:'API エンドポイント一覧',
    api_endpoint:'エンドポイント', api_method:'メソッド', api_desc_th:'説明',
    api_d1:'事業情報の収集データを送信',
    api_d2:'Voice Agent の自動構築をトリガー',
    api_d3:'Agent を公開し PSTN 番号をバインド',
    api_d4:'Twilio 着信 Webhook',
    api_d5:'カレンダーの照会・更新',
    api_d6:'日次・週次レポートを取得',
    blog_hero_title:'QMorph <span>Deep Dive</span>',
    blog_hero_desc:'全 10 本の記事で AI 音声受付の競合分析・業界知見・技術設計・市場戦略を解説。',
    blog_01_title:'競合分析：北米 AI 受付市場',
    blog_01_desc:'主要 10 社の機能比較・価格モデル・5 つの差別化領域。',
    blog_02_title:'業界研究：歯科 / 法律 / ホームサービス',
    blog_02_desc:'3 業界の着信パターン・コンプライアンス・課題と AI 代替可能性。',
    blog_03_title:'製品アーキテクチャ：5 層設計とコンポーネント選定',
    blog_03_desc:'STT/TTS/LLM/テレフォニーの選定、マルチテナント SaaS、HIPAA 対応。',
    blog_04_title:'Call Flow 設計',
    blog_04_desc:'3 業界の対話スクリプト・状態マシン・例外処理・フォールバック。',
    blog_05_title:'料金戦略と GTM プラン',
    blog_05_desc:'TAM/SAM/SOM・ROI モデル・4 段階料金・GTM ロードマップ。',
    blog_06_title:'技術スタックと Agent エンジニアリング',
    blog_06_desc:'Context Engineering・Harness Engineering・AI 品質ゲート設計。',
    blog_07_title:'FAQ — ステークホルダー向け',
    blog_07_desc:'同時対応・技術優位性・番号移行・セキュリティなど 17 の質問と回答。',
    blog_08_title:'北米シードユーザー獲得ガイド',
    blog_08_desc:'歯科 / 法律 / ホームサービス SMB 向けの獲得手順と 90 日計画。',
    blog_09_title:'日本市場ゼロイチ展開ガイド',
    blog_09_desc:'敬語対応・ベンダー選定・シードユーザー獲得・チャネル・運営チーム構築。',
    blog_10_title:'日本 Zero-to-One 業界検証レポート',
    blog_10_desc:'整骨院 / 飲食店 / 出張サービスの比較と最短 PMF 検証パスの提案。',
  }
};

const LANGS = ['zh', 'en', 'ja'];
let currentLang = 'zh';

function applyLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  const langMap = { zh: 'zh-CN', en: 'en', ja: 'ja' };
  document.documentElement.lang = langMap[lang] || 'en';
  const nextLabel = { zh: 'EN', en: 'JA', ja: '中文' };
  const label = nextLabel[lang] || 'EN';
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = label;
  const btnM = document.getElementById('lang-toggle-m');
  if (btnM) btnM.textContent = label;
  currentLang = lang;
}

function toggleLang() {
  const i = LANGS.indexOf(currentLang);
  applyLang(LANGS[(i + 1) % LANGS.length]);
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.step-section, .arch-diagram, .report-card, .mock-ui, .phone-frame, .tech-grid').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = `.fade-in { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);

  document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.pageYOffset > 100
      ? 'rgba(108,245,194,0.15)' : 'var(--border)';
  });

  applyLang(currentLang);

  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

function toggleMenu() {
  const btn = document.querySelector('.hamburger');
  const overlay = document.getElementById('mobile-overlay');
  btn.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
}

function closeMenu() {
  const btn = document.querySelector('.hamburger');
  const overlay = document.getElementById('mobile-overlay');
  if (btn) btn.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}
