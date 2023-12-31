import React from "react";
import logo1 from "../../assets/logo/section2/top/1.png";
import logo2 from "../../assets/logo/section2/top/2.png";
import logo3 from "../../assets/logo/section2/top/3.png";
import logo4 from "../../assets/logo/section2/top/4.png";
import logo5 from "../../assets/logo/section2/top/5.png";
import b1 from "../../assets/logo/section2/bottom/b1.png";
import b2 from "../../assets/logo/section2/bottom/b2.png";
import b3 from "../../assets/logo/section2/bottom/b3.png";
import b4 from "../../assets/logo/section2/bottom/b4.png";
import b5 from "../../assets/logo/section2/bottom/b5.png";
import b6 from "../../assets/logo/section2/bottom/b6.png";
import b7 from "../../assets/logo/section2/bottom/b7.png";
import b8 from "../../assets/logo/section2/bottom/b8.png";
import b9 from "../../assets/logo/section2/bottom/b9.png";
import b10 from "../../assets/logo/section2/bottom/b10.png";
import b11 from "../../assets/logo/section2/bottom/b11.png";
import b12 from "../../assets/logo/section2/bottom/b12.png";
import b13 from "../../assets/logo/section2/bottom/b13.png";
import b14 from "../../assets/logo/section2/bottom/b14.png";
import b15 from "../../assets/logo/section2/bottom/b15.png";
import card1 from "../../assets/logo/section2/card/card1.png";
import card2 from "../../assets/logo/section2/card/card2.png";
import card3 from "../../assets/logo/section2/card/card3.png";
import Button from "../customButton/Button";
const upperLogos = [
  {
    path: logo1,
    title: "Create rules to automate pushing tickets",
  },
  {
    path: logo2,
    title: "Seamlessly sync status in both systems",
  },
  {
    path: logo3,
    title: "Achieve field/object mapping",
  },
  {
    path: logo4,
    title: "Respond to social media tickets from salesforce",
  },
  {
    path: logo5,
    title: "Send social media tickets & contacts to Salesforce",
  },
];
const lowerLogos = [
  b1,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  b9,
  b10,
  b11,
  b12,
  b13,
  b14,
  b15,
];
function SectionTwo() {
  return (
    <div className="container">
      <div className="text-center py-16">
        <text className="font-bold text-headingSize2">
          Why Konnect Insights is the
          <text className="bg-gradient-to-r from-heading1 to-heading2 text-anotherColor">
            {" "}
            Best Zendesk Alternative?
          </text>
        </text>
      </div>
      <div className="flex justify-between px-52">
        {upperLogos.map((lg) => {
          return (
            <div key={lg.path.toString()}>
              <div className="justify-center flex">
                <img alt="logo" className="h-16" src={lg.path} />
              </div>
              <div className="w-40 text-center mt-5">
                <text className="text-black75 font-medium text-base">
                  {lg.title}
                </text>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-16">
        <Button>Get a Free Trial</Button>
      </div>
      <div className="text-center mt-1">
        <text className="text-sm font-medium">No CC Required</text>
      </div>
      <div className="bg-offWhite h-48 mt-16">
        <div className="text-center py-10">
          <text className="font-bold text-lg uppercase">
            3000+ Integrations & 100% Data Coverage Across the Internet!
          </text>
        </div>
        <div className="flex justify-between px-8">
          {lowerLogos.map((ic) => {
            return (
              <img
                className="h-companyLogo"
                key={ic.toString()}
                alt="icon"
                src={ic}
              />
            );
          })}
        </div>
      </div>
      <div className="text-center pt-20 pb-16">
        <text className="bg-gradient-to-r from-heading1 to-heading2 text-anotherColor text-headingSize2 font-bold">
          Benefits of the Integration
        </text>
      </div>
      <div className="flex justify-around mx-16">
        <div className="flex justify-between bg-offWhite items-center px-8 rounded-xl">
          <div className="px-2">
            <img alt="card" className="h-companyLogo opacity-70" src={card1} />
          </div>
          <div className="bg-line w-0.5 h-16 mx-2"></div>
          <div className="text-lg px-10 py-5">
            <text className="font-bold">
              One-View <text className="font-medium">of</text>
            </text>
            <br></br>
            <text className="font-medium">the customer in</text>
            <br></br>
            <text className="font-bold">Salesforce</text>
          </div>
        </div>
        <div className="flex justify-between bg-offWhite items-center px-8 rounded-xl text-black75">
          <div className="px-2">
            <img alt="card" className="h-companyLogo opacity-70" src={card2} />
          </div>
          <div className="bg-line w-0.5 h-16 mx-2"></div>
          <div className="text-lg px-10 py-5">
            <text className="font-medium">Empowers agents with</text>
            <br></br>
            <text className="font-bold">
              real-time <text className="font-medium">access to</text> social
            </text>
            <br></br>
            <text className="font-bold">media conversations</text>
          </div>
        </div>
        <div className="flex justify-between bg-offWhite items-center px-8 rounded-xl">
          <div className="px-2">
            <img alt="card" className="h-companyLogo opacity-70" src={card3} />
          </div>
          <div className="bg-line w-0.5 h-16 mx-2"></div>
          <div className="text-lg px-10 py-5">
            <text className="font-bold">
              Lead generation <text className="font-medium">from</text>
            </text>
            <br></br>
            <text className="font-medium">social media created as</text>
            <br></br>
            <text className="font-medium">
              opportunities in <text className="font-bold">SFDC</text>
            </text>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Button>Get a Free Trial</Button>
      </div>
      <div className="text-center mt-1">
        <text className="text-sm font-medium">No CC Required</text>
      </div>
    </div>
  );
}

export default SectionTwo;
