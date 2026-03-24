window.BLOGS = {
  "01": {
    title: "竞品分析：北美 AI 接线员市场",
    subtitle: "10 家主流竞品功能矩阵、定价模型与差异化空间的系统盘点。",
    path: "docs/01_competitive_analysis.md",
    articleNumber: "ARTICLE 01",
    date: "2026-03-24",
    prev: null,
    next: { id: "02", title: "行业场景研究" },
    notes: "市场、竞品、定价、差异化空间",
    diagrams: [
      {
        afterHeadingIncludes: "二、竞品功能矩阵对比",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
              <line x1="70" y1="360" x2="700" y2="360" stroke="#2a2a3a" stroke-width="2" stroke-dasharray="7 5"/>
              <line x1="70" y1="360" x2="70" y2="50" stroke="#2a2a3a" stroke-width="2" stroke-dasharray="7 5"/>
              <text x="385" y="395" text-anchor="middle" fill="#8888a0" font-size="14">价格</text>
              <text x="26" y="210" transform="rotate(-90 26 210)" text-anchor="middle" fill="#8888a0" font-size="14">行业深度</text>
              <line x1="70" y1="210" x2="700" y2="210" stroke="#1a1a26" stroke-width="1" stroke-dasharray="4 6"/>
              <line x1="385" y1="360" x2="385" y2="50" stroke="#1a1a26" stroke-width="1" stroke-dasharray="4 6"/>
              <circle cx="135" cy="318" r="28" fill="none" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="135" y="323" text-anchor="middle" fill="#60a5fa" font-size="10">Goodcall</text>
              <circle cx="185" cy="270" r="28" fill="none" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="185" y="275" text-anchor="middle" fill="#c084fc" font-size="10">Bland</text>
              <circle cx="250" cy="304" r="28" fill="none" stroke="#f472b6" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="250" y="309" text-anchor="middle" fill="#f472b6" font-size="10">Synthflow</text>
              <circle cx="308" cy="238" r="30" fill="none" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="308" y="243" text-anchor="middle" fill="#c084fc" font-size="10">Air.ai</text>
              <circle cx="122" cy="338" r="22" fill="none" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="122" y="343" text-anchor="middle" fill="#fb923c" font-size="9">Twilio</text>
              <circle cx="430" cy="305" r="28" fill="none" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="430" y="310" text-anchor="middle" fill="#60a5fa" font-size="10">Dialpad</text>
              <circle cx="505" cy="236" r="30" fill="none" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="505" y="241" text-anchor="middle" fill="#fb923c" font-size="10">RingCentral</text>
              <circle cx="548" cy="281" r="27" fill="none" stroke="#f472b6" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="548" y="286" text-anchor="middle" fill="#f472b6" font-size="10">Ruby</text>
              <circle cx="590" cy="132" r="32" fill="none" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="590" y="137" text-anchor="middle" fill="#fb923c" font-size="10">Smith.ai</text>
              <circle cx="658" cy="92" r="35" fill="none" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="658" y="97" text-anchor="middle" fill="#c084fc" font-size="10">PolyAI</text>
              <circle cx="322" cy="135" r="40" fill="rgba(108,245,194,0.12)" stroke="#6cf5c2" stroke-width="3.2" stroke-dasharray="8 5"/>
              <text x="322" y="132" text-anchor="middle" fill="#6cf5c2" font-size="15" font-weight="700">QMorph</text>
              <text x="322" y="150" text-anchor="middle" fill="#6cf5c2" font-size="10">中端价格 × 高行业深度</text>
              <path d="M210 86 Q250 88 288 118" stroke="#6cf5c2" stroke-width="1.6" stroke-dasharray="5 4"/>
              <text x="120" y="81" fill="#6cf5c2" font-size="11">Sweet spot</text>
            </svg>
            <div class="diagram-caption">Competitive Landscape</div>
          </div>
        `
      }
    ]
  },
  "02": {
    title: "行业场景研究：牙医 / 法律 / 家政",
    subtitle: "三大垂直行业的来电结构、合规边界、核心痛点与进入优先级。",
    path: "docs/02_industry_research.md",
    articleNumber: "ARTICLE 02",
    date: "2026-03-24",
    prev: { id: "01", title: "竞品分析" },
    next: { id: "03", title: "产品架构设计" },
    notes: "行业研究、痛点对比、进入策略",
    diagrams: [
      {
        afterHeadingIncludes: "四、三行业横向对比",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
              <polygon points="360,42 522,118 492,280 228,280 198,118" fill="none" stroke="#2a2a3a" stroke-width="2" stroke-dasharray="6 5"/>
              <polygon points="360,88 468,140 448,246 272,246 252,140" fill="rgba(192,132,252,0.08)" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="6 4"/>
              <polygon points="360,66 500,124 454,258 248,258 210,124" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="6 4"/>
              <polygon points="360,96 440,146 478,236 244,236 280,146" fill="rgba(251,146,60,0.08)" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="6 4"/>
              <text x="360" y="24" text-anchor="middle" fill="#8888a0" font-size="12">漏接成本</text>
              <text x="545" y="126" fill="#8888a0" font-size="12">下班后来电</text>
              <text x="500" y="300" fill="#8888a0" font-size="12">紧急响应</text>
              <text x="182" y="300" fill="#8888a0" font-size="12">合规复杂度</text>
              <text x="146" y="126" fill="#8888a0" font-size="12">重复性占比</text>
              <text x="558" y="52" fill="#c084fc" font-size="12">牙医</text>
              <text x="558" y="72" fill="#60a5fa" font-size="12">法律</text>
              <text x="558" y="92" fill="#fb923c" font-size="12">家政</text>
            </svg>
            <div class="diagram-caption">Pain Radar Across Industries</div>
          </div>
        `
      },
      {
        afterHeadingIncludes: "4.4 进入行业优先级",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
              <line x1="70" y1="260" x2="660" y2="260" stroke="#2a2a3a" stroke-width="2" stroke-dasharray="7 5"/>
              <line x1="70" y1="260" x2="70" y2="48" stroke="#2a2a3a" stroke-width="2" stroke-dasharray="7 5"/>
              <text x="365" y="295" text-anchor="middle" fill="#8888a0" font-size="13">AI 替代率</text>
              <text x="25" y="154" transform="rotate(-90 25 154)" text-anchor="middle" fill="#8888a0" font-size="13">单案价值</text>
              <circle cx="300" cy="145" r="44" fill="rgba(192,132,252,0.08)" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="300" y="145" text-anchor="middle" fill="#c084fc" font-size="12">牙科</text>
              <text x="300" y="162" text-anchor="middle" fill="#c084fc" font-size="10">优先级 1</text>
              <circle cx="520" cy="102" r="30" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="520" y="103" text-anchor="middle" fill="#60a5fa" font-size="12">法律</text>
              <text x="520" y="120" text-anchor="middle" fill="#60a5fa" font-size="10">高价值 / 高合规</text>
              <circle cx="430" cy="170" r="56" fill="rgba(251,146,60,0.08)" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="430" y="170" text-anchor="middle" fill="#fb923c" font-size="12">家政</text>
              <text x="430" y="187" text-anchor="middle" fill="#fb923c" font-size="10">优先级 2</text>
            </svg>
            <div class="diagram-caption">Prioritization Bubble Map</div>
          </div>
        `
      }
    ]
  },
  "03": {
    title: "产品架构设计：五层系统与组件选型",
    subtitle: "从 PSTN 接入到多租户控制台，构建面向 SMB 的 AI Voice Receptionist 全栈架构。",
    path: "docs/03_product_architecture.md",
    articleNumber: "ARTICLE 03",
    date: "2026-03-24",
    prev: { id: "02", title: "行业场景研究" },
    next: { id: "04", title: "Call Flow 设计" },
    notes: "系统架构、组件选型、多租户、延迟优化",
    diagrams: [
      {
        afterHeadingIncludes: "1. 系统架构总览",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg">
              <rect x="150" y="30" width="460" height="52" rx="12" fill="rgba(96,165,250,0.06)" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="7 5"/>
              <text x="380" y="50" text-anchor="middle" fill="#60a5fa" font-size="14">Layer 1 · PSTN 接入层</text>
              <text x="380" y="67" text-anchor="middle" fill="#60a5fa" font-size="11">DID → SIP Trunk → WebSocket Media Stream</text>
              <rect x="150" y="102" width="460" height="60" rx="12" fill="rgba(192,132,252,0.06)" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="7 5"/>
              <text x="380" y="124" text-anchor="middle" fill="#c084fc" font-size="14">Layer 2 · Voice AI 层</text>
              <text x="380" y="143" text-anchor="middle" fill="#c084fc" font-size="11">Deepgram STT → Claude LLM → Cartesia TTS</text>
              <rect x="150" y="182" width="460" height="72" rx="12" fill="rgba(108,245,194,0.06)" stroke="#6cf5c2" stroke-width="2.2" stroke-dasharray="7 5"/>
              <text x="380" y="205" text-anchor="middle" fill="#6cf5c2" font-size="14">Layer 3 · 业务逻辑层</text>
              <text x="380" y="224" text-anchor="middle" fill="#6cf5c2" font-size="11">智能路由 · 预约引擎 · 状态机 · 通知 · 集成适配 · 合规</text>
              <rect x="150" y="274" width="460" height="60" rx="12" fill="rgba(251,146,60,0.06)" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="7 5"/>
              <text x="380" y="296" text-anchor="middle" fill="#fb923c" font-size="14">Layer 4 · 数据存储层</text>
              <text x="380" y="315" text-anchor="middle" fill="#fb923c" font-size="11">PostgreSQL · Redis · S3/R2 · Pinecone · ClickHouse</text>
              <rect x="150" y="354" width="460" height="52" rx="12" fill="rgba(244,114,182,0.06)" stroke="#f472b6" stroke-width="2.2" stroke-dasharray="7 5"/>
              <text x="380" y="374" text-anchor="middle" fill="#f472b6" font-size="14">Layer 5 · 管理控制台</text>
              <text x="380" y="391" text-anchor="middle" fill="#f472b6" font-size="11">Dashboard · 配置 · 监控 · 报表 · 账单</text>
              <line x1="380" y1="82" x2="380" y2="102" stroke="#8888a0" stroke-width="1.5" stroke-dasharray="5 4"/>
              <line x1="380" y1="162" x2="380" y2="182" stroke="#8888a0" stroke-width="1.5" stroke-dasharray="5 4"/>
              <line x1="380" y1="254" x2="380" y2="274" stroke="#8888a0" stroke-width="1.5" stroke-dasharray="5 4"/>
              <line x1="380" y1="334" x2="380" y2="354" stroke="#8888a0" stroke-width="1.5" stroke-dasharray="5 4"/>
            </svg>
            <div class="diagram-caption">Five-Layer Product Architecture</div>
          </div>
        `
      },
      {
        afterHeadingIncludes: "6. 延迟优化方案",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
              <rect x="60" y="112" width="70" height="42" rx="8" fill="rgba(108,245,194,0.08)" stroke="#6cf5c2" stroke-width="2" stroke-dasharray="6 4"/>
              <text x="95" y="136" text-anchor="middle" fill="#6cf5c2" font-size="11">VAD</text>
              <text x="95" y="150" text-anchor="middle" fill="#6cf5c2" font-size="9">80ms</text>
              <rect x="145" y="96" width="108" height="58" rx="8" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6 4"/>
              <text x="199" y="126" text-anchor="middle" fill="#60a5fa" font-size="11">STT</text>
              <text x="199" y="142" text-anchor="middle" fill="#60a5fa" font-size="9">220ms</text>
              <rect x="270" y="74" width="180" height="80" rx="8" fill="rgba(192,132,252,0.08)" stroke="#c084fc" stroke-width="2" stroke-dasharray="6 4"/>
              <text x="360" y="116" text-anchor="middle" fill="#c084fc" font-size="11">LLM TTFT</text>
              <text x="360" y="133" text-anchor="middle" fill="#c084fc" font-size="9">400ms</text>
              <rect x="468" y="104" width="74" height="50" rx="8" fill="rgba(244,114,182,0.08)" stroke="#f472b6" stroke-width="2" stroke-dasharray="6 4"/>
              <text x="505" y="132" text-anchor="middle" fill="#f472b6" font-size="11">TTS</text>
              <text x="505" y="146" text-anchor="middle" fill="#f472b6" font-size="9">90ms</text>
              <rect x="560" y="94" width="90" height="60" rx="8" fill="rgba(251,146,60,0.08)" stroke="#fb923c" stroke-width="2" stroke-dasharray="6 4"/>
              <text x="605" y="126" text-anchor="middle" fill="#fb923c" font-size="11">Network</text>
              <text x="605" y="142" text-anchor="middle" fill="#fb923c" font-size="9">100ms</text>
              <line x1="40" y1="190" x2="700" y2="190" stroke="#f472b6" stroke-width="1.5" stroke-dasharray="8 5"/>
              <text x="708" y="194" fill="#f472b6" font-size="10">P95 1500ms</text>
              <text x="360" y="230" text-anchor="middle" fill="#8888a0" font-size="14">理想端到端 ≈ 890ms</text>
            </svg>
            <div class="diagram-caption">Latency Budget Waterfall</div>
          </div>
        `
      }
    ]
  },
  "04": {
    title: "Call Flow 对话流程设计",
    subtitle: "牙医 / 法律 / 家政三大行业的脚本、状态机与异常处理手册。",
    path: "docs/04_call_flow_design.md",
    articleNumber: "ARTICLE 04",
    date: "2026-03-24",
    prev: { id: "03", title: "产品架构设计" },
    next: { id: "05", title: "定价与 GTM" },
    notes: "状态机、行业脚本、异常与降级",
    diagrams: [
      {
        afterHeadingIncludes: "一、牙医诊所 Call Flow",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
              <rect x="320" y="24" width="120" height="38" rx="18" fill="none" stroke="#6cf5c2" stroke-width="2.3" stroke-dasharray="7 4"/>
              <text x="380" y="47" text-anchor="middle" fill="#6cf5c2" font-size="12">GREETING</text>
              <rect x="300" y="96" width="160" height="38" rx="18" fill="none" stroke="#c084fc" stroke-width="2.3" stroke-dasharray="7 4"/>
              <text x="380" y="119" text-anchor="middle" fill="#c084fc" font-size="12">INTENT DETECTION</text>
              <rect x="286" y="170" width="188" height="40" rx="18" fill="none" stroke="#60a5fa" stroke-width="2.3" stroke-dasharray="7 4"/>
              <text x="380" y="194" text-anchor="middle" fill="#60a5fa" font-size="12">COLLECTING INFO</text>
              <rect x="312" y="248" width="136" height="38" rx="18" fill="none" stroke="#fb923c" stroke-width="2.3" stroke-dasharray="7 4"/>
              <text x="380" y="271" text-anchor="middle" fill="#fb923c" font-size="12">CONFIRMING</text>
              <rect x="316" y="324" width="128" height="38" rx="18" fill="none" stroke="#6cf5c2" stroke-width="2.3" stroke-dasharray="7 4"/>
              <text x="380" y="347" text-anchor="middle" fill="#6cf5c2" font-size="12">CLOSING</text>
              <rect x="92" y="104" width="142" height="36" rx="18" fill="none" stroke="#f472b6" stroke-width="2.3" stroke-dasharray="7 4"/>
              <text x="163" y="127" text-anchor="middle" fill="#f472b6" font-size="12">EMERGENCY</text>
              <rect x="540" y="176" width="156" height="36" rx="18" fill="none" stroke="#fb923c" stroke-width="2.3" stroke-dasharray="7 4"/>
              <text x="618" y="199" text-anchor="middle" fill="#fb923c" font-size="12">TRANSFER</text>
              <line x1="380" y1="62" x2="380" y2="96" stroke="#8888a0" stroke-width="1.5" stroke-dasharray="5 4"/>
              <line x1="380" y1="134" x2="380" y2="170" stroke="#8888a0" stroke-width="1.5" stroke-dasharray="5 4"/>
              <line x1="380" y1="210" x2="380" y2="248" stroke="#8888a0" stroke-width="1.5" stroke-dasharray="5 4"/>
              <line x1="380" y1="286" x2="380" y2="324" stroke="#8888a0" stroke-width="1.5" stroke-dasharray="5 4"/>
              <path d="M300 112 Q240 112 234 122" stroke="#f472b6" stroke-width="1.6" stroke-dasharray="5 4"/>
              <path d="M474 190 Q520 190 540 194" stroke="#fb923c" stroke-width="1.6" stroke-dasharray="5 4"/>
              <text x="238" y="92" fill="#f472b6" font-size="10">紧急关键词可任意跳转</text>
            </svg>
            <div class="diagram-caption">Universal Call State Machine</div>
          </div>
        `
      },
      {
        afterHeadingIncludes: "五、状态机伪代码",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 310" xmlns="http://www.w3.org/2000/svg">
              <rect x="48" y="126" width="88" height="36" rx="18" fill="none" stroke="#6cf5c2" stroke-width="2.1" stroke-dasharray="7 4"/>
              <text x="92" y="149" text-anchor="middle" fill="#6cf5c2" font-size="12">来电</text>
              <rect x="202" y="54" width="132" height="38" rx="18" fill="none" stroke="#c084fc" stroke-width="2.1" stroke-dasharray="7 4"/>
              <text x="268" y="78" text-anchor="middle" fill="#c084fc" font-size="12">牙医 Flow</text>
              <rect x="202" y="126" width="132" height="38" rx="18" fill="none" stroke="#60a5fa" stroke-width="2.1" stroke-dasharray="7 4"/>
              <text x="268" y="150" text-anchor="middle" fill="#60a5fa" font-size="12">法律 Flow</text>
              <rect x="202" y="198" width="132" height="38" rx="18" fill="none" stroke="#fb923c" stroke-width="2.1" stroke-dasharray="7 4"/>
              <text x="268" y="222" text-anchor="middle" fill="#fb923c" font-size="12">家政 Flow</text>
              <rect x="424" y="54" width="144" height="38" rx="18" fill="none" stroke="#c084fc" stroke-width="2.1" stroke-dasharray="7 4"/>
              <text x="496" y="78" text-anchor="middle" fill="#c084fc" font-size="12">预约 / 分诊</text>
              <rect x="424" y="126" width="144" height="38" rx="18" fill="none" stroke="#60a5fa" stroke-width="2.1" stroke-dasharray="7 4"/>
              <text x="496" y="150" text-anchor="middle" fill="#60a5fa" font-size="12">免责声明 / Intake</text>
              <rect x="424" y="198" width="144" height="38" rx="18" fill="none" stroke="#fb923c" stroke-width="2.1" stroke-dasharray="7 4"/>
              <text x="496" y="222" text-anchor="middle" fill="#fb923c" font-size="12">报价 / 派单</text>
              <line x1="136" y1="144" x2="202" y2="73" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="136" y1="144" x2="202" y2="144" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="136" y1="144" x2="202" y2="217" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="334" y1="73" x2="424" y2="73" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="334" y1="144" x2="424" y2="144" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="334" y1="217" x2="424" y2="217" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
            </svg>
            <div class="diagram-caption">Industry Branching View</div>
          </div>
        `
      }
    ]
  },
  "05": {
    title: "定价策略与 GTM 市场进入方案",
    subtitle: "用 ROI、套餐结构与渠道策略，把 QMorph 从 POC 推向规模化增长。",
    path: "docs/05_pricing_gtm.md",
    articleNumber: "ARTICLE 05",
    date: "2026-03-24",
    prev: { id: "04", title: "Call Flow 设计" },
    next: { id: "06", title: "技术栈与 Agent 研发" },
    notes: "TAM/SAM/SOM、ROI、套餐、GTM 路线图",
    diagrams: [
      {
        afterHeadingIncludes: "1. 市场规模",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
              <circle cx="220" cy="160" r="115" fill="none" stroke="#6cf5c2" stroke-width="2.2" stroke-dasharray="8 5"/>
              <circle cx="220" cy="160" r="74" fill="none" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="8 5"/>
              <circle cx="220" cy="160" r="38" fill="rgba(244,114,182,0.1)" stroke="#f472b6" stroke-width="2.4" stroke-dasharray="8 5"/>
              <text x="220" y="72" text-anchor="middle" fill="#6cf5c2" font-size="12">TAM · $18B</text>
              <text x="220" y="122" text-anchor="middle" fill="#c084fc" font-size="12">SAM · $3.2B</text>
              <text x="220" y="166" text-anchor="middle" fill="#f472b6" font-size="12">SOM</text>
              <text x="220" y="184" text-anchor="middle" fill="#f472b6" font-size="10">$120M</text>
              <rect x="430" y="70" width="240" height="40" rx="10" fill="none" stroke="#6cf5c2" stroke-width="2" stroke-dasharray="7 4"/>
              <text x="550" y="94" text-anchor="middle" fill="#6cf5c2" font-size="12">TAM · All receptionist-heavy SMBs</text>
              <rect x="430" y="130" width="240" height="40" rx="10" fill="none" stroke="#c084fc" stroke-width="2" stroke-dasharray="7 4"/>
              <text x="550" y="154" text-anchor="middle" fill="#c084fc" font-size="12">SAM · Dental / Legal / Home Services</text>
              <rect x="430" y="190" width="240" height="40" rx="10" fill="none" stroke="#f472b6" stroke-width="2" stroke-dasharray="7 4"/>
              <text x="550" y="214" text-anchor="middle" fill="#f472b6" font-size="12">SOM · US Year 1-3 reachable segment</text>
            </svg>
            <div class="diagram-caption">TAM / SAM / SOM</div>
          </div>
        `
      },
      {
        afterHeadingIncludes: "6. GTM策略",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
              <line x1="70" y1="180" x2="700" y2="180" stroke="#2a2a3a" stroke-width="2" stroke-dasharray="8 5"/>
              <rect x="90" y="76" width="170" height="56" rx="12" fill="rgba(108,245,194,0.08)" stroke="#6cf5c2" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="175" y="98" text-anchor="middle" fill="#6cf5c2" font-size="13">Phase 1</text>
              <text x="175" y="116" text-anchor="middle" fill="#6cf5c2" font-size="11">Month 1-6 · 直销验证</text>
              <rect x="268" y="58" width="185" height="56" rx="12" fill="rgba(192,132,252,0.08)" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="360" y="80" text-anchor="middle" fill="#c084fc" font-size="13">Phase 2</text>
              <text x="360" y="98" text-anchor="middle" fill="#c084fc" font-size="11">Month 4-12 · 渠道合作</text>
              <rect x="470" y="76" width="186" height="56" rx="12" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="563" y="98" text-anchor="middle" fill="#60a5fa" font-size="13">Phase 3</text>
              <text x="563" y="116" text-anchor="middle" fill="#60a5fa" font-size="11">Month 9-18 · 规模化增长</text>
              <circle cx="120" cy="180" r="5" fill="#6cf5c2"/>
              <circle cx="280" cy="180" r="5" fill="#c084fc"/>
              <circle cx="475" cy="180" r="5" fill="#60a5fa"/>
              <text x="120" y="205" text-anchor="middle" fill="#8888a0" font-size="10">50 付费客户</text>
              <text x="280" y="205" text-anchor="middle" fill="#8888a0" font-size="10">ADA / Clio / ServiceTitan</text>
              <text x="475" y="205" text-anchor="middle" fill="#8888a0" font-size="10">PLG / SEO / PPC</text>
            </svg>
            <div class="diagram-caption">Three-Phase GTM Timeline</div>
          </div>
        `
      }
    ]
  },
  "06": {
    title: "技术栈与 Agent 研发工程",
    subtitle: "Context Engineering 与 Harness Engineering 是语音 Agent 质量的核心分水岭。",
    path: "docs/06_tech_stack.md",
    articleNumber: "ARTICLE 06",
    date: "2026-03-24",
    prev: { id: "05", title: "定价与 GTM" },
    next: { id: "07", title: "Stakeholder FAQ" },
    notes: "上下文工程、测试工程、质量门",
    diagrams: [
      {
        afterHeadingIncludes: "一、Context Engineering",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
              <rect x="180" y="272" width="360" height="46" rx="10" fill="rgba(108,245,194,0.08)" stroke="#6cf5c2" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="360" y="300" text-anchor="middle" fill="#6cf5c2" font-size="13">Layer 1 · Persona</text>
              <rect x="190" y="220" width="340" height="42" rx="10" fill="rgba(192,132,252,0.08)" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="360" y="246" text-anchor="middle" fill="#c084fc" font-size="13">Layer 2 · Constraint / Compliance</text>
              <rect x="200" y="168" width="320" height="42" rx="10" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="360" y="194" text-anchor="middle" fill="#60a5fa" font-size="13">Layer 3 · Business Logic</text>
              <rect x="210" y="116" width="300" height="42" rx="10" fill="rgba(251,146,60,0.08)" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="360" y="142" text-anchor="middle" fill="#fb923c" font-size="13">Layer 4 · Conversation State</text>
              <rect x="220" y="64" width="280" height="42" rx="10" fill="rgba(244,114,182,0.08)" stroke="#f472b6" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="360" y="90" text-anchor="middle" fill="#f472b6" font-size="13">Layer 5 · Tool Definitions</text>
              <text x="548" y="298" fill="#8888a0" font-size="10">Static</text>
              <text x="538" y="246" fill="#8888a0" font-size="10">Static</text>
              <text x="528" y="194" fill="#8888a0" font-size="10">Semi-static</text>
              <text x="518" y="142" fill="#8888a0" font-size="10">Dynamic</text>
              <text x="508" y="90" fill="#8888a0" font-size="10">Dynamic</text>
            </svg>
            <div class="diagram-caption">Five-Layer Prompt Stack</div>
          </div>
        `
      },
      {
        afterHeadingIncludes: "二、Harness Engineering",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
              <polygon points="360,46 640,312 80,312" fill="none" stroke="#2a2a3a" stroke-width="2" stroke-dasharray="7 5"/>
              <polygon points="360,74 596,300 124,300" fill="rgba(108,245,194,0.08)" stroke="#6cf5c2" stroke-width="2.2" stroke-dasharray="7 4"/>
              <polygon points="360,128 540,290 180,290" fill="rgba(192,132,252,0.08)" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="7 4"/>
              <polygon points="360,188 482,280 238,280" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="7 4"/>
              <polygon points="360,242 422,270 298,270" fill="rgba(244,114,182,0.08)" stroke="#f472b6" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="360" y="288" text-anchor="middle" fill="#6cf5c2" font-size="12">Unit Tests ~500</text>
              <text x="360" y="252" text-anchor="middle" fill="#c084fc" font-size="12">Conversation Flow ~200</text>
              <text x="360" y="214" text-anchor="middle" fill="#60a5fa" font-size="12">E2E Voice ~50</text>
              <text x="360" y="257" text-anchor="middle" fill="#f472b6" font-size="0">.</text>
              <text x="360" y="258" text-anchor="middle" fill="#f472b6" font-size="12">Red Team ~20</text>
            </svg>
            <div class="diagram-caption">Voice Agent Testing Pyramid</div>
          </div>
        `
      },
      {
        afterHeadingIncludes: "2.7 CI/CD Pipeline",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 210" xmlns="http://www.w3.org/2000/svg">
              <rect x="24" y="84" width="86" height="34" rx="10" fill="none" stroke="#6cf5c2" stroke-width="2" stroke-dasharray="7 4"/><text x="67" y="105" text-anchor="middle" fill="#6cf5c2" font-size="10">unit</text>
              <rect x="128" y="44" width="98" height="34" rx="10" fill="none" stroke="#c084fc" stroke-width="2" stroke-dasharray="7 4"/><text x="177" y="65" text-anchor="middle" fill="#c084fc" font-size="10">intent</text>
              <rect x="128" y="124" width="98" height="34" rx="10" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="7 4"/><text x="177" y="145" text-anchor="middle" fill="#60a5fa" font-size="10">tool_call</text>
              <rect x="254" y="84" width="126" height="34" rx="10" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="7 4"/><text x="317" y="105" text-anchor="middle" fill="#60a5fa" font-size="10">conversation_flow</text>
              <rect x="254" y="144" width="104" height="34" rx="10" fill="none" stroke="#f472b6" stroke-width="2" stroke-dasharray="7 4"/><text x="306" y="165" text-anchor="middle" fill="#f472b6" font-size="10">red_team</text>
              <rect x="410" y="84" width="118" height="34" rx="10" fill="none" stroke="#fb923c" stroke-width="2" stroke-dasharray="7 4"/><text x="469" y="105" text-anchor="middle" fill="#fb923c" font-size="10">latency</text>
              <rect x="560" y="84" width="118" height="34" rx="10" fill="none" stroke="#6cf5c2" stroke-width="2" stroke-dasharray="7 4"/><text x="619" y="105" text-anchor="middle" fill="#6cf5c2" font-size="10">deploy_gate</text>
              <line x1="110" y1="101" x2="128" y2="61" stroke="#8888a0" stroke-width="1.3" stroke-dasharray="5 4"/>
              <line x1="110" y1="101" x2="128" y2="141" stroke="#8888a0" stroke-width="1.3" stroke-dasharray="5 4"/>
              <line x1="226" y1="61" x2="254" y2="101" stroke="#8888a0" stroke-width="1.3" stroke-dasharray="5 4"/>
              <line x1="226" y1="141" x2="254" y2="101" stroke="#8888a0" stroke-width="1.3" stroke-dasharray="5 4"/>
              <line x1="380" y1="101" x2="410" y2="101" stroke="#8888a0" stroke-width="1.3" stroke-dasharray="5 4"/>
              <line x1="358" y1="161" x2="560" y2="101" stroke="#8888a0" stroke-width="1.3" stroke-dasharray="5 4"/>
              <line x1="528" y1="101" x2="560" y2="101" stroke="#8888a0" stroke-width="1.3" stroke-dasharray="5 4"/>
            </svg>
            <div class="diagram-caption">AI Quality Gate Pipeline</div>
          </div>
        `
      }
    ]
  },
  "07": {
    title: "常见问题 FAQ — Stakeholder 版",
    subtitle: "投资人、合伙人、潜在客户与技术顾问最常问的 16 个问题。",
    path: "docs/07_FAQ.md",
    articleNumber: "ARTICLE 07",
    date: "2026-03-24",
    prev: { id: "06", title: "技术栈与 Agent 研发" },
    next: null,
    notes: "FAQ、护城河、电话接入、SLA、路线图",
    diagrams: [
      {
        afterHeadingIncludes: "二、电话接入与号码迁移",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 270" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="104" width="118" height="40" rx="18" fill="none" stroke="#60a5fa" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="99" y="129" text-anchor="middle" fill="#60a5fa" font-size="12">客户拨打原号码</text>
              <rect x="210" y="104" width="118" height="40" rx="18" fill="none" stroke="#c084fc" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="269" y="129" text-anchor="middle" fill="#c084fc" font-size="12">PSTN / 转接</text>
              <rect x="384" y="66" width="126" height="40" rx="18" fill="none" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="447" y="91" text-anchor="middle" fill="#fb923c" font-size="12">真人优先响铃</text>
              <rect x="384" y="154" width="126" height="40" rx="18" fill="none" stroke="#6cf5c2" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="447" y="179" text-anchor="middle" fill="#6cf5c2" font-size="12">QMorph AI 接听</text>
              <rect x="584" y="52" width="126" height="40" rx="18" fill="none" stroke="#fb923c" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="647" y="77" text-anchor="middle" fill="#fb923c" font-size="12">真人接听</text>
              <rect x="584" y="166" width="126" height="40" rx="18" fill="none" stroke="#6cf5c2" stroke-width="2.2" stroke-dasharray="7 4"/>
              <text x="647" y="191" text-anchor="middle" fill="#6cf5c2" font-size="12">AI 兜底处理</text>
              <line x1="158" y1="124" x2="210" y2="124" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="328" y1="124" x2="384" y2="86" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="328" y1="124" x2="384" y2="174" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="510" y1="86" x2="584" y2="72" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <line x1="510" y1="174" x2="584" y2="186" stroke="#8888a0" stroke-width="1.4" stroke-dasharray="5 4"/>
              <text x="518" y="114" fill="#8888a0" font-size="10">timeout 未接</text>
            </svg>
            <div class="diagram-caption">Human First, AI Fallback</div>
          </div>
        `
      },
      {
        afterHeadingIncludes: "三、技术架构与护城河",
        html: `
          <div class="sketch-diagram">
            <svg viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg">
              <rect x="118" y="42" width="524" height="230" rx="28" fill="none" stroke="#6cf5c2" stroke-width="2.4" stroke-dasharray="9 5"/>
              <rect x="188" y="82" width="384" height="150" rx="24" fill="none" stroke="#c084fc" stroke-width="2.4" stroke-dasharray="9 5"/>
              <rect x="266" y="118" width="228" height="82" rx="22" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" stroke-width="2.8" stroke-dasharray="9 5"/>
              <text x="380" y="86" text-anchor="middle" fill="#6cf5c2" font-size="14">数据飞轮</text>
              <text x="380" y="104" text-anchor="middle" fill="#6cf5c2" font-size="10">真实通话数据 → 评估 → 迭代</text>
              <text x="380" y="146" text-anchor="middle" fill="#c084fc" font-size="14">知识图谱 + 硬约束</text>
              <text x="380" y="164" text-anchor="middle" fill="#c084fc" font-size="10">行业准确率与合规边界</text>
              <text x="380" y="154" text-anchor="middle" fill="#60a5fa" font-size="0">.</text>
              <text x="380" y="157" text-anchor="middle" fill="#60a5fa" font-size="14">超低延迟</text>
              <text x="380" y="176" text-anchor="middle" fill="#60a5fa" font-size="10">&lt;800ms 感知响应</text>
            </svg>
            <div class="diagram-caption">Three-Layer Moat</div>
          </div>
        `
      }
    ]
  }
};
