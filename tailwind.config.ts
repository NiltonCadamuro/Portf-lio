import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surfaceBackground: "#263238",
        surfacePrimary: "#3B464B",
        surfaceSecondary: "#515A5F",
        surfaceTertiary: "#676F73",
        strokeBase: "#515A5F",
        primary: "#00875F",
        secondary: "#7DFFAF",
        textPrimary: "#F5F6F6",
        textSecondary: "#CDD0D4",
        textTertiary: "#c7fad6",
        primaryHover: "#015F43",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "move-circle": "moveCircle 10s ease-in-out infinite",
      },
      keyframes: {
        moveCircle: {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "33%": { transform: "translateX(11%) rotate(40deg)" },
          "66%": { transform: "translateX(-15%) rotate(-60deg)" },
          "100%": { transform: "translateX(0%) rotate(360deg)" },
        },
      },
      backgroundImage: {
        blur: 'url("/blur-background.png")',
      },
    },
  },
  plugins: [],
};
export default config;
