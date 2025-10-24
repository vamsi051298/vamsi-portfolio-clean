import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f17",
        glass: "rgba(255,255,255,0.06)",
        edge: "rgba(255,255,255,0.14)",
        aurora: "#00f080",
        star: "#a3d5ff"
      },
      backdropBlur: {
        xs: "2px"
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 240, 128, 0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config;
