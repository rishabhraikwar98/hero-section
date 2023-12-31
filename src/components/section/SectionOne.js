import React from "react";
import Button from "../customButton/Button";
import bg from "../../assets/background/background.png";
import logo from "../../assets/logo/section1/logo.png";
import logo1 from "../../assets/logo/section1/1.png"
import logo2 from "../../assets/logo/section1/2.png"
import logo3 from "../../assets/logo/section1/3.png"
import logo4 from "../../assets/logo/section1/4.png"
import logo5 from "../../assets/logo/section1/5.png"
import logo6 from "../../assets/logo/section1/6.png"
import logo7 from "../../assets/logo/section1/7.png"
import logo8 from "../../assets/logo/section1/8.png"
const logos =[logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8]
function SectionOne() {
  return (
    <div
      className="container bg-cover bg-center h-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-between py-4 px-36 align-middle">
        <div>
          <img className="h-companyLogo" alt="logo" src={logo} />
        </div>
        <div>
          <Button>Get a Free Trial</Button>
        </div>
      </div>
      <div className="bg-borderColor h-1"></div>
      <div className="md:block justify-between lg:flex mt-12 md:px-20 lg:px-32">
        <div className="headingBox md:mt-5 lg:mt-16 ml-12">
          <div className="w-headingWidth h-headingHeight text-headingSize1 text-white font-bold  leading-tight">
          <text className="bg-gradient-to-r from-heading1 to-heading2 shadow-md">
            #1 Alternative{" "}
          </text>
          <text>to</text>
          <br></br>
          <text className="text-heading3">Social Studio.</text>
          <br></br>
          <text>Seamlessly Integrate with Salesforce</text>
          </div>
          <div className="subheadingBox mt-16">
          <div className="w-subHeadingWidth h-subHeadingHeight text-subHeading font-bold">
          <text>Introducing Konnect Insights, <text className="font-thin">an</text> ALL-IN-ONE platform <text className="font-thin">for</text> Social Listening, Social Care, Social Analytics, Social Publishing <text className="font-thin">and much more!</text></text>
          </div>
          </div>
        </div>
        <div className="form">
          <form className="rounded-xl p-9 border-borderColor border-2 h-formHeight w-formWidth">
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-1 text-label">
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Gautam"
                className="rounded-md px-3 py-2 bg-inputbg text-white w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="yourid@mail.com"
                className="rounded-md px-3 py-2 bg-inputbg text-white w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block mb-1 text-label">
                Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                placeholder="000-000-0000"
                className="rounded-md px-3 py-2 bg-inputbg text-white w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company-name" className="block mb-1 text-label">
                Company Name
              </label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                placeholder="Alpha"
                className="rounded-md px-3 py-2 bg-inputbg text-white w-full"
              />
            </div>
            <div className="flex justify-end mt-8">
              <Button>Get a Free Trial</Button>
            </div>
            <div className="flex justify-end mt-3">
              <text className="text-formtext text-sm font-medium mr-8">
                No CC Required
              </text>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center text-subHeading mt-10 font-medium tracking-wider">
      <text>TRUSTED BY 1000+ GLOBAL BRANDS</text>
      </div>
      <div className="logos flex justify-between px-28 p-12">
        {logos.map((l)=>{
          return <img key={l.toString()} alt="logo" className="h-logoHeight" src={l}/>
        })}
      </div>
    </div>
  );
}
export default SectionOne;
