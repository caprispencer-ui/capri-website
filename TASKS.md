# Tasks

## Active

- [ ] **Optional: hide your email in the forms** - send Claude the random code from the FormSubmit activation email
- [ ] **Finish NotFair plugin setup for cloud sessions** - do this at claude.ai/code in a browser or in the Desktop app (not the mobile app)
  - Click the cloud icon with the environment name (e.g. "Default") in the row above the message box, choose **Cloud**, hover the environment, click the gear icon
  - **Network access**: choose **Custom** (or **Limited**), add `notfair.co` under **Allowed domains**, keep **Allow package managers** ticked
  - **Setup script**: add these two lines:
    - `claude plugin marketplace add nowork-studio/notfair-plugin`
    - `claude plugin install notfair@nowork-studio`
  - Save, start a new session, then sign in to NotFair in the browser when a Google Ads / GA4 / Search Console skill first asks
  - If the environment is read-only, it's shared by the organization: an Owner changes it at claude.ai/admin-settings → Cloud environments
  - Docs: https://code.claude.com/docs/en/cloud-environments#network-access

## Waiting On

- [ ] **Google Business Profile verification** - since 2026-11-01. Once it's live: add your packages under Services and text past clients the "Get more reviews" link
- [ ] **Google indexing the site** - since 2026-11-01. Check Search Console > Pages in about a week

## Someday

- [ ] **Re-run the SEO audit** once Search Console has a few weeks of data (`/notfair:seo-analysis`)

## Done

- [x] ~~Connect Google Search Console and submit sitemap~~ (2026-11-01)
- [x] ~~Set up Google Business Profile (description, photos)~~ (2026-11-01)
- [x] ~~Activate the website forms~~ (2026-10-31)
- [x] ~~Raise prices: individual/senior $75, couple $90, family $105, branding $115~~ (2026-10-31)
- [x] ~~SEO fixes: titles, descriptions, sitemap, robots.txt, schema, share previews, faster images, alt text, favicon, 404 page, services FAQ~~ (2026-10-31)
