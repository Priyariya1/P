import React from "react";
import Calculator from "../assets/portfolio/calcu.png";
import Chat from "../assets/portfolio/chat.png";
import Ecommerce from "../assets/portfolio/efirst.png";
import Quiz from "../assets/portfolio/quiz.png";
import Todo from "../assets/portfolio/to.png";
import Food from "../assets/portfolio/weather.png";

const Portfolio = () => {

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={Calculator}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a 
                     href='https://github.com/Priyariya1/Calculater' rel='noreferrer'>
                    Code
                    </a>
                  </button>
                </div>
              </div>
            
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={Chat}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
               
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a 
                     href='https://github.com/Priyariya1/real-time-chat-app' rel='noreferrer'>
                    Code
                    </a>
                  </button>
                 
                </div>
               
              </div>
            
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={Ecommerce}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a 
                     href='https://github.com/Priyariya1/Online-shopping' rel='noreferrer'>
                    Code
                    </a>
                  </button>
                </div>
              </div>
            
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={Quiz}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a 
                     href='https://github.com/Priyariya1/Quiz-app' rel='noreferrer'>
                    Code
                    </a>
                  </button>
                </div>
              </div>
         
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={Todo}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a 
                     href='https://github.com/Priyariya1/Todo' rel='noreferrer'>
                    Code
                    </a>
                  </button>
                </div>
              </div>
          
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={Food}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a 
                     href='https://github.com/Priyariya1/Ordering-food' rel='noreferrer'>
                    Code
                    </a>
                  </button>
                </div>
              </div>
            


        </div>
      </div>
    </div>
  );
};

export default Portfolio;
