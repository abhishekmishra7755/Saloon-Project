import React from 'react';
import Haircont from '../assets/img/Haircont.png'
import { FaHeart, FaStar,FaShareAlt, FaSearch } from 'react-icons/fa';
import abot1 from '../assets/img/abot1.png'
import { FaRocket, FaEye, FaGem } from 'react-icons/fa';
import vission from '../assets/img/vission.png'
import abq1 from '../assets/img/abq1.png'

const AboutUs = () => {
  const sections = [
    {
      icon: <img src={vission} sizes='' alt="icon" className="text-[#FFFFFF]" />,
      title: 'Our Mission',
      description: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem desc.'
    },
    {
      icon:<img src={vission} sizes={40} alt="icon" className="text-[#FFFFFF]" />,
      title: 'Our Vision',
      description: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem desc.'
    },
    {
      icon:<img src={vission} sizes={40} alt="icon" className="text-[#FFFFFF]  text-[10px]"/>,
      title: 'Our Values',
      description: 'Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem desc.'
    }
  ];
    return (
        <div className='w-full h-full '>
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
       
      </div>
      <div className='flex flex-col'>
      <div className='relative ml-150'> <span className=" text-4xl font-bold font-sans text-[#FFFFFF]">About us
     </span></div>
      
      <div className='relative  flex-col  w-[540px] ml-75'> 
        <span className=" text-[15px]  font-sans text-[#FFFFFF]">
             printing and typesetting industry. Lorem Ipsum has been the industry's       
     </span>
     <br/>
     <span className='text-[15px]  ml-15 font-sans text-[#FFFFFF]'>standard dummy text ever since the 1500s, when an unknown.</span>
    
     </div>
     
      </div>
    </div>
  
       
      </div>

          {/* costomer Text  Reviews*/}

      <div className='flex  bg-[#EE247833] justify-between    items-center  w-[1450px] -ml-22  h-[153px] -mt-53'>
        <div  className='flex flex-col ml-20'>
          <p className='font-bold  font-sans  text-[20px] text-[#000000]'>Trusted by over</p>
          <span  className=' font-sans   text-[14px]  text-[#000000]'>2L+ Users since 2012</span>
        </div>
                 <div className="flex  -ml-15 flex-col items-center">
                <div className='flex items-center'>
                <FaStar className="text-black -mt-3  w-[12px] h-[12px] ml-1" />
                <span className=" -mt-3 text-xl   ml-2 font-semibold">4.6</span>
                </div>
                <span  className=' font-sans   text-[14px]  text-[#000000]'>1.14K Reviews</span>
               </div>

               <div  className='flex  -ml-30 flex-col'>
          <p className='font-bold  font-sans  text-[20px] text-[#000000]'>10 Lakh +</p>
          <span  className=' font-sans  -ml-5 text-[14px]  text-[#000000]'>Appointments Booked</span>
        </div>

        <div  className='flex flex-col mr-30'>
          <p className='font-bold  font-sans  text-[20px] text-[#000000]'>22+</p>
          <span  className=' font-sans  text-[14px] -ml-20    text-[#000000]'>States with Tajmeel spot Available</span>
        </div>
      </div>

        {/* dr img and desc*/}
        <div className='flex'>
          <div className='flex mt-60 flex-col'>
            <h2 className='text-[#000000]  font-bold font-sans text-[25px]'>Who Is Tajmeelspot</h2>
            <p className='text-[#000000]  w-150 mt-2 font-sans text-[15px]'>There are many variations of passages of Lorem Ipsum available, but the majority have
               alteration in some form, by injected humour, or randomised words which don't look even
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                  Internet tend to repeat predefined chunks as necessary, making this the first true generator
                    the Internet. It uses a dictionary of over 200 Latin words,</p>
                    <p className='text-[#000000]    w-150 mt-5 font-sans text-[15px]'>combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                    reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

          </div>

           {/*  img*/}

          <div>
            <img src={abot1} className='mt-28 ml-50  h-130' />
          </div>
        </div>

         {/*  mission vission logo */}
        <div>
          <div className="flex flex-col md:flex-row justify-around    w-380   -ml-35 mt-15 items-center p-8 bg-[#000000B2]">
          {sections.map((section, Values) => (
        <div key={Values} className="flex flex-col items-center text-center p-4 m-4  rounded-2xl shadow-lg w-80">
          {section.icon}
          <h3 className="text-xl text-[#FFFFFF]  font-bold mt-4">{section.title}</h3>
          <p className="text-[#FFFFFF] w-80 mt-2">{section.description}</p>
        </div>
      ))}
    </div>
          </div>

            {/*  desc img*/}

            <div className='flex '>
              <div className='mt-10'>
                <img src={abq1} className='p-20' />
              </div>
              <div className='flex mt-50 flex-col'>
            <h2 className='text-[#000000]  font-bold font-sans text-[20px]'>Our Favorite Salon at Your Fingertips</h2>
            <p className='text-[#000000]  w-160 mt-2 font-sans text-[15px]'>There are many variations of passages of               Lorem          Ipsum     available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                                 Internet tend to repeat predefined chunks as necessary.</p>
                    </div>

            </div>






            
        </div>
    );
}

export default AboutUs;
