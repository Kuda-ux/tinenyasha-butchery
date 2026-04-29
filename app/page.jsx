import Image from "next/image";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Truck,
  Award,
  Leaf,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Star,
  Beef,
  Drumstick,
  Wheat,
  Snowflake,
  Flame,
  Heart,
  Quote,
} from "lucide-react";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import ProduceCard from "@/components/ProduceCard";
import { SITE, waLink, telLink } from "@/lib/site";
import { meatProducts, produceItems, cattleGallery } from "@/lib/products";

export default function Home() {
  return (
    <main id="top" className="bg-white text-slate-800">
      <Header />

      {/* ============== HERO ============== */}
      <section className="relative min-h-[100svh] hero-bg flex items-center pt-24 pb-12 overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-red/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-x relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase ring-1 ring-white/20">
                <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                Marondera • Zimbabwe
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display font-black mt-5 text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                Premium Meat.
                <br />
                <span className="text-gradient-fire drop-shadow">Farm-Fresh</span>{" "}
                Goodness.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
                From our farm to your kitchen — hand-cut <strong>beef, pork, goat, chicken &amp; fish</strong>,
                plus crisp vegetables, eggs and produce. Same-day delivery across Marondera.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp text-sm sm:text-base px-7 py-4 shadow-glow shine-overlay"
                >
                  Order on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#meat"
                  className="btn bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/30 backdrop-blur text-sm sm:text-base px-7 py-4"
                >
                  Browse Products
                </a>
                <a
                  href={telLink(SITE.phones[0])}
                  className="btn bg-brand-gold text-brand-navy hover:bg-brand-goldDark text-sm sm:text-base px-6 py-4 font-extrabold"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </Reveal>

            {/* Quick contact strip */}
            <Reveal delay={480}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto lg:mx-0">
                {[
                  { icon: Truck, label: "Same-Day Delivery", sub: "Marondera" },
                  { icon: ShieldCheck, label: "Hygienic", sub: "Fresh & Safe" },
                  { icon: Leaf, label: "Farm Fresh", sub: "Direct Source" },
                  { icon: Award, label: "Premium Quality", sub: "Trusted Cuts" },
                ].map((it, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur ring-1 ring-white/20 rounded-2xl p-3 sm:p-4"
                  >
                    <it.icon className="h-5 w-5 text-brand-gold" />
                    <div className="mt-2 text-sm font-bold text-white">{it.label}</div>
                    <div className="text-[11px] text-white/70">{it.sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Hero card stack */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <Reveal delay={420}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-44 h-44 bg-brand-gold rounded-3xl rotate-6 opacity-90" />
                <div className="absolute -bottom-8 -right-6 w-52 h-52 bg-brand-red rounded-3xl -rotate-6 opacity-90" />
                <div className="relative rounded-3xl overflow-hidden ring-4 ring-white/30 shadow-2xl">
                  <Image
                    src="/img/hero-bull-2.jpg"
                    alt="Premium Brahman bull"
                    width={720}
                    height={900}
                    sizes="(max-width:1024px) 0px, 40vw"
                    className="w-full h-[520px] object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center gap-3 shadow-card">
                    <div className="bg-fire-gradient text-white rounded-full w-12 h-12 flex items-center justify-center font-display text-lg font-extrabold">
                      A+
                    </div>
                    <div>
                      <div className="font-display text-lg font-extrabold text-brand-navy leading-none">
                        Grade A Beef
                      </div>
                      <div className="text-xs text-slate-500 mt-1">Farm-raised • Hand-selected</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
          <ChevronDown className="h-7 w-7" />
        </div>
      </section>

      {/* ============== MARQUEE STRIP ============== */}
      <div className="bg-brand-navy text-white py-3 sm:py-4 overflow-hidden border-y-4 border-brand-gold">
        <div className="flex gap-6 sm:gap-12 whitespace-nowrap animate-marquee w-max">
          {[...Array(2)].map((_, k) =>
            [
              "🥩 Premium Beef",
              "🐖 Whole Pork",
              "🐐 Goat Meat",
              "🍗 Fresh Chicken",
              "🐟 Tilapia & Bream",
              "🌭 House-Made Boerewors",
              "🥚 Farm Eggs",
              "🥬 Fresh Vegetables",
              "🚚 Same-Day Delivery",
              "📍 59A Carrington Ave, Marondera",
            ].map((t, i) => (
              <span
                key={`${k}-${i}`}
                className="font-display text-sm sm:text-lg font-bold flex items-center gap-2 sm:gap-3"
              >
                {t}
                <span className="text-brand-gold">•</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ============== ABOUT ============== */}
      <section id="about" className="py-20 lg:py-28 pattern-dots relative">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 text-brand-green px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                <Heart className="h-3.5 w-3.5" /> Our Story
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy mt-4 leading-tight">
                Raised with care, cut with{" "}
                <span className="text-gradient-fire">pride</span>.
              </h2>
              <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
                <strong className="text-brand-navy">Tinenyasha Butchery &amp; Farm-Fresh
                Produces</strong> is a family-run butchery and farm in Marondera, Zimbabwe.
                We raise our own cattle, source the freshest produce from local farms,
                and deliver straight to your door — fresh, hygienic and on time.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: "10+", l: "Years Serving" },
                  { v: "9", l: "Meat Categories" },
                  { v: "100%", l: "Farm-Fresh" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white shadow-card p-4 text-center border border-slate-100"
                  >
                    <div className="font-display text-3xl font-extrabold text-gradient-fire">
                      {s.v}
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="btn-whatsapp mt-8 px-6 py-3.5 shine-overlay"
              >
                Get Your Order Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-56 rounded-3xl overflow-hidden shadow-card">
                    <Image
                      src="/img/farm-cow.jpg"
                      alt="Free-range cattle"
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-44 rounded-3xl overflow-hidden shadow-card">
                    <Image
                      src="/img/farm-cattle.jpg"
                      alt="Brahman cattle"
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-44 rounded-3xl overflow-hidden shadow-card">
                    <Image
                      src="/img/v-tomatoes.jpg"
                      alt="Fresh tomatoes"
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-56 rounded-3xl overflow-hidden shadow-card">
                    <Image
                      src="/img/p-sausages.jpg"
                      alt="Fresh boerewors sausages"
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:flex bg-fire-gradient text-white rounded-2xl px-5 py-4 shadow-soft items-center gap-3 animate-float">
                <Sparkles className="h-7 w-7" />
                <div>
                  <div className="font-display font-extrabold text-xl leading-none">
                    Farm-to-Table
                  </div>
                  <div className="text-xs text-white/90">Always fresh, always local</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== MEAT PRODUCTS ============== */}
      <section
        id="meat"
        className="py-20 lg:py-28 bg-gradient-to-b from-brand-cream via-white to-white relative overflow-hidden"
      >
        <div className="absolute top-12 right-10 text-[16rem] opacity-[0.03] pointer-events-none select-none">
          🥩
        </div>
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Premium Butchery"
            title="Our Fresh"
            accent="Meat Selection"
            subtitle="Every cut hand-trimmed and inspected daily. Tap any product to order on WhatsApp — we'll prepare it fresh."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meatProducts.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <ProductCard p={p} accent={p.accent} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURED BANNER (Whole Carcass) ============== */}
      <section className="relative py-16 overflow-hidden bg-brand-gradient text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/img/p-beef-3.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container-x relative grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-navy px-4 py-1.5 text-xs font-extrabold tracking-[0.2em] uppercase">
                <Flame className="h-3.5 w-3.5" /> Bulk Deals
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mt-4 leading-tight">
                Whole Pork Carcass &amp; Bulk Beef Orders
              </h3>
              <p className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl">
                Stocking up for an event, a butchery, or your freezer? We supply{" "}
                <strong>whole carcasses (45–60 kg)</strong>, half-cuts and bulk packs at
                wholesale rates. Inbox us for bookings.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="flex md:justify-end">
              <a
                href={waLink(
                  "Hi, I'd like to enquire about whole carcass / bulk meat orders from Tinenyasha Butchery"
                )}
                target="_blank"
                rel="noopener"
                className="btn bg-brand-gold hover:bg-brand-goldDark text-brand-navy font-extrabold px-7 py-4 text-base shadow-soft shine-overlay"
              >
                Enquire on WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== FARM-FRESH PRODUCE (vibrant grid) ============== */}
      <section
        id="produce"
        className="py-20 lg:py-28 bg-gradient-to-b from-white via-brand-cream to-white relative"
      >
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Farm-Fresh Produce"
            title="Crisp, Colourful,"
            accent="& Locally Grown"
            subtitle="Hand-picked vegetables, eggs and seasonal produce delivered alongside your meat order — no extra trip needed."
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {produceItems.map((it, i) => (
              <Reveal key={it.name} delay={i * 40}>
                <ProduceCard item={it} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 bg-fresh-gradient text-white rounded-3xl p-6 sm:p-8 shadow-soft">
              <Leaf className="h-8 w-8" />
              <div className="text-center sm:text-left">
                <div className="font-display font-extrabold text-xl sm:text-2xl">
                  Mix &amp; match — meat + produce in one delivery.
                </div>
                <div className="text-white/90 text-sm">
                  Save time. One WhatsApp message, one drop-off, fresh everything.
                </div>
              </div>
              <a
                href={waLink("Hello, I'd like to combine a meat + produce order")}
                target="_blank"
                rel="noopener"
                className="btn bg-white text-brand-green hover:bg-brand-cream font-extrabold px-6 py-3 ml-0 sm:ml-auto"
              >
                Combine Order
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== WHY CHOOSE US ============== */}
      <section
        id="why"
        className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-brand-red/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-brand-gold/20 rounded-full blur-3xl" />
        <div className="container-x relative">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 text-brand-gold px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <Star className="h-3.5 w-3.5" /> Why Tinenyasha
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4 leading-tight">
              Trusted by families across{" "}
              <span className="text-gradient-fire">Marondera</span>.
            </h2>
            <p className="mt-4 text-white/80 text-base sm:text-lg">
              Six reasons we're more than just a butchery.
            </p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Beef,
                title: "Farm-Raised Cattle",
                desc: "Our own herd grazes free in Zimbabwean grasslands — no shortcuts.",
                grad: "from-brand-red to-brand-redDark",
              },
              {
                icon: Snowflake,
                title: "Daily-Fresh Cuts",
                desc: "Every cut prepared the same morning. Cold-chain maintained to your door.",
                grad: "from-brand-navyLight to-brand-navy",
              },
              {
                icon: Leaf,
                title: "Local Produce",
                desc: "Vegetables, eggs and fresh produce sourced from neighbouring farms.",
                grad: "from-brand-green to-brand-greenAccent",
              },
              {
                icon: Truck,
                title: "Same-Day Delivery",
                desc: "Order before noon — your order arrives the same day across Marondera.",
                grad: "from-brand-gold to-brand-redLight",
              },
              {
                icon: ShieldCheck,
                title: "Hygienic Standards",
                desc: "Inspection-grade workspace, sealed packaging, food-safe handling.",
                grad: "from-brand-redLight to-brand-red",
              },
              {
                icon: Heart,
                title: "Family Service",
                desc: "Real people on WhatsApp — no bots, no hold music, just helpful service.",
                grad: "from-brand-gold to-brand-goldDark",
              },
            ].map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="group h-full bg-white/5 backdrop-blur ring-1 ring-white/10 rounded-3xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${r.grad} text-white shadow-soft group-hover:rotate-6 transition-transform`}
                  >
                    <r.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display font-extrabold text-xl mt-5">{r.title}</h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FROM OUR FARM (Cattle gallery) ============== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="From Our Farm"
            title="Real cattle.  "
            accent="Real farm. Real Zimbabwe."
            subtitle="No stock photos here — these are our own herds, raised on open grasslands and traditional feeds."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {cattleGallery.map((src, i) => (
              <Reveal key={src} delay={i * 50}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-card group">
                  <Image
                    src={src}
                    alt="From our farm"
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[900ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIAL ============== */}
      <section className="py-16 bg-brand-cream">
        <div className="container-x">
          <Reveal className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-100 relative">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-brand-red/20" />
            <div className="relative">
              <div className="flex gap-1 text-brand-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl text-brand-navy leading-relaxed">
                "Best butchery in Marondera — meat is always fresh, prices are fair, and
                the WhatsApp delivery is so convenient. We get our beef, chicken and
                vegetables all in one drop. Highly recommend!"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-fire-gradient text-white flex items-center justify-center font-display font-extrabold">
                  TM
                </div>
                <div>
                  <div className="font-bold text-brand-navy">Happy Customer</div>
                  <div className="text-sm text-slate-500">Marondera, Zimbabwe</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== DELIVERY ============== */}
      <section
        id="delivery"
        className="relative py-20 lg:py-28 bg-gradient-to-br from-brand-navy via-brand-navyLight to-brand-navy text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pattern-dots" />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-navy px-4 py-1.5 text-xs font-extrabold tracking-[0.2em] uppercase">
              <Truck className="h-3.5 w-3.5" /> Delivery
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4 leading-tight">
              Same-day delivery across{" "}
              <span className="text-gradient-fire">Marondera</span>.
            </h2>
            <p className="mt-5 text-white/90 text-base sm:text-lg leading-relaxed">
              Order via WhatsApp before <strong className="text-brand-gold">12 PM</strong>{" "}
              and receive your fresh meat &amp; produce the same day. Bulk orders &amp;
              outside Marondera by arrangement.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                { icon: Clock, t: "Order by 12 PM", s: "Same-day arrival" },
                { icon: Snowflake, t: "Cold-chain", s: "Insulated packaging" },
                { icon: ShieldCheck, t: "Sealed Packs", s: "Hygienic & safe" },
                { icon: MapPin, t: "Marondera +", s: "Other areas: ask us" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 ring-1 ring-white/10 rounded-2xl p-4"
                >
                  <d.icon className="h-6 w-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">{d.t}</div>
                    <div className="text-sm text-white/70">{d.s}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={waLink("Hi, I'd like to place a delivery order")}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp mt-8 px-6 py-3.5 shine-overlay"
            >
              Place Delivery Order
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          {/* Animated truck scene */}
          <Reveal delay={150}>
            <div className="relative h-72 sm:h-80 rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-gold via-white to-brand-gold" />
              {/* Sun */}
              <div className="absolute top-8 right-12 w-16 h-16 rounded-full bg-brand-gold animate-spin-slow shadow-[0_0_60px_20px_rgba(242,183,5,0.5)]" />
              {/* Hills */}
              <div className="absolute bottom-1 left-0 right-0 flex justify-around items-end opacity-60">
                <div className="w-32 h-16 bg-brand-greenAccent rounded-t-full" />
                <div className="w-40 h-20 bg-brand-green rounded-t-full" />
                <div className="w-28 h-12 bg-brand-greenAccent rounded-t-full" />
              </div>
              {/* Truck */}
              <div className="absolute bottom-2 left-0 right-0 animate-slide-truck">
                <div className="relative w-44 h-20 mx-auto">
                  <div className="absolute right-0 top-0 w-28 h-16 bg-white rounded-l-lg flex items-center justify-center text-brand-navy font-display font-black text-sm">
                    🥩 FRESH
                  </div>
                  <div className="absolute left-0 top-4 w-16 h-12 bg-brand-red rounded-l-2xl" />
                  <div className="absolute left-2 bottom-0 w-5 h-5 bg-slate-900 rounded-full ring-2 ring-slate-700" />
                  <div className="absolute right-3 bottom-0 w-5 h-5 bg-slate-900 rounded-full ring-2 ring-slate-700" />
                  <div className="absolute right-20 bottom-0 w-5 h-5 bg-slate-900 rounded-full ring-2 ring-slate-700" />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold rounded-full px-3 py-1.5 shadow-card">
                On the way!
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Visit our shop"
            accent="or order today"
            subtitle="We're open daily. Walk in, call, or message us on WhatsApp — we'll be ready to help."
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-brand-cream rounded-3xl p-8 h-full">
                <h3 className="font-display font-extrabold text-2xl text-brand-navy">
                  Contact Information
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-brand-red text-white flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Address
                      </div>
                      <div className="font-semibold text-brand-navy mt-0.5">
                        {SITE.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-brand-green text-white flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Phone
                      </div>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {SITE.phones.map((ph) => (
                          <a
                            key={ph}
                            href={telLink(ph)}
                            className="inline-flex items-center gap-1 bg-white rounded-full px-3 py-1.5 text-sm font-semibold text-brand-navy hover:bg-brand-red hover:text-white transition-colors shadow-card"
                          >
                            {ph}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-brand-navy text-white flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Email
                      </div>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-semibold text-brand-navy mt-0.5 hover:text-brand-red break-all block"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-brand-gold text-brand-navy flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Hours
                      </div>
                      <div className="font-semibold text-brand-navy mt-0.5">
                        Mon – Sat: 7:00 AM – 6:00 PM
                      </div>
                      <div className="text-sm text-slate-500">Sun: 8:00 AM – 1:00 PM</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener"
                    className="btn-whatsapp text-sm py-3"
                  >
                    WhatsApp
                  </a>
                  <a href={telLink(SITE.phones[0])} className="btn-navy text-sm py-3">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-3xl overflow-hidden shadow-card h-full min-h-[400px] ring-1 ring-slate-200">
                <iframe
                  title="Map: Tinenyasha Butchery, Marondera"
                  src="https://www.google.com/maps?q=Marondera%20Zimbabwe%2059A%20Carrington%20Avenue&output=embed"
                  loading="lazy"
                  className="w-full h-full min-h-[400px] border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="bg-brand-navyDark text-white pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pattern-dots" />
        <div className="container-x relative">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-white shadow-card">
                  <Image
                    src="/logo.jpeg"
                    alt="Tinenyasha logo"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-display text-xl font-extrabold">Tinenyasha</div>
                  <div className="text-xs text-brand-gold tracking-wider uppercase font-bold">
                    Butchery & Farm-Fresh Produces
                  </div>
                </div>
              </div>
              <p className="mt-5 text-white/70 text-sm max-w-md leading-relaxed">
                Premium farm-raised meat &amp; daily-fresh produce, delivered to your
                doorstep across Marondera. Family-run, family-trusted.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="btn-whatsapp mt-6 text-sm px-5 py-3 inline-flex"
              >
                Order on WhatsApp
              </a>
            </div>

            <div>
              <div className="font-display font-extrabold text-lg mb-4">Explore</div>
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  ["#about", "About"],
                  ["#meat", "Meat"],
                  ["#produce", "Produce"],
                  ["#why", "Why Us"],
                  ["#delivery", "Delivery"],
                  ["#contact", "Contact"],
                ].map(([h, l]) => (
                  <li key={h}>
                    <a href={h} className="hover:text-brand-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-display font-extrabold text-lg mb-4">Visit</div>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-gold" />
                  <span>{SITE.address}</span>
                </li>
                {SITE.phones.map((ph) => (
                  <li key={ph} className="flex gap-2">
                    <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-gold" />
                    <a href={telLink(ph)} className="hover:text-white">
                      {ph}
                    </a>
                  </li>
                ))}
                <li className="flex gap-2">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-gold" />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-white break-all"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
            <div>
              © {new Date().getFullYear()} Tinenyasha Butchery & Farm-Fresh Produces.
              All rights reserved.
            </div>
            <div>Made with ❤️ in Marondera, Zimbabwe.</div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
