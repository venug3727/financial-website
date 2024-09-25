import React from "react";
import logo from "./images/image.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="flex items-center flex-wrap bg-white p-[20px] sticky top-0 z-50 justify-between">
        <div className="flex items-center">
          <img className="h-[70px]" src={logo} />
          <h1 className="font-semibold text-4xl">
            <Link to="/">fiscus</Link>
          </h1>
        </div>

        <ul className="flex items-center gap-[90px]">
          <li className="text-lg font-semibold text-gray-600 hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg font-semibold text-gray-600 hover:text-black">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-lg font-semibold text-gray-600 hover:text-black">
            <Link to="/service">Services</Link>
          </li>
          <li className="text-lg font-semibold text-gray-600 hover:text-black">
            <Link to="/whyus">Page</Link>
          </li>
          <li className="text-lg font-semibold text-gray-600 hover:text-black">
            <Link to="/contact">Blog</Link>
          </li>
        </ul>

        <button className="bg-black text-white px-[30px] text-2xl  rounded-full py-[10px]">
          Sign In
        </button>
      </div>
    </>
  );
}

export default Header;
