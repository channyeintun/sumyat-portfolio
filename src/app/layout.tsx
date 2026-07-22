import type { Metadata } from "next";
import { Fraunces, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import StructuredData from "@/components/StructuredData";

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

const title = "Su Myat Noe — IT Business Analyst";
const description =
  "The working dossier of Su Myat Noe, an IT Business Analyst specializing in fintech: requirements, BPMN workflow modeling, and data-driven process improvement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${title} / A Working Dossier`,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: "Su Myat Noe — Working Dossier",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "Business Analysis",
  keywords: [
    "Su Myat Noe",
    "IT Business Analyst",
    "Business Analyst",
    "Business System Analyst",
    "fintech business analyst",
    "requirements elicitation",
    "BPMN",
    "user stories",
    "Agile Scrum",
    "Power BI",
    "SQL",
    "Python Pandas",
    "data analysis",
    "remote business analyst",
    "Da Nang Vietnam",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    title,
    description,
    url: siteUrl,
    siteName: "Su Myat Noe — Working Dossier",
    locale: "en_US",
    firstName: "Su Myat",
    lastName: "Noe",
    username: "sumyatnoe99",
    images: [
      {
        url: "/brand/social-share-card.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${title} — Working Dossier`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
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
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
