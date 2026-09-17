/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Cores Fundo da Grota customizadas
        "fundo-da-grota": {
          orange: "hsl(var(--fundo-da-grota-orange))",
          red: "hsl(var(--fundo-da-grota-red))",
          gold: "hsl(var(--fundo-da-grota-gold))",
          ash: "hsl(var(--fundo-da-grota-ash))",
          charcoal: "hsl(var(--fundo-da-grota-charcoal))",
          ember: "hsl(var(--fundo-da-grota-ember))",
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        crimson: ['Crimson Pro', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "ember-glow": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 10px hsl(var(--fundo-da-grota-orange) / 0.6))",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px hsl(var(--fundo-da-grota-orange) / 0.9))",
          },
        },
        "flame-flicker": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "ember-glow": "ember-glow 3s ease-in-out infinite",
        "flame-flicker": "flame-flicker 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
