/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins : ['Poppins', 'sans-serif']
    },
    colors : {
      PrimaryBg : '#191919',
      primaryTextWhite : '#FFFFFF',
      primaryBgBtn : '#4F4F4F',
      primaryTextCr : '#919191',
      primaryBtnHover : "#434443",
      primaryLight : "#FFDC00",
      cyan : '#22d3ee',
      cyan2 : '#0891b2'
    },
  },
  plugins: [],
}