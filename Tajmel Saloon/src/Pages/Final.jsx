import React, { useState,useEffect  } from "react";
import { FaWineBottle } from 'react-icons/fa';
import { SearchIcon, MapPin, Calendar , DollarSign, CalendarCheck, Star, Smile} from 'lucide-react';
import Haircont from '../assets/img/Haircont.png'
import serv2 from '../assets/img/serv2.png'
import serv1 from '../assets/img/serv1.png'
import serv3 from '../assets/img/serv3.png'
import blog from '../assets/img/blog.png'
import f1 from '../assets/img/f1.png'
import f2 from '../assets/img/f2.png'
import f3 from '../assets/img/f3.png'
import f4 from '../assets/img/f4.png'
import google from '../assets/img/google.png';
import appapple from '../assets/img/appapple.png';
import dl from '../assets/img/dl.png';
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaHeart, FaStar,FaShareAlt, FaSearch } from 'react-icons/fa';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper ,SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dg1 from '../assets/img/dg1.png'
import dg2 from '../assets/img/dg2.png'
import db1 from '../assets/img/db1.png'
import { Headphones,MessageCircleMore } from "lucide-react";
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
import { useNavigate } from 'react-router-dom';
import ldg from '../assets/img/ldg.jpg'
import ld10 from '../assets/img/ld10.jpg'
import ld11 from '../assets/img/ld11.jpg'
import ld12 from '../assets/img/ld12.jpg'
import ld13 from '../assets/img/ld13.jpg'
import ld14 from '../assets/img/ld14.jpg'
import ld15 from '../assets/img/ld15.jpg'
import ld16 from '../assets/img/ld16.jpg'
import ld17 from '../assets/img/ld17.jpg'
import ld18 from '../assets/img/ld18.jpg'
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';







const images = [f1, f2, f3, f4, f1, f3, f2, f4, f1, f3, f2, f4];

