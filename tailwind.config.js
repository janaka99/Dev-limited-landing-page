/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: "var(--bg-background)",
        "bg-primary": "var(--bg-primary)",
        "bg-header": "var(--bg-header)",
        "text-primary": "var(--text-primary)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "text-secondary": "var(--text-secondary)",
      },
    },
  },
  plugins: [],
};
