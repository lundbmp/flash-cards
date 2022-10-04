/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/Home.js",
    "./src/pages/Dashboard.js",
    "./src/components/Footer",
    "./src/components/CardList/index.js",
    "./src/pages/CardCategories.js",
  ],
  theme: {
    extend: {
      columns: {
        "4xs": "14rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: ["16px"],
        base: ["24px"],
        lg: ["28px"],
        xl: ["32px"],
      },
      variants: {},
      plugins: [require("@tailwindcss/forms", "@tailwindcss/typography")],
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
