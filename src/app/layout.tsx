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

export const metadata: Metadata = {
  title: "Su Myat Noe — IT Business Analyst / A Working Dossier",
  description:
    "The working dossier of Su Myat Noe, an IT Business Analyst specializing in fintech: requirements, BPMN workflow modeling, and data-driven process improvement.",
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
