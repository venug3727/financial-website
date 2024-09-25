import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaPlus } from "react-icons/fa6";
import mes from "./images/image copy.png";
import me from "./images/briefcase.png";
function Services() {
  return (
    <>
      <Header />
      <div className="bg-slate-100 flex p-[50px]">
        <div className="c">
          <div className="flex gap-3 items-center ">
            <div className="bg-green-700 h-[15px] w-[15px] rounded-full "></div>
            <h1 className="underline ">Services</h1>
          </div>
          <h1 className="text-[50px] leading-[60px] my-[10px]">
            Global Marketing{" "}
            <span className="text-green-600 font-semibold">Unveiled</span>{" "}
            <br />
            <span className="font-semibold text-green-600">
              Complexities
            </span>{" "}
            Inter
          </h1>

          <h1 className="my-[50px] font-sans text-gray-500">
            This book explore the role financial leader steering companies
            through <br />
            economic challenges it offer practical advice.
          </h1>
          <p className="flex items-center font-semibold  text-green-600 text-[50px]">
            234+
          </p>
          <p className=" mt-[10px] items-center gap-3 text-[20px] font-semibold">
            Wealth Management and Investment Advisory
          </p>
          <p className="my-[50px] font-sans text-gray-500 ">
            This book explores the role of financial wader steering companies
            through <br /> economic challenges. It offers practical achrice
          </p>
          <p className="flex items-center font-semibold  text-green-600 text-[50px]">
            66+
          </p>
          <p className=" mt-[10px] items-center gap-3 text-[20px] font-semibold">
            Debt Management and Credit Counseling
          </p>
          <p className="my-[50px] font-sans text-gray-500 ">
            This book explores the role of Nnancial leader steering companies
            throug <br /> economic challenges. It offers proctical advice
          </p>
          <button className="bg-black mt-[10px] text-white py-2 px-5 rounded-3xl">
            Discover
          </button>
        </div>
        <div className="c">
          <div className="bg-white w-[320px] ml-[200px] mt-[100px] h-[160px]   rounded-xl p-[10px]">
            <div className="flex  items-center gap-[20px]">
              <img className="h-[60px] rounded-full" src={mes} alt="" />
              <h1 className="font-semibold  text-[20px]">
                Assist client in planning
              </h1>
            </div>
            <h1 className="my-[20px] text-gray-600">
              Ensure clients have a clear plat maintain their Desired lifestyle
              post-retirement
            </h1>
          </div>
          <div className="bg-white w-[320px] ml-[200px] mt-[100px] h-[160px]   rounded-xl p-[10px]">
            <div className="flex  items-center gap-[20px]">
              <img className="h-[60px] rounded-full" src={me} alt="" />
              <h1 className="font-semibold  text-[20px]">
                Financial Education
              </h1>
            </div>
            <h1 className="my-[20px] text-gray-600">
              Ensure clients have a clear plat maintain their Desired lifestyle
              post-retirement
            </h1>
          </div>
          <div className="bg-white w-[320px] ml-[200px] mt-[100px] h-[160px]   rounded-xl p-[10px]">
            <div className="flex  items-center gap-[20px]">
              <img className="h-[60px] rounded-full" src={me} alt="" />
              <h1 className="font-semibold  text-[20px]">Insurance Planning</h1>
            </div>
            <h1 className="my-[20px] text-gray-600">
              Ensure clients have a clear plat maintain their Desired lifestyle
              post-retirement
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
