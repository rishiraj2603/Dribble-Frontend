/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        75: "75vw",
        left: "40vw",
        right: "60vw",
      },
      height: {
        85: "85vh",
        95: "95vh",
      },
      border: {
        check: "2px solid black",
      },
      backgroundColor: {
        signUpColor: "#f2d184",
      },
      textColor: {
        signUpColor: "#8b671d",
      },
    },
  },
  plugins: [],
};
