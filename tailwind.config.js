// tailwind.config.js
// https://tailwindcss.com/docs/configuration/
module.exports = {
  content: [
    './_includes/**/*.{html,js,md,markdown}',
    './_layouts/**/*.{html,js,md,markdown}',
    './_posts/*.{md, markdown}',
    './about/*.html',
    './*.{html,js,md,markdown}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1440px',
      xl: '1600px',
    },
    fontFamily: {
      body: ['system', '-apple-system','San Francisco', 'Roboto', 'Segoe UI', 'sans-serif'],
    },
    extend: {
      screens: {
        '2xl': '2000px',
        '3xl': '2400px',
      },
      colors: {
        cyan: '#9cdbff',
        ozgreen: '#00843D',
        ozgold: '#FFCD00',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
      spacing: {
        '11': '2.75rem',
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover'],
    // width: ["responsive", "hover", "focus"],
    // height: ["responsive", "hover", "focus"],
  }
}