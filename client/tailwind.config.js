module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: "#2d53db",
        customColorOne: "#001C30",
        customColorTwo: "#176B87",
        customColorThree: "#DAFFFB",
      },
      width: {
        "custom-width-1": "50rem",
        "custom-width-2": "20rem", // Define the custom width value here
        "custom-width-3": "80rem", // Define the custom width value here
        "custom-width-4": "40rem",
        "custom-width-5": "30rem",
      },
      height: {
        "custom-height-1": "20rem", // Define the custom height value here
        "custom-height-2": "80rem", // Define the custom height value here
        "custom-height-3": "40rem", // Define the custom height value here
      },
      margin: {
        "custom-margin": "2rem", // Define the custom margin value here
        "custom-margin-left": "17rem", // Define the custom margin left value here
        "custom-margin-right": "5.5rem", // Define the custom margin right value here
      },
    },
    fontFamily: {
      customFont1: ["Poppins", "sans-serif"],
      customFont2: ["Bungee Spice"],
      customFont3: ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
