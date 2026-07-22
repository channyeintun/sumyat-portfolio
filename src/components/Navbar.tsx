"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#experience", label: "Record", index: "01" },
  { href: "#projects", label: "Case Files", index: "02" },
  { href: "#skills", label: "Competencies", index: "03" },
  { href: "#education", label: "Credentials", index: "04" },
  { href: "#contact", label: "Correspond", index: "05" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-sm transition-colors ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-stretch justify-between px-5 sm:px-8">
        {/* Masthead identity */}
        <a
          href="#top"
          className="group flex items-center gap-3 border-r border-line py-3 pr-5 sm:pr-8"
        >
          <img
            src="/brand/monogram-navy.svg"
            alt=""
            aria-hidden
            className="h-8 w-8 shrink-0"
          />
          <span className="flex flex-col justify-center">
            <span className="font-display text-lg font-semibold leading-none tracking-tight text-ink">
              Su Myat Noe
            </span>
            <span className="label mt-1 text-stone">
              Business Analyst<span className="text-accent">.</span>
            </span>
          </span>
        </a>

        {/* Numbered index */}
        <nav className="hidden flex-1 items-stretch md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex flex-1 items-center justify-center gap-2 border-r border-line px-2 text-ink transition-colors hover:bg-paper-2"
            >
              <span className="mono text-[0.65rem] text-stone group-hover:text-accent">
                {link.index}
              </span>
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Contact call */}
        <a
          href={`mailto:${profile.email}`}
          className="hidden items-center gap-2 bg-ink px-6 text-paper transition-colors hover:bg-accent md:flex"
        >
          <span className="label">Enquire</span>
          <span aria-hidden>→</span>
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex items-center gap-2 py-4 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="label text-ink">{open ? "Close" : "Index"}</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`h-px w-6 bg-ink transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 border-b border-line-2 px-6 py-4 text-ink"
              onClick={() => setOpen(false)}
            >
              <span className="mono text-xs text-accent">{link.index}</span>
              <span className="text-base font-medium">{link.label}</span>
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 bg-ink px-6 py-4 text-paper"
            onClick={() => setOpen(false)}
          >
            <span className="mono text-xs text-accent">→</span>
            <span className="text-base font-medium">Enquire</span>
          </a>
        </nav>
      )}
    </header>
  );
}
