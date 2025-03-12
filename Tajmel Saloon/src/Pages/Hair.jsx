import React from 'react';
import { HeartIcon } from 'lucide-react';
// import cutting from '../../assets/img/cutting.png'
import  cutting from '../assets/img/cutting.png'




const Hair = () => {
    return (
        <div className='flex'>
            <img src={cutting} alt='haircut'/>
            <div className='flex flex-col'>
            <div className="max-w-2xl mx-auto p-6 font-[sans-serif]">
      <h1 className="text-3xl font-bold text-center text-[#ED2D77]">Booking</h1>
      <p className="text-xl text-center mt-2">$149 Per Person</p>

      <div className="mt-6 space-y-4">
        <input
          type="date"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED2D77]"
        />

        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED2D77]"
        >
          <option>Choose Time Slot...</option>
          <option>10:00 AM</option>
          <option>12:00 PM</option>
          <option>02:00 PM</option>
          <option>04:00 PM</option>
        </select>

        <select
          multiple
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED2D77]"
        >
          <option >Select Time</option>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>12:00 PM</option>
          <option>01:00 PM</option>
          <option>02:00 PM</option>
          <option>03:00 PM</option>
          <option>04:00 PM</option>
          <option>05:00 PM</option>
        </select>

        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED2D77]"
        >
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
        </select>

        <button
          className="w-full bg-[#EE2478] text-white py-3 rounded-lg font-bold hover:bg-pink-600"
        >
          Request Booking
        </button>

        <button
          className="w-full flex items-center justify-center border border-[#ED2D77] text-[#ED2D77] py-3 rounded-lg font-bold hover:bg-pink-50"
        >
          <HeartIcon className="w-5 h-5 mr-2" /> Add to Wishlist
        </button>
      </div>
    </div>
                

</div>
          
        </div>
    );
}

export default Hair;
