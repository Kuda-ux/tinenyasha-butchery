import Image from "next/image";
import { waLink } from "@/lib/site";

export default function ProduceCard({ item }) {
  return (
    <a
      href={waLink(`Hello, I would like to order ${item.name} from Tinenyasha Butchery`)}
      target="_blank"
      rel="noopener"
      className="group relative aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-500 hover:-translate-y-1 block"
    >
      <Image
        src={item.img}
        alt={item.name}
        fill
        sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
        className="object-cover group-hover:scale-110 transition-transform duration-[900ms]"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute top-3 right-3 text-3xl drop-shadow-lg">{item.emoji}</div>
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="font-display font-extrabold text-white text-xl leading-tight drop-shadow-lg">
          {item.name}
        </h3>
        <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-white/90 uppercase tracking-wider">
          Order on WhatsApp <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}
