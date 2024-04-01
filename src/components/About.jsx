import React from "react";
import about from '../assets/about.svg'

const About = () => {
  

  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col  w-full h-full">
        <div className="">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
          Hi!!. I'm  Priyadharshini, nice to meet you. Please take a
                look around.
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-xl">
          specialization in backend & frontend development.
                I'm a fresher. I have a Backend Skills in Nodejs,Express.
                I have a Database Skills in SQLite and also have Frontend Skills
                in HTML,CSS,JavaScript,React JS and Tailwind CSS.
          </p>
          {/* <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi!!. I'm  Priyadharshini, nice to meet you. Please take a
                look around.
              </p>
              <p className="text-gray-500 py-4 max-w-md">
                {" "}
                specialization in backend & frontend development.
                I'm a fresher. I have a Backend Skills in Nodejs,Express.
                I have a Database Skills in SQLite and also have Frontend Skills
                in HTML,CSS,JavaScript,React JS and Tailwind CSS.
              </p> */}
            </div>
            <div>
            <div>
          <img
            src={about}
            alt="about"
            className="rounded-2xl mx-auto w-3/4  object-scale-down "
          />
        </div>
            </div>
           
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
