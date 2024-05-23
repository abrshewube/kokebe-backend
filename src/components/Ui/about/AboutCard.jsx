import React from "react";
import Heading from "../common/heading/Heading";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className=" py-16 bg-gray-500">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="left w-full md:w-1/2 p-4">
            <img src="./images/about.webp" alt="" className="rounded shadow-lg" />
          </div>
          <div className="right w-full md:w-1/2 p-4">
            <Heading subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
            <div className="items mt-8">
              {homeAbout.map((val, index) => (
                <div key={index} className="item flex items-start text-white-800 mb-6">
                  <div className="img w-16 h-16 mr-4">
                    <img src={val.cover} alt="" className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="text">
                    <h2 className="text-xl font-semibold text-white-800">{val.title}</h2>
                    <p className="text-white-800 mt-2">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
}

export default AboutCard;
