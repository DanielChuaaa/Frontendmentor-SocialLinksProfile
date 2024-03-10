/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      clr_primary_100: "hsl(75, 94%, 57%)",
      clr_neutral_100: "hsl(0, 0%, 100%)",
      clr_neutral_200: "hsl(0, 0%, 20%)",
      clr_neutral_300: "hsl(0, 0%, 12%)",
      clr_neutral_400: "hsl(0, 0%, 8%)",
    },
    fontWeight: {
      fw_regular: 400,
      fw_semi_bold: 600,
      fw_bold: 700,
    },
    padding: {
      buttonPadding: "0.5rem 4rem",
      p_4: "1rem",
      p_6: "1.5rem",
      p_8: "2rem",
    },
    extend: {},
  },

  plugins: [],
};
