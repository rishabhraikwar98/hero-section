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
        anotherColor:"#062A49",
        black75:"#000000BF",
        offWhite:"#F4F4F4",
        line:"#D9D9D9",
        tabBg:"#F0F0F0",
        tabBorder:"#DADADA",
        tabBgAct:"#FFB8B8",
        tabBorderAct:"#F17B7B",
        reviewBorderColor:"#E9E9E9"
      },
      fontSize:{
        headingSize1:"50px",
        headingSize2:"30px",
      },
      width:{
        formWidth:"430px",
        headingWidth:"530px",
        subHeadingWidth: "450px",
        tabImgWidth:"1500px",
        bgWidth:"70vw"
      },
      height:{
        formHeight:"500px",
        headingHeight:"220px",
        subHeadingHeight: "65px",
        logoHeight:"32px",
        companyLogo:"38px"
      },
    },
  },
  plugins: [],
}

