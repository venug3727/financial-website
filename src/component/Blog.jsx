import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Blog() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="flex gap-3 items-center ">
          <div className="bg-green-700 h-[15px] w-[15px] rounded-full "></div>
          <h1 className="underline text-lg ">Blog</h1>
        </div>
        <div className="text-center flex mt-[30px] justify-between mb-8">
          <h1 className="text-5xl font-semibold text-gray-800">
            Global Markets <span className="text-green-600">Unveiled</span>{" "}
            <br />
            <span className="text-green-600">Complexities</span> Inter
          </h1>
          <div className="flex flex-col">
            <p className="mt-4 text-gray-500 text-left text-lg">
              <span className="font-semibold underline">
                Designed for individuals looking to take control of their
                financial destiny
              </span>{" "}
              <br />
              <span className="c">
                this service provides step-by-step instructions on budgeting.
              </span>
            </p>
            <button className="mt-6 px-6 py-3 h-[50px] w-[150px] bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700">
              Discover
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-[70px]">
          <div className="bg-gray-300 rounded-xl">
            <div className="bg-white rounded-lg mt-[120px] shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="h-3 w-3 bg-green-600 rounded-full mr-2"></span>
                <span className="text-sm text-gray-500">Admin</span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-sm text-gray-500">12 Aug 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The Import Financial Planning for <br /> Long Term Success
              </h3>
              <p className="text-gray-600">
                Ensure clients have a clear plan to maintain their desired
                lifestyle post-retirement.
              </p>
            </div>
          </div>

          <div className="bg-gray-300 rounded-xl">
            <div className="bg-white rounded-lg mt-[120px] shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="h-3 w-3 bg-green-600 rounded-full mr-2"></span>
                <span className="text-sm text-gray-500">Admin</span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-sm text-gray-500">12 Aug 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The Import Financial Planning for <br /> Long Term Success
              </h3>
              <p className="text-gray-600">
                Ensure clients have a clear plan to maintain their desired
                lifestyle post-retirement.
              </p>
            </div>
          </div>

          <div className="bg-gray-300 rounded-xl">
            <div className="bg-white rounded-lg mt-[120px] shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="h-3 w-3 bg-green-600 rounded-full mr-2"></span>
                <span className="text-sm text-gray-500">Admin</span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-sm text-gray-500">12 Aug 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The Import Financial Planning for <br /> Long Term Success
              </h3>
              <p className="text-gray-600">
                Ensure clients have a clear plan to maintain their desired
                lifestyle post-retirement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
