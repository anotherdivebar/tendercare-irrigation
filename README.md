# TenderCare Irrigation — Webflow component library

React + TypeScript website sections for **Webflow Code Components / DevLink import**. Git owns the custom components. Webflow owns page composition, CMS content, page settings and the production publishing workflow. Next.js is the reference preview, not the production CMS.

The project includes all 10 requested primary pages, three detailed service categories, an unpublished article template, 27 registered components, responsive local photography, an editable design system, and accessible forms and interactions. Service links carry their selection into the estimate form; long service pages have compact sticky topic navigation.

## Start

Requires Node 22.13+.

```sh
npm ci
npm run dev
```

Visit `http://127.0.0.1:3000`. Article template: `/preview/article` (noindex, never listed as a publication).

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run webflow:bundle
```

## This workstation

The C: drive had approximately 200 MB free during implementation. Dependencies and runtime output were therefore placed in `F:\TenderCare Irrigation\.build`. The Git source is still this C: workspace. `node_modules` is a local, ignored junction; a disposable preview copy runs from F:. Do not edit that copy.

After source edits, run `./scripts/sync-preview.ps1`, then run preview/build commands in `F:\TenderCare Irrigation\.build\preview`. On a machine with sufficient disk space, a normal clone and `npm ci` works without this arrangement. Webpack is selected explicitly for compatibility with this Windows development setup.

## Handoff

- [Webflow setup, composition and ownership](docs/WEBFLOW.md)
- [Client content and launch requirements](docs/CONTENT-TODO.md)
- [Reference site audit and design decisions](docs/SITE-AUDIT.md)
- [Verification results](docs/QA.md)

The preview is deliberately **noindex** until `NEXT_PUBLIC_SITE_URL` is a verified HTTPS origin. The estimate form never pretends to send: delivery requires a real endpoint, or replacement with a native Webflow Form in the provided slot. Contact information, prices, customer quotes and company credentials are not invented.
