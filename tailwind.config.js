module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#7B3FE4",
        secondary: "#1A1A2E",
        text: "#FFFFFF",
        button: "#8A4FFF",
        hover: "#6A32D2"
      }
    }
  },
  plugins: [require("daisyui")]
};
