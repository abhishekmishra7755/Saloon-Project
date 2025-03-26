import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft} from "lucide-react";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import prop from '../assets/img/prop.png'
import { Headphones,MessageCircleMore } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react"; // Import icons for visibility toggle
import sign from '../assets/img/sign.png'
import fa1 from '../assets/img/fa1.png'
import ga from '../assets/img/ga.png'



const Professional = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
      const { register, handleSubmit, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        console.log("Password Submitted:", data.password);
      };

      const handleFacebookLogin = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
      };
    

  useEffect(() => {
    const isAuthenticated = true; // Replace this with real auth check
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLoginRedirect = () =>{
    navigate("/Login");

};

const handleSign = () => {
  navigate('/SignUp1')

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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full  bg-white">
        <div>
        <input
             type="email"
             placeholder="Enter Email"
             {...register("email", {
               required: "Email is required",
               pattern: {
                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                 message: "Invalid email format",
               },
             })}
          className="w-full p-2  rounded-b-sm  mb-4 hover:bg-gray-100 text-[#878787] border border-[#C2C2C2] focus:outline-none focus:ring-2 "
        />
         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
         </div>
         <div>
           <input 
            type={showPassword ? "text" : "password"}
             placeholder="Enter Password"
             {...register("password", {
               required: "Password is required",
               minLength: { value: 6, message: "Password must be at least 6 characters" },
               pattern: {
                 value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                 message: "Password must contain letters & numbers",
               },
             })}
            className="w-full p-2  rounded-b-sm  mb-4  hover:bg-gray-100 text-[#878787] border border-[#C2C2C2] focus:outline-none focus:ring-2 "
          />
          <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className=" -mt-12  ml-120 flex items-center text-black"
        >
          {showPassword ? <EyeOff className="w-5  cursor-pointer h-5" /> : <Eye className="w-5  cursor-pointer h-5" />}
        </button>
            </div>
            {/* Error Message */}
            {errors.password && <p className="text-red-500   text-sm mt-2">{errors.password.message}</p>}

            <div className='mt-7'>
            <button type="submit" className="w-full bg-[#2B2B2B] h-[50px] hover:bg-[#EE2478]  cursor-pointer rounded-b-lg text-[#FFFFFF] py-2 transition">
              Continue
            </button>
            </div>
            </form>
        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t   border-[#C2C2C200]  bg-[#5C5C5C]"></div>
          <span className="mx-2 text-[#000000]">or</span>
          <div className="flex-grow border-t bg-[#5C5C5C]"></div>
        </div> 


        <button className="w-full flex items-center justify-center gap-2 cursor-pointer  hover:bg-gray-100  border border-[#C2C2C2]  text-[#000000] py-2 rounded-b-sm mb-4   transition">
        <div> <img src={fa1}  className='space-y-5' /></div>
         Continue with Facebook 
        </button>
        <button
         onClick={handleFacebookLogin}
         className="w-full flex border  font-sans  cursor-pointer   rounded-b-sm items-center text-[#000000]  border-[#C2C2C2] justify-center  py-2  mb-4 hover:bg-gray-100 transition">
          <div> <img src={ga}  className='-ml-2' /></div>
          Continue with Google
        </button>

        <button 
        onClick={handleSign}
        className="w-full flex border  font-sans  cursor-pointer   rounded-b-sm items-center text-[#000000]  border-[#C2C2C2] justify-center  py-2  mb-4 hover:bg-gray-100 transition">
        <div>
        <img src={sign}  className='-ml-2' />
        </div>
          Continue with SignUp
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
