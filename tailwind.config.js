/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        cairo: ["Cairo", "sans-serif"], // لدعم العربية
      },
      screens: {
        "max-sm": { max: "639px" }, // أقل من 640px
        "max-md": { max: "767px" }, // أقل من 768px
        "max-lg": { max: "1023px" }, // أقل من 1024px
        "max-xl": { max: "1279px" }, // أقل من 1280px
       "max-2xl": { max: "1535px" }, // أقل من 1536px
      },
    },
  },
  plugins: [],
};
