import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-6 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
      Tailwind CSS.
    </footer>
  );
}
