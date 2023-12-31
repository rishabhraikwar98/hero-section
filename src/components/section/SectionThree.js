import React, { useState } from "react";
import Tab from "../Tab/Tab";
import Button from "../customButton/Button";
import { boardData } from "../../constants/boardData";
import Tabimg1 from "../../assets/images/TabImage/Tabimg1.png";
import Tabimg2 from "../../assets/images/TabImage/Tabimg2.png";
import Tabimg3 from "../../assets/images/TabImage/Tabimg3.png";
import Tabimg4 from "../../assets/images/TabImage/Tabimg4.png";
import Tabimg5 from "../../assets/images/TabImage/Tabimg5.png";
import Tabimg6 from "../../assets/images/TabImage/Tabimg6.png";
import Tabimg7 from "../../assets/images/TabImage/Tabimg7.png";
import Tabimg8 from "../../assets/images/TabImage/Tabimg8.png";
import bg2 from "../../assets/background/bg2.png"
import bg from "../../assets/background/background.png";
import p1 from "../../assets/images/PeopleImage/p1.png";
import p2 from "../../assets/images/PeopleImage/p2.png";
import p3 from "../../assets/images/PeopleImage/p3.png";
import p4 from "../../assets/images/PeopleImage/p4.png";
import p5 from "../../assets/images/PeopleImage/p5.png";
import r1 from "../../assets/images/Reviewers/r1.png";
import r2 from "../../assets/images/Reviewers/r2.png";
import r3 from "../../assets/images/Reviewers/r3.png";
const people = [
  {
    path: p1,
    role: "Customer Service",
    comment:
      "Enhance customer satisfaction with our unified platform, empowering customer care agents, supervisors, and stakeholders to engage, provide tailored solutions, and create happier customers.",
  },
  {
    path: p2,
    role: "Marketing",
    comment:
      "Gain brand clarity with our unified tool. Unlock valuable intelligence on customers, competitors, and your target segment. Meaningfully engage with your customers for enhanced satisfaction.",
  },
  {
    path: p3,
    role: "Agencies",
    comment:
      "Save time and effort on Social Listening, ORM, and Turnaround Time reports with Konnect Insights dashboard templates. Easily customize them to match your brand's themes and colors, earning even more brand love.",
  },
  {
    path: p4,
    role: "Analysts",
    comment:
      "Unlock valuable insights from the social media goldmine! Discover what users are saying about your brand, competition, and segment. Make sense of the noise with intuitive dashboards.",
  },
  {
    path: p5,
    role: "The PR Team",
    comment:
      "Stay ahead of crises with real-time alerts. Our mobile app and email notifications ensure you're promptly informed of potential issues before they escalate. Our system monitors social media and the entire web, providing you with immediate signals.",
  },
];
const reviewers = [
  {
    path: r1,
    name:"Eric Bohren's",
    role: "Freshworks - Sr Director, Global Technology Partners and Marketplace",
    comment:
      "We have a seamless integration between Konnect Insights and Freshdesk. This gives us the ability to provide excellent coverage to our clients when it comes to social data. The queries coming on social media and web can be easily pushed into Freshdesk thus giving us a single view of the customer across the systemns",
  },
  {
    path: r2,
    name:"Keith",
    role: "Tangram Consulting- Marketing & Social Media Manager",
    comment:
      "“Konnect Insights is proving to be essential to my job - right from getting exhaustive coverage for my clients to being able to manage their reputation by responding to customer queries. Most importantly I find it to be intuitive, so if there is anything that I haven't been shown I can generally figure it out for myself. It is the best software of its kind that I have ever used.",
  },
  {
    path: r3,
    name:"Lilach Bullock",
    role: "Lilach Bullock Ltd- Founder",
    comment:
      "“Konnect Insights is primarily a professional social listening and monitoring tool; but, like a Swiss army knife, it actually includes a few other full-fledged services as well:Social CRM tool: workflow and response management features; Analytics: brand, competition, and industry analysis; Social scheduling: easily schedule messages for your social profiles.",
  },
];
function SectionThree() {
  const { Tabs, Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7, Tab8 } = boardData;
  const tabData = [Tab1, Tab2, Tab3, Tab4, Tab5, Tab6, Tab7, Tab8];
  const tabImages = [Tabimg1,Tabimg2,Tabimg3,Tabimg4,Tabimg5,Tabimg6,Tabimg7,Tabimg8]
  const [tabConetentIndex, setTabContentIndex] = useState(0);
  return (
    <div className="container">
      <div className="text-center pt-16 pb-6">
        <text className="font-bold text-headingSize2 text-anotherColor">
          <text className="bg-gradient-to-r from-heading1 to-heading2">
            Unify
          </text>
          <text> your </text>
          <text className="bg-gradient-to-r from-heading1 to-heading2">
            Customer Care
          </text>
          <text> and </text>
          <text className="bg-gradient-to-r from-heading1 to-heading2">
            Marketing Insights
          </text>
        </text>
      </div>
      <div className="text-center">
        <text className="font-medium text-lg">
          Stop spending on 10+ tools and save up to 91% of your SaaS spend.
        </text>
      </div>
      <div className="flex justify-around mx-32 my-14">
        {Tabs.map((t, index) => {
          return (
            <Tab
              active={tabConetentIndex === index ? true : false}
              onClick={() => {
                setTabContentIndex(index);
              }}
              key={t}
            >
              {t}
            </Tab>
          );
        })}
      </div>
      <div className="flex justify-between px-16">
        <div className="content py-7 w-tabImgWidth">
          {tabData[tabConetentIndex].map((item) => {
            return (
              <div key={item.heading} className="py-2.5 px-12">
                <text className="font-semibold text-lg">{item.heading}</text>
                <br></br>
                <text className="font-normal text-sm text-wrap">
                  {item.subheading}
                </text>
              </div>
            );
          })}
        </div>
        <div className="images py-10 w-tabImgWidth transition-shadow">
          <img alt="img" src={tabImages[tabConetentIndex]} />
        </div>
      </div>
      <div
        className="bg-cover bg-center h-full mt-5"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-center font-bold text-headingSize2 text-anotherColor pt-10 pb-5">
          <text className="bg-gradient-to-r from-heading1 to-heading2">
            Why Teams Prefer Konnect Insights?
          </text>
        </div>
        <div className="flex justify-around">
          {people.map((p) => {
            return (
              <div key={p.path} className="p-8 items-center">
                <div className="flex justify-center pb-2">
                  <img alt="img" className="w-40" src={p.path} />
                </div>
                <div className="text-center mt-5">
                  <text className="text-white font-semibold text-lg">
                    {p.role}
                  </text>
                  <br></br>
                  <text className="text-subHeading font-normal text-sm">
                    {p.comment}
                  </text>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-5">
          <div className="flex justify-center items-center">
            <Button>Get a Free Trial</Button>
          </div>
          <div className="text-center mt-2">
            <text className="text-sm font-medium uppercase  text-white">
              No CC Required
            </text>
          </div>
        </div>
      </div>
      <div className="text-center pt-20 pb-16 text-anotherColor text-headingSize2 font-bold">
        <text>
          What{" "}
          <text className="bg-gradient-to-r from-heading1 to-heading2">
            Customers are Saying
          </text>{" "}
          About Konnect Insights?
        </text>
      </div>
      <div className="flex justify-between mx-24">
        {
          reviewers.map((r)=>{
            return<div key={r.path} className="border-solid border-2 border-reviewBorderColor rounded-xl m-8 shadow-2xl w-formWidth">
              <div className="px-10 py-10 h-80">
                <text className="text-base">{r.comment}</text>
              </div>
              <div className="h-0.5 bg-reviewBorderColor"></div>
              <div className=" flex h-32 items-center p-8">
                <img  alt ="img" src={r.path}/>  
                <div className="mx-5">
                <text className="font-semibold">{r.name}</text>
                <br></br>
                <text className="text-sm">{r.role}</text>
                </div>
              </div>
            </div>
          })
        }
      </div>
      <div className="text-center pt-14 pb-10 text-anotherColor text-headingSize2 font-bold">
          <text className="bg-gradient-to-r from-heading1 to-heading2">
          Ready to Make the Switch to Konnect Insights?
          </text>
      </div>
      <div className="pb-8">
          <div className="flex justify-center items-center">
            <Button>Get a Free Trial</Button>
          </div>
          <div className="text-center mt-2">
            <text className="text-sm font-medium uppercase tracking-wider">
              No CC Required
            </text>
          </div>
        </div>
      <div className="flex justify-center">
        <img alt ="bg" className="w-bgWidth shadow-xl" src={bg2}/>
      </div>
    </div>
  );
}

export default SectionThree;
