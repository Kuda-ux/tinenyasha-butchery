import { waLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-soft hover:scale-105 transition-transform"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white/30 animate-ping" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 relative">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.86-5.3 11.86-11.85 0-3.17-1.23-6.15-3.4-8.43Zm-8.47 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.8 1 .99-3.7-.23-.38a9.83 9.83 0 0 1-1.5-5.17c0-5.44 4.43-9.86 9.87-9.86 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.89 6.97c0 5.43-4.42 9.82-9.86 9.82Zm5.41-7.36c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07a8.06 8.06 0 0 1-2.37-1.46 8.93 8.93 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.2 2.06 3.15 5 4.42.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </span>
      <span className="hidden sm:inline font-semibold">Chat with us</span>
    </a>
  );
}
