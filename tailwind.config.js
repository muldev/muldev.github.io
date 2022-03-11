// tailwind.config.js
// https://tailwindcss.com/docs/configuration/
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      body: ['system', '-apple-system','San Francisco', 'Roboto', 'Segoe UI', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover'],
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
  }
}