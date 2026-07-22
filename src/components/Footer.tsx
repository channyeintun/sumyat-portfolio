import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-paper/20 bg-ink py-8 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="label text-paper/50">
          © {new Date().getFullYear()} {profile.name} — End of dossier
        </p>
        <p className="mono text-xs text-paper/40">
          Colophon: set in Fraunces, Archivo &amp; Space Mono.
        </p>
      </div>
    </footer>
  );
}
