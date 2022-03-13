// tailwind.config.js
// https://tailwindcss.com/docs/configuration/
module.exports = {
  content: [
    './_includes/**/*.{html,js,md,markdown}',
    './_layouts/**/*.{html,js,md,markdown}',
    './_posts/*.markdown',
    './*.{html,js,md,markdown}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '960px',
      lg: '1440px',
      xl: '1800px',
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
    // width: ["responsive", "hover", "focus"],
    // height: ["responsive", "hover", "focus"],
  }
}