import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import login from '../assets/img/login.png'
import { Headphones } from "lucide-react";

import { CircleArrowRight, MessageCircleMore } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();

    const handleCustomerRedirect = () => {
      navigate("/Customer "); // Navigates to the coustomer page
    };
    const handleProfessionalRedirect = () =>{
        navigate("/Professional");

    };
    const handleHairlRedirect = () =>{
        navigate("/");

    };
   
    return (
        <div className='flex flex-row  ml-5 w-full h-full '>
            <div className='flex  mt-35    flex-col'>
                <div className='w-5 h-1 '>
                <GoArrowLeft size={24}  
                onClick={handleHairlRedirect}        
                className='text-[#000000] ' />
                </div>
                <div className='font-sans font-bold text-2xl text-[#000000] mt-8'>
                    <span>Sign up/log in</span>
                </div>
                <div className='w-150 h-25  flex shadow-md border  mt-6 border-[#D9D9D9]'>
                    <div className='flex ml-5  flex-col'>
                        <p className=' w-70   font-bold size-[22px] mt-5 h-3'>Tajmeel For Customer</p>
                        <span className='size-[18px] mt-3 w-[276px]'>Book Saloon & Spa Near You</span>
                    </div>
                    <button 
                     onClick={handleCustomerRedirect}
                    className="w-12 h-12 flex   ml-65 mt-8 rounded-full text-[#000000] transition duration-300">
                     <CircleArrowRight size={24} />
                       </button>

                </div>

                <div className=' mt-5  w-150 h-25 flex shadow-md border border-[#D9D9D9]'>
                    <div className='flex flex-col ml-5'>
                        <p className=' w-70   font-bold size-[22px] mt-5 h-3'>Tajmeel For Professional</p>
                        <span className='size-[18px] mt-3 w-[276px]'>Manage and grow your Business</span>
                    </div>
                    <button
                      onClick={handleProfessionalRedirect}
                     className="w-12 h-12 flex  ml-65 mt-8 text-[#000000] rounded-full   transition duration-300">
                     <CircleArrowRight size={24} />
                       </button>

                </div>

                <div className='w-[266px] h-[39px] flex ml-3  space-x-20 mt-70' >
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
            <div className=' mt-10 '>
                <img src= {login} className='ml-35  h-178' />

            </div>
            
        </div> 
    );
}

export default Login;
