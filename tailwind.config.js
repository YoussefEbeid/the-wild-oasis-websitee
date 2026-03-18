/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F6F8",
          100: "#E6E8EB",
          200: "#C8CBD1",
          300: "#A2A7B1",
          400: "#79808E",
          500: "#585F6E",
          600: "#424855",
          700: "#323742",
          800: "#22262E",
          900: "#16191E",
          950: "#0B0C0F",
        },
        accent: {
          50: "#FCF9F2",
          100: "#F6EFE0",
          200: "#E9D9B7",
          300: "#DBC18D",
          400: "#CDAA63",
          500: "#C0933A",
          600: "#9A762E",
          700: "#735823",
          800: "#4D3B17",
          900: "#261D0C",
          950: "#130F06",
        },
      },
    },
  },
  plugins: [],
};