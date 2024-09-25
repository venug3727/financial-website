import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowLeftLong } from "react-icons/fa6";

function WhyUs() {
  return (
    <>
      <Header />
      <div className="p-[40px] flex flex-col bg-slate-100 justify-between ">
        <div className="flex justify-between items-center">
          <div className="c">
            <div className="flex gap-3 items-center ">
              <div className="bg-green-700 h-[15px] w-[15px] rounded-full "></div>
              <h1 className="underline ">WhyChooseUs</h1>
            </div>
            <h1 className="text-[40px] leading-[40px] my-[10px]">
              Unlocking <span className="text-green-600">Financial</span> <br />
              Success <span className="font-semibold">Management</span>
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[18px] font-semibold underline">
              This book delves into the intricacies of wealth managemerit,
              offering
            </span>
            <span className="leading-loose">
              {" "}
              rendoring comprehensive strategies to grow ond protect thei assets
              it <br /> cover topics ranging from investrvent aversification to
              tax <br /> optimuation tafered for the contemporary
            </span>
          </div>
        </div>
        <div className=" flex justify-between my-[50px]">
          <div className="bg-white w-[300px] rounded-xl items-center justify-center flex flex-col">
            <h1 className="text-[20px] underline mt-[40px]">
              Tax Planning and Optimization
            </h1>
            <div className="bg-gray-400 w-[250px]  h-[200px] mt-[40px] mb-[30px]  rounded-xl"></div>
          </div>
          <div className="bg-green-800 h-[250px]  mt-[90px] rounded-xl">
            <h1 className="text-[20px] text-white underline m-[40px]  ">
              Tax Planning and Optimization
            </h1>
            <h1 className="m-[40px] text-center text-white leading-relaxed">
              Offer comprehensive tax planning services both <br /> Individuals
              and businesses, helping cli minimize <br /> tas kabilities and
              maximize after tax
            </h1>
            <div className="items-center justify-between px-[60px] flex">
              <div className="bg-white h-[3px] w-[60px] rounded-3xl"></div>
              <div className="bg-white h-[3px] w-[60px] rounded-3xl"></div>
              <div className="bg-white h-[3px] w-[60px] rounded-3xl"></div>
              <div className="bg-white h-[3px] w-[60px] rounded-3xl"></div>
            </div>
          </div>
          <div className="bg-gray-300 w-[300px] rounded-xl items-center justify-center flex flex-col">
            <div className="bg-white h-[70px] w-[70px] items-center justify-center flex -rotate-45 ml-[200px] mt-[250px]  rounded-full">
            <FaArrowLeftLong color="green" className="text-2xl " /></div>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WhyUs;
