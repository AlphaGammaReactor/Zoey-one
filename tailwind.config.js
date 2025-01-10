module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'secondary': '#2ecc71',
        'text-primary': '#2c3e50',
        'text-secondary': '#7f8c8d',
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Open Sans', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
      },
    },
  },
  plugins: [],
}