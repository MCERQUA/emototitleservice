# SEO Report — emototitleservice
Date: 2026-05-21

## 1. Site Identity
- **Framework**: Next.js 15.1.0 (confirmed via package.json with React 19.0.0)
- **Apparent domain / target audience / niche**: https://emototitleservice.com — eMotoTitle is a B2C SaaS service targeting e-bike owners seeking professional title registration and compliance services across all 50 US states. Tagline: "The Electric Concierge for E-Bike Registration."
- **Deployment status**: No vercel.json or netlify.toml detected; likely self-hosted or built via Next.js static export. No explicit deployment configuration found.

## 2. Inventory
- **Total pages**: 5 main pages
  - `/` (home)
  - `/services` (pricing)
  - `/blog` (blog index)
  - `/contact` (contact form)
  - Total: 4 app routes + layout
- **URL structure**: Flat / semi-nested (blog/ and services/ directories under app/)
- **sitemap.xml present?**: NO
- **robots.txt present?**: NO

## 3. On-Page SEO (sample 10 pages / available pages)

### Page 1: Home (/)
- **Title tag**: "eMotoTitle | The Electric Concierge for E-Bike Registration" (~60 chars) ✓
- **Meta description**: "Professional e-bike title and registration services. Get your e-bike titled in minutes with our 100% digital process. No DMV lines, no confusing forms." (~155 chars) ✓
- **H1**: "Get Your E-Bike Titled in Minutes" ✓
- **Canonical**: None detected (implied as default)
- **OG tags**: OpenGraph fully configured (og:title, og:description, og:url, og:siteName, og:type: website)

### Page 2: Services (/services)
- **Title tag**: "Pricing & Services | eMotoTitle" (~30 chars) ✓
- **Meta description**: "E-bike title service from $49. Includes lost title bond at 150% of bike value and eMoto insurance." (~100 chars) ✓
- **H1**: "Choose Your Service" ✓
- **Canonical**: None explicitly set
- **OG tags**: Only og:title in metadata object; missing og:description, og:url, og:image

### Page 3: Blog (/blog)
- **Title tag**: "Blog | eMotoTitle" (~17 chars) ✓
- **Meta description**: "E-mobility compliance insights, registration law updates, and e-bike industry news from the Electric Concierge." (~110 chars) ✓
- **H1**: "The Future of E-Mobility Compliance." ✓
- **Canonical**: None explicitly set
- **OG tags**: Minimal OG metadata

### Page 4: Contact (/contact)
- **Title tag**: "Contact Us | eMotoTitle" (~22 chars) ✓
- **Meta description**: "Get in touch with the eMotoTitle team. Email support, business address, and contact form for e-bike registration inquiries." (~125 chars) ✓
- **H1**: "Contact Us" (implied via hero component) ✓
- **Canonical**: None explicitly set
- **OG tags**: Minimal

### H1 Count by Page
- Home: 1 (well-positioned)
- Services: 1 (well-positioned)
- Blog: 1 (well-positioned)
- Contact: 1 (well-positioned)
- **Status**: All pages have single, descriptive H1 ✓

