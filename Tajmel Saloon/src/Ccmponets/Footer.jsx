import React from "react";
import google from '../assets/img/google.png';
import appapple from '../assets/img/appapple.png';
import { Link } from "react-router-dom";
import nav from '../assets/img/nav.png';
import { SearchIcon, MapPin, Calendar, FacebookIcon,InstagramIcon,LinkedinIcon,TwitterIcon} from 'lucide-react';


const Footer = () => {
    return (
      <footer className=" bottom-0 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white bg-opacity-80 ">
         <div id='footer1' className=' space-x-4 -ml-20  rounded-br-[80%] w-full mt-25 '>
       <div id='descreption' className='mt-15'>
         <p id='des1' className='w-100  ml-7'>quis nostrud exerci tation ullamcorper suscipit lobor
            nisl ut aliquip
         Duis aute vel eum  iriure dolor in  hendrerit in.</p>
       </div>
       <div id='input' className='mt-15'>
         <input
         type='text'
         placeholder='Enter your eamil'
           className="w-full p-2 mt-3 bg-transparent text-white focus:outline-none"
         />

       </div>
       <button id='button' className='text-black font-bold  ml-3 mt-15 space-x-4'>Subcribe Now!</button>
       </div>
      

      

        <div className="space-x-25 text-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8  font-sans">
            <div > 
             <span className="text-xl font-bold   cursor-pointer   text-[#ED2D77] ">Company</span>
            <p className=" mt-3 -ml-5 font-normal cursor-pointer hover:text-[#EE2478]  font-sans text-[#000000]">About Us </p>
            <p className=" mt-3 ml-15 font-normal  hover:text-[#EE2478]  cursor-pointer  font-sans text-[#000000]">Terms and Conditions </p>
            <p className=" mt-3 ml-10 font-normal  hover:text-[#EE2478]   font-sans text-[#000000]">Cancellation/Refund  </p>
            <p className=" mt-3 -ml-5  hover:text-[#EE2478]   cursor-pointer  font-normal font-sans text-[#000000]">Privacy Policy </p>
            <p className=" mt-3 -ml-5   hover:text-[#EE2478] cursor-pointer  font-normal font-sans text-[#000000]">Content Policy </p>
            <p  className=" mt-3 -ml-5   hover:text-[#EE2478]  cursor-pointer font-normal font-sans text-[#000000]">We are Hiring</p>
              </div>
              
              <div> 
             < span className="text-xl font-bold   cursor-pointer   text-[#ED2D77] "> Discover</span>
            <p className=" mt-3  font-normal   hover:text-[#EE2478]  cursor-pointer  font-sans text-[#000000]">Treatment Guide </p>
            <p className=" mt-3  font-normal    hover:text-[#EE2478]  cursor-pointer   font-sans text-[#000000]">The Tajmeel Spot Files </p>
            <p className=" mt-3 font-normal    hover:text-[#EE2478]  cursor-pointer   font-sans text-[#000000]">Tajmeel Spot Gift Card</p>
            <p className=" mt-3 font-normal     hover:text-[#EE2478]  cursor-pointer   font-sans text-[#000000]">Sign up for our newsletter </p>
            <p className=" mt-3  font-normal    hover:text-[#EE2478]  cursor-pointer   font-sans text-[#000000]">The Treatwell Glossary</p>
          
              </div>
              
              <div> 
             <span className="text-xl font-bold    cursor-pointer   text-[#ED2D77] ">For Business</span>
            <p className=" mt-3 font-normal    hover:text-[#EE2478]  cursor-pointer font-sans text-[#000000]">For partners</p>
            <p className=" mt-3 font-normal   hover:text-[#EE2478]  cursor-pointer font-sans text-[#000000]">Support </p>
            <p className=" mt-3 font-normal   hover:text-[#EE2478]  cursor-pointer font-sans text-[#000000]">Status</p>
            <p className=" mt-3 font-normal    hover:text-[#EE2478]  cursor-pointer font-sans text-[#000000]">Terms and Conditions </p>
            <p className=" mt-3 font-normal    hover:text-[#EE2478]  cursor-pointer font-sans text-[#000000]">Content Policy </p>
         
              </div>
              
              <div> 
             < span className="text-xl   cursor-pointer font-bold text-[#ED2D77] ">Legal</span>
            <p className=" mt-3 font-sans    hover:text-[#EE2478]  cursor-pointer   font-normal text-[#000000]">Pricing </p>
            <p className=" mt-3 font-sans      hover:text-[#EE2478]  cursor-pointer  font-normal text-[#000000]">Status </p>
            <p className=" mt-3  ml-px      hover:text-[#EE2478]  cursor-pointer  font-normal font-sans text-[#000000]">Modern Slavery Statement </p>
            <div className="flex space-x-4 mt-18  ml-12">
                <div className="w-[100px] h-[41px]">
                    <img      src={google}/>
                </div>
                <div  className="w-[100px] h-[41px]" >
                <img     src={appapple}/>
                </div>
            </div>
          
              </div>
             </div>
             <div className="  ml-220 text-sm text-[ #000000]   mt-10">
                  © 2024 Tajmeel Spot. All Rights Reserved. Design By Acsius
               </div>
             <div className="w-full h-1 " style={{
        background: 'linear-gradient(90deg, rgba(238, 36, 120, 0) 3.14%, #EE2478 47%, rgba(238, 36, 120, 0) 96.59%)'
      }}>

      </div>

           <div className="flex" >

            <div className="w-[264px]  cursor-pointer   h-[56px]">
                <Link to="/"> <img src={nav} /></Link>
                <img src = {nav}  

                   />
                </div>
           <div className="flex  w-[171.11px]  ml-210 h-[32.33px] gap-4 mt-10 text-[#ED2D77]">
                 <FacebookIcon className="w-6 h-6  rounded-md cursor-pointer" />
                 <InstagramIcon className="w-6 h-6 cursor-pointer" />
                 <TwitterIcon className="w-6 h-6 cursor-pointer" />
                 <LinkedinIcon className="w-6 h-6 cursor-pointer" />
      </div> 
      </div>
      </footer>
    );
  };
  
  export default Footer;
  