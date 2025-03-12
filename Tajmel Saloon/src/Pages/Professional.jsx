import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft} from "lucide-react";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import prop from '../assets/img/prop.png'
import { Headphones,MessageCircleMore } from "lucide-react";


const Professional = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = true; // Replace this with real auth check
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLoginRedirect = () =>{
    navigate("/Login");

};

    return (
      <div className="min-h-screen flex">
      {/* Left Section (Form) */}
      <div className="w-1/2 bg-white flex  
      
      flex-col justify-center items-center mt-20 p-5">
        <button className="self-start mb-4  flex items-center text-gray-700 hover:text-gray-900"
         onClick={handleLoginRedirect}
        >
          <ArrowLeft className="" /> 
        </button>
        <h1 className="text-xl  -ml-77   font-bold mt-5">Tajmeel for Professional</h1>
        <p className=" text-[#000000]  font-sans -ml-35 p-3 mb-2">Create an account or log in to manage your business.
        </p>
        <input
          type="email"
          placeholder="Enter Email address"
          className="w-full p-2  rounded-b-sm  mb-4  text-[#878787] border border-[#C2C2C2] focus:outline-none focus:ring-2 "
        />
           <button className="w-full bg-[#2B2B2B]   rounded-b-sm  text-[#FFFFFF] py-2 transition">
          Continue
        </button>
        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t   border-[#C2C2C200]  bg-[#5C5C5C]"></div>
          <span className="mx-2 text-[#000000]">or</span>
          <div className="flex-grow border-t bg-[#5C5C5C]"></div>
        </div> 


        <button className="w-full flex items-center justify-center hover:bg-gray-100  border border-[#C2C2C2]  text-[#000000] py-2 rounded-b-sm mb-4  transition">
       <FaFacebook className="mr-2  font-sans text-blue-600" />
         Continue with Facebook 
        </button>
        <button className="w-full flex border  font-sans  rounded-b-sm items-center text-[#000000]  border-[#C2C2C2] justify-center  py-2  mb-4 hover:bg-gray-100 transition">
          <FcGoogle className="mr-2 " /> Continue with Google
        </button>
        <p className="mt-3   flex-col text-[#000000]">
        Are you a customer looking to book an appointment?
          <a href="/customer" className="text-[#EE2478] flex ml-20 hover:underline">Go to Tajmeel for Customers</a>
        </p>
        <div className='w-[266px] h-[39px] flex -ml-63 space-x-27  mt-30' >
      <div className='flex w-[20px]  space-x-3 h-[20px]'>
        <div className='text-[#000000] space-x-2'><MessageCircleMore size={24} /></div> 
   <p className='text-[#000000] font-sans text-[16px]'>English</p>
   </div>
    <div className='flex w-[20px]  space-x-3 h-[20px]'>
   
    <div className='text-[#000000] '><Headphones size={24} /></div>
<p className=' text-xl text-[#000000] font-sans text-[16px]'>Support</p>
   </div>
  </div>
      </div>
    
      {/* Right Section (Image) */}
      <div className="  mt-12 -mr-28" >
      <img src={prop}   className='  w-[910px] h-[700px]'  />
      </div>
    </div>
    );
}

export default Professional;
