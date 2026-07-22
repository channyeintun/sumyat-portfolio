import {
  profile,
  experience,
  technicalSkills,
  softSkills,
  education,
  certifications,
  languages,
  faqs,
} from "@/data/profile";
import { siteUrl } from "@/lib/site";

/**
 * Schema.org JSON-LD. This is the single most impactful thing for both search
 * engines (rich results) and answer engines (ChatGPT, Perplexity, Google AI
 * Overviews) — they read these graphs to answer "who is Su Myat Noe?" directly.
 */
export default function StructuredData() {
  const personId = `${siteUrl}/#person`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    alternateName: profile.nickname,
    jobTitle: profile.title,
    description: profile.summary,
    url: siteUrl,
    image: `${siteUrl}/profile.webp`,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Da Nang",
      addressCountry: "VN",
    },
    sameAs: [profile.linkedinUrl],
    knowsAbout: [...technicalSkills, ...softSkills],
    knowsLanguage: languages.map((l) => l.name),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
    worksFor: experience
      .filter((job) => /now/i.test(job.period))
      .map((job) => ({ "@type": "Organization", name: job.company })),
    hasOccupation: {
      "@type": "Occupation",
      name: profile.title,
      occupationalCategory: "13-1111.00", // O*NET: Management Analysts
      skills: technicalSkills.join(", "),
    },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: `${profile.name} — ${profile.title}`,
    dateModified: new Date().toISOString(),
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": personId },
    about: { "@id": personId },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${profile.name} — IT Business Analyst`,
    inLanguage: "en",
    publisher: { "@id": personId },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": personId },
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [website, profilePage, person, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      // Schema is derived from our own static profile data — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
