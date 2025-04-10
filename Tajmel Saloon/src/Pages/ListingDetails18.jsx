import React, { useState, useEffect } from "react";

import {
  HeartIcon,
  Phone,
  Bookmark,
  Star,
  Zap,
  Share2,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Mail,
  ThumbsUp,
  Clock,
} from "lucide-react";
import imgs1 from "../assets/img/imgs1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
// import cutting from '../../assets/img/cutting.png'
import cutting from "../assets/img/cutting.png";
import ld1 from "../assets/img/ld1.png";
import ld2 from "../assets/img/ld2.png";
import ld3 from "../assets/img/ld3.png";
import ld4 from "../assets/img/ld4.png";
import { FaHeart, FaStar, FaShareAlt, FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import contactpic from "../assets/img/contactpic.png";
import { AiFillTag } from "react-icons/ai";
import blur from "../assets/img/blur.png";
import rw1 from "../assets/img/rw1.png";
import rw2 from "../assets/img/rw2.png";
import rw3 from "../assets/img/rw3.png";
import rw4 from "../assets/img/rw4.png";
import { useNavigate } from "react-router-dom";
import ld17 from "../assets/img/ld17.jpg";

const reviews = [
  {
    id: 1,
    name: "Francis Burton",
    image: rw1,
    date: "Jan 03, 2022 - 8:52 am",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. " +
      "Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam.",
  },

  {
    id: 2,
    name: "Francis Burton",
    image: rw2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. " +
      "Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam.",
    date: "Jan 05, 2022 - 10:00 am",
  },
  {
    id: 3,
    name: "Francis Burton",
    image: rw3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. " +
      "Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam.",
    date: "Jan 11, 2022 - 9:00 am",
  },
  {
    id: 4,
    name: "Francis Burton",
    image: rw4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. " +
      "Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam.",
    date: "Jan 10, 2022 - 11:00 am",
  },
];

const ListingDetails18 = () => {
  const navigate = useNavigate(); // Hook to navigate to another route
  const handleClick = () => {
    navigate("/Service"); // Navigate to the '/service' route
  };
  const [likedReviews, setLikedReviews] = useState({});

  const toggleLike = (id) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="w-full h-full">
      <div className="flex">
        <img src={ld17} alt="haircut" className="mt-3  h-[600px]  w-[640px]" />
        <div
          className="flex flex-col mt-15  
 "
        >
          <button
            className="text-white px-6 py-3  ml-12  w-[489px]  h-[66px] rounded"
            style={{
              backgroundColor: "#54BA1A", // Button background color
              boxShadow: "0px 0px 6.8px 4px #0000000D", // Box shadow
            }}
          >
            Now Available
          </button>
          <div
            className=" w-[489px] h-[500px] ml-12 mt-3 flex flex-col  bg-[#FBFAFA] border border-[#D4D4D4]
                           font-[sans-serif]"
          >
            <div className="flex  space-x-60 mt-8 font-[sans-serif] ">
              <h1 className="text-[18px]   ml-8 space-y-80 font-bold text-[#000000]">
                Booking
              </h1>
              <p className="text-[15px] font-bold  mt-2 text-[#000000]">
                $149 Per Person
              </p>
            </div>
            <div className=" space-y-2">
              <input
                type="date"
                className="  w-[435px] h-[50px] text-[#787878] mt-4 p-3  ml-7 items-center focus:outline-none  bg-[#FFFFFF] focus:ring-2 focus:ring-[#ED2D77]"
              />

              <select className=" p-3 w-[435px] h-[50px]   text-[#787878]  mt-4  ml-7  bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#ED2D77]">
                <option>Choose Time Slot...</option>
                <option>10:00 AM</option>
                <option>12:00 PM</option>
                <option>02:00 PM</option>
                <option>04:00 PM</option>
              </select>

              <select className="w-[435px] h-[50px]  mt-4 p-3  text-[#787878] ml-7 bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#ED2D77]">
                <option>Select Time</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
              </select>

              <select className="  w-[435px] h-[50px]  mt-4 p-3   text-[#787878] bg-[#FFFFFF]  ml-7 focus:outline-none focus:ring-2 focus:ring-[#ED2D77]">
                <option>Guest</option>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>

              <button className="w-[435px] h-[50px] ml-7 bg-[#EE2478] text-white py-3 font-bold hover:bg-pink-600">
                Request Booking
              </button>

              <button className="w-[435px] h-[50px]  ml-7  bg-[#E7E7E7] flex items-center justify-center border  text-[#000000] py-3 font-bold hover:bg-pink-50">
                <HeartIcon className="w-5 h-5 mr-2" /> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* image  of  listing details */}
      <div className="relative mt-3 ml-1 border-radius w-full max-w-lg mx-auto group">
        <div className="flex space-x-4">
          <img src={ld1} alt="img1" className="w-[130px]  h-[100px]" />
          <img src={ld2} alt="img2" className="w-[130px]  h-[100px]" />
          <img src={ld3} alt="img3" className="w-[130px]  h-[100px]" />
          <img src={ld4} alt="img4" className="w-[130px]  h-[100px]" />
        </div>
      </div>

      {/* desc and updown   listing dtails page */}
      <div className="flex mt-3">
        <div className="flex flex-col bg-[#FBFAFA]  w-[660px] h-[350px] shadow-[#0000000D]">
          <p className="font-bold text-[#000000]   ml-5 text-[20px]  mt-10 w-[200px] h-[20px]  font-[Brandon]">
            Facial Threading
          </p>
          <p className="text-[#484848]  ml-5 font-sans text-[15px] w-[640px]  h-[62px]  mt-3  ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <div className="flex w-[302px]  ml-5 gap-6 h-[25px]">
            <span className="w-[5px] h-[5px] text-[ #000000]">
              {" "}
              <CiLocationOn />
            </span>
            <p className="font-sans  text-[16px]  -mt-1 text-[ #000000]">
              Ut wisi enim ad minim veniam, quis
            </p>
          </div>
          <div className="flex w-[150px] mt-3 ml-5 gap-5  h-[20px]">
            <span className="w-[12px] h-[12px] text-[ #000000]">
              {" "}
              <FiPhoneCall />
            </span>
            <span className="font-sans  text-[15px] -mt-1  text-[ #000000]">
              1800 (123) 4567
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* Stars */}

            <div className="flex items-center  ml-2  gap-2">
              {/* Stars */}
              <div className="flex space-x-1 p-2   rounded-lg">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className=" p-2 rounded-md  text-[#F6BD00] w-[8px] h-[8px]"
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                ))}
                <div className=" p-2 rounded-md  text-[#A7A7A7]  w-[8px] h-[8px]">
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
            {/* Rating & Reviews */}
            <div className="bg-[#54BA1D] text-[#FFFFFF] px-3 py-1  mt-5 text-sm font-semibold">
              (4.9) / (14 Reviews)
            </div>
          </div>

          {/*   bookmark and  Reviews */}
          <div className="flex gap-8  ml-1 items-center p-4">
            <div className="flex items-center gap-2">
              <Bookmark className="text-[#000000] " size={15} />
              <span className="text-[12px]">Bookmark</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-black" size={15} />
              <span className="text-[12px]">Add Review</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-black" size={15} />
              <span className="text-[12px]">Featured</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="text-black" size={15} />
              <span className="text-[12px]">Share</span>
            </div>
            <button className="border  ml-15   items-center   text-[15px]   w-[130px] h-[35px]  border-pink-500 text-[#000000] px-4 py-1  hover:bg-pink-500 hover:text-white">
              Open Now
            </button>
          </div>
        </div>

        {/* desc and updown   form   listing dtails page */}

        <div lassName=" w-[489px] h-[500px] ml-12 mt-3 flex flex-col  bg-[#FBFAFA] border border-[#D4D4D4] font-[sans-serif]">
          <div className="flex flex-col   w-[489px] h-[450px]  bg-[#FBFAFA]  -mt-20   ml-7  border border-[#D4D4D4]  gap-4">
            <p className="font-blod  ml-8 mt-4 font-[Brandon]  text-[#000000]  text-[18px]">
              Contact Info
            </p>
            <div className="flex ml-8">
              <img
                src={contactpic}
                alt="Kethy Brown"
                className="w-20 h-20 rounded-full border border-[#EE2478]"
              />
              <div className="flex flex-col ml-5">
                <span className="text-[15px] text-[#050505]  font-semibold">
                  Kethy Brown
                </span>
                <p className="text-[#959595]">Post 3 Days ago</p>
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#959595]" size={18} />
                  <span className="text-[#959595]">Iraq Market</span>
                </div>
              </div>
            </div>

            <hr className="w-full border-t border-[#D4D4D4] opacity-50" />

            <div className="flex gap-5  ml-7  ">
              <Twitter
                className="text-white bg-[#C0C0C0] p-2 rounded-full"
                size={30}
              />
              <Linkedin
                className="text-white bg-[#C0C0C0]  p-2 rounded-full"
                size={30}
              />
              <Facebook
                className="text-white bg-[#C0C0C0]  p-2 rounded-full"
                size={30}
              />
              <Instagram
                className="text-white bg-[#C0C0C0]  p-2 rounded-full"
                size={30}
              />
              <Youtube
                className="text-white bg-[#C0C0C0]  p-2 rounded-full"
                size={30}
              />
            </div>
            <div className="flex items-center ml-5 gap-2">
              <MapPin className="text-[#959595]" size={20} />
              <span>Ut wisi enim ad minim veniam, quis</span>
            </div>
            <hr className="w-full border-t border-[#D4D4D4] opacity-50" />
            <div className="flex w-[150px]  gap-5  ml-7 h-[20px]">
              <span className="w-[15px] h-[15px] text-[#959595]">
                {" "}
                <FiPhoneCall />
              </span>
              <span className="font-sans  text-[15px] -mt-1  text-[ #000000]">
                1800 (123) 4567
              </span>
            </div>

            <hr className="w-full border-t border-[#D4D4D4] opacity-50" />
            <div className="flex w-[150px]  gap-8  ml-7 h-[20px]">
              <span className="w-[3px] h-[13px] text-[#959595]">
                {" "}
                <Globe />
              </span>
              <span className="font-sans  text-[15px] -mt-1  text-[ #000000]">
                www.tajmeel.com
              </span>
            </div>
            <hr className="w-full border-t border-[#D4D4D4] opacity-50" />
            <div className="flex w-[150px]  gap-5  ml-7 h-[20px]">
              <span className="w-[15px] h-[15px] text-[#959595]">
                {" "}
                <Mail />
              </span>
              <span className="font-sans  text-[15px] -mt-1  text-[ #000000]">
                Info@tajmeel.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* description and updown   form   listing  */}
      <div className="flex mt-3">
        <div className="flex flex-col">
          <p className="font-bold">Listing Description</p>
          <div className="w-160 text-[#000000] mt-2  font-sans  text-[14px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
              consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et
              pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur
              convallis fringilla diam sed aliquam..
            </p>
          </div>
          <div className="w-160 text-[#000000] mt-4 font-sans text-[14px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
              consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et
              pulvinar nisi tincidunt. Aliqua erat volutpat. Curabitur convallis
              fringilla diam sed aliquam. Sed tempor iaculis massa faucibus
              feugiat. In fermentum facilisis massa, a consequat purus viverra
            </p>
          </div>

          <div className="w-160 text-[#000000]  font-sans  mt-4 text-[14px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
              consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et
              pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur
              convallis fringilla diam sed aliquam.
            </p>
          </div>

          <div className="w-160 text-[#000000]  font-sans mt-4 text-[14px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
              consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et
              pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur
              convallis fringilla diam sed aliquam.
            </p>
          </div>

          {/* listing page details rewiev page  */}
          <div className="flex mt-5 -ml-8 space-x-2">
            <div className="flex w-[200px] h-[30px] p-1   border border-[#D0D0D0] ml-7  gap-2">
              <span className="w-[15px]   ml-7  h-[15px] text-[#959595]">
                {" "}
                <FiPhoneCall />
              </span>
              <span className="font-sans  text-[14px] -mt-1  text-[ #000000]">
                1800 (123) 4567
              </span>
            </div>
            <div className="flex w-[200px] h-[30px]   items-center  border border-[#D0D0D0]  ml-7 gap-2 ">
              <span className="   text-[#959595] ml-5  ">
                {" "}
                <Mail className="w-[15px] h-[15px]" />
              </span>
              <span className="font-sans  text-[14px] -mt-1  text-[ #000000]">
                Info@tajmeel.com
              </span>
            </div>
            <div className="flex w-[200px] h-[30px] p-1  ml-10 border border-[#D0D0D0]  gap-2 ">
              <span className=" ml-5 text-[#959595] ">
                {" "}
                <Globe className="w-[15px] h-[15px]" />
              </span>
              <span className="font-sans  text-[14px] -mt-1  text-[ #000000]">
                www.tajmeel.com
              </span>
            </div>
          </div>

          <hr className="w-full border-t mt-3 border-[#D4D4D4] opacity-50" />
          <hr className="w-full border-t mt-2 border-[#D4D4D4] opacity-50" />

          <div className="flex gap-5  -ml-2  mt-4">
            <button
              onClick={() => openLink("https://www.facebook.com")}
              className="flex items-center gap-2 bg-[#38529A] text-[#FFFFFF] px-4 py-2 "
            >
              <Facebook size={20} /> Facebook
            </button>
            <button
              onClick={() => openLink("https://www.twitter.com")}
              className="flex items-center gap-2 bg-[#1C9CEA] text-[#FFFFFF] px-4 py-2 "
            >
              <Twitter size={20} /> Twitter
            </button>
            <button
              onClick={() => openLink("https://www.instagram.com")}
              className="flex items-center gap-2 bg-[#E1306C] text-[#FFFFFF] px-4 py-2 "
            >
              <Instagram size={20} /> Instagram
            </button>
            <button
              onClick={() => openLink("https://www.linkedin.com")}
              className="flex items-center gap-2 bg-[#2877B5] text-[#FFFFFF] px-4 py-2 "
            >
              <Linkedin size={20} /> Linkedin
            </button>
            <button
              onClick={() => openLink("https://www.youtube.com")}
              className="flex items-center gap-2 bg-[#F00125] text-[#FFFFFF] px-4 py-2 "
            >
              <Youtube size={20} /> Youtube
            </button>
          </div>
        </div>

        {/* listing page  Business Hours time*/}

        <div className="mt-20  -ml-5">
          <div lassName=" w-[489px] h-[500px]   flex flex-col  bg-[#FBFAFA] border border-[#D4D4D4] font-[sans-serif]">
            <div className="flex flex-col   w-[489px] h-[450px]  bg-[#FBFAFA]  -mt-20   ml-7  border border-[#D4D4D4]  gap-4">
              <p className="font-blod  ml-5 mt-4 font-[Brandon]  text-[#000000]  text-[18px]">
                Business Hours
              </p>
              <hr className="w-full border-t border-[#D4D4D4] opacity-50" />

              <div className="flex items-center  space-x-70 ml-5 gap-2">
                <span>Monday</span>
                <span>9.30 AM - 9.00</span>
              </div>
              <hr className="w-full border-t border-[#D4D4D4] opacity-50" />

              <div className="flex items-center  space-x-70 ml-5 gap-2">
                <span>Tuesday</span>
                <span>9.30 AM - 9.00</span>
              </div>

              <hr className="w-full border-t border-[#D4D4D4] opacity-50" />
              <div className="flex items-center  space-x-65 ml-5 gap-2">
                <span>Wednesday</span>
                <span>9.30 AM - 9.00</span>
              </div>
              <hr className="w-full border-t border-[#D4D4D4] opacity-50" />
              <div className="flex items-center  space-x-70 ml-5 gap-2">
                <span>Thursday</span>
                <span>9.30 AM - 9.00</span>
              </div>
              <hr className="w-full border-t border-[#D4D4D4] opacity-50" />
              <div className="flex items-center  space-x-75 ml-5 gap-2">
                <span>Friday</span>
                <span>9.30 AM - 9.00</span>
              </div>
              <hr className="w-full border-t border-[#D4D4D4] opacity-50" />
              <div className="flex items-center  space-x-70 ml-5 gap-2">
                <span>Saturday</span>
                <span>9.30 AM - 9.00</span>
              </div>
              <hr className="w-full border-t border-[#D4D4D4] opacity-50" />
              <div className="flex items-center  space-x-73 ml-5 gap-2">
                <span>Sunday</span>
                <span>9.30 AM - 9.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* listing details  page  tags page */}
      <div className="flex  w-[675px] ">
        <div className="flex flex-col">
          <p className="font-bold mt-10">Listings Tags</p>
          <div className="flex space-x-1">
            <div className="flex mt-5 -ml-8   ">
              <div className="flex w-[150px] h-[30px] p-1   border border-[#D0D0D0] ml-7  gap-2">
                <span className="   ml-7  h-[15px] text-[#000000]">
                  {" "}
                  <AiFillTag />
                </span>
                <span className="font-sans  text-[12px] -mt-1  text-[#000000]">
                  Hair Saloon
                </span>
              </div>
              <div className="flex w-[150px] h-[30px]  p-1 items-center  border border-[#D0D0D0]  ml-7 gap-2 ">
                <span className="   text-[#000000] ml-5  ">
                  {" "}
                  <AiFillTag className="w-[15px] h-[15px]" />
                </span>
                <span className="font-sans  text-[12px] -mt-1  text-[#000000]">
                  Dental
                </span>
              </div>
              <div className="flex w-[150px] h-[30px] p-1  ml-10 border border-[#D0D0D0]  gap-2 ">
                <span className=" ml-5 text-[#000000] ">
                  {" "}
                  <AiFillTag className="w-[15px] h-[15px]" />
                </span>
                <span className="font-sans  text-[12px] -mt-1  text-[#000000]">
                  Diversity of Clinic
                </span>
              </div>
            </div>
          </div>
          <p className="font-bold mt-5">Pricing</p>
          <div className="flex bg-[#F3F3F3] w-[680px] mt-8 h-[120px] border border-[#CBCBCB]">
            <div className="flex flex-col mt-4 ml-5">
              <p className="text-[#000000]">Hair Cut</p>
              <span className="text-[#292929] text-[15px]">30 Mins - 1 hr</span>
              <span className="text-[#000000] text-[15px]">
                From Iraqi Dinar 70
              </span>
            </div>
            <button className="text-[#FFFFFF] bg-[#EE2478] mt-10 ml-90 w-[120px] h-[35px] text-[15px]">
              Book Now
            </button>
          </div>

          <div className="flex w-[680px] mt-8 h-[120px] border border-[#CBCBCB]">
            <div className="flex flex-col mt-4 ml-5">
              <p className="text-[#000000]">Cut + color + Treatment</p>
              <span className="text-[#292929] text-[15px]">30 Mins - 1 hr</span>
              <div className="flex">
                <span className="text-[#000000] text-[15px]">
                  From Iraqi Dinar 120
                </span>
                <button className="text-[#FFFFFF] bg-[#54BA1D]  ml-5  -mt-1 w-[100px] h-[30px] text-[13px]">
                  Save upto 50%
                </button>
              </div>
            </div>
            <button className="text-[#000000]  font-bold border border-[#EE2478] mt-10 ml-60 w-[120px] h-[35px] text-[15px]">
              Book Now
            </button>
          </div>

          <div className="flex w-[680px] mt-8 h-[120px] border border-[#CBCBCB]">
            <div className="flex flex-col mt-4 ml-5">
              <p className="text-[#000000]">Cut + Colour Only</p>
              <span className="text-[#292929] text-[15px]">30 Mins - 1 hr</span>
              <span className="text-[#000000] text-[15px]">
                From Iraqi Dinar 70
              </span>
            </div>
            <button className="text-[#000000] font-bold border border-[#EE2478] mt-10 ml-93 w-[120px] h-[35px] text-[15px]">
              Book Now
            </button>
          </div>

          <div className="flex w-[680px] mt-8 h-[120px] border border-[#CBCBCB]">
            <div className="flex flex-col mt-4 ml-5">
              <p className="text-[#000000]">Cut + Colour Only</p>
              <span className="text-[#292929] text-[15px]">30 Mins - 1 hr</span>
              <span className="text-[#000000] text-[15px]">
                From Iraqi Dinar 70
              </span>
            </div>
            <button className="text-[#000000]  font-bold  cursor-pointer  border border-[#EE2478] mt-10 ml-93 w-[120px] h-[35px] text-[15px]">
              Book Now
            </button>
          </div>
          <button
            onClick={handleClick}
            className="text-[#FFFFFF]  font-sans  cursor-pointer   bg-[#EE2478] mt-4 w-[100px] h-[35px] text-[15px]"
          >
            See all
          </button>
        </div>

        {/* listing details  bg image page  gs page */}
        <div className="relative w-full h-full  flex   flex-col text-center text-white px-4">
          <img
            src={blur}
            alt="Promo Banner"
            className="absolute inset-0 w-full ml-3   border border-[#FFFFFF33]  -mt-4 h-full object-cover blur-[3px] "
          />
          <div className=" relative w-[410px] h-[240px] ml-10    -mt-6  max-w-md">
            <h1 className=" text-[18px] font-bold mt-7 ml-8  w-[340px] h-[30px] ">
              Book Now & Get 50% Discount
            </h1>
            <button className="text-[#FFFFFF] font-sans bg-[#EE2478] mt-4 w-[200px] h-[35px] text-[15px]">
              Date of Expire 05/02/2025
            </button>
            <p className="text-[13px] text-[#FFFFFF] font-sans mt-2  ml-20 w-[250px] h-[50px]">
              How to use? Just show us this coupan on a screen
            </p>

            <div className=" flex  mt-3 items-center with-[100px] h-[45px] gap-4 bg-[#00000066] bg-blur-[1px] ">
              <span className="text-[14px] text-[#FFFFFF]  ml-25  font-sans">
                {" "}
                Coupan Code
              </span>
              <span className=" text-[#8A8A8A]  font-sans  items-center w-[100px] h-[30px] text-[14px] bg-[#FFFFFF]  blur-[px] border  border-[#EE2478]">
                DL 75T 12
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* listing details  Reviews (08)  page */}
      <div className="flex flex-col mt-5  ">
        <p className="text-[#000000] font-[Brandon]  font-bold text-[18px]">
          Reviews (08){" "}
        </p>
        <div className="flex w-[680px] mt-8 h-[200px] border border-[#CBCBCB]">
          <div className="flex flex-col mt-4">
            <div className="flex ml-8">
              <img
                src={contactpic}
                alt="Kethy Brown"
                className="w-20 h-20 rounded-full "
              />
              <div className="flex flex-col  ml-">
                <div className="flex space-x-1 p-2   rounded-lg">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className=" p-2 rounded-md  text-[#F6BD00] w-[8px] h-[8px]"
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  ))}
                  <div className=" p-2 rounded-md  text-[#A7A7A7]  w-[8px] h-[8px]">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
                <span className="text-[15px] text-[#050505]  font-semibold">
                  Kethy Brown
                </span>
                <p className="text-[#959595]">Jan 05, 2022 - 8:52 am</p>

                <p className="w-[420px] text-[12px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. pulvinar. Donec a consectetur
                  nulla. Nulla posuere sapien vitae lectus suscipit, et pulvi
                  Aliquam erat volutpat. Curabitur convallis fringilla diam sed
                  aliquam.{" "}
                </p>
              </div>
            </div>
          </div>
          <button className="text-[#5E5E5E]  flex items-center border border-[#D9D9D9] mt-10  mr-10 w-[120px] h-[35px] text-[12px]">
            Helpful Review
            <ThumbsUp size={16} />
          </button>
        </div>
      </div>

      <div className="min-h-screen flex flex-col  -ml-140  items-center py-5  px-4">
        <div className="w-full     max-w-2xl space-y-6">
          {reviews.map(({ id, name, date, image, review }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-xl shadow-lg    flex gap-4 items-center"
            >
              <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full  object-cover -mt-20 border-gray-300"
              />
              <div>
                <div className="flex text-yellow-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <h2 className="text-[14px] ml-1 font-semibold   text-[#000000]">
                  {name}
                </h2>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Clock size={14} className="mr-1" /> {date}
                </div>
                <p className="text-[14px]  w-[400px] text-[#000000]  mt-2">
                  {review}
                </p>
                <button
                  className={`mt-2 text-sm flex items-center w-[120px] h-[35px]  border border-[#D9D9D9] gap-1 hover:underline ${
                    likedReviews[id] ? "text-red-500" : "text-[#5E5E5E]"
                  }`}
                  onClick={() => toggleLike(id)}
                >
                  <p className="ml-1">Helpful Review</p>
                  <ThumbsUp
                    size={16}
                    fill={likedReviews[id] ? "red" : "none"}
                    stroke="currentColor"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* listing details  similar listing page */}
      <div className="-ml-8 mt-5">
        <p className="font-bold font-[Brandon] text-center text-[25px] text-[#000000]">
          Similar Listing
        </p>

        {/* image */}
        <div className="relative  ml-12 mt-5 border-radius w-full max-w-lg mx-auto group">
          <div className="flex space-x-4">
            <img src={imgs1} alt="img1" className="w-70 " />
            <img src={img2} alt="img2" className="w-70" />
            <img src={img3} alt="img3" className="w-70 " />
            <img src={img4} alt="img4" className="w-70" />
          </div>
        </div>
        <div className="relative  flex  h-40 w-70 -mt-4 ml-12 max-w-lg mx-auto group">
          <div className="flex flex-row  space-x-4">
            <div className="flex flex-col  shadow-md border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
              <p className="  ml-2 mt-3 font-bold">RB Studio</p>
              <div className="flex items-center">
                <span className=" -mt-3   ml-2 font-semibold">4.9</span>
                <FaStar className="text-black -mt-3  ml-1" />
              </div>
              <p className="text-gray-600 -mt-3  ml-2 ">
                Sector 57 Iraq Market
              </p>
              <button className=" text-black ml-2 w-30 h-8   mb-1 border border-[#ED2D77]">
                View Details
              </button>
            </div>
            {/* description 2*/}
            <div className="flex flex-col  shadow-md border border-[#D9D9D9]   w-70 focus:outline-none items-start space-y-2 mt-4">
              <p className="  ml-2 mt-3 font-bold">Uptown Hair</p>
              <div className="flex items-center">
                <span className=" -mt-3   ml-2 font-semibold">4.9</span>
                <FaStar className="text-black -mt-3  ml-1" />
              </div>
              <p className="text-gray-600 -mt-3  ml-2 ">
                Sector 57 Iraq Market
              </p>
              <button className=" text-black ml-2 w-30 h-8   mb-1 border border-[#ED2D77]">
                View Details
              </button>
            </div>
            <div className="flex flex-col  shadow-md border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
              <p className="  ml-2 mt-3 font-bold">Curls & More</p>
              <div className="flex items-center">
                <span className=" -mt-3   ml-2 font-semibold">4.9</span>
                <FaStar className="text-black -mt-3  ml-1" />
              </div>
              <p className="text-gray-600 -mt-3  ml-2 ">
                Sector 57 Iraq Market
              </p>
              <button className=" text-black ml-2 w-30 h-8  mb-1 border border-[#ED2D77]">
                View Details
              </button>
            </div>
            <div className="flex flex-col  shadow-md border border-[#D9D9D9]  w-70 focus:outline-none items-start space-y-2 mt-4">
              <p className="  ml-2 mt-3 font-bold">Braids & Layers</p>
              <div className="flex items-center">
                <span className=" -mt-3   ml-2 font-semibold">4.9</span>
                <FaStar className="text-black -mt-3  ml-1" />
              </div>
              <p className="text-gray-600 -mt-3  ml-2 ">
                Sector 57 Iraq Market
              </p>
              <button className=" text-black ml-2 w-30 h-8  border border-[#ED2D77] mb-1 ">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails18;
