/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'phone': '300px',
        // => @media (min-width: 640px) { ... }
  
        'tab': '750px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1025px',
        // => @media (min-width: 1280px) { ... }
      },
  
    },
  },
  plugins: [],
};
