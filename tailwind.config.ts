import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: "#F6F4EF",
          50: "#FDFCFA",
          100: "#FAF9F5",
          200: "#F6F4EF",
          300: "#EAE7DE",
          400: "#D8D3C5",
          500: "#C4BDB0",
          600: "#AFA79A",
          700: "#8F8778",
          800: "#6E6860",
          900: "#4E4944",
        },
        aegean: {
          DEFAULT: "#0A5AA1",
          50: "#E8F0F8",
          100: "#C5D9EF",
          200: "#9DC0E3",
          300: "#6CA4D4",
          400: "#3D8AC4",
          500: "#1A6DB8",
          600: "#0A5AA1",
          700: "#084A84",
          800: "#063967",
          900: "#04284A",
        },
        olive: {
          DEFAULT: "#2E7D6D",
          50: "#E8F3F1",
          100: "#C3E0DA",
          200: "#96CAC1",
          300: "#65B2A6",
          400: "#3A9982",
          500: "#2E7D6D",
          600: "#226659",
          700: "#184F45",
          800: "#0F3830",
          900: "#07211C",
        },
        gold: {
          DEFAULT: "#C2A660",
          50: "#F9F4E8",
          100: "#EFE4C3",
          200: "#E3D09A",
          300: "#D4BA7A",
          400: "#C2A660",
          500: "#A98C4A",
          600: "#8B7238",
          700: "#6C5829",
          800: "#4E3F1C",
          900: "#2F260F",
        },
        charcoal: {
          DEFAULT: "#0F1317",
          50: "#F0F1F2",
          100: "#D5D8DC",
          200: "#B0B6BD",
          300: "#8A939C",
          400: "#636F7A",
          500: "#4A5568",
          600: "#2A2F35",
          700: "#1A1E23",
          800: "#0F1317",
          900: "#050608",
        },
        // shadcn/ui semantic tokens
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", ...fontFamily.serif],
        sans: ["var(--font-sora)", ...fontFamily.sans],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
        "section-lg": "8rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "marble-vein": "linear-gradient(18deg, #F6F4EF 0%, #D8D3C5 40%, #C2A660 80%, #F6F4EF 100%)",
        "aegean-mist": "linear-gradient(12deg, #F6F4EF 0%, #E8F0F8 60%, #C5D9EF 100%)",
        "olive-breath": "linear-gradient(15deg, #F6F4EF 0%, #E8F3F1 60%, #C3E0DA 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "marquee": "marquee 28s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      boxShadow: {
        "elevation-1": "0 1px 3px rgba(15,19,23,0.08), 0 1px 2px rgba(15,19,23,0.04)",
        "elevation-2": "0 4px 12px rgba(15,19,23,0.08), 0 2px 4px rgba(15,19,23,0.04)",
        "elevation-3": "0 8px 24px rgba(15,19,23,0.10), 0 4px 8px rgba(15,19,23,0.06)",
        "elevation-4": "0 16px 40px rgba(15,19,23,0.12), 0 8px 16px rgba(15,19,23,0.08)",
        "gold-glow": "0 0 20px rgba(194,166,96,0.25)",
        "aegean-glow": "0 0 20px rgba(10,90,161,0.20)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
