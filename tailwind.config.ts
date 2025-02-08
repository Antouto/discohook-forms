import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        success: "hsl(var(--success))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          blue: "#58B9FF",
          pink: "#FF81FF",
        },
        primary: {
          130: "#EFF0F3",
          160: "#EBEDEF",
          200: "#E3E5E8",
          230: "#DBDEE1",
          300: "#C4C9CE",
          400: "#80848E",
          500: "#4E5058",
          600: "#313338",
          630: "#202225",
          700: "#17181A",
        },
        blurple: {
          50: "#eef3ff",
          100: "#e0e9ff",
          200: "#c6d6ff",
          260: "#C9CDFB",
          300: "#a4b9fd",
          400: "#8093f9",
          DEFAULT: "#5865f2",
          500: "#5865f2",
          600: "#4445e7",
          700: "#3836cc",
          800: "#2f2fa4",
          900: "#2d2f82",
          950: "#1a1a4c",
        },
        blue: {
          345: "#00A8FC",
          430: "#006CE7",
        },
        gray: {
          100: "#f2f3f5",
          200: "#ebedef",
          300: "#e3e5e8",
          400: "#d4d7dc",
          600: "#4f545c",
          700: "#36393f",
          800: "#2f3136",
          900: "#202225",
        },
        muted: "#5C5E65",
        "muted-dark": "#959BA3",
        background: {
          secondary: "#F2F3F5",
          "secondary-dark": "#2B2D31",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'discord_top_bar_shadow': 'rgba(0, 0, 0, 0.05) 0px 2px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1.5px 0px 0px, rgba(0, 0, 0, 0.16) 0px 1px 0px 0px',
      },
      fontFamily: {
        sans: ['Whitney'],
      },
      spacing: {
        inherit: "inherit",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
