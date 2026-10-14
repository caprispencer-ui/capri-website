# Tasks

## Active

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

## Done
