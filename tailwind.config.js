module.exports = {
  purge: ["./index.html", "./src/**/*.jsx"],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:
        {
          'hero': "url('./src/assets/img/bg-2.jpg')"
        }
    },
  },
  plugins: [],
}


