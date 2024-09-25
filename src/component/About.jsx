import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import mes from "./images/image copy.png";
function About() {
  return (
    <>
      <Header />
      <div className="p-[30px] flex  bg-slate-100 justify-between ">
        <div className="w-1/2">
          <div className="bg-white rounded-3xl ml-[350px] w-[350px] p-[35px]">
            <div className="flex gap-[20px] items-center ">
              <img className="h-[60px] rounded-full" src={mes} alt="" />
              <h1 className="text-[18px] font-semibold">
                Corporate Finance <br /> Consulting
              </h1>
            </div>
            <p className="leading-relaxed mt-[20px]">
              We explore the evolution of job board and the requirements process
            </p>
          </div>
          <div className="h-[400px] w-[596px] mt-[40px] bg-slate-300 rounded-3xl"></div>
        </div>
        <div className="c">
          <h1 className="ml-[90px] leading-loose">
            <span className="underline font-semibold">
              Designed for individuals looking to take control of theirfinancial
              destiny <br />
            </span>

            <span className="text-slate-400 font-semibold text-sm">
              provides step-by-step instructions on budgeting, soving investing
              and retirement planning it emphasizes proctical approdiches to
              achieving financial
            </span>
          </h1>
          <button className="bg-black ml-[90px] my-[40px] text-white py-2 px-5 rounded-3xl">
            Discover
          </button>
          <div className="flex mt-[40px] items-center gap-3">
            <div className="h-[15px] w-[15px] rounded-full bg-green-700 "></div>
            <h1 className="font-semibold underline">About Us</h1>
          </div>
          <h1 className="text-5xl mt-[20px]">
            Finance{" "}
            <span className="text-green-800 font-semibold">Mastery</span> Advan{" "}
            <br /> <span className="font-semibold">Strategies</span> Business{" "}
          </h1>
          <div className="flex mt-[50px]">
            <img src={mes} className="h-[60px] rounded-full" alt="" />
            <h1 className="leading-[30px] ml-[30px] font-semibold text-lg">
              Wealth Management <br />
              <span className="font-light text-[15px] leading-tight">
                We explore if evolution of job board and the recuirements
                process{" "}
              </span>
            </h1>
            <img src={mes} className="h-[60px] ml-[20px] rounded-full" alt="" />
            <h1 className="leading-[30px] ml-[30px] font-semibold text-lg">
              Wealth Management <br />
              <span className="font-light text-[15px] leading-tight">
                We explore if evolution of job board and the recuirements
                process{" "}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
