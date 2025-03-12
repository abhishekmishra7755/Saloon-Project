import React from "react";
import img1 from '../assets/img/img1.png'
import imgh1 from '../assets/img/imgh1.png'
import { FaWineBottle } from 'react-icons/fa';
import { SearchIcon, MapPin, Calendar} from 'lucide-react';




const BackImg = () => {
    return (
        <div className="relative -ml-22 overflow-x-hidden w-full h-screen">
        {/* Background Image */}
        <img 
          src={img1}
          alt="Background"
            className="absolute  max-w-[1920px] max-h-[539px]  inset-0 w-full h-full object-cover"
        />
       
  
        {/* Simple Form Container */}
        <div className=" absolute top-25 max-w-[461px] max-h-[640px]   flex items-center ml-245">
          <div className="bg-[#FFFFFF]  p-5 max-w-[461px] max-h-[640px]    mb-55">
             {/* Saloon Icon and Title  line */}
             <div className="flex">
             <FaWineBottle className="text-[#000000] size={30}" />

            <h1 className="font-bold text-[#000000] ml-2">Saloon</h1>
          </div>
          <div className="w-20 border-t-2 p-4 border-[#ED2D77] hover:to-blue-600 "></div>
  
            <form className="mb-10 w-[300px] h-[200px]">
              <div className="mb-3 relative">
              <SearchIcon className="absolute left-3 top-3 text-gray-400" size={20} />

                <input
                  type="text"
                  placeholder="Search for Treatment"
                  className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
  
              <div className="mb-3 relative  ">
                <MapPin className="absolute left-3 top-3  text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Enter Postcode or Area"
                  className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
  
              <div className="mb-3 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
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
    );
  };
  
  export default BackImg;
  