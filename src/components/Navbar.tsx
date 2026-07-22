"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#top", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[var(--background)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold text-slate-900">
          Su<span className="text-teal-600">.</span>
        </a>

        <ul className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-1 transition hover:text-teal-600"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-teal-600 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-md md:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-slate-900" />
          <span className="h-0.5 w-6 bg-slate-900" />
          <span className="h-0.5 w-6 bg-slate-900" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-[var(--background)] px-6 py-4 text-sm font-medium text-slate-700 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
