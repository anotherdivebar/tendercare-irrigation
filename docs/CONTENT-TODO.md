# Client content required before launch

The page templates and component library are implemented. These items require client information or an actual Webflow site connection; no placeholder has been promoted into a business fact.

## Business identity and contact

- [ ] Confirm the legal/public business name and approved logo/master artwork.
- [ ] Supply the current phone. Reference `(316) 555-1234` is not usable. Truck imagery shows `788-5416`; confirm full number and ownership before use.
- [ ] Confirm that `info@tendercareirrigation.com` is owned and monitored.
- [ ] Verify `219 S Water St, Derby, KS 67037`, whether it is a real operating address, and whether customer visits are appropriate. Do not create a Wichita office.
- [ ] Confirm service hours, holiday availability, contact expectations and actual scheduling policy. No response-time promise is published.
- [ ] Confirm service-area boundaries and residential/commercial capabilities. The supplied source mentions Wichita, Derby, Andover, Maize, Haysville and Goddard.
- [ ] Supply the production domain, verified Google Business Profile URL and actual social profile URLs.

Edit `src/content/business.ts` for the preview; use the same approved data in Webflow global components and page schema. Null values are omitted from structured data.

## Services and commercial terms

- [ ] Approve the rewritten service and FAQ copy with the person responsible for field operations.
- [ ] Confirm which spring startup, in-season maintenance and winterization services are currently offered and how they should be described.
- [ ] Specifically verify the source’s **15% parts discount** and **72-hour repair turnaround**. These are not published in the rebuild.
- [ ] Verify backflow testing qualifications/registration and how reporting is handled. Do not imply certification from the source’s generic service menu.
- [ ] Confirm estimate policy, diagnostic fees if applicable, repair authorization process, scheduling, guarantees and warranties. No invented prices or guarantees are included.
- [ ] Check current municipal/utility rules before launch. Wichita references are linked where used; requirements are not generalized to all metro cities.

## Proof and photography

- [ ] Obtain real customer reviews, permission, original source links and approved attribution. Existing Alex Monroe, Taylor Reed, Jordan Avery, Morgan Blake, Casey Rowan and Riley Sutton quotations remain unverified and are not displayed.
- [ ] Confirm rights for supplied photographs, identifiable workers and properties, plus the logo from Webflow.
- [ ] Supply labeled drainage project photos and verified project captions. General irrigation work must not be relabeled as a drainage job.
- [ ] Supply matched before/after photos of the same viewpoint and documented work.
- [ ] Provide real company history, founding date, ownership, qualifications and team biographies if desired. None have been fabricated. The About page currently focuses on the service approach.
- [ ] Verify any manufacturer partnership before adding Hunter or other endorsement logos.

## Production integrations

- [ ] Authenticate the target Webflow workspace; import and install the library; test actual published Shadow DOM output.
- [ ] Upload approved photos and the supplied licensed font files to Webflow; set component Image props to Webflow Asset URLs. Preview `/media/...` paths are not automatically hosted by a DevLink import.
- [ ] Choose native Webflow Forms or implement the documented multipart endpoint. Connect recipient handling/CRM, spam protection, rate limits, data retention and delivery monitoring. Perform one controlled real-delivery test.
- [ ] Enable photo uploads only when the endpoint supports validation, storage and deletion. Currently off.
- [ ] Approve privacy text and any policy URL required for the actual form processing. No generic legal policy has been invented.
- [ ] Add the verified production origin, canonical/meta/social settings, favicon and native Webflow sitemap/robots configuration. Remove preview noindex only when the site is ready.
- [ ] Configure CMS fields and publish only client-approved articles with genuine author/date metadata.
- [ ] Add analytics/search verification only after the account and consent requirements are determined.

Hidden by default: customer reviews, ratings, before/after comparison, unverified contact details. Empty by design: published article list. No fake offices, statistics, price amounts, certifications, awards or response times are included.
