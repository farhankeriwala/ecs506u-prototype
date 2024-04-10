/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"], // Use for titles
        Poppins: ["Poppins", "sans-serif"], // Use for text
        Roboto: ["Roboto", "sans-serif"], // Use for component headings
        Nunito: ["Nunito", "sans-serif"], // Use for buttons
        OpenSans: ["Open Sans", "sans-serif"], // Use for input text in forms
      },
      colors: {
        matteBlack: "#28282B",
        coolWhite: "#F8F8FF",

        // Bootstrap colors
        primaryBlue: "#027bff",
        secondaryGray: "#6d747d",
        successGreen: "#29a645",
        dangerRed: "#db3546",
        warningYellow: "#ffc008",
        infoTeal: "#1aa1b8",
        // Interface colors
        lightBG: "#f8f9fa",
        darkBG: "#343a41",

        royalPurple: "#403ec3",
        linkWater: "#e3ecfa", // Use for button hover color if button is white
        sail: "#a8c7fa", //use for importtant actin buttons hover
      },
    },
  },
  plugins: [],
};
