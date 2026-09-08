# Webflow handoff

## Architecture and ownership

This is a React + TypeScript **Code Component import library**, with a Next.js reference environment. It is not an exported Webflow project and does not require converting Next.js pages into Webflow later.

| Git / code | Native Webflow |
| --- | --- |
| Typed React sections, their behavior, design tokens, styles and declarations | Page composition and section order |
| Stable component filenames and prop contracts | Instance text, images, links, variants and slots |
| Form transport adapter and validation logic | Native Forms, or configuring the approved external form workflow |
| Reference page copy and schema helpers | Production page SEO, canonical URLs, custom head JSON-LD |
| Tests, local preview and bundle validation | CMS collections, CMS item publishing and editorial updates |
| Integration code and release history | Domain, hosting, sitemap, redirects, analytics and publish controls |

`src/components/webflow` contains the Webflow-facing components; 27 declaration files are registered for import. `src/components/ui` contains internal primitives; none are registered independently. `src/components/preview` composes reference content for Next.js only and is not imported. Shared components do not import Next.js routing, image or server APIs. No React Server Component is part of the Webflow library.

## Current documentation and versions

Reviewed September 8, 2026:

- [Import quick start](https://developers.webflow.com/code-components/importing/quick-start)
- [Component declarations](https://developers.webflow.com/code-components/define-code-component)
- [Prop types](https://developers.webflow.com/code-components/reference/prop-types)
- [Slots](https://developers.webflow.com/code-components/reference/prop-types/slot)
- [Component architecture](https://developers.webflow.com/code-components/component-architecture)
- [Styling and Shadow DOM](https://developers.webflow.com/code-components/styling-components)
- [Bundling and import](https://developers.webflow.com/code-components/bundling-and-import)
- [CLI configuration](https://developers.webflow.com/cli/configuration)

Installed: `@webflow/webflow-cli` **2.7.1**, `@webflow/react` **2.3.0**, `@webflow/data-types` **2.3.0**. Dependencies are locked in `package-lock.json`. Node **22.13+** is required by the current CLI.

Use `declareComponent` from `@webflow/react` and constructors from `@webflow/data-types`. The workflow is **`webflow devlink import`**. Old `webflow library share` and DevLink export/sync examples are not this project’s integration path.

## Install and preview

```sh
npm ci
npm run dev
```

Preview: `http://127.0.0.1:3000`. All production-facing sections can be seen through the primary routes. `/preview/article` demonstrates the article layout without inventing a published article; it is always noindex.

This particular workstation has its source on C: and build/dependency storage on F: due to insufficient C: space. See the README and `scripts/sync-preview.ps1`. Other machines do not need this arrangement.

## Configure and validate the library

`webflow.json` declares the library name, `./src/components/webflow/**/*.webflow.tsx` glob and `src/webflow/globals.ts`. The globals file imports shared tokens and component styles. CSS uses the `tc-` prefix and supports `:host` so each Webflow component can render independently.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run webflow:bundle
```

The current CLI requires a library ID during noninteractive local bundling. `scripts/bundle-webflow.mjs` therefore writes an ignored **local-only** `.webflow.local.json` with a validation identifier and runs `webflow devlink bundle`. It never writes that identifier to `webflow.json`, uploads anything, or changes a remote library. Never use the local manifest with `devlink import`.

Client and server bundles are generated in `dist/Client` and `dist/Server`. The local `public-path` is for inspecting that artifact only; DevLink import supplies the actual hosted bundle locations. A successful local bundle verifies compilation and declaration compatibility. It does not prove the target Webflow workspace is authenticated or that a designer has installed the library.

## Authenticate and import

In a developer terminal, from the source repository:

```sh
npm run webflow:import
```

The CLI checks workspace authentication and opens the workspace authorization flow if needed. Select the intended workspace, complete authorization, review the component changes and confirm the import. Workspace credentials belong in the CLI’s documented environment/credential storage, never in Git or browser-visible component code.

On the first actual import, the CLI creates the library and writes its real ID to `webflow.json`. Commit that nonsecret ID so later imports update the same library. Do not invent an ID or copy one from an unrelated workspace.

Then open the intended Webflow site, install the shared library from the **Libraries** panel, and place its components from the **Components** panel. Configure props and slots in the Properties panel. Current account/plan eligibility is listed in the official quick start; the target account must support Code Components.

For later CI, use the documented `webflow devlink import --no-input` only after storing workspace authentication securely and reviewing component additions/removals. Never import a library with an accidentally empty component glob. Compare the declaration file list before every release.

## Component inventory

| Group | Components | Main composition points |
| --- | --- | --- |
| Navigation | Header, NavLink, SectionNav, Breadcrumbs, Footer | Header navigation links; SectionNav topic links; Footer navigation and service links |
| Content | Hero, TrustBar, ContentSection, FAQAccordion, FAQItem, BlogGrid, BlogCard, BlogArticle | ContentSection content; FAQ questions; blog cards; article body, table of contents, related articles, service CTA |
| Services | ServiceCategoryGrid, ServiceCard, ServiceFeatureSection, ServiceDetailBlock, ProcessSection | Category cards; feature supporting content; service detail content |
| Media | ProjectGallery, ProjectImage, BeforeAfterGallery | Gallery images; before/after image inputs |
| Social Proof | TestimonialSection, ReviewCard | Verified review cards; visibility/verification gates |
| Conversion | CTASection, ContactSection, ServiceAreaSection | Contact form slot |
| Forms | EstimateForm | Editable copy and optional photo upload UI; code-owned endpoint |

Mobile navigation is contained in Header so it shares one React root and one list of links. Header also owns the Services disclosure, including the overview, irrigation, drainage, and smart/seasonal destinations. Configure those four labels and links in the **Services menu** property group, then use the **Other navigation links** slot for About, Resources, FAQ, and Contact. A second independently imported MobileNav would require cross-root coordination and duplicate content. The internal Button, Container, Heading, Eyebrow, Section, Arrow and Photo helpers are intentionally not exposed.

## Editing content and appearance

Declarations provide human-readable names, groups, help text and defaults. Use text fields for copy, Image props for assets, Link props for destinations, Visibility props for optional regions and Variant props for intentional layout/theme choices. Image values are `{src, alt}` and Link values are `{href, target}`; the React interfaces match these current Webflow types.

For repeated collections, use **Slots**, not a JSON string or unsupported array prop. Insert Service Cards into a Service Category Grid, FAQ Items into an FAQ Accordion, and Project Images into a Project Gallery. Feature and article slots also accept native Webflow content. Text lists such as service details and communities use one item per line; these fields are described accordingly.

Service Detail Block is text-led so its heading, direct answer and information panels form a complete layout without media. Its optional **Image** prop adds a full-width supporting photo band between the introduction and details; leaving the prop empty does not reserve a blank photo area.

Theme variants: light, cream and dark. Image/text alignment: image-left or image-right. Hero layout: split or compact. FAQ layout: split or full. Keep the Hero to one instance per page because it owns the H1. BlogArticle owns its own H1 and replaces the normal Hero on articles.

Section themes publish inherited `--tc-text`, `--tc-subtle`, `--tc-link` and `--tc-focus` variables so independently imported children keep readable colors across Shadow DOM boundaries. Surface components such as forms reset these variables for their own light background. `/preview/components` is a noindex check of dark nested content and missing-photo layouts; it is not a public content page.

Nav Link can identify the current page/category from the browser URL without a Next.js dependency. Disable **Identify current page automatically** to control it manually. The initial server snapshot stays stable; URL-derived state is applied after hydration. Ordinary page navigation and browser back/forward are supported; a custom client router must emit a navigation event or supply the manual current-page prop.

For long service pages, add **Section Navigation** immediately after the hero. Put Nav Links pointing to native section wrapper IDs into its Topic links slot. On mobile it becomes a compact disclosure with Escape and selection-close behavior. To make it sticky in Webflow, put the component in a **native wrapper** with `position: sticky`, `top: 0`, and `z-index: 15`. The wrapper must be a child of the page content, not a short hero container; avoid overflow clipping on ancestors. Apply `scroll-padding-top: 96px` to the page scroll container so anchor destinations remain below the bar. Sticky positioning belongs on that native wrapper because an inner sticky element cannot escape its short Shadow DOM host.

## Remembering estimate selections

Estimate Form supports a designer-editable **Default service** and **Remember service link selection** toggle. Supported links include `/estimate?service=sprinkler-repair` and `/estimate?service=maintenance-plans`. The full service ID list is in `src/lib/estimate-context.ts`.

The form only accepts those known values. A query selection takes precedence over the default prop; the visitor can change it. Starting another request clears the previous selection and validation state. No names, addresses, phone numbers, email addresses or other personal fields are read from URLs or persisted in localStorage. The same implementation runs in Webflow and the preview, with no shared React context required.

The selected service is included with the normal multipart form fields. Service preselection does not book an appointment or bypass the unconfigured-endpoint guard. Native Webflow Forms need their own equivalent prefill integration if they replace Estimate Form.

`src/styles/tokens.css` defines color, spacing, typography, container, radius, shadow and transition tokens. The `--tc-*` properties can be supplied on a native page ancestor/host for a site-level override. Copy exact custom-property names when connecting Webflow Variables. Tokens have local defaults; sections do not depend on arbitrary page classes or global IDs.

## Fonts and media

Upload `public/fonts/manrope-latin.woff2` and `public/fonts/dm-sans-latin.woff2` in Webflow’s font settings with family names **Manrope Variable** and **DM Sans Variable** (or change the corresponding tokens to the uploaded names). Variable weights are used. Font licenses are included in `docs/licenses`.

Webflow page fonts must be installed at the document level: a font-face rule inside a component’s Shadow DOM is not a substitute for site-level font loading. Keep `font-display: swap`, preload only the essential faces, and avoid loading these fonts again from a third-party CDN.

`public/media` contains responsive AVIF and WebP derivatives of the supplied photography. The preview uses AVIF at 480, 800, 1280 and 1600 pixels for its selected photos, with WebP available for social images and asset handoff. Original files remain in the F: root. Upload the approved derivatives to Webflow Assets and use the Image picker; Next’s `/media` paths are preview-only and are not uploaded automatically with the code bundle. There are no hard-coded local image URLs in the importable section defaults. Confirm responsive image delivery on the published Webflow site: its asset handling is separate from the preview’s explicit `srcSet` values.

Photo helpers support explicit dimensions and responsive `srcSet` for code consumers. Webflow’s basic Image prop supplies `src`/`alt`; choose an appropriately sized optimized asset. Below-fold images lazy-load, and Hero images load eagerly. Every image container has reserved geometry to avoid layout shifts.

## Page composition recipes

Use a native Webflow `main` landmark between the shared Header and Footer. Create a native skip link targeting that main wrapper. Do not insert another H1 into an introductory slot.

| Route | Compose |
| --- | --- |
| `/` | Hero, TrustBar, ServiceCategoryGrid with 3 ServiceCards, ServiceFeatureSection, ProcessSection, ProjectGallery, ServiceAreaSection, FAQAccordion, CTASection |
| `/about` | Breadcrumbs, compact Hero, split ContentSection, ServiceFeatureSection, ProcessSection, ServiceAreaSection, CTASection |
| `/services` | Breadcrumbs, compact Hero, 3 alternating ServiceFeatureSections with native service-directory links, CTASection |
| `/services/irrigation-systems` | Breadcrumbs, compact Hero, SectionNav in a sticky native wrapper, 3 ServiceDetailBlocks, FAQAccordion, CTASection |
| `/services/drainage-solutions` | Breadcrumbs, compact Hero, SectionNav in a sticky native wrapper, 3 ServiceDetailBlocks, dark ContentSection, FAQAccordion, CTASection |
| `/services/smart-upgrades` | Breadcrumbs, compact Hero, SectionNav in a sticky native wrapper, 3 ServiceDetailBlocks, FAQAccordion, CTASection |
| `/faq` | Breadcrumbs, compact Hero, native category links, 9 FAQAccordion groups with FAQItems, CTASection |
| `/blog` | Breadcrumbs, compact Hero, BlogGrid/CMS collection list, related FAQ links, CTASection |
| `/contact` | Breadcrumbs, compact Hero, ContactSection with EstimateForm or native form slot, ServiceAreaSection |
| `/estimate` | Native two-column introduction with one H1 and EstimateForm; use the preview as the spacing/content reference. Alternatively use a compact Hero followed by ContactSection with the form slot. |

Put fragment IDs such as `sprinkler-repair` and FAQ category IDs on **native Webflow wrappers outside the component Shadow DOM**. Browser URL fragments must target document-visible anchors. Do not expect a fragment to find an ID inside an isolated component. Preserve the IDs used by the reference internal links in `src/content/faqs.ts` and `src/content/services.ts`.

Create one site-wide Header and Footer composition as native Webflow components so approved NAP and navigation are updated consistently across pages.

## Form boundary

Choose one of these production implementations:

1. **Native Webflow Forms:** Place a native Form inside ContactSection or ContentSection’s slot. Style the native fields and use Webflow’s form delivery, spam protection and success/error handling. Do not nest it inside EstimateForm. A form rendered by React in Shadow DOM is not automatically a native Webflow Form.
2. **Code Component form:** Set `src/webflow/integration.ts` to an approved HTTPS endpoint, then import the updated library. For Next.js preview only, use `NEXT_PUBLIC_ESTIMATE_ENDPOINT`. The endpoint is intentionally not a designer-editable URL so a routine content edit cannot redirect lead data. It contains no API key.

The transport contract is multipart `POST`: `name`, `phone`, `email`, `property`, `service`, `description`, `contactMethod`, plus repeated `photos` fields when uploads are enabled. Return HTTP 2xx with JSON `{ "success": true }` **only after accepting the request for reliable delivery/storage**. A non-2xx response or missing explicit confirmation produces an error and preserves the entered values. An empty endpoint sends nothing and displays a clear preview notice.

Only the selected contact method is required. The UI accepts up to three JPEG/PNG/WebP photos, 5 MB each, when photo uploads are enabled. The backend must independently validate all fields, MIME/content and file size, protect against spam/rate abuse, configure exact CORS origins, and handle storage retention. Client-side validation is a usability feature, not a security boundary. Enable uploads only after that backend is tested. No leads or photos are stored in browser localStorage.

## CMS article infrastructure

Create an Articles collection with: name/title, slug, excerpt, category, author reference/name, publish date, optional updated date, hero image and alt text, rich text content, related-article references, related-service reference and publication status. Add SEO title/description and social-image fields if editors need overrides.

Connect published records to BlogCard props. Use BlogArticle on the collection template. Bind title/excerpt/category/image and genuine author/date fields; put a native Rich Text element in the Article content slot. Add a table-of-contents slot only when it has real matching native wrapper/heading anchors. Related cards and the service CTA are separate slots.

`src/content/posts.ts` is the typed preview data adapter and is intentionally empty. It supports approved records and dynamic `/blog/[slug]` rendering, but no fabricated posts are published. For Webflow, the native collection replaces this local adapter. `/preview/article` is a design tool, excluded from the production sitemap and always noindex.

## SEO and AEO handoff

The Next.js preview generates unique metadata and answer-matched FAQ JSON-LD. These are **not automatically transferred by importing a visual component**. Copy the approved page metadata to Webflow’s SEO/Open Graph settings and use the verified production origin for canonicals. The page audit lists all titles and descriptions in `docs/qa/route-audit.json`.

Add Organization/ProfessionalService and WebSite data once in site custom head code. Add Service, BreadcrumbList, FAQPage and BlogPosting only on the corresponding pages, using the actual visible content. `src/lib/seo.tsx` is the reference implementation. Omit unverified phone, address, hours, prices, ratings, reviews and credentials. The private preview has no canonical URL until `NEXT_PUBLIC_SITE_URL` is set to a verified HTTPS origin, and remains noindex. Do not publish localhost canonicals.

Webflow owns production robots/sitemap and redirects. Exclude design previews and unpublished CMS items. Keep the deliberate internal links, answer-first headings, a single H1 and semantic heading sequence. Publish testing must inspect both visible content and server-rendered HTML because code components run within Shadow DOM. Do not disable SSR on these content sections. FAQ markup does not guarantee rich results or AI citations.

## Updating safely

1. Edit the React implementation and corresponding declaration in Git. Preserve prop keys and filenames.
2. Run lint, typecheck, tests, Next production build and the actual DevLink local bundle.
3. Inspect affected routes and isolated variants, including 320px mobile, keyboard behavior and missing optional content.
4. Review the import’s change list, then import to the intended workspace. Install/update the library in a staging Webflow site and inspect published output.
5. Update the production site after the staging check. Keep the previous Git commit for rollback and re-import that version if needed.

**Declaration filenames are component identities.** Renaming `Hero.webflow.tsx` removes the old component and creates a different one. A visual label may be changed without renaming the file. Treat removed props or changed meanings as migrations. Do not change a text prop into a different data type in place without testing existing instances.

## Adding a component

Create a typed, ordinary React component in `src/components/webflow`, add responsive styles with independent `tc-` selectors, and add a colocated `.webflow.tsx` file:

```tsx
import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { NewSection } from './NewSection';

export default declareComponent(NewSection, {
  name: 'New section',
  group: 'Content',
  description: 'Explain the section’s editorial purpose.',
  props: {
    heading: props.Text({ name: 'Heading', group: 'Content', defaultValue: 'A useful heading' }),
    children: props.Slot({ name: 'Supporting content', group: 'Composition' }),
  },
  options: { ssr: true, applyTagSelectors: false },
});
```

Expose the section a designer actually places, not every internal helper. Do not depend on parent page classes, global DOM IDs, a Next router, shared React Context between slots, browser-only rendering or an external animation library for a simple effect.

## Known integration limits

- Each imported component has an isolated Shadow DOM and React root. Slot children cannot be assumed to share React Context or parent descendant selectors.
- Set fonts at the document level. Use CSS variables for cross-boundary theming.
- Style native elements placed in slots with native Webflow classes; internal shadow styles do not become global Webflow classes.
- Keep fragment anchors in the document, outside shadow roots.
- No live Webflow workspace was authenticated during this task. Local client/server bundling succeeded; installation and published Webflow QA remain a production handoff step.
- No live lead-delivery service, third-party analytics, new reviews, or published articles have been created.
