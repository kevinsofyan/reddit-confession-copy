/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        "gray-border": "#ccc",
        "gray-border-active": "#898989",
        "gray-light": "#f8f9fa",
        "reddit-black": "#1A1A1B",
        "reddit-black-100": "#373c3f",
        "reddit-white": "#ffffff",
        "reddit-gray": "#dae0e6",
        "reddit-gray-100": "rgba(26,26,27,0.1)",
        "reddit-gray-200": "#F6F7F8",
        "reddit-blue": "#7193ff",
        "reddit-red": "#ff4500",
      },
      fontFamily: {
        main: ["Noto Sans", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px.
        lg: "1.125rem", // 18px
        xl: "1.563rem", // 25px
        "2xl": "2.188rem", // 35px
        "3xl": "3rem", // 48px
      },
      width: {
        "inner-container": "1145px",
      },
    },
  },
  plugins: [],
};
