# QMorph

**QMorph** is an AI receptionist experience designed for SMBs.

This repository contains the QMorph product website, blog/wiki content, architecture writeups, and the production-ready static site currently deployed at:

**Live site:** [qmorph.arvix.io](https://qmorph.arvix.io)

If this project is useful or inspiring, please consider giving it a **star** and **forking** it to support future iterations.

## What QMorph Does

QMorph is designed to help small and medium businesses deploy a voice-based AI front desk that can:

- collect business requirements through a guided onboarding flow
- generate a tailored voice agent
- connect to an existing business phone workflow through PSTN routing
- answer customer calls in natural language
- manage scheduling and calendar workflows
- send daily or weekly reports and alerts back to the business owner

## Why It Matters

Traditional IVR systems force callers into rigid menus like "press 1, press 2."

QMorph is positioned as a **conversational AI receptionist** instead:

- callers speak naturally instead of navigating fixed trees
- the system can handle booking, rescheduling, FAQ, routing, and escalation
- SMBs can go live quickly without a long deployment cycle
- support can run 24/7, including after-hours and overflow periods

## Key FAQ Takeaways

These are the most important product messages pulled from the stakeholder FAQ and reflected in this repo.

### 1. Businesses do not need to change their phone number

QMorph is designed so end customers can keep calling the SMB's existing number.

Typical deployment options:

- carrier-side call forwarding during the pilot stage
- number porting to Twilio or Telnyx for deeper long-term control

### 2. Human-first, AI-fallback routing is supported

One of the strongest deployment models is:

- ring the human first
- if nobody answers within a configurable timeout
- let the AI receptionist take over

This makes adoption easier for SMBs that want AI coverage without giving up human availability.

### 3. The product focus is not just "AI calls", but business completion

QMorph is not framed as a generic voice bot.

It is designed to complete real workflows such as:

- dental appointment booking
- legal consultation intake
- home service dispatch or quoting
- calendar updates and reminders
- owner-facing summaries and alerts

### 4. Low latency is a core product moat

The project is built around the idea that perceived conversation speed matters.

Target performance described in the docs:

- P50 around 900ms
- P95 below 1500ms

The moat is not just model choice, but system-level optimization across:

- streaming STT → LLM → TTS
- speculative execution
- semantic caching
- adaptive pipeline control

### 5. Domain depth matters more than generic automation

QMorph is intentionally shaped as a **verticalized AI receptionist** rather than a generic call API.

The documentation focuses on three initial verticals:

- dental clinics
- legal practices
- home services

The product thesis is that deep domain context, industry-specific integrations, and hard operational constraints outperform shallow generic voice agents.

### 6. Safety and compliance are product features

From the FAQ and technical docs, the intended safety posture includes:

- hard constraints to prevent unsafe responses
- mandatory legal disclaimers where required
- automatic human escalation for low-confidence situations
- HIPAA-oriented architecture for healthcare-like workflows
- red-team testing and evaluation gates

## What Is In This Repository

### Website

- `index.html` — main QMorph product site
- `styles.css` — global styling
- `app.js` — UI interactions and language switching

### Blog / Wiki

- `blogs.html` — blog landing page
- `blog.html` — wiki-style article renderer
- `blog.css` — blog-specific styling
- `blog-data.js` — article metadata, navigation, and embedded diagrams
- `blog-content.js` — precompiled article content for reliable delivery

### Documentation

- `docs/01_competitive_analysis.md`
- `docs/02_industry_research.md`
- `docs/03_product_architecture.md`
- `docs/04_call_flow_design.md`
- `docs/05_pricing_gtm.md`
- `docs/06_tech_stack.md`
- `docs/07_FAQ.md`

### Other Output

- `qmorph-standalone.html` — standalone shareable HTML export

## Blog Reliability Note

The blog system originally loaded markdown at runtime. In some network conditions this could lead to article load failures.

This repository now ships precompiled blog article content through `blog-content.js`, so article pages do **not** depend on runtime markdown fetches to render.

## Product Positioning

QMorph is positioned between two common extremes:

- expensive human-heavy receptionist services
- developer-first telephony APIs that require custom implementation

The intended value proposition is:

- easier than building on raw voice APIs
- more domain-aware than generic AI calling tools
- more scalable and cost-efficient than human-only receptionist services

## Current Tech Direction

The technical documents in this repo describe a stack centered around:

- telephony: Telnyx / Twilio
- speech-to-text: Deepgram
- LLM: Claude
- text-to-speech: Cartesia
- real-time orchestration: LiveKit Agents
- storage and state: PostgreSQL + Redis

The architecture also emphasizes:

- context engineering
- harness engineering
- multi-tenant SaaS isolation
- latency monitoring
- evaluation-driven improvement loops

## Local Preview

Because this is a static site, you can preview it locally with a simple file server, for example:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Release

Current saved release in this repo:

- tag: `v1.1.0`

## Support The Project

If you like the direction of QMorph:

- give the repo a **star**
- **fork** it and explore your own version
- share feedback or ideas from real SMB workflows

That support makes it much easier to keep improving the product narrative, the architecture, and the open documentation around AI receptionists.

