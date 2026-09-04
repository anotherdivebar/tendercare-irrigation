# Verification report

Verified September 4, 2026. This report covers the React component library and the local Next.js reference site. A published Webflow installation requires the separate launch checks below.

## Build and integration checks

| Check | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run typecheck` | Passed |
| `npm test` | 28 tests passed across two files |
| `npm run build` | Passed; ten primary routes and article infrastructure compile |
| `npm run webflow:bundle` | Passed with actual Webflow CLI 2.7.1; client and server bundles generated for 27 declarations |

Tests exercise chosen-contact validation, malformed input, independent form IDs, missing transport, confirmed and rejected delivery, retained values after errors, upload limits, mobile menu focus, service preselection, server-rendered FAQ content, hidden unverified proof, empty CMS state, complete photo-free service details, missing optional images, schema accuracy, canonical-origin validation, social image URLs and JSON-LD escaping.

The Webflow validation uses an ignored local manifest because this CLI requires an ID for noninteractive bundling. It does not create or import a remote library. See [WEBFLOW.md](WEBFLOW.md).

## Route and responsive inspection

All ten primary routes were inspected: `/`, `/about`, `/services`, `/services/irrigation-systems`, `/services/drainage-solutions`, `/services/smart-upgrades`, `/faq`, `/blog`, `/contact` and `/estimate`. The isolated `/preview/article` and `/preview/components` routes were inspected as well.

The second-pass browser layout sweep covered **320, 375, 390, 430, 768, 1024, 1280 and 1440 pixels** across those twelve routes: 96 viewport/route combinations. No horizontal overflow, overflowing content element or duplicate H1 was found. Desktop, tablet and mobile screenshots were reviewed for image crops, navigation, readable copy, service directory hierarchy, FAQ controls and form usability.

The production HTTP audit checks status codes, unique titles and descriptions, H1 count, social metadata, duplicate IDs, visible placeholder text, matching FAQ schema, every internal destination and fragment, and referenced image responses. All ten routes returned 200; the eight unique referenced images loaded; no audit failures were found. Unpublished blog slugs return 404. Raw evidence: [route-audit.json](qa/route-audit.json). Re-run with `node scripts/audit-routes.mjs http://127.0.0.1:3001` while the production preview is running.

A final browser navigation pass through the primary routes and article preview produced no new console errors or warnings in the production build.

Browser interaction checks passed:

- Mobile navigation opens and closes, supports Escape, and returns focus to its trigger.
- Native FAQ disclosures respond to keyboard activation and touch-sized controls.
- The project viewer opens as a modal dialog; Escape closes it and restores trigger focus.
- The sticky service topic menu collapses on mobile, closes after a jump, and leaves the destination heading below the bar.
- Service links preselect the estimate request, visitors can change the selected service, and a new request resets it. Unknown URL values are ignored.
- Text-only Hero, Service Feature and Service Card variants remove empty photo frames. Nested content inherits readable dark-theme colors; designer link targets are preserved.
- Service Detail Blocks use a text-led heading and information-panel grid; optional photos add a separate media band and reserve no space when absent.
- Estimate validation identifies missing fields in text. Only the chosen contact method is required.
- The unconfigured estimate form clearly says delivery is unavailable and never claims a request was sent. Controlled test values were used; no lead was transmitted.

## Lighthouse lab results

Measured against a local **production** build using Lighthouse’s default mobile simulation and headless Chrome. These are single-run lab measurements, not field Core Web Vitals or a performance guarantee for Webflow hosting.

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Home | 95 | 100 | 100 | 66 | 3.0 s | 0 | 60 ms |
| Estimate | 96 | 100 | 100 | 66 | 2.6 s | 0 | 110 ms |

The only scored SEO failure is **intentional non-indexability**: the unconfigured preview sends noindex and disallows crawling. A real production origin has not been supplied. All other scored SEO checks passed. Do not remove this guard merely to increase a preview score.

Responsive AVIF photography, a lossless WebP logo, self-hosted preloaded fonts, reserved image space and lazy loading of lower-page imagery reduced the home page’s measured load cost. Home LCP remains above the 2.5-second good threshold in this throttled run. Measure and tune the actual published Webflow page before claiming good field Core Web Vitals; INP needs real interaction/field measurement and is not established by TBT.

The generated Lighthouse HTML reports remain local build artifacts and are ignored by Git. Recreate them from the commands documented in this report when validating a new build or published site.

Automated accessibility scores supplement the keyboard checks; they are not a complete WCAG conformance audit.

## Production checks still required

1. Authenticate the intended Webflow workspace, import/install the library and verify published SSR, slots, native page anchors and Shadow DOM styling.
2. Upload approved images/fonts, set Webflow Asset props, and check responsive asset delivery and font loading on the real domain.
3. Supply verified contact/business details, approve service copy and complete [CONTENT-TODO.md](CONTENT-TODO.md). Unverified reviews, contact data and unsupported claims remain omitted.
4. Connect native Webflow Forms or the documented backend, then verify an actual delivery, error recovery and any enabled photo storage. A successful mock response is not proof of email/CRM delivery.
5. Configure native Webflow canonical, metadata, schema, robots, sitemap and redirects using the approved domain. Keep the article preview excluded and publish only approved CMS articles.
6. Repeat mobile/desktop Lighthouse and keyboard checks on the published site, then monitor field LCP, CLS and INP. Physical iOS/Android devices and a screen reader were not available in this environment.