const Final = () => {
  const { register, handleSubmit, control } = useForm();  
  const [submittedData, setSubmittedData] = useState(null);
  const [activeTab, setActiveTab] = useState('Saloon');
  const [loading, setLoading] = useState(false);  // Loading state

  // Multi-select options for postcode
  const postcodeOptions = [
    { value: '1001', label: '1001' },
    { value: '1002', label: '1002' },
    { value: '1003', label: '1003' },
    { value: '1004', label: '1004' },
  ];

  const onSubmit = async (data) => {
    setLoading(true);  // Start loading

    // Simulate a delay (e.g., processing time)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Format data before storing
    const formattedData = {
      ...data,
      postcode: data.postcode ? data.postcode.map((p) => p.value) : [],
      type: activeTab,
    };

    // Store data locally
    setSubmittedData(formattedData);
    console.log('Form Submitted:', formattedData);

    setLoading(false);  // Stop loading
  };


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ListingDetails3')

  }
  const handleClick11 = () => {
    navigate('/ListingDetails11')

  }

  const handleClick12 = () => {
    navigate('/ListingDetails12')

  }
  const handleClick13 = () => {
    navigate('/ListingDetails13')

  }
  const handleClick14 = () => {
    navigate('/ListingDetails14')

  }
  const handleClick15 = () => {
    navigate('/ListingDetails15')

  }
  const handleClick16 = () => {
    navigate('/ListingDetails16')

  }
  const handleClick17 = () => {
    navigate('/ListingDetails17')

  }

  const handleClick18 = () => {
    navigate('/ListingDetails18')

  }
  const handleClick19 = () => {
    navigate('/ListingDetails19')

  }

  const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const end = 20000;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(end / (duration / 50));
  
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  
 

  const features = [
    { icon: <DollarSign size={25} />,
     text: "Smart Prices",
     desc:'Just book last-minute, or off-peak',
     },

    { icon: <CalendarCheck size={25} />, 
    text: "Book 24/7",
    desc:'From bed, or the bus',
   },

    { icon: <Star size={25} />, 
    text: "Choice of top-rated salons",
    desc:'Thousands of venues (and reviews)',
   },

    { icon: <Smile size={25} />, 
    text: "Satisfied Customers",
    desc:'Just book last-minute, or off-peak',
   },
  ];

    return (
        <div className='w-full h-full'>
        <div className=" overflow-x-hidden w-full h-screen">
    {/* Background Image */}
    <img 
      src={Haircont}
      alt="Background"
        className="absolute  mt-10 max-w-[1920px] max-h-[539px]  inset-0 w-full h-full object-cover"
    />

     {/* middle Text */}
   
   <div className="flex mt-50 items-center">
  <div className="relative  ml-100 h-28 w-1">
    <div className=" top-20 h-1/2 w-full bg-pink-500" style={{ backgroundColor: '#ED2D77' }}></div>
    <div className="top-20 h-1/2 w-full bg-black"></div>
  </div>
  <div className='flex flex-col'>
  <div className='relative ml-6'    > <span className=" text-4xl font-bold font-sans text-[#FFFFFF]">Hair removal
  
 </span></div>
  
  <div className='relative ml-6'    > <span className=" text-4xl font-bold font-sans text-[#FFFFFF]">
  Salons</span></div>
 
  </div>
</div>

    {/* Simple Form Container */}
    <div className=" absolute top-40 max-w-[461px] max-h-[640px]   flex items-center ml-230">
      <div className="bg-[#FFFFFF]  p-5 max-w-[461px] max-h-[640px] mb-55">
         {/* Saloon Icon and Title  line */}
         <div className="flex">
         <FaWineBottle className="text-[#000000] size={30}" />

        <h1 className="font-bold text-[#000000] ml-2">Saloon</h1>
      </div>
      <div className="w-20 border-t-2 p-4 border-[#ED2D77] hover:to-blue-600"></div>

        <form 
           onSubmit={handleSubmit(onSubmit)} 
         className="mb-10 w-[300px] h-[200px]">

           {/* Treatment Input */}
          <div className="mb-3 relative">
          <SearchIcon className="absolute left-3 top-3 text-gray-400" size={20} />

            <input
              {...register('treatment')}
                type="text"
              placeholder="Search For Treatment"
              name="treatment"
              className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

              {/* Multi-Select Dropdown for Postcode */}

             <div className="mb-3 relative  ">
            <MapPin className="absolute left-3 top-3  text-gray-400" size={20} />
               <Controller
                className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
               name="postcode"
               control={control}
               render={({ field }) => (
                 <Select
                   {...field}
                   options={postcodeOptions}
                   isMulti
                   placeholder="Enter Postcode or Area "
                  
                 />
               )}
              />
          </div>
              {/* Date Input */}

          <div className="mb-3 relative">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              name="date"
              {...register('date')}
                  type="date"
              className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
             {/* Submit Button */}
          <button
            type="submit"
            className="w-full    hover:bg-black bg-[#ED2D77] text-white p-3 rounded font-medium  transition disabled={loading"
          >
         {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  </div>

 {/*  The brighter way to book beauty page */}

 <div className='h-full w-full'>
  <p className='font-bold text-[#000000]  ml-100  -mt-30  text-[30px] font-[Brandon]'>
  The brighter way to book beauty
  </p>
  <p className='text-[#010101] font-sans  ml-64 w-[690px] text-[15px]'>quis nostrud exerci tation ullamcorper suscipit lobor nisl ut aliquip ex ea commodo  consequat. Duis aute</p>
  <p className='text-[#010101] font-sans  ml-125 w-[690px] text-[15px]'>vel eum  iriure dolor in  hendrerit in.</p>


  {/*  The brighter way to book beauty page */}

  <div className="flex flex-wrap justify-center gap-30 p-6">
      {features.map((feature, index ,desc) => (
        <div
          key={index}
          className="flex flex-col items-center p-4    w-48 bg-white"
        >
          <div className="text-[#F48CA4]   rounded-4xl border border-[#F48CA4]">{feature.icon}</div>
          <p className="mt-2 text-center text-[15px] font-[Brandon]  font-bold">{feature.text}</p>
          <p className="mt-2 text-center text-[#010101] text-[13px]">{feature.desc}</p>
        </div>
      ))}
    </div>
      {/* block2start*/}
    
        <div  className=' space-x-20  ml-12 mt-10 '>
         <p className=' mt-4  font-[Brandon] font-bold text-[30px] text-[#000000]'>Popular Treatement</p>
        
        </div> 
    
        <div className="absolute ml-32  mt-4 left-2 w-3/4 flex space-x-4">
       <div className="flex items-center bg-[#ED2D77] shadow-md  w-[300px] ">
         <FaSearch className="text-[#FFFFFF] ml-2" />
         <input
           type="search"
           placeholder="Hair saloon"
           className="w-full p-2  focus:outline-none   font-sans text-[#FFFFFF] "
         />
       </div>
       <div className="flex items-center border border-[#BEBEBE]  w-[300px] bg-white  ">
         <FaSearch className="text-[#343434] ml-2" />
         <input
           type="text"
           placeholder="Dental"
           className="w-full p-2  font-sans  focus:outline-none text-[#000000] "
         />
       </div>
       <div className="flex items-center    border border-[#BEBEBE] w-[300px]  h-[50px]">
         <FaSearch className="text-[#343434] ml-2" />
         <input
           type="text"
           placeholder="Dirversity of clinic"
          className="w-full p-2    text-[#000000]  font-sans  focus:outline-none"
         />
       </div>
     </div>
     <div className='mt-30 ml-12'>
      <p className='font-[Brandon] font-bold text-[30px] text-[#000000]' >
        Recommended
      </p> 
      
     </div>
     
     
         {/* image */}
     <div className="relative mt-3 ml-12 border-radius w-full max-w-lg mx-auto group">
      
      <div className="flex space-x-4">
        <img
          src={ldg}
          alt="img1"
          className="w-70 "
        />
        <img
          src={ld10}
          alt="img2"
          className="w-70"
        />
        <img
          src={ld11}
          alt="img3"
          className="w-70 "
        />
         <img
          src={ld12}
          alt="img4"
          className="w-70" />
      </div>
      </div>
     {/* description */}
       <div className="relative  flex  h-105 w-70 -mt-4 ml-12 max-w-lg max-auto group">
      
      <div className="flex flex-row  space-x-4">
      <div className="flex flex-col  border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3  hover:text-[#ED2D77] cursor-pointer font-[Brandon]  text-[20px] font-bold">Deep Tissue Massage</p>
        <div className="flex mt-3 ml-1 items-center">
          <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1  font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button
         onClick={handleClick}
         className=" text-black ml-3 w-30 h-8  hover:bg-[#ED2D77] active:bg-[#ED2D77]     cursor-pointer     hover:text-white  mt-2 border border-[#ED2D77]">View Details</button>
      </div>
     {/* description 2*/}
     <div className="flex flex-col  border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3   text-[20px]  cursor-pointer  hover:text-[#ED2D77]  font-[Brandon]   font-bold">Swedish Massage</p>
        <div className="flex mt-3 ml-1 items-center">
        <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1  font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button 
         onClick={handleClick11}
        className=" text-black ml-3 w-30 h-8 mt-2 hover:bg-[#ED2D77] active:bg-[#ED2D77]   cursor-pointer   hover:text-white    mb-1 border border-[#ED2D77]">View Details</button>
      </div>
      <div className="flex flex-col   border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3  hover:text-[#ED2D77]  cursor-pointer   text-[20px]   font-[Brandon]   font-bold">Therapeutic Massage</p>
        <div className="flex mt-3 items-center">
        <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1  font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button 
         onClick={handleClick12}
        className=" text-black ml-3 w-30 h-8  hover:bg-[#ED2D77] active:bg-[#ED2D77]   cursor-pointer   mt-2  mb-1 border    hover:text-white  border-[#ED2D77]">View Details</button>
      </div>
      <div className="flex flex-col   border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3  hover:text-[#ED2D77]   cursor-pointer  font-[Brandon] text-[20px]  font-bold">Thai Massage</p>
        <div className="flex mt-3 items-center">
        <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1   font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button 
         onClick={handleClick13}
        className=" text-black ml-3 w-30 h-8  hover:text-white   cursor-pointer   mt-2 hover:bg-[#ED2D77] active:bg-[#ED2D77]  mb-1 border border-[#ED2D77]">View Details</button>
      </div>
     
      
      </div>
     
        </div>
     
      
     {/*   img2 description2 */}
      
     <div className="relative mt-10 ml-12 border-radius w-full max-w-lg mx-auto group">
      
      <div className="flex space-x-4">
        <img
          src={ld13}
          alt="img1"
          className="w-70 "
        />
        <img
          src={ld14}
          alt="img2"
          className="w-70"
        />
        <img
          src={ld15}
          alt="img3"
          className="w-70 "
        />
         <img
          src={ld16}
          alt="img4"
          className="w-70" />
      </div>
      </div>
     {/* description */}
     <div className="relative  flex  h-105 w-70 -mt-4 ml-12 max-w-lg max-auto group">
      
      <div className="flex flex-row  space-x-4">
      <div className="flex flex-col  border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3  hover:text-[#ED2D77]  cursor-pointer   font-[Brandon]  text-[20px] font-bold">Therapeutic Massage</p>
        <div className="flex mt-3 ml-1 items-center">
          <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1  font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button 
         onClick={handleClick14}
        className=" text-black ml-3 w-30 h-8  hover:bg-[#ED2D77] active:bg-[#ED2D77]    cursor-pointer  mt-2 border   hover:text-white    border-[#ED2D77]">View Details</button>
      </div>
     {/* description 2*/}
     <div className="flex flex-col  border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3 cursor-pointer  text-[20px]  hover:text-[#ED2D77]  font-[Brandon]   font-bold">Ladies Waxing</p>
        <div className="flex mt-3 ml-1 items-center">
        <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1  font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button  onClick={handleClick15}
        className=" text-black ml-3 w-30 h-8     hover:text-white mt-2 hover:bg-[#ED2D77] active:bg-[#ED2D77]    cursor-pointer  mb-1 border border-[#ED2D77]">View Details</button>
      </div>
      <div className="flex flex-col   border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3 cursor-pointer  hover:text-[#ED2D77]   text-[20px]   font-[Brandon]   font-bold">Chest Waxing</p>
        <div className="flex mt-3 items-center">
        <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1  font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button
           onClick={handleClick16} 
         className=" text-black ml-3 w-30 h-8  hover:bg-[#ED2D77] active:bg-[#ED2D77]  cursor-pointer mt-2  mb-1    hover:text-white border border-[#ED2D77]">View Details</button>
      </div>
      <div className="flex flex-col   border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3  hover:text-[#ED2D77]  cursor-pointer  font-[Brandon] text-[20px]  font-bold">Iraq Waxing</p>
        <div className="flex mt-3 items-center">
        <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1   font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button 
         onClick={handleClick17}
        className=" text-black ml-3 w-30 h-8   hover:text-white  mt-2 hover:bg-[#ED2D77] active:bg-[#ED2D77]  cursor-pointer  mb-1 border border-[#ED2D77]">View Details</button>
      </div>
     
      
      </div>
     
        </div>
     
       
     
        {/* description3 img3*/}
        <div className="relative mt-3 ml-12">
      
      <div className="flex space-x-4">
        <img
          src={ld17}
          alt="img1"
          className=" w-70  h-70"
        />
        <img
          src={ld18}
          alt="img2"
          className="w-70 h-70"
        />
     
      </div>
      </div>
     {/* description1 */}
     <div className="relative  flex  h-105 w-70 -mt-4 ml-12 max-w-lg max-auto group">
      
      <div className="flex flex-row  space-x-4">
      <div className="flex flex-col  border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3  hover:text-[#ED2D77]  cursor-pointer font-[Brandon]  text-[20px] font-bold">Facial Threading</p>
        <div className="flex mt-3 ml-1 items-center">
          <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1  font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button 
         onClick={handleClick18}
        className=" text-black ml-3 w-30 h-8    hover:text-white hover:bg-[#ED2D77] active:bg-[#ED2D77]  cursor-pointer mt-2 border border-[#ED2D77]">View Details</button>
      </div>
     {/* description 2*/}
     <div className="flex flex-col  border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
        <p className="  ml-4 mt-3  cursor-pointer  text-[20px]  hover:text-[#ED2D77]  font-[Brandon]   font-bold">Ladies Leg Waxing</p>
        <div className="flex mt-3 ml-1 items-center">
        <span className=" -mt-3 ml-3 text-[17px] text-[#868686]">4.9</span>
          <FaStar className="text-black -mt-3  ml-1" />
        </div>
        <p className="text-[#868686] mt-1  font-sans text-[20px]  w-[245px] ml-4">combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
        <button 
         onClick={handleClick19}
        className=" text-black ml-3 w-30 h-8  cursor-pointer    hover:text-white   mt-2 hover:bg-[#ED2D77] active:bg-[#ED2D77]   mb-1 border border-[#ED2D77]"
          >View Details</button>
      </div>
      </div>
     
        </div>

   


      {/*   img services description */}
             
           <div className="relative mt-30  -left-10 ml-12 border-radius w-full max-w-lg mx-auto group">
             
             <div className="flex space-x-4">
               <img
                 src={serv1}
                 alt="img1"
                 className="w-100 "
               />
               <img
                 src={serv2}
                 alt="img2"
                 className="w-100"
               />
               <img
                 src={serv3}
                 alt="img3"
                 className="w-100 "
               />
                
             </div>
             </div>
    
               {/*  img services description */}
                            <div className="relative  flex  h-40 w-70 -mt-4 -ml-0 max-w-lg mx-auto group">
                                <div>
                                <div className="flex flex-row  space-x-4">
                                <div className="flex flex-col     w-100  focus:outline-none items-start space-y-2 mt-4">
                                  <p className=" ml-3   cursor-pointer  hover:text-[#ED2D77] mt-3 font-bold">diversity of clinic </p>
                             <button className=" text-[#010101] cursor-pointer hover:bg-[#ED2D77]     hover:text-white  ml-3 w-25 h-8  mb-1 border border-[#EE2478]">Get the App</button>
                                </div>
                              </div>
                            
                            </div>
                            <div>
                                <div className="flex flex-row  space-x-4">
                                <div className="flex flex-col  ml-5    w-100  focus:outline-none items-start space-y-2 mt-4">
                                  <p className=" ml-3   cursor-pointer  hover:text-[#ED2D77]  mt-3 font-bold">diversity of clinic </p>
                                  <button className=" text-[#010101] ml-3 w-25 h-8  mb-1 border border-[#EE2478]   hover:text-white  cursor-pointer hover:bg-[#ED2D77] ">Get the App</button>
                                </div>
                              </div>
                            
                            </div>

                            <div>
                                <div className="flex flex-row  space-x-4">
                                <div className="flex flex-col  ml-10  w-100  focus:outline-none items-start space-y-2 mt-4">
                                  <p className="ml-3  cursor-pointer  hover:text-[#EE2478]  mt-3 font-bold">diversity of clinic </p>
                                  <button className=" text-[#010101]  cursor-pointer hover:bg-[#ED2D77]  ml-3 w-25 h-8  mb-1 border   hover:text-white   border-[#EE2478]">Get the App</button>
                                </div>
                              </div>
                            
                            </div>
                  </div>
                  </div>
                 <div className='flex bg-[#F8F8FA]  py-0 px-0 w-[1500px] h-[500px]'>
                
                  {/*  Own a Hair & Beauty Business page */}
                  <div className='flex bg-[#F8F8FA]  py-0 px-0 w-[1500px] h-[500px]'>
                    <div>
                      <img  src= {blog}  className=' -ml-152' />
                    </div>
                    <div className='flex -ml-150 flex-col'>
                      <p className='font-bold text-[28px] mt-50 w-[400px] text-[#000000]  font-[Brandon]'>Own a Hair & Beauty Business?Bring it online.</p>

                        <p className='text-[15px] mr-90 mt-2 font-sans w-[460px] text-[#000000] '>simply dummy text of the printing and typesetting industry. Lorem
                            has been the industry's standard dummy text ever since the 1500s, when
                              unknown printer took a galley of type and scrambled.</p>

                    </div>
                   </div>
                 </div>
         {/*   download slider image */}
     <div className="space-x-2 ml-7 mt-15">
      <Swiper spaceBetween={15} slidesPerView={4} loop={true} autoplay={{ delay:0, disableOnInteraction: false}}   speed={3000}  freeMode={true}   grabCursor={true}>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="space-x-2">
              <img src={img} alt={`Slide ${index + 3}`} className="w-70" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
     
       {/*   download  phone page */}

          <div className='w-full h-full flex'>
            <div className='flex flex-col ml-13 mt-25'>
              <p className='text-[#000000]   font-bold  text-[35px]'> <span className='text-[#EE2478] font-bold text-[35px]'>Download</span> our APP</p>
              <p className='text-[13px]  text-[#010101] w-[400px]'>quis nostrud exerci tation ullamcorper suscipit lobor nisl ut aliquip ex
              consequat. Duis aute vel eum  iriure dolor in  hendrerit in.</p>
              <button className=" text-[#010101] w-25 h-8  mt-3   hover:text-white  cursor-pointer hover:bg-[#ED2D77] text-[13px]    hover:text-white border border-[#EE2478]">Get the App</button>
               <div className="flex space-x-3 mt-4">
                              <div className="w-[100px]   cursor-pointer h-[41px]">
                                  <img      src={google}/>
                              </div>
                              <div  className="w-[100px]  cursor-pointer   h-[41px]" >
                              <img     src={appapple}/>
                              </div>
                          </div>
                           </div>
              <div>
              <img src={dl} alt='phoneImg' className='mt-15 w-[630px]  ml-40 h-[330px]' />
              <p className='text-[#000000] ml-149 font-bold  w-[120px] -mt-54 text-[20px]'> <span className='text-[#EE2478]   font-bold w-[150px] text-[20px]'>Download</span> our app</p>
              <IoCloudUploadOutline  size={40} className='ml-150 mt-3  text-[#EE2D77] ' />
            </div>

          </div>

             {/*   desc and pic   phone page */}
           <div className='mt-40  py-0 px-0 -ml-30   bg-[#F8F8FA] w-[1600px] h-[700px] '>
            <div className='flex  ml-30'>
            <div className='flex  space-x-4  mt-5  '>
              <div className='mt-55  ml-20'>
                <img src={dg1} className='w-[225px] h-[231px] ' />
              </div>
              
              <div className='flex flex-col   w-[600px] mt-20 space-y-5 h-[400px]'>
              <div>
                <img src={db1} className='w-[260px] h-[230px]'  />
              </div>
              <div>
                <img src={dg2} className='w-[230px] h-[230px]' />
              </div>

              </div>

            </div>
               
            <div className='flex flex-col mt-60  -ml-65'>
              <p className='font-bold text-[30px] font-[Brandon]   text-[#000000] '>Quick & Easy</p>
              <p className='font-sans text-[15px] text-[#010101]'>1000s of Salons Coming Onboard</p>
              <p  className='font-sans text-[13px]  w-[490px] text-[#000000]'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book. </p>
              <button className=" text-[#010101]  cursor-pointer hover:bg-[#ED2D77]   w-25 h-8 mt-4 mb-1    hover:text-white border  hover:shadow-[#ED2D77] border-[#EE2478]">Get the App</button>
              <div className='w-[500px] h-[39px] flex mt-5 space-x-20' >
             <div className='flex space-x-1 '>
         
            <div className='text-[#000000] space-x-2 '><Headphones size={20} /></div>
           <p className='text-[#0C0C0C] font-bold  cursor-pointer hover:text-[#ED2D77]  font-[Brandon] text-[18px]'>Customer Help Centre</p>
           </div>
          <div className='flex space-x-1 '>
          <div className='text-[#000000] hover:text-[#ED2D77] '><MessageCircleMore size={20} /></div> 
         <p className='   text-[#0C0C0C]  font-bold  cursor-pointer hover:text-[#ED2D77] font-[Brandon] text-[18px]'>Chat support</p>
           </div>
            </div>

           </div>
            </div>
            <div className='flex flex-col w-[120px]  shadow-md items-center h-[120px] ml-50 mt-65  bg-[#FFFFFF] border border-[#ED2D77] rounded-full'>
              <span className='font-bold text-[25px] mt-6 font-[Montserrat] text-[#000000]'>
              {Math.floor(count / 1000)}K 
              </span>
              <p  className=' text-[12px] font-[Montserrat] text-[#000000]'>Partner Onboard</p>
            </div>
            </div>
    
    </div>
  );
};

export default Final;
