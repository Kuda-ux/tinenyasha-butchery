/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B2A5B",
          navyDark: "#071F47",
          navyLight: "#13408A",
          red: "#C8102E",
          redDark: "#9E0C24",
          redLight: "#E63946",
          green: "#2E7D32",
          greenLight: "#43A047",
          greenAccent: "#76C043",
          gold: "#F2B705",
          goldDark: "#D49A00",
          cream: "#FFF8F1",
          ink: "#0A0F1F",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0B2A5B 0%, #13408A 50%, #C8102E 100%)",
        "fire-gradient":
          "linear-gradient(135deg, #C8102E 0%, #F2B705 100%)",
        "fresh-gradient":
          "linear-gradient(135deg, #2E7D32 0%, #76C043 100%)",
        "shine":
          "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(11, 42, 91, 0.18)",
        card: "0 8px 24px -8px rgba(0,0,0,0.12)",
        glow: "0 0 0 6px rgba(200,16,46,0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
        "slide-truck": "slideTruck 8s linear infinite",
        "marquee": "marquee 35s linear infinite",
        "shine": "shine 2.4s linear infinite",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideTruck: {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(120%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: 0.6 },
          "80%,100%": { transform: "scale(1.6)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
