/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
