module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme("colors.gray.300"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.100") },
              strong: { color: theme("colors.gray.100") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.100"),
                borderLeftColor: theme("colors.gray.800"),
              },
              h1: { color: theme("colors.gray.100") },
              h2: { color: theme("colors.gray.100") },
              h3: { color: theme("colors.gray.100") },
              h4: { color: theme("colors.gray.100") },
              code: { color: theme("colors.gray.100") },
              "a code": { color: theme("colors.gray.100") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
            },
          },
        };
      },
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        wiggle: "wiggle 300ms ease-in-out",
        "main-content": "slide-up 0.3s ease-in-out",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        "fade-in": "fade-in 0.6s ease-in both",
        "slide-in-bottom": "slide-in-bottom 0.6s ease-in-out both",
        "rotate-360": "rotate-360 1s linear infinite",
        "scale-150": "scale-150 0.5s ease-in-out",
      },
      keyframes: {
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(4px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "rotate-360": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "scale-150": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.5)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
