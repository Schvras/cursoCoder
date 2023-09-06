/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist:[
      {
        pattern: /^(bg|from|to)-/
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

