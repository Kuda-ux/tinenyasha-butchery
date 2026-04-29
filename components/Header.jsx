"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { SITE, waLink, telLink } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#meat", label: "Meat" },
  { href: "#produce", label: "Produce" },
  { href: "#why", label: "Why Us" },
  { href: "#delivery", label: "Delivery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-soft py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden ring-2 ring-white shadow-card">
            <Image
              src="/logo.jpeg"
              alt="Tinenyasha Butchery logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <div
              className={`font-display font-extrabold text-base sm:text-lg ${
                scrolled ? "text-brand-navy" : "text-white drop-shadow"
              }`}
            >
              Tinenyasha
            </div>
            <div
              className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${
                scrolled ? "text-brand-red" : "text-white/90"
              }`}
            >
              Butchery & Farm-Fresh
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-slate-700 hover:text-brand-red"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={telLink(SITE.phones[0])}
            className={`btn px-4 py-2 text-sm ${
              scrolled
                ? "text-brand-navy hover:text-brand-red"
                : "text-white hover:text-white/80"
            }`}
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{SITE.phones[0]}</span>
          </a>
          <a href={waLink()} target="_blank" rel="noopener" className="btn-primary text-sm px-5 py-2.5">
            Order on WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 rounded-full ${
            scrolled ? "text-brand-navy" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[420px] mt-2" : "max-h-0"
        }`}
      >
        <div className="container-x">
          <div className="bg-white rounded-2xl shadow-soft p-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-slate-800 font-semibold hover:bg-brand-cream"
              >
                {l.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={telLink(SITE.phones[0])}
                className="btn-navy text-sm py-2.5"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="btn-whatsapp text-sm py-2.5"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
