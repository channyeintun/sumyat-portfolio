/**
 * Scroll progress, rendered as a hydrographic depth sounding.
 *
 * A top rule inks across the masthead and a margin instrument drops a plumb
 * line as the dossier is read — both driven entirely by CSS scroll() timelines
 * (see globals.css). This component ships no client JavaScript; it is a static
 * server component whose motion is authored in stylesheet. Decorative, so the
 * whole apparatus is hidden from assistive tech.
 */
export default function ScrollProgress() {
  return (
    <>
      <div className="sd-progress" aria-hidden />

      <aside className="sounding" aria-hidden>
        <span className="sounding__title">Sounding</span>
        <div className="sounding__gauge">
          <span className="sounding__cap">00</span>
          <div className="sounding__track">
            <div className="sounding__fill" />
            <div className="sounding__bead" />
          </div>
          <span className="sounding__read" />
        </div>
      </aside>
    </>
  );
}
