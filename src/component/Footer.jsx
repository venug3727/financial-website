import React from "react";
import logo from "./images/image.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
    <hr className="w-full h-[2px]  bg-gray-200 border-0 rounded dark:bg-gray-300" />
      <div className="flex items-center w-full p-[50px] sm:flex-wrap  justify-between">
        
        <div className="c">
            
          <div className="flex items-center gap-1">
            <img className="h-[60px]" src={logo} />
            <h1 className="text-2xl font-semibold">fiscus</h1>
          </div>
          <p className="font-sans text-gray-600 text-lg mt-[20px]">
            Financial planning like a dies for your financial <br /> journey it helps
            you set clear goals ant outlines <br /> the steps you need 
          </p>
          <div className="flex text-2xl mt-[30px] gap-3">
          <FaXTwitter className="hover:scale-90 cursor-pointer" color="green" />
          <FaFacebook className="hover:scale-90 cursor-pointer" color="green" />
          <FaInstagramSquare className="hover:scale-90 cursor-pointer" color="green" />
          <FaGithub className="hover:scale-90 cursor-pointer" color="green" />
          </div>
        </div>
        <div className="flex flex-col">
            <h1 className="uppercase font-semibold text-lg text-green-600 ">company</h1>
            <ul className="text-gray-600 ">
                <li className="mt-[15px]  hover:text-black hover:font-semibold" >About</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">Features</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">Works</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">Carear</li>
            </ul>
        </div>
        <div className="flex flex-col">
            <h1 className="uppercase font-semibold text-lg text-green-600 ">help</h1>
            <ul className="text-gray-600 ">
                <li className="mt-[15px]  hover:text-black hover:font-semibold" >Customer Support</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">Delivery Details</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">Terms & conditions</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">Privecy Policy</li>
            </ul>
        </div>
        <div className="flex flex-col">
            <h1 className="uppercase font-semibold text-lg text-green-600 ">resorces</h1>
            <ul className="text-gray-600 ">
                <li className="mt-[15px]  hover:text-black hover:font-semibold" >Free eBook</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">Development Tutorials</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">How to Blog</li>
                <li  className="mt-[15px]  hover:text-black hover:font-semibold">Youtube Playlist</li>
            </ul>
        </div>
     
        
      </div>
      <hr className="w-full h-[2px]  bg-gray-200 border-0 rounded dark:bg-gray-300" />
      <div className="flex justify-center items-center my-[40px] text-gray-500">
        <h1>&copy;Copyrights 2024. All Rights Reserved By Enative</h1>
      </div>
    </>
  );
}

export default Footer;
