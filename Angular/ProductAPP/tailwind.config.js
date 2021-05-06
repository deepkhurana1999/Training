module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['active'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
