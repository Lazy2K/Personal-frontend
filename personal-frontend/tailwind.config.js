/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        displaySans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
