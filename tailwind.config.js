/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
      'josefin':[`Josefin Sans`,'Arial']
      },
      backgroundImage:{
        'mobile-bg':"url('/bg-mobile-light.jpg')",
        'desktop-bg':"url('/bg-desktop-light.jpg')",
        'dark-mobile-bg':"url('/bg-mobile-dark.jpg')",
        'dark-desktop-bg':"url('/bg-desktop-dark.jpg')",
      },
colors: {
      "light-gray": "hsl(0, 0%, 98%)",
      "light-gray-blue": "hsl(236, 33%, 92%)",
      "lighter-gray-blue": "hsl(233, 11%, 84%)",
      "light-hover-gray-blue": "hsl(236, 9%, 61%)",
      "dark-gray-blue": "hsl(235, 19%, 35%)",
      // dark theme
      "dark-blue": "hsl(235, 21%, 11%)",
      "dark-saturated-blue": "hsl(235, 24%, 19%)",
      "grey-blue": "hsl(234, 39%, 85%)",
      "gray-hover-blue": "hsl(236, 33%, 92%)",
      "dark-gray-blue": "hsl(234, 11%, 52%)",
      "darker-gray-blue": "hsl(233, 14%, 35%)",
      "darkest-gray-blue": "hsl(237, 14%, 26%)",
      // primaries
      "bright-blue": "hsl(220, 98%, 61%)",
      "lg-cyan": "hsl(192, 100%, 67%)",
      "lg-magnenta": "hsl(280, 87%, 65%)",
    },
    },
  },
  plugins: [],
};
