// Canonical origin for the site, resolved at build time. Every absolute URL
// (metadata, OpenGraph image, canonical, sitemap, robots, JSON-LD) is built
// from this, so it must be the real public origin in production.
//
// Order of preference:
//   1. NEXT_PUBLIC_SITE_URL — explicit override / custom domain
//   2. URL                  — Netlify: the site's canonical production URL
//   3. DEPLOY_PRIME_URL     — Netlify: current branch/preview deploy URL
//   4. VERCEL_URL           — Vercel (per-deploy host)
//   5. localhost            — local dev
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  process.env.DEPLOY_PRIME_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "http://localhost:3000";
