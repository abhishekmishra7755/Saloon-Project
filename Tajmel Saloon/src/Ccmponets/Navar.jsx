import { PhoneIcon,UserIcon,ContactIcon  } from 'lucide-react';
import { IoMdContact } from "react-icons/io";
import nav from '../assets/img/nav.png'

const Navbar = () => {
  return (
    <nav className="    max-w-[1530px] max-h-[64px]  bg-white shadow-md p-5 flex  font-[sans-serif]">
      <div className="text-[#ED2D77] -mt-5 ">
        <img src={nav} alt="Salon Logo" className="w-[304px] h-[64px]  top-[30px]  ml-15" />
       
      </div>
      <ul className="flex w-[800px] h-[44px] font-[Sans-Serif] ml-25 space-x-6 text-[#0E0E0E] 
           font-[18px]">
        <li><a href="/">Hair</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/hairremoval">Hair Removal</a></li>
        <li><a href="/massage">Massage</a></li>
        <li><a href="/service">Service</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contactus">Contact Us</a></li>
        <li className="flex ml-30">
          <IoMdContact className="w-5 h-5 text-[#ED2D77] mr-1" />
          <a href="/login" className='text-[#ED2D77] '>Login</a>
        </li>
      </ul>
    
    </nav>
  );
};

export default Navbar;
