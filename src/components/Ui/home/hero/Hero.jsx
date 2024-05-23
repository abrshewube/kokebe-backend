import React from "react";
import Heading from "../../common/heading/Heading";

const Hero = () => {
  return (
    <>
      <section className=" bg-gray-700 py-16">
        <div className="container mx-auto px-4">
          <div className="row flex flex-col items-center text-center">
            <Heading subtitle="WELCOME TO ACADEMIA" title="Best Online Education Expertise" />
            <p className="mt-4 text-lg text-white ">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button mt-8 flex space-x-4">
              <button className="primary-btn bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right ml-2"></i>
              </button>
              <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded shadow hover:bg-gray-300 transition duration-200">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin my-8"></div>
    </>
  );
}

export default Hero;
