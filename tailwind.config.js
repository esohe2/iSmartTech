/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#407BFF",
        darkblue: "#3362CC",
        bblue: "#032C8A",
        white: "#ffffff",
        black: "#0D1B22",
      },
    },
  },

  plugins: [],
};
