import React from "react";
import { FaPlane, FaCloud } from "react-icons/fa";
import { FiBook } from "react-icons/fi";

const TrustedBySection = () => {
  return (
    <div className="py-10 px-6 md:px-8 lg:px-16 bg-gray-200">
      {/*Title*/}
      <p className="text-center text-lg md:text-xl lg:text-2xl font-light mb-6">
        As featured in
      </p>

      {/*Vendors Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 text-gray-800">

        {/*Travel Blog*/}
        <div className="flex items-start text-center">
          <FiBook className="text-4xl self-center" />
          <span className="text-2xl font-bold leading-none">travel </span>
          <span className="text-2xl text-gray-600 mt-6">blog</span>
        </div>

        {/*Divider*/}
        <div className="hidden md:block h-20 border-l border-gray-400"></div>

        {/* Planet Tour */}
        <div className="flex flex-col items-center">
          <FaPlane className="text-2xl" />
          <span className="text-2xl">PLANE<b>TOUR</b></span>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-20 border-l border-gray-400"></div>

        {/* World Travel */}
        <div className="flex flex-col items-center text-center">
          <span className="text-2xl font-bold">WORLD</span>
            <span className="text-2xl font-bold">TRAVEL</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-20 border-l border-gray-400"></div>

        {/* Sky Cloud */}
        <div className="flex flex-col items-end">
          <FaCloud className="text-3xl" />
          <span className="text-2xl font-semibold">skycloud</span>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
