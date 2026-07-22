// Canonical origin for the site. Prefers an explicit custom domain, then the
// Vercel deployment URL, then localhost for dev. Used by metadata, sitemap,
// robots, and JSON-LD so every absolute URL stays consistent.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");
