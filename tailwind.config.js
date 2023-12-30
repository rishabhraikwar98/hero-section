/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        buttonbg:"#EDCD54",
        borderColor:"#163A59",
        label:"#9CA5AD",
        inputbg:"#163A59",
        formtext:"#EDCD54",
        heading1:"#BBEAF3",
        heading2:'#58B6D3',
        heading3:"#EDCD54",
        subHeading:"#A6B6C4",
      },
      fontSize:{
        headingSize:"50px"
      },
      fontWeight:{
        headingWeight:700
      },
      width:{
        formWidth:"430px",
        headingWidth:"530px",
        subHeadingWidth: "450px",
      },
      height:{
        formHeight:"500px",
        headingHeight:"220px",
        subHeadingHeight: "65px",
        logoHeight:"32px",
        companyLogo:"38px"
      }
    },
  },
  plugins: [],
}

