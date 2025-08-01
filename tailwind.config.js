module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "2rem",
        },
      },
      fontFamily: {
        "custom-bold": ["bold", "sans-serif"],
        "custom-semibold": ["semibold", "sans-serif"],
        "custom-regular": ["regular", "sans-serif"],
      },
    },
  },
};
