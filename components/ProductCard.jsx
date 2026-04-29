import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/site";

export default function ProductCard({ p, accent = "red" }) {
  const accents = {
    red: "from-brand-red to-brand-redDark",
    navy: "from-brand-navy to-brand-navyLight",
    green: "from-brand-green to-brand-greenAccent",
    gold: "from-brand-gold to-brand-redLight",
  };
  const tagBg = {
    red: "bg-brand-red",
    navy: "bg-brand-navy",
    green: "bg-brand-green",
    gold: "bg-brand-gold text-brand-navy",
  };
  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-2 border border-slate-100 h-full flex flex-col">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={p.img}
          alt={p.name}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-[900ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
        <div className={`absolute top-3 left-3 ${tagBg[accent]} text-white rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-card`}>
          {p.tag || p.name}
        </div>
        {p.badge ? (
          <div className="absolute top-3 right-3 bg-brand-gold text-brand-navy rounded-full px-3 py-1 text-[11px] font-extrabold uppercase shadow-card animate-float">
            {p.badge}
          </div>
        ) : null}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <h3 className="font-display text-2xl font-extrabold text-white drop-shadow-lg leading-tight">
            {p.name}
          </h3>
          {p.emoji ? <span className="text-3xl drop-shadow-lg">{p.emoji}</span> : null}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-slate-600 text-sm leading-relaxed flex-1">{p.desc}</p>
        <a
          href={waLink(`Hello, I would like to order ${p.name} from Tinenyasha Butchery`)}
          target="_blank"
          rel="noopener"
          className={`mt-5 inline-flex items-center justify-between rounded-2xl bg-gradient-to-r ${accents[accent]} text-white px-5 py-3 font-bold text-sm hover:shadow-soft hover:-translate-y-0.5 transition-all`}
        >
          Order on WhatsApp
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
