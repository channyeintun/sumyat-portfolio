import type { Metadata } from "next";
import { Fraunces, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

// Display: a high-contrast, characterful serif for editorial headlines.
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

// Body / UI: a sturdy grotesque with more personality than the usual suspects.
const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
});

// Technical annotations, reference codes, tabular figures.
const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const description =
  "The working dossier of Su Myat Noe, an IT Business Analyst specializing in fintech: requirements, BPMN workflow modeling, and data-driven process improvement.";

// Resolves relative OG/Twitter image URLs to absolute ones. Uses the custom
// domain when set, else the Vercel deployment URL, else localhost for dev.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Su Myat Noe — IT Business Analyst / A Working Dossier",
  description,
  openGraph: {
    title: "Su Myat Noe — IT Business Analyst",
    description,
    type: "website",
    images: [
      { url: "/brand/social-share-card.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Su Myat Noe — IT Business Analyst",
    description,
    images: ["/brand/social-share-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
