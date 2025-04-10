import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft} from "lucide-react";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import login from '../assets/img/login.png'
import { Headphones,MessageCircleMore } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react"; // Import icons for visibility toggle
import sign from '../assets/img/sign.png'
import fa1 from '../assets/img/fa1.png'
import ga from '../assets/img/ga.png'






const Coustomer = () => {
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFacebookLogin = () => {
    window.location.href =
      "https://www.facebook.com/v17.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=http://localhost:3000/dashboard&scope=email,public_profile";
  };

  const handleGoogleLogin = () => {
    const googleClientId = "1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com";
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientId}&redirect_uri=${window.location.origin}&response_type=token&scope=email%20profile`;

    window.location.href = googleAuthUrl; // Redirect to Google login page
  };
   
  const [SuccessMessage, setSuccessMessage] = useState(""); // Declared but not used

 
   
 
  const onSubmit = (data) => {
    const { email, password } = data;

    // Simulated authentication
    if (email === 'xyz@123.com' && password === 'abhi123') {
      localStorage.setItem('authToken', 'sample_token');
      
      // Show success popup
      setSuccessMessage('Successfully Logged In!');
      
      // Redirect to Dashboard after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/dashboard');
      }, 2000);
    } else {
      alert('Invalid email or password.');
    }
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
      const handleSignup = ()  => {
        navigate('/SignUp');
          }
          
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
          <h1 className=" -ml-55 text-[30px] font-[crimson]  text-[sans]  font-bold mt-8">Tajmeel for Customers</h1>
          <p className=" text-[#000000] text-[20px]  font-sans -ml-8 p-3 mb-2">Create an account or log in to manage your business.</p>
  
          <button 
          onClick={handleFacebookLogin}
          className="w-full flex border  h-[120px]  hover:border-[#EE2478]   hover:text-[#EE2478]   font-sans  rounded-b-sm text-[20px]  cursor-pointer  items-center text-[#000000]  border-[#C2C2C2] justify-center  py-2  mb-4  transition">
         {/*   <FcGoogle className="mr-2 " /> Continue with Google */}
           <div> <img src={fa1}  className='-ml-2' /></div>
           Continue with Facebook
          </button>
          <button 
          onClick={handleGoogleLogin}
          className="w-full flex border h-[120px]  text-[20px]  hover:border-[#EE2478]   hover:text-[#EE2478]  font-sans  rounded-b-sm   cursor-pointer  items-center text-[#000000]  border-[#C2C2C2] justify-center  py-2  mb-4  transition">
         {/*   <FcGoogle className="mr-2 " /> Continue with Google */}
           <div> <img src={ga}  className='-ml-2' /></div>
           Continue with Google
          </button>
          <button 
          onClick={handleSignup }
          className="w-full flex border hover:border-[#EE2478]  text-[20px]    h-[120px]  hover:text-[#EE2478]  font-sans  rounded-b-sm   cursor-pointer  items-center text-[#000000]  border-[#C2C2C2] justify-center  py-2  mb-4 transition">
            {/* <FcGoogle className="mr-2 " />  */}
           <div>
           <img src={sign}  className='-ml-2' />
           </div>
            Continue with SignUp
          </button>
  
          <div className="flex items-center w-full my-4">
            <div className="flex-grow border-t   border-[#C2C2C200]  bg-[#5C5C5C]"></div>
            <span className="mx-2 text-[#000000]">or</span>
            <div className="flex-grow border-t bg-[#5C5C5C]"></div>
          </div> 
          <form onSubmit={handleSubmit(onSubmit)} className="   w-full h-full  bg-white  ">
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
            className="w-full p-2  text-[20px]    h-[55px]   rounded-b-sm  mb-4 hover:bg-gray-100  text-[#878787] border border-[#C2C2C2] focus:outline-none focus:ring-2 "
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
            className="w-full p-2  text-[20px]    h-[55px]    rounded-b-sm  mb-4  hover:bg-gray-100 text-[#878787] border border-[#C2C2C2] focus:outline-none focus:ring-2 "
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
            <button type="submit" className="w-full bg-black rounded  h-[55px] hover:bg-[#EE2478]   text-[20px]   cursor-pointer rounded-b-lg text-[#FFFFFF] py-2 transition">
              Continue
            </button>

            <button type="submit" className="w-full bg-black mt-5 rounded  h-[55px] hover:bg-[#EE2478]  cursor-pointer rounded-b-lg text-[#FFFFFF] py-2 transition">
              <a href="/forgot-password" className="text-[#FFFFFF] text-[20px] ">Forgot Password</a>
            </button>
            </div>
            {SuccessMessage && <p className="text-green-500">{SuccessMessage}</p>}
            {/* Your form goes here */}
          </form>
  
          <p className=" -mt-40   text-[20px] flex-col text-[#000000]">
          Are you a customer looking to book an appointment?
            <a href="/professional" className="text-[#EE2478] flex ml-30  hover:text-black   hover:underline">Sign in as a Professional</a>
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
        <div className=" mt-12 -mr-28" >
        <img src={login}  className='  w-[910px] h-[700px] '/>
        </div>
      </div>


   


    );
}

export default Coustomer;
