## QMorph v1.1.0

This release captures the first polished public version of the QMorph product site, including the full product walkthrough, long-form blog/wiki content, and production-ready deployment updates.

## Highlights

- Added a complete QMorph landing site that presents the full 6-step AI Receptionist workflow for SMBs.
- Added a dedicated `Blogs` section that turns the product docs into browsable wiki-style blog articles.
- Added hand-drawn Excalidraw-style diagrams across the blog experience for architecture, market, GTM, moat, and flow explanations.
- Added bilingual site support with Chinese/English navigation and blog entry copy.
- Fixed unreliable article loading by precompiling blog content into the site bundle instead of fetching markdown at runtime.
- Deployed the updated production site to `qmorph.arvix.io`.

## Included In This Version

### Website

- Main product website covering:
  - Requirements collection
  - Voice Agent build flow
  - PSTN / phone routing
  - Customer voice interactions
  - Calendar and scheduling
  - Reporting and alerts
- Updated top navigation with access to the new blog/wiki system.

### Blog / Wiki System

- Added `blogs.html` as the blog index page.
- Added `blog.html` as a reusable wiki-style article renderer.
- Added `blog.css` for blog-specific layout and styling.
- Added `blog-data.js` for article metadata, navigation, and embedded diagrams.
- Added `blog-content.js` with precompiled article HTML for reliable loading in constrained network environments.

### Documentation Converted Into Articles

- `01_competitive_analysis.md`
- `02_industry_research.md`
- `03_product_architecture.md`
- `04_call_flow_design.md`
- `05_pricing_gtm.md`
- `06_tech_stack.md`
- `07_FAQ.md`

### Reliability Improvement

Previously, blog articles were loaded by fetching markdown files at runtime. In some network environments this caused failures such as:

> "文章加载失败，请稍后重试"

This release removes that dependency by shipping pre-rendered article content directly with the site.

## Deployment

- Preview and production deployments updated on Vercel
- Production domain updated: `https://qmorph.arvix.io`

## Git

- Release tag: `v1.1.0`
- Repository: `https://github.com/yguo/qmorph_site`

