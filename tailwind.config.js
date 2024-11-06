/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030604",
        secondary: "#00ffef",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
    screens: {
      big: "1600px",
      desktop: "1350px",
      sdesktop: "1250px",
      bmedium: "1080px",
      medium: "1024px",
      btablet: "901px",
      tablet: "801px",
      stablet: "701px",
      phone: "601px",
      small: "551px",
      smal: "401px",
      smaller: "350px",
    },
  },
  plugins: [],
};
