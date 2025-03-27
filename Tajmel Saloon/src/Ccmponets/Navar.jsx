import { PhoneIcon,UserIcon,ContactIcon  } from 'lucide-react';
import nav from '../assets/img/nav.png'
import { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi"; // For the menu toggle icons




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="max-w-[1530px] bg-white shadow-md  p-5 font-[sans-serif]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#ED2D77]  ml-20">
          <img src={nav} alt="Salon Logo" className="w-[200px] h-[100px]" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6   font-[sans-serif]  mr-30 text-[#868686] text-[18px]">
          <li><a href="/hair" className="hover:text-[#ED2D77]">Hair</a></li>
          <li><a href="/aboutus" className="hover:text-[#ED2D77]">About Us</a></li>
          <li><a href="/hairremoval" className="hover:text-[#ED2D77]">Hair Removal</a></li>
          <li><a href="/massage" className="hover:text-[#ED2D77]">Massage</a></li>
          <li><a href="/service" className="hover:text-[#ED2D77]">Service</a></li>
          <li><a href="/blog" className="hover:text-[#ED2D77]">Blog</a></li>
          <li><a href="/contactus" className="hover:text-[#ED2D77]">Contact Us</a></li>
          <li className="flex items-center">
            <IoMdContact className="w-5 h-5 text-[#ED2D77] mr-1" />
            <a href="/login" className="text-[#ED2D77]">Login</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#ED2D77]">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-[#0E0E0E] text-[18px]">
          <li><a href="/hair" className="hover:text-[#ED2D77]">Hair</a></li>
          <li><a href="/aboutus" className="hover:text-[#ED2D77]">About Us</a></li>
          <li><a href="/hairremoval" className="hover:text-[#ED2D77]">Hair Removal</a></li>
          <li><a href="/massage" className="hover:text-[#ED2D77]">Massage</a></li>
          <li><a href="/service" className="hover:text-[#ED2D77]">Service</a></li>
          <li><a href="/blog" className="hover:text-[#ED2D77]">Blog</a></li>
          <li><a href="/contactus" className="hover:text-[#ED2D77]">Contact Us</a></li>
          <li className="flex items-center">
            <IoMdContact className="w-5 h-5 text-[#ED2D77] mr-1" />
            <a href="/login" className="text-[#ED2D77]">Login</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
