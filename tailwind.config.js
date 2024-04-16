/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "brownish-1": "#3c1b08",
        "brownish-2": "#180b03",
        "brownish-3": "#d7c2b7",
        "brownish-4": "#e4d7cf",
        "light-brown-1": "#faeee0",
        "light-brown-2": "#f6debc",
        "light-brown-3": "#ffe0b7",
        "light-brown-4": "#f9cf93",
        blackish: "#333",
        whitesmoke: "#F5F5F5",
      },
      fontFamily: {
        serif: "oswald, sans-serif",
      },
      gridTemplateColumns: {
        "200px-1fr": "200px 1fr",
        "1fr-250px": "1fr 250px",
      },
    },
  },
  plugins: [],
};
