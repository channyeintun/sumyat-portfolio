# The Working Dossier — Brand Assets

A cohesive five-asset identity for **Su Myat Noe · IT Business Analyst**.
Editorial "blueprint / hydrographic chart" system: monochromatic ocean-blue,
Swiss-editorial, flat & printed. All five share one palette, stroke weight,
type, and margins.

This bundle is shaped to drop into the `sumyat-portfolio` Next.js repo.

## Install (copy into the repo at the same paths)

| From this bundle | Into the repo |
| --- | --- |
| `public/brand/*` | `public/brand/` |
| `src/app/icon.svg`, `icon.png`, `apple-icon.png` | `src/app/` |
| `design-sources/*` | reference only — do **not** ship (see bottom) |

Nothing here overwrites existing files. `src/app/favicon.ico` can stay; modern
browsers prefer the new `icon.svg`.

## Tokens (already match `src/app/globals.css`)

```
paper       #e7eef1     ink      #10242f     accent      #0f78ab
paper-2     #dae6ea     ink-2    #3a5563     accent-2    #0a567c
paper-3     #cadadf     stone    #6d8794     line #b7c9d0 / line-2 #c9d7dc
```
Type: **Fraunces** (display, high `opsz`) · **Space Mono** (labels, UPPER, wide
tracking) · **Archivo** (body). Already loaded via `next/font` in `layout.tsx`.

## Assets

| File (`public/brand/`) | Size | Use |
| --- | --- | --- |
| `social-share-card.png` | 1200×630 | OpenGraph / Twitter share image |
| `hero-texture.svg` / `.png` | 1600² tileable | background texture (has paper fill) |
| `hero-texture-lines.svg` | 1600² tileable | **lines only, transparent** — use for overlays |
| `monogram.svg` / `.png` | 512² | primary mark, accent-on-paper + construction |
| `monogram-navy.svg` / `.png` | 512² | 1-colour navy, **transparent** |
| `monogram-32.svg` / `favicon-32.png` | 32² | small/favicon |
| `favicon-512.png` | 512² | app icon raster |
| `glyph-bpmn` · `glyph-bars` · `glyph-pipeline` · `glyph-api` `.svg`/`.png` | 240² | case-file line-art (transparent) |
| `resume-letterhead.png` | 1588×360 (A4 band @2×) | résumé / PDF header |
| `card-contours.svg` | 460×630 | basin motif used on the share card |

## Wiring it in

**Favicon** — App Router auto-detects `src/app/icon.svg`, `icon.png`,
`apple-icon.png`. No code needed.

**Share card** — in `src/app/layout.tsx` `metadata`:
```ts
openGraph: {
  title: "Su Myat Noe — IT Business Analyst",
  images: [{ url: "/brand/social-share-card.png", width: 1200, height: 630 }],
},
twitter: { card: "summary_large_image", images: ["/brand/social-share-card.png"] },
```

**Hero background texture** — behind the masthead, at ~6%:
```css
.dossier-texture { position: relative; }
.dossier-texture::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background: url('/brand/hero-texture-lines.svg') repeat;
  background-size: 1600px 1600px;
  opacity: 0.06;
}
.dossier-texture > * { position: relative; z-index: 1; }
```

**Case-file glyphs** map 1:1 to the four projects in `src/data/profile.ts`:
```
financial-advisory-suite → glyph-bpmn      reporting-dashboards → glyph-bars
data-pipeline            → glyph-pipeline   api-test-framework   → glyph-api
```
Render inline (`next/image` or `<img src="/brand/glyph-bpmn.svg">`); they are
transparent 2px hairlines, so they sit on any paper/ink surface.

**Letterhead** — use `resume-letterhead.png` as the header band on a generated
PDF/print résumé, full page width, single ocean-blue hairline under it.

## design-sources/ (reference, not for the app)

The five editable `*.dc.html` masters + `support.js`. Open any in a browser to
see the exact composition, type sizes, and spacing. They are design tooling
files — keep them out of the Next build. Regenerate/raster from these if you
need other sizes.
