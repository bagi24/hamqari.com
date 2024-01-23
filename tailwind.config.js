/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      dark: "rgba(12,20,57, 1)",
      white: "#ffff",
      light: "#00ACA8",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#f0ff00",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        20: "20px",
      },

      boxShadow: {
        custom: "0px 4px 9px -1px rgba(0,0,0,0.78)",
      },
    },
  },
};
