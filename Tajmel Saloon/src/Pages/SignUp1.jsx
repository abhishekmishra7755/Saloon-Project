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
import { ImSpinner2 } from "react-icons/im"; // Loader Icon


const SignUp1 = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true); // Show loader
    console.log("Signup Data:", data);

    // Simulating API request delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false); // Hide loader
    alert("Signup Successful!");
    reset(); // Clear form after submission
    navigate("/Dashboard");
  };
    

  useEffect(() => {
    const isAuthenticated = true; // Replace this with real auth check
    if (!isAuthenticated) {
      navigate("/Final");
    }
  }, [navigate]);

  const handleLoginRedirect = () =>{
    navigate("/Professional");

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
        <h1 className="text-[25px]   w-[400px]  font-sans  -ml-30 font-bold text-[#000000]   mt-5">Sign Up for Professional Services</h1>
        <p className=" text-[#000000]  text-[20px] font-sans -ml-33 p-3 mb-2">Create an account to manage your business.
        </p>
            <div className='w-full min-h-screen  -ml-2.5'>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full h-screen">
        {/* Full Name Field */}
        <div>
          <input
            type="text"
            placeholder="Enter Full Name"
            {...register("fullName", {
              required: "Full Name is required",
              minLength: { value: 3, message: "At least 3 characters required" },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces allowed",
              },
            })}
            className="w-full p-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            placeholder="Enter  Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            className="w-full p-3 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters required" },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                message: "Must contain letters & numbers",
              },
            })}
            className="w-full p-3 pr-10 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => value === watch("password") || "Passwords do not match",
            })}
            className="w-full p-3 pr-10 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button with Loader */}
        <button
          type="submit"
          disabled={loading}
          className={`bg-[#000000] mt-4 text-white w-full p-3 rounded-md   h-[60px] flex justify-center items-center gap-2 ${
            loading ? "opacity-50 cursor-allowed" : "hover:bg-[#EE2478] transition"
          }`}
        >
          {loading ? (
            <>
              <ImSpinner2 className="animate-spin w-5 h-5" />
              Sign Up Now...
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>
            </div>
      
          
        
          
         
    


     </div>
       
      {/* Right Section (Image) */}
      <div className="  mt-12 -mr-28" >
      <img src={prop}   className='  w-[910px] h-[700px]'  />
      </div>
    </div>
    
    );
}

export default SignUp1;
