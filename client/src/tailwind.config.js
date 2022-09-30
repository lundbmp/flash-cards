// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

//@type {import('tailwindcss').Config}

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// module.exports = {
//   theme: {
//     spacing: {
//       1: "8px",
//       2: "12px",
//       3: "16px",
//       4: "24px",
//       5: "32px",
//       6: "48px",
//     },
//   },
// };
