/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00F5D4",
        primaryVariant: "#00BFA5",
        background: "#121829",
        surface: "#1F2940",
        onPrimary: "#000000",
        onBackground: "#E0E0E0",
        onSurface: "#FFFFFF",
        error: "#CF6679",
        success: "#66BB6A",
      },
      animation: {
        float: "float 15s ease-in-out infinite",
        "float-reverse": "float-reverse 18s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        pulse: "pulse 2s infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-25px) rotate(180deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(25px) rotate(-180deg)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
