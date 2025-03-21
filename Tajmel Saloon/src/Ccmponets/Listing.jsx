import React from 'react';
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import img4 from '../assets/img/img4.png'
import last1 from '../assets/img/last1.png'
import last2 from '../assets/img/last2.png'
import imgl1 from '../assets/img/imgl1.png'
import imgs1 from '../assets/img/imgs1.png'
import imgl2 from '../assets/img/imgl2.png'
import imgl3 from '../assets/img/imgl3.png'
import imgl4 from '../assets/img/imgl4.png'
import { FaHeart, FaStar,FaShareAlt, FaSearch } from 'react-icons/fa';
import BackImg from '../Ccmponets/BackImg';



const Listing = () => {
    return (
        <div className='w-full  h-full '>
        {/* back img and form*/}
       
     <div className='w-[1920px] h-[593px] '>
     <BackImg/>
     </div>
   
    

    {/* block2start*/}

    <div  className=' space-x-20 mt-4 ml-15'>
     <p className='font-sans  text-xl left-7 mt-5  font-bold text-450px text-black'>Popular Treatement</p>
    
    </div> 

    <div className="absolute ml-25  mt-4 left-10 w-3/4 flex space-x-4">
   <div className="flex items-center bg-[#ED2D77]  rounded-xl  shadow-md w-1/3">
     <FaSearch className="text-white ml-2" />
     <input
       type="search"
       placeholder="Hair saloon"
       className="w-full p-2 rounded-md bg-transparent text-white focus:outline-none"
     />
   </div>
   <div className="flex items-center border-1 bg-white rounded-xl shadow-md w-1/3">
     <FaSearch className="text-gray-500 ml-2" />
     <input
       type="text"
       placeholder="Dental"
       className="w-full p-2  bg-transparent text-[#000000] focus:outline-none"
     />
   </div>
   <div className="flex items-center  border-1 text-[#000000] rounded-xl shadow-md w-1/3">
     <FaSearch className="text-gray-500 ml-2" />
     <input
       type="text"
       placeholder="Dirversity of clinic"
   className="w-full p-2 rounded-md radius overflow-auto bg-transparent text-black focus:outline-none"
     />
   </div>
 </div>

<div className='mt-30 ml-12'>
 <p className='font-sans  text-xl font-bold text-450px text-black' >
   Recommended
 </p> 
 
</div>


    {/* image */}
<div className="relative mt-3 ml-12 border-radius w-full max-w-lg mx-auto group">
 
 <div className="flex space-x-4">
   <img
     src={imgs1}
     alt="img1"
     className="w-70 "
   />
   <img
     src={img2}
     alt="img2"
     className="w-70"
   />
   <img
     src={img3}
     alt="img3"
     className="w-70 "
   />
    <img
     src={img4}
     alt="img4"
     className="w-70" />
 </div>
 </div>
{/* description */}
  <div className="relative  flex  h-40 w-70 -mt-4 ml-12 max-w-lg mx-auto group">
 
 <div className="flex flex-row  space-x-4">
 <div className="flex flex-col  shadow-md border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">RB Studio</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8   mb-1 border border-[#ED2D77]">View Details</button>
 </div>
{/* description 2*/}
<div className="flex flex-col  shadow-md border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">Uptown Hair</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8   mb-1 border border-[#ED2D77]">View Details</button>
 </div>
 <div className="flex flex-col  shadow-md border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">Curls & More</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8  mb-1 border border-[#ED2D77]">View Details</button>
 </div>
 <div className="flex flex-col  shadow-md border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">Braids & Layers</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8  border border-[#ED2D77] mb-1 ">View Details</button>
 </div>

 
 </div>

   </div>

 
{/*   img2 description2 */}
 
<div className="relative mt-3 ml-12 border-radius w-full max-w-lg mx-auto group">
 
 <div className="flex space-x-4">
   <img
     src={imgl1}
     alt="img1"
     className="w-70 "
   />
   <img
     src={imgl2}
     alt="img2"
     className="w-70"
   />
   <img
     src={imgl3}
     alt="img3"
     className="w-70 "
   />
    <img
     src={imgl4}
     alt="img4"
     className="w-70" />
 </div>
 </div>
{/* description */}
  <div className="relative  flex  h-40 w-70 -mt-4 ml-12 max-w-lg mx-auto group">
 
 <div className="flex flex-row  space-x-4">
 <div className="flex flex-col  shadow-md border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">The Cleanup</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8  mb-1 border border-[#ED2D77]">View Details</button>
 </div>
{/* description 2*/}
<div className="flex flex-col  shadow-md border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">Hair Artistry</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8   mb-1 border border-[#ED2D77]">View Details</button>
 </div>
 <div className="flex flex-col  shadow-md border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">Curls & More</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8  mb-1 border border-[#ED2D77]">View Details</button>
 </div>
 <div className="flex flex-col  shadow-md border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">Braids & Layers</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8   mb-1 border border-[#ED2D77]">View Details</button>
 </div>
 </div>
   </div>

  

   {/* description3 img3*/}
   <div className="relative mt-3 ml-12">
 
 <div className="flex space-x-4">
   <img
     src={last1}
     alt="img1"
     className=" w-70  h-70"
   />
   <img
     src={last2}
     alt="img2"
     className="w-70 h-70"
   />

 </div>
 </div>
{/* description1 */}
  <div className="relative  flex  h-40 w-70 -mt-4 ml-12 max-w-lg mx-auto group">
 
 <div className="flex flex-row  space-x-4">
 <div className="flex flex-col  shadow-md border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">Fashion Forward</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8   mb-1 border border-[#ED2D77]">View Details</button>
 </div>

{/* description 2*/}
<div className="flex flex-col  shadow-md  border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
   <p className="  ml-2 mt-3 font-bold">Hair Parlour</p>
   <div className="flex items-center">
     <span className=" -mt-3   ml-2 font-semibold">4.9</span>
     <FaStar className="text-black -mt-3  ml-1" />
   </div>
   <p className="text-gray-600 -mt-3  ml-2 ">Sector 57 Iraq Market</p>
   <button className=" text-black ml-2 w-30 h-8  border border-[#ED2D77] mb-1 ">View Details</button>
 </div>
 </div>
 

 
   </div>
  
     {/* footer section start*/}
     </div>
      
    );
}

export default Listing;
