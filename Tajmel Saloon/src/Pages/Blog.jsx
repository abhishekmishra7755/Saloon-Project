import React from 'react';
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

const Blog = () => {

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
        <div className=" overflow-x-hidden w-full   h-screen">
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

 {/*  The brighter way to book beauty page */}

 <div className='h-full w-full'>
  <p className='font-bold text-[#000000]  ml-100  -mt-30  text-[30px] font-[Brandon]'>
  The brighter way to book beauty
  </p>
  <p className='text-[#010101] font-sans  ml-64 w-[690px] text-[15px] '>quis nostrud exerci tation ullamcorper suscipit lobor nisl ut aliquip ex ea commodo  consequat. Duis aute</p>
  <p className='text-[#010101] font-sans  ml-125 w-[690px] text-[15px] '>vel eum  iriure dolor in  hendrerit in.</p>


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
      {/*   img services description */}
             
           <div className="relative mt-3  -left-10 ml-12 border-radius w-full max-w-lg mx-auto group">
             
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
                 className="w-100"
               />
                
             </div>
             </div>
    
               {/*  img services description */}
               <div className="relative  flex  h-40 w-70 -mt-4 -ml-0 max-w-lg mx-auto group">
                  
                  <div className="flex flex-row  space-x-4">
                  <div className="flex flex-col     w-100  focus:outline-none items-start space-y-2 mt-4">
                    <p className=" ml-3  mt-3 font-bold">diversity of clinic </p>
                    <div className="flex items-center">
                  
                    
                    </div>
                    
                    <button className=" text-[#010101] ml-3 w-25 h-8  mb-1 border border-[#EE2478]">Get the App</button>
                  </div>
              
             <div className="flex flex-col w-100    focus:outline-none items-start space-y-2 mt-4">
                    <p className="  ml-3 mt-3 font-bold">Saloon</p>
                    <div className="flex items-center">
                     
                    </div>
                 
                    <button className=" text-[#010101] ml-3 w-25 h-8   mb-1 border border-[#EE2478]">Get the App</button>
                  </div>
                  <div className="flex flex-col     w-100 focus:outline-none items-start space-y-2 mt-4">
                    <p className="  ml-3 mt-3 font-bold">Dental</p>
                    <div className="flex items-center">
                     
                    
                    </div>
                  
                    <button className=" text-[#010101] ml-3 w-25 h-8  mb-1 border border-[#EE2478]">Get the App</button>
                  </div>
                 
                  </div>
                    </div>

                  {/*  Own a Hair & Beauty Business page */}
                  <div className='flex bg-[#F8F8FA]  py-0 px-0 w-[1500px] h-[500px]'>
                    <div>
                      <img  src= {blog}  className='w-[] h-[] -ml-152' />
                    </div>
                    <div className='flex -ml-150 flex-col'>
                      <p className='font-bold text-[28px] mt-50 w-[400px] text-[#000000]  font-[Brandon] '>Own a Hair & Beauty Business?
                                        Bring it online.</p>
                        <p className='text-[15px] mr-90 mt-2 font-sans w-[460px] text-[#000000] '>simply dummy text of the printing and typesetting industry. Lorem
                            has been the industry's standard dummy text ever since the 1500s, when
                              unknown printer took a galley of type and scrambled.</p>

                    </div>


                  </div>

                 </div>

                   {/*   img of final page */}
             
           <div className="relative mt-15   ml-12  border-radius w-full max-w-lg mx-auto group">
             
             <div className="flex space-x-4">
               <img
                 src={f1}
                 alt="img1"
                 className="w-70"
               />
               <img
                 src={f2}
                 alt="img2"
                 className="w-70"
               />
               <img
                 src={f3}
                 alt="img3"
                 className="w-70"
               />
                <img
                 src={f4}
                 alt="img3"
                 className="w-70"
               />
             </div>
             </div>
     
     
          {/*   download  phone page */}

          <div className='w-full h-full flex'>
            <div className='flex flex-col ml-13 mt-25'>
              <p className='text-[#000000]   font-bold  text-[35px]'> <span className='text-[#EE2478] font-bold text-[35px]'>Download</span> our APP</p>
              <p className='text-[13px]  text-[#010101] w-[400px]'>quis nostrud exerci tation ullamcorper suscipit lobor nisl ut aliquip ex
              consequat. Duis aute vel eum  iriure dolor in  hendrerit in.</p>
              <button className=" text-[#010101] w-25 h-8  mt-3  text-[13px] border border-[#EE2478]">Get the App</button>
               <div className="flex space-x-3 mt-4">
                              <div className="w-[100px] h-[41px]">
                                  <img      src={google}/>
                              </div>
                              <div  className="w-[100px] h-[41px]" >
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
             <div >

             </div>

             

 

        

          

       
   

               


    </div>
    );
}

export default Blog;