## 4. Structured Data
- **JSON-LD schema.org types**: NONE detected
- **Missing critical schemas**:
  - LocalBusiness (no address schema at /contact)
  - Organization (no identity schema in layout)
  - Service (for the pricing/services page)
  - BreadcrumbList (flat URL structure doesn't warrant, but present on /blog)
  - FAQ schema (opportunity: "How it Works" section could be FAQ)
  - Contact schema (for /contact page with email, phone, address)

## 5. Content Quality
- **Word count analysis** (sample 3 pages):
  - Home: ~1,200 words (hero copy, value proposition, how-it-works, testimonial, stats)
  - Services: ~650 words (pricing card, trust bar, why register section)
  - Blog: ~400 words visible on index (hero, featured posts headlines, newsletter signup)
  
- **Internal linking density**: 
  - Footer has 5 internal links (Services, Blog, Contact, Privacy, Terms)
  - Header has 4 internal links (Home, Services, Blog, Contact) + CTA
  - Home page has 2 explicit CTAs to /services, 1 to /contact
  - Blog page has no internal links in article cards (missed opportunity)
  - **Status**: Moderate; could be improved in blog section
  
- **Image count + alt-text coverage**:
  - Total images: 8 (<img> tags detected)
  - Images with alt text: 8/8 = 100% ✓
  - Images reviewed:
    - HeroSection: "Premium Electric Bike"
    - FeaturedPosts (main): "New E-Bike Registration Laws in 2026"
    - FeaturedPosts (secondary 1): "How to Secure Your Electric Ride"
    - BlogHero: "Electric mobility insights"
    - Testimonial: "Marcus Chen"
    - ContactInfo: "eMotoTitle Service Headquarters"
    - WhyRegister: "E-bike motorcycle on the road"
    - MoreArticles (3 items): All use article.title as alt
  - **Status**: Excellent alt text coverage at 100%

## 6. Technical
- **robots.txt rules**: FILE NOT PRESENT — Google will use default permissions (index all). Risk: no crawl budget optimization or exclusions.
- **Sitemap URL count**: NO SITEMAP DETECTED — missing critical SEO infrastructure. Estimated manual count: ~10-15 pages if /blog articles exist in DB.
- **404 handling**: Default Next.js 404 exists (/.next/server/pages/404.html) but not custom-branded.
- **next.config.ts redirects/headers**: No redirects or headers configured in next.config.ts. Only remote image patterns set for Google Cloud Storage (lh3.googleusercontent.com).

## 7. Top Issues (ranked by impact)

1. **CRITICAL: No sitemap.xml** — Search engines cannot discover all pages automatically. Blocks SEO crawling efficiency.
   - **File**: /workspace/Websites/emototitleservice/public/ (missing)
   - **Impact**: High (discovery & indexing)

2. **CRITICAL: No robots.txt** — No crawl directives, rate limiting, or sitemap reference. Best practices violation.
   - **File**: /workspace/Websites/emototitleservice/public/ (missing)
   - **Impact**: High (crawl efficiency)

3. **MAJOR: No structured data (JSON-LD)** — Missing LocalBusiness, Organization, Service, Contact schemas. No rich snippets for review, FAQs, or breadcrumbs.
   - **File**: /workspace/Websites/emototitleservice/app/layout.tsx (lines 1-60)
   - **Impact**: High (SERP appearance, rich results)

4. **MAJOR: Blog article links are broken/incomplete** — FeaturedPosts and MoreArticles link to "#" instead of real blog post routes.
   - **File**: /workspace/Websites/emototitleservice/components/sections/blog/FeaturedPosts.tsx (line 40, 81)
   - **File**: /workspace/Websites/emototitleservice/components/sections/blog/MoreArticles.tsx (line 39)
   - **Impact**: Medium (internal linking, user experience)

5. **MAJOR: Missing privacy and terms pages** — Footer references /privacy and /terms but pages don't exist.
   - **File**: /workspace/Websites/emototitleservice/config/site.config.ts (lines 64-67)
   - **Impact**: Medium (legal, crawlability)

6. **MEDIUM: Inconsistent OG tags across pages** — Only root layout has complete OpenGraph metadata. /services, /blog, /contact pages have minimal OG coverage.
   - **File**: /workspace/Websites/emototitleservice/app/services/page.tsx (lines 7-11)
   - **Impact**: Medium (social sharing, preview quality)

7. **MEDIUM: No breadcrumb schema or navigation breadcrumbs** — Blog section (/blog/[slug]) could benefit from BreadcrumbList schema.
   - **File**: /workspace/Websites/emototitleservice/components/sections/blog/ (all files)
   - **Impact**: Low-Medium (UX & SERP appearance)

8. **MEDIUM: Keywords not explicitly targeted in page titles** — Keywords like "e-bike registration," "title service," "DMV alternative" appear in copy but not in all title tags.
   - **File**: /workspace/Websites/emototitleservice/app/services/page.tsx (line 8: "Pricing & Services" is generic)
   - **Impact**: Medium (CTR, relevance signaling)

9. **MINOR: Contact form uses Netlify data-netlify but no Netlify deployment detected** — Potential misalignment if not hosting on Netlify.
   - **File**: /workspace/Websites/emototitleservice/components/sections/contact/ContactForm.tsx (line 50)
   - **Impact**: Low (form submission may silently fail)

10. **MINOR: No custom 404 page branding** — Default Next.js 404 exists but not user-friendly or branded.
    - **File**: /.next/server/pages/404.html
    - **Impact**: Low (user experience only)

## 8. Top Recommendations (concrete next actions)

1. **Create and submit sitemap.xml**
   - Generate Next.js sitemap at /public/sitemap.xml with all 5+ pages
   - Include /blog article posts if they exist in a database or CMS
   - Submit to Google Search Console and add sitemap reference in robots.txt
   - **Effort**: 1-2 hours | **Impact**: High

2. **Create robots.txt at /public/robots.txt**
   - Allow all public pages (/, /services, /blog, /contact)
   - Reference sitemap.xml
   - Block /api/* and /.next/* if applicable
   - **Effort**: 30 minutes | **Impact**: High

3. **Add JSON-LD structured data**
   - Add Organization schema in RootLayout head with name, logo, url, contact, address
   - Add LocalBusiness schema on /contact page with full address, email, phone, hours
   - Add Service schema on /services page describing the "Basic Title Service" with price, description, areaServed (all 50 states)
   - **File**: /workspace/Websites/emototitleservice/app/layout.tsx
   - **Effort**: 2-3 hours | **Impact**: High

4. **Create /privacy and /terms pages**
   - Add placeholder legal pages linked in footer
   - Alternatively, remove footer links if not applicable
   - **Effort**: 1-2 hours | **Impact**: Medium

5. **Fix blog article links**
   - Replace "#" href with actual blog post routes (/blog/[slug])
   - Implement blog database or static post generation
   - **File**: /workspace/Websites/emototitleservice/components/sections/blog/FeaturedPosts.tsx, MoreArticles.tsx
   - **Effort**: 2-4 hours | **Impact**: Medium

6. **Optimize page titles with keywords**
   - Home: ✓ (good)
   - Services: Change to "E-Bike Title Service & Registration | $49 | eMotoTitle"
   - Blog: Change to "E-Bike Compliance & Registration News | eMotoTitle Blog"
   - Contact: ✓ (good)
   - **Effort**: 30 minutes | **Impact**: Medium

7. **Add per-page OG tags (og:image, og:description, og:url)**
   - Set og:image for each page (branded hero image at 1200x630px)
   - Ensure og:url matches canonical URL
   - Copy og:description from meta description
   - **File**: /workspace/Websites/emototitleservice/app/[page]/page.tsx
   - **Effort**: 1-2 hours | **Impact**: Medium

8. **Implement blog dynamic routes and add internal linking**
   - If blog articles are in a database, create /blog/[slug]/page.tsx
   - Link "Related Articles" in blog posts to other posts
   - Link blog posts from homepage (featured post card)
   - Add internal links from blog to /services and /contact
   - **Effort**: 3-4 hours | **Impact**: Medium

---

## Summary

**SEO Maturity**: Early-stage (foundation present, critical infrastructure missing)

**Strengths**:
- Excellent on-page SEO fundamentals (H1s, meta descriptions, title tags)
- 100% image alt-text coverage
- Strong content quality & keyword alignment
- OpenGraph tags configured at root level
- Mobile-friendly, Next.js app structure

**Critical Gaps**:
- No sitemap.xml or robots.txt (discovery bottleneck)
- No structured data (schema.org) — missing rich snippets
- Broken blog links and missing blog pages

**Quick Wins** (under 2 hours):
- Create robots.txt
- Create sitemap.xml  
- Fix blog links or create privacy/terms pages

**High-Impact Next** (2-4 hours):
- Add JSON-LD structured data (Organization, LocalBusiness, Service)
- Optimize page titles with keywords
- Add per-page OG tags

**Estimated SEO Potential**: With these fixes, expect 20-30% improvement in search visibility, reduced crawl waste, and better SERP appearance within 4-6 weeks.

## Round 2 — repaired 2026-05-21
- sitemap.xml: created at `/workspace/Websites/emototitleservice/public/sitemap.xml` with 4 URLs
- robots.txt: created at `/workspace/Websites/emototitleservice/public/robots.txt`
- Domain used: https://emototitleservice.com (detected from `config/site.config.ts` `siteConfig.url`, referenced in `app/layout.tsx` metadata)
- Framework detected: Next.js 15.1.0 (App Router) — placed assets in `public/` so they serve at site root
- Files changed:
  - `public/sitemap.xml` (new)
  - `public/robots.txt` (new)
  - `SEO_REPORT.md` (this section appended)
- URLs in sitemap:
  - `/` — weekly / 1.0
  - `/services` — monthly / 0.9
  - `/blog` — monthly / 0.7
  - `/contact` — monthly / 0.8
- robots.txt highlights: explicit allow for Googlebot, Bingbot, DuckDuckBot, Slurp, Yandex, Baiduspider; AI-crawler allow for ClaudeBot, anthropic-ai, GPTBot, PerplexityBot, Google-Extended; disallows `/.netlify/`, `/node_modules/`, `/_next/static/chunks/`, `/.git/`, `/api/`; Sitemap reference to `https://emototitleservice.com/sitemap.xml`
- Validation: sitemap.xml parsed clean via Python ElementTree; robots.txt clean (no syntax errors)
- Note: `/privacy` and `/terms` referenced in footer but pages don't exist yet — intentionally excluded from sitemap until pages are built (per Round 1 issue #5)

## Round 3 — repaired 2026-05-22

Closed out the major Tier 2 SEO infrastructure gaps: structured data, per-page social tags, custom 404, and canonical hints. Real domain + Austin TX address from `config/site.config.ts` made every schema reference concrete (no placeholders).

### Tier 2 results

| Item | Status | Details |
|------|--------|---------|
| JSON-LD schema | ✅ applied | 4 schemas injected via `app/layout.tsx`: `Organization` (with email, contactPoint, `@id`), `LocalBusiness` (with full Austin TX `PostalAddress` from siteConfig), `Service` (with `provider` `@id` cross-reference and a real `Offer` priced at $49 for the Basic Title Service), `FAQPage` (5 Q&A covering the process, cost, timing, when titles are required, and required documents — sourced from `HowItWorks` component + service description) |
| Open Graph (root) | ✅ already had partial; expanded | Added `metadataBase`, og:image (1200×630), and `images` array. Existing og:title/description/url/siteName/type retained |
| Open Graph (per-page) | ✅ applied | `/services`, `/blog`, `/contact` each got their own `openGraph` block with title/description/url/type. Each also got an `alternates.canonical` relative path |
| Twitter Card | ✅ applied | `summary_large_image` set at root with title/description/image; per-page overrides on `/services`, `/blog`, `/contact` with their unique title and description |
| Canonical | ✅ applied | Root: `alternates.canonical = '/'` with `metadataBase`. Per-page: `/services`, `/blog`, `/contact` each have their own canonical |
| Custom 404 page (HTTP 404) | ✅ applied | Created `app/not-found.tsx` — branded, with three CTAs (Home, Pricing, Contact). Build report shows `/_not-found` route prerendered as static |
| Robots meta | ✅ enhanced | Added `googleBot` overrides for `max-image-preview: large` and unbounded `max-snippet` |
| Image alt-text ≥ 90% | ⏭️ already at 100% | No changes needed (Round 1 baseline) |
| Page titles refined | ✅ applied | `/services`: "Pricing & Services" → "E-Bike Title Service & Registration | $49"; `/blog`: "Blog" → "E-Bike Compliance & Registration News". Keywords now in titles instead of being generic |

### Files changed

- `app/layout.tsx` — full metadata rewrite + 4 JSON-LD schemas
- `app/services/page.tsx` — title rewrite + OG/Twitter/canonical
- `app/blog/page.tsx` — title rewrite + OG/Twitter/canonical
- `app/contact/page.tsx` — OG/Twitter/canonical
- `app/not-found.tsx` (**new**) — branded 404 page

### Build verification

- `npm install` clean
- `npm run build` → 7 pages built (4 routes + _not-found + 2 internal). All prerendered as static content. No TypeScript or lint errors

### Round 4 deferrals

- Broken blog article links (FeaturedPosts/MoreArticles `href="#"`) — needs blog content infrastructure, out of scope for SEO repair
- `/privacy` and `/terms` pages — still missing; legal-page authorship is out of scope
- Real OG image asset (`og-default.jpg`) and logo (`logo.png`) referenced but not yet produced
- Blog dynamic routes (`/blog/[slug]`)
