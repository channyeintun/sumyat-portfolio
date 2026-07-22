import { profile } from "@/data/profile";

const PHOTO_SRC = "/profile.png";

/** Corner registration marks — the crop ticks of a print plate. */
function CropMark({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-4 w-4 ${className}`}
    >
      <span className="absolute inset-0 border-l border-t border-accent" />
    </span>
  );
}

export default function HeroPhoto() {
  return (
    <figure className="relative mx-auto w-full max-w-sm">
      {/* Registration / crop marks around the plate */}
      <CropMark className="-left-2 -top-2" />
      <CropMark className="-right-2 -top-2 rotate-90" />
      <CropMark className="-bottom-2 -left-2 -rotate-90" />
      <CropMark className="-bottom-2 -right-2 rotate-180" />

      {/* Plate */}
      <div className="group relative border border-ink bg-paper-2 p-2 shadow-[8px_8px_0_0_var(--ink)]">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-top grayscale-[0.35] transition-all duration-700 [filter:sepia(0.18)_contrast(1.05)] group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:[filter:sepia(0)]"
            style={{ backgroundImage: `url(${PHOTO_SRC})` }}
            role="img"
            aria-label={`${profile.name} — ${profile.title}`}
          />
          {/* Halftone-ish scanline overlay for a printed-plate feel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent 0 2px, rgba(26,22,17,0.5) 2px 3px)",
            }}
          />
        </div>
      </div>

      {/* Plate caption */}
      <figcaption className="mt-3 flex items-center justify-between border-t border-ink pt-2">
        <span className="label text-ink">Fig. 01 — Portrait</span>
        <span className="mono text-[0.65rem] text-stone">
          {profile.location}
        </span>
      </figcaption>
    </figure>
  );
}
