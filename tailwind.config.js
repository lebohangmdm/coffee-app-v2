/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "brownish-1": "#3c1b08",
        "brownish-2": "#180b03",
        blackish: "#333",
        whitesmoke: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
