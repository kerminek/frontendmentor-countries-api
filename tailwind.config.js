module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        dmElems: "hsl(209, 23%, 22%)",
        dmBg: "hsl(207, 26%, 17%)",
        dmTxt: "hsl(0, 0%, 100%)",
        lmTxt: "hsl(200, 15%, 8%)",
        lmInp: "hsl(0, 0%, 52%)",
        lmBg: "hsl(0, 0%, 98%)",
        lmElems: "hsl(0, 0%, 100%)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
