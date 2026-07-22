export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <p
        className={`text-sm font-semibold tracking-widest uppercase ${
          dark ? "text-cyan-400" : "text-teal-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-title mt-1 text-3xl font-black sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r ${
          dark ? "from-cyan-400 to-teal-400" : "from-cyan-500 to-teal-600"
        }`}
      />
    </div>
  );
}
