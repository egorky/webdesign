/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED", // Screen 3 Primary (Purple)
        secondary: "#001B39", // Screen 2 Secondary (Dark Blue)
        accent: "#7041FF", // Screen 4 Accent
        darkBlue: "#001B33", // Screen 3
        brandDark: "#001D3D", // Screen 4
        "background-light": "#FFFFFF",
        "background-dark": "#020617",
      },
      fontFamily: {
        display: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
        sans: ["Inter", "Plus Jakarta Sans", "sans-serif"],
        accent: ["Space Grotesk", "sans-serif"],
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
         // Screen 3 uses 0px defaults for sharp edges
         'none': '0px',
         // Screen 4 uses rounded
      }
    },
  },
  plugins: [],
}
