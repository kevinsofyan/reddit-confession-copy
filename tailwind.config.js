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
        gray: "#dae0e6",
        "gray-border": "#ccc",
        primary: "#1c1c1c",
        black: "#1A1A1B",
        white: "#ffffff",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.75rem", // 12px
        base: "0.875", // 14px
        lg: "1.125rem", // 18px
        xl: "1.563rem", // 25px
        "2xl": "2.188rem", // 35px
        "3xl": "3.125rem", // 50px
        "4xl": "5.313rem", // 85px
      },
      width: {
        "inner-container": "1145px",
      },
    },
  },
  plugins: [],
};
