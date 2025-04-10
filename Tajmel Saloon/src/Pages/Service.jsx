import React from "react";
// import Haircont from '../assets/img/Haircont.png'

import { FaWineBottle } from "react-icons/fa";
import { SearchIcon, MapPin, Calendar } from "lucide-react";
import Haircont from "../assets/img/Haircont.png";
import serv2 from "../assets/img/serv2.png";
import serv1 from "../assets/img/serv1.png";
import serv3 from "../assets/img/serv3.png";

const Service = () => {
  return (
    <div>
      <div className=" overflow-x-hidden w-full   h-screen">
        {/* Background Image */}
        <img
          src={Haircont}
          alt="Background"
          className="absolute  mt-10 max-w-[1920px] max-h-[539px]  inset-0 w-full h-full object-cover"
        />

        <div className="flex mt-50 items-center">
          <div className="relative  ml-120 h-28 w-1">
            <div
              className=" top-20 h-1/2 w-full bg-pink-500"
              style={{ backgroundColor: "#ED2D77" }}
            ></div>
            <div className="top-20 h-1/2 w-full bg-black"></div>
          </div>
          <div className="relative ml-6">
            {" "}
            <span className=" text-4xl font-bold font-sans text-[#FFFFFF]">
              Services
            </span>
          </div>
        </div>

        {/* Simple Form Container */}
        <div className=" absolute top-40 max-w-[461px] max-h-[640px]   flex items-center ml-230">
          <div className="bg-[#FFFFFF]  p-5 max-w-[461px] max-h-[640px]    mb-55">
            {/* Saloon Icon and Title  line */}
            <div className="flex">
              <FaWineBottle className="text-[#000000] size={30}" />

              <h1 className="font-bold text-[#000000] ml-2">Saloon</h1>
            </div>
            <div className="w-20 border-t-2 p-4 border-[#ED2D77] hover:to-blue-600 "></div>

            <form className="mb-10 w-[300px] h-[200px]">
              <div className="mb-3 relative">
                <SearchIcon
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Search for Treatment"
                  className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-3 relative  ">
                <MapPin
                  className="absolute left-3 top-3  text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Enter Postcode or Area"
                  className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-3 relative">
                <MapPin
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Any Date"
                  className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ED2D77] text-white p-3 rounded font-medium  transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/*   services description */}
      <div className="flex    items-center flex-col">
        <h1 className="text-[#000000]  -mt-30 font-bold text-3xl w-50 h-[63px] font-sans ">
          Services
        </h1>

        <p className="text-[#000000] font-sans   w-250">
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of
        </p>
        <p className="text-[#000000] font-sans  w-160">
          {" "}
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as
        </p>
      </div>

      {/*   img services description */}

      <div className="relative mt-3  -left-10 ml-12 border-radius w-full max-w-lg mx-auto group">
        <div className="flex space-x-4">
          <img src={serv1} alt="img1" className="w-100 " />
          <img src={serv2} alt="img2" className="w-100" />
          <img src={serv3} alt="img3" className="w-100" />
        </div>
      </div>

      {/*  img services description */}
      <div className="relative  flex  h-40 w-70 -mt-4 -ml-0 max-w-lg mx-auto group">
        <div className="flex flex-row  space-x-4">
          <div className="flex flex-col     w-100  focus:outline-none items-start space-y-2 mt-4">
            <p className=" ml-3  mt-3 font-bold">diversity of clinic </p>
            <div className="flex items-center"></div>

            <button className=" text-[#010101] ml-3 w-25 h-8  mb-1 border border-[#EE2478]">
              Get the App
            </button>
          </div>

          <div className="flex flex-col w-100    focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3 mt-3 font-bold">Saloon</p>
            <div className="flex items-center"></div>

            <button className=" text-[#010101] ml-3 w-25 h-8   mb-1 border border-[#EE2478]">
              Get the App
            </button>
          </div>
          <div className="flex flex-col     w-100 focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3 mt-3 font-bold">Dental</p>
            <div className="flex items-center"></div>

            <button className=" text-[#010101] ml-3 w-25 h-8  mb-1 border border-[#EE2478]">
              Get the App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
