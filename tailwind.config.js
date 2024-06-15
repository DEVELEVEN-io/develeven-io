/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      highlight: '#59e1ff',
      cyan: '#50F7CF',
      cyanblue: '#00eeff',
      cyanmid: '#23F8C5',
      cyandark: '#142254',
      bgdark: '#071115',
      txtdark: '#DCF0F1',
    },
    backgroundImage: theme => ({
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
    }),
    transitionTimingFunction: {
      'custom-ease': 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  },
  plugins: [],
};
