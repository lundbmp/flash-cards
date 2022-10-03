/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/Home.js",
    "./src/pages/Dashboard.js",
    "./src/components/Footer",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      variants: {},
      plugins: [require("@tailwindcss/forms")],
    },
    // screens: {
    //   tablet: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   laptop: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   desktop: "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
};
