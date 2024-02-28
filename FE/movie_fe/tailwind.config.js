/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0d0c0f",
        gray: {
          "100": "rgba(255, 255, 255, 0.4)",
          "200": "rgba(255, 255, 255, 0.7)",
          "300": "rgba(255, 255, 255, 0.1)",
        },
        white: "#fff",
        grey: "#8298ab",
        black1: "#28262d",
        "grayscale-grayscale-70": "#78828a",
        "grayscale-grayscale-10": "#f9f9f9",
        "grayscale-grayscale-40": "#d1d8dd",
        green: "#00925d",
        "grayscale-grayscale-60": "#9ca4ab",
        darkslategray: "#404042",
      },
      spacing: {},
      fontFamily: {
        "text-medium-text": "Lato",
        rubik: "Rubik",
        "semibold-medium": "Inter",
      },
      borderRadius: {
        "81xl": "100px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mid: "17px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      xs: "12px",
      lgi: "19px",
      lg: "18px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

