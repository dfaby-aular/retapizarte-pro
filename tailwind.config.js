/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracota: "#E07A5F",
        terracotaOscuro: "#C65D3B",
        terracotaClaro: "#F2B8A0",
      },
    },
  },
  plugins: [],
};

export default config;