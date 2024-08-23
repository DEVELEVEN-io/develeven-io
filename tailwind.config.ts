/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      highlight: "#59e1ff",
      cyan: "#50F7CF",
      cyanblue: "#00eeff",
      cyangreen: "#23F8C5",
      cyanmid: "#01C3CF",
      cyandark: "#142254",
      cyandark2: "#144162",
      bgdark: "#071115",
      bglight: "#0B1B22",
      txtdark: "#DCF0F1",
      lightgray: "#6c7a7a",
      ff: "#FFFFFF",
      zz: "#000000",
    },
    backgroundImage: (theme) => ({
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
    }),
    transitionTimingFunction: {
      "custom-ease": "cubic-bezier(0.25, 1, 0.5, 1)",
    },
  },
  plugins: [],
};
