# Tasks

## Active

- [ ] **Connect Google Search Console** - so Google indexes the site and you can see search traffic
  - Go to https://search.google.com/search-console, add a **Domain** property for `capturedbycapri.com`
  - It gives you a TXT record: add it in your domain registrar's DNS settings, then click Verify
  - Under **Sitemaps**, submit `https://capturedbycapri.com/sitemap.xml`
- [ ] **Create a Google Business Profile** - biggest boost for "photographer near me" and Maps results
  - https://business.google.com, category "Photographer", choose that you serve customers at their location, set service area to Utah County, hide your address
  - Add the website link, photos and prices, and ask past clients for Google reviews
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

## Someday

- [ ] **Re-run the SEO audit** once Search Console has a few weeks of data (`/notfair:seo-analysis`)

## Done

- [x] ~~Activate the website forms~~ (2026-10-31)
- [x] ~~Raise prices: individual/senior $75, couple $90, family $105, branding $115~~ (2026-10-31)

- [x] ~~SEO fixes: titles, descriptions, sitemap, robots.txt, schema, share previews, faster images, alt text, favicon, 404 page, services FAQ~~ (2026-10-31)
