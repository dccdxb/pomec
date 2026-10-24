# Pomec Technology

An eight-page responsive website for Pomec Technology, a property and building facility management business based on Hennur Bagalur Road, Bangalore.

Built with React 19, TypeScript, TanStack Start and Netlify. Custom CSS provides a teal, ivory and lime visual identity. The logo is an original SVG building monogram. Free Unsplash architecture photographs are stored locally and delivered through Netlify Image CDN; they are illustrative, not a portfolio of managed properties.

## Local development

Use Node 22.13+ or Node 24. Install dependencies with `pnpm install`, then run `netlify dev --port 8889`. The Netlify development proxy supports platform features; form delivery requires a deployed site with form detection enabled. The deployment platform runs build validation automatically.

## Content and enquiries

The eight routes are Home, Services, AMC, Price, Contact, About, Blog and FAQ. Content and shared layouts live in `src/components/Pomec.tsx`. Page-specific search metadata and JSON-LD live in `src/data/seo.ts`. Enquiries use Netlify Forms with a matching static registration in `public/__forms.html`. Form detection is activated by the repository feature marker. Email notifications can be configured in the site's Forms settings; form acceptance does not establish notification delivery.

Pricing is quotation-based because no verified rates were supplied. Service scope, availability and AMC coverage require confirmation. The map link identifies the supplied road area rather than an unverified exact office location. Official outbound resources and internal links are included; inbound backlinks require external publishers. Search and AI visibility are supported through semantic server-rendered content, canonical URLs, structured data, sitemap, robots.txt and llms.txt, without ranking guarantees.

Canonical URLs use the supplied Netlify domain. Update `src/data/seo.ts`, `public/sitemap.xml`, `public/robots.txt` and `public/llms.txt` when connecting a custom domain.
