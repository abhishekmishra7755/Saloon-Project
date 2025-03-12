import React from 'react';
import { FaWineBottle } from 'react-icons/fa';
import { SearchIcon, MapPin, Calendar} from 'lucide-react';
import { FaRegClock } from "react-icons/fa";


import Haircont from '../assets/img/Haircont.png'
import contus from '../assets/img/contus.png'

const ContactUs = () => {
    return (
      <>
 
            <div className=" overflow-x-hidden w-full h-screen">
        {/* Background Image */}
        <img 
          src={Haircont}
          alt="Background"
            className="absolute  mt-10 max-w-[1920px] max-h-[539px]  inset-0 w-full h-full object-cover"
        />
       
        {/* middle line Container */}
       <div className="flex mt-50 items-center">
      <div className="relative  ml-120 h-28 w-1">
        <div className=" top-20 h-1/2 w-full bg-pink-500" style={{ backgroundColor: '#ED2D77' }}></div>
        <div className="top-20 h-1/2 w-full bg-black"></div>
      </div>
      <div className='relative ml-6'> <span className=" text-4xl font-bold font-sans text-[#FFFFFF]">Contact us</span></div>
     
    </div>
  
        {/* Simple Form Container */}
        <div className=" absolute top-50 max-w-[461px] max-h-[640px]   flex items-center ml-230">
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
        <div className='flex flex-col -mt-35 h-[63px] items-center '>
        <p className='text-[#000000]  text-[15px] font-sans'>Contact Us</p>
        <h2 className='text-[#000000]    text-2xl  font-bold font-sans'>Drop Us a Line</h2>
        <p className='text-[#000000]  mt-4  ml-8 text-[15px] w-225  font-sans'>established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
       </p>
        <p  className='text-[#000000]  -ml-17 text-[15px]  font-sans'> 
        using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>

      </div>

          <div className='flex flex-row mt-30  w-full h-full  '>
             {/* Background Image */}
        <img 
          src={contus}
          alt="Background"
            className="  w-300 h-120  "
        />
               {/* contact us form*/}
         
        <div  className=" absolute     ml-10 w-[1250px] h-[536px]  space-x-60  flex   ">
          
          <div className='flex    mt-25 flex-col space-x-5'>
          <div className='flex  space-x-3 '>
            <div className="mb-3  bg-[#F9F9F9] ">
             
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 p-2 rounded     text-[#9C9C9C] border border-[#DDDDDD] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-3  bg-[#F9F9F9] ">
             
             <input
               type="text"
               placeholder="Email"
               className="w-full pl-10 p-2 rounded   border-2  text-[#9C9C9C]  border-[#DDDDDD] focus:outline-none focus:ring-2 focus:ring-blue-400"
             />
           </div>
           </div>

           <div  className='flex space-x-3'>
           <div className="mb-3  bg-[#F9F9F9] ">
             
             <input
               type="text"
               placeholder="Phone Number"
               className="w-full pl-10 p-2 rounded     text-[#9C9C9C] border border-[#DDDDDD] focus:outline-none focus:ring-2 focus:ring-blue-400"
             />
           </div>
           <div className="mb-3  bg-[#F9F9F9] ">
          
          <input
            type="text"
            placeholder="Select Subject"
            className="w-full pl-10 p-2 rounded   border-2  text-[#9C9C9C]  border-[#DDDDDD] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
           </div>

           <div className="w-[480px]  text-[#9C9C9C] h-[150px] bg-[rgb(249,249,249)] border border-[#DDDDDD] flex items-center justify-center"
    >
             <input
                 type="text"
                 placeholder="Type here..."
                    className="w-[480px] h-[150px]  -left-3 bg-[#F9F9F9] border border-[#DDDDDD]  text-lg"
    />
               </div>

                 <button className='bg-[#EE2478]  mt-4 text-[14px] text-[#FFFFFF] w-[160px] h-[50px]' >Send Message</button>
           

          </div>
          <div  className='flex   mt-25 flex-col ml-25'>
          <div className="flex   w-[350px] h-[200px]  bg-white">
      <div className=" flex  space-x-3">
       <div> <MapPin className="text-4xl text-black    border-1 w-[25px] h-[25px] border-[#EE2478] rounded-full" /></div>
       
       <div className='flex   flex-col'>
       <p className="font-bold text-[15px] left-20 -mt-1">Tajmeel Spot Location</p>
        <p className='text-[#545454]  font-sans    text-[15px]'>combined with a handful of model to</p>
         <p className='text-[#545454]  font-sans  text-[15px]'> generate Lorem Ipsum which looks ener</p>
        <p className='text-[#545454]  font-sans    text-[15px]'>ated Lorem Ipsum is.</p>
       </div>
      </div>
    </div>

    <div className="flex w-[250px] h-[100px]  -mt-20 bg-white">
      <div className=" flex  space-x-3">
     
      <div className="w-[30px] h-[30px]    text-[10px] flex items-center justify-center border-1 border-[#EE2478] rounded-full bg-[#F9F9F9]  text-black  font-bold">
            <span>24/7</span>
          </div>
       <div className='flex  flex-col'>
       <p className="font-bold text-[15px] left-20  -mt-1">Opening Hours</p>
        <p className='text-[#545454]  font-sans    text-[15px]'>Monday – Friday 09:00 – 23:00</p>
         <p className='text-[#545454]  font-sans  text-[15px]'> Saturday 09:00 – 22:00</p>
       
       </div>
      </div>
    </div>


    </div>
        </div>

      

   

      </div>
      </>
    );


}

export default ContactUs;




