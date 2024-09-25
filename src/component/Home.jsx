import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import mes from "./images/image copy.png";
function Home() {
  return (
    <>
      <Header />
      <div className="p-10 bg-slate-100 relative">
      
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <div className="bg-gray-200 rounded-lg p-10 h-64 relative">
              <div className="absolute top-4 left-4 text-gray-500">
                Strategic • Financial Management
              </div>
              <div className="absolute  mt-[150px] flex items-center">
                <div className="bg-white ml-[65px] shadow-lg rounded-lg p-4 flex items-center">
                  <i className="fas fa-briefcase text-teal-500 text-2xl mr-4"></i>
                  <div>
                    <div className=" flex  items-center gap-4 font-medium">
                      <img src={mes} className="h-[50px] rounded-full" alt="" />
                      Corporate Finance Consulting
                    </div>
                    <div className="text-gray-500 mt-[20px] text-sm">
                      We explore the evolution of job boards and <br /> the recruitment
                      process.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-center items-center pl-10">
          <div className=" my-[40px] ml-[-100px] ">
              <button className="bg-white text-teal-500 px-4 py-2 rounded-full">
                Wealth Management
              </button>
            </div>
            <div className="text-[60px] font-semibold  leading-tight">
              
              Building <br /> <span className="font-bold">a</span>{" "}
              <span className="text-teal-500 ">Financial</span> <br /> Future
            </div>
            <div className="mt-4 text-gray-500">
              In this section, we explore the evolution of job boards and the
              recruitment process. From the traditional job boards to a diverse
              market involving more flexible platforms and freelancing.
            </div>
          </div>
        </div>

      
        <div className="mt-10 flex justify-between items-start">
          <div className="w-1/2">
            <div className="text-gray-500">
              Designed for individual owners of the financial assets this step
              by step instructions on budgeting, saving, investing and
              retirement planning.
            </div>
          </div>
          <div className="w-1/2 pl-10">
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
              <i className="fas fa-briefcase text-teal-500 text-2xl mr-4"></i>
              <div>
                <div className="font-medium">Corporate Finance</div>
                <div className="text-gray-500 text-sm">
                  We explore the evolution of job boards and the recruitment
                  process.
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <Footer />
    </>
  );
}

export default Home;
