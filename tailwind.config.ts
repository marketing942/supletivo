import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#AF9256",
          50: "#FBF6E9",
          100: "#F0DCB0",
          200: "#E3CB97",
          300: "#D6BC87",
          400: "#C9AE7A",
          500: "#AF9256",
          600: "#8A7040",
          700: "#6E5A33",
          800: "#524326",
          900: "#392D19",
        },
        ink: {
          950: "#0A0A0B",
          900: "#111115",
          800: "#18181E",
          700: "#1F1F28",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(175, 146, 86, 0.30)",
        "glow-lg": "0 0 80px rgba(175, 146, 86, 0.42)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(175, 146, 86, 0.35)" },
          "50%": { boxShadow: "0 0 40px rgba(175, 146, 86, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
