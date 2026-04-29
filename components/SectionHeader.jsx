import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, accent, subtitle, center = true }) {
  return (
    <Reveal className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 text-brand-red px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-brand-navy mt-4">
        {title} {accent ? <span className="text-gradient-fire">{accent}</span> : null}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
