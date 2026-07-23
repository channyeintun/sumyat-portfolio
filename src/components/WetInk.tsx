"use client";

import { useEffect, useRef, useState } from "react";

/**
 * WetInk — a moving "survey light" reflection across live text, drawn with the
 * experimental HTML-in-Canvas API (`CanvasRenderingContext2D.drawElementImage`).
 *
 * The real text renders normally. When `drawElementImage` is available, an
 * overlay canvas draws a pixel-identical, undistorted copy of that text and
 * sweeps a soft accent light through the glyphs (brighter on hover). No geometry
 * is warped.
 *
 * Safety: the copy is undistorted and pinned to the real text's box, so the real
 * text can stay underneath. It fades to opacity 0 only once the canvas actually
 * paints a frame (staying in the DOM for SEO/screen-readers); if the canvas
 * can't paint — unsupported browser, background tab, or the first frames before
 * a paint record exists — the real text simply shows and the light is absent.
 * Never blank, never doubled. Honors prefers-reduced-motion.
 *
 * Sizing note: `drawElementImage(el, dx, dy)` draws at the element's *device*
 * resolution; combined with a DPR transform that double-scales. We instead pass
 * an explicit destination box — `drawElementImage(el, 0, 0, w, h)` — so the copy
 * is exactly the wordmark's CSS size.
 */
export default function WetInk({
  children,
  period = 6.5,
  sweep = 1.6,
  className,
}: {
  children: React.ReactNode;
  /** Seconds between idle light passes. */
  period?: number;
  /** Seconds a single pass takes to cross the text. */
  sweep?: number;
  className?: string;
}) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const srcRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [painted, setPainted] = useState(false);

  // Support can only be detected client-side, after mount.
  useEffect(() => {
    try {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
      const ctx = document.createElement("canvas").getContext("2d");
      if (
        ctx &&
        typeof (ctx as unknown as { drawElementImage?: unknown })
          .drawElementImage === "function"
      ) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setEnabled(true);
      }
    } catch {
      /* stay plain */
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const src = srcRef.current;
    const ctx = canvas?.getContext("2d") as
      | (CanvasRenderingContext2D & {
          drawElementImage: (
            el: Element,
            dx: number,
            dy: number,
            dw: number,
            dh: number,
          ) => DOMMatrix;
        })
      | null;
    if (!root || !canvas || !src || !ctx) return;

    canvas.setAttribute("layoutsubtree", "");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 1;
    let h = 1;
    const size = () => {
      const r = root.getBoundingClientRect();
      w = Math.max(1, r.width);
      h = Math.max(1, r.height);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(root);

    let raf = 0;
    let inView = true;
    let hovering = false;
    let misses = 0;
    let drew = false;
    const t0 = performance.now();

    const onEnter = () => {
      hovering = true;
    };
    const onLeave = () => {
      hovering = false;
    };
    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointerleave", onLeave);

    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        if (inView && !raf) raf = requestAnimationFrame(frame);
      },
      { threshold: 0 },
    );

    function frame() {
      raf = 0;
      if (!inView) return;
      const now = performance.now();
      try {
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx!.clearRect(0, 0, w, h);
        // Explicit destination box → exact CSS size (no DPR double-scaling).
        ctx!.drawElementImage(src!, 0, 0, w, h);
        if (!drew) setPainted(true);
        drew = true;

        const cycle = hovering ? sweep + 0.5 : period;
        const phase = ((now - t0) / 1000) % cycle;
        if (phase < sweep) {
          const p = phase / sweep; // 0 → 1 across the words
          const fade = Math.sin(Math.PI * p); // ease in and out at the edges
          const a = (hovering ? 0.9 : 0.55) * fade;
          const band = Math.max(60, w * 0.22);
          const cx = p * (w + band * 2) - band;
          const g = ctx!.createLinearGradient(cx - band, 0, cx + band, 0);
          g.addColorStop(0, "rgba(15,120,171,0)");
          g.addColorStop(0.4, `rgba(15,120,171,${a * 0.7})`);
          g.addColorStop(0.5, `rgba(233,244,249,${a})`);
          g.addColorStop(0.6, `rgba(15,120,171,${a * 0.7})`);
          g.addColorStop(1, "rgba(15,120,171,0)");
          ctx!.globalCompositeOperation = "source-atop"; // light only the ink
          ctx!.fillStyle = g;
          ctx!.fillRect(0, 0, w, h);
          ctx!.globalCompositeOperation = "source-over";
        }
      } catch {
        // "No cached paint record" for the first frames. If it never resolves
        // while on screen, drop the overlay quietly — the real text stays.
        if (!drew && ++misses > 120) {
          setEnabled(false);
          return;
        }
      }
      raf = requestAnimationFrame(frame);
    }

    io.observe(canvas);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, period, sweep]);

  return (
    <span
      ref={rootRef}
      className={className}
      style={{ position: "relative", display: "inline-block" }}
    >
      <span style={{ opacity: painted ? 0 : 1 }}>{children}</span>
      {enabled && (
        <canvas
          ref={canvasRef}
          aria-hidden
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          <span
            ref={srcRef}
            aria-hidden
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {children}
          </span>
        </canvas>
      )}
    </span>
  );
}
