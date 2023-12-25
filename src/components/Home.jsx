import React from "react";
import HeroImage from "../assets/Priya.jpeg";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";

const Home = () => {
  return (
   
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a fresher to buliding and designing software.
            Currently, I love to work on web application using technologies like
            React,Tailwind,node JS and SQLite.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
              <IoMdArrowRoundForward  size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3  object-scale-down duration-200 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
