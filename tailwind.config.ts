import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E7D32",
          dark: "#1B5E20",
          light: "#4CAF50",
        },
        accent: {
          DEFAULT: "#1976D2",
          dark: "#1565C0",
          light: "#42A5F5",
        },
        gold: "#D4AF37",
        emergency: "#D32F2F",
        surface: "#F7F9FB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        marathi: ["var(--font-noto-devanagari)", "sans-serif"],
      },
      animation: {
        "ecg-pulse": "ecg 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        ecg: {
          "0%, 100%": { strokeDashoffset: "1000" },
          "50%": { strokeDashoffset: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
