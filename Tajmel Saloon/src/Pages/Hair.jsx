import React from "react";
import { FaWineBottle } from "react-icons/fa";
import { SearchIcon, MapPin, Calendar } from "lucide-react";
import Haircont from "../assets/img/Haircont.png";
import massag1 from "../assets/img/massag1.png";
import massag2 from "../assets/img/massag2.png";
import massag3 from "../assets/img/massag3.png";
import massag4 from "../assets/img/massag4.png";
import massag5 from "../assets/img/massag5.png";
import massag6 from "../assets/img/massag6.png";
import massag7 from "../assets/img/massag7.png";
import m1 from "../assets/img/m1.png";
import m2 from "../assets/img/m2.png";
import m3 from "../assets/img/m3.png";

const Hair = () => {
  return (
    <div className="w-full   h-full">
      <div className=" overflow-x-hidden w-full  h-screen">
        {/* Background Image */}
        <img
          src={Haircont}
          alt="Background"
          className="absolute  mt-10 max-w-[1920px] max-h-[539px]  inset-0 w-full h-full object-cover"
        />

        {/* middle Text */}

        <div className="flex mt-50 items-center">
          <div className="relative  ml-100 h-28 w-1">
            <div
              className=" top-20 h-1/2 w-full bg-pink-500"
              style={{ backgroundColor: "#ED2D77" }}
            ></div>
            <div className="top-20 h-1/2 w-full bg-black"></div>
          </div>
          <div className="flex flex-col">
            <div className="relative ml-6">
              {" "}
              <span className=" text-4xl font-bold font-sans text-[#FFFFFF]">
                Hairdressers and
              </span>
            </div>

            <div className="relative ml-6">
              {" "}
              <span className=" text-4xl font-bold font-sans text-[#FFFFFF]">
                hair salons
              </span>
            </div>
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
                <SearchIcon
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Search for Treatment"
                  className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-3 relative  ">
                <MapPin
                  className="absolute left-3 top-3  text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Enter Postcode or Area"
                  className="w-full pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-3 relative">
                <MapPin
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
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

      {/*  imgage masage */}

      <div className="relative  -mt-30  -left-10 ml-12 border-radius w-full max-w-lg mx-auto group">
        <div className="flex space-x-4">
          <img src={massag1} alt="img1" className="w-100 " />
          <img src={massag2} alt="img2" className="w-100" />
          <img src={massag3} alt="img3" className="w-100" />
        </div>
      </div>

      {/*  img massage description */}
      <div className="relative  flex  h-40 w-70 -mt-4 -ml-0 max-w-lg mx-auto group">
        <div className="flex flex-row  space-x-4">
          <div className="flex flex-col     w-100  h-30 focus:outline-none items-start space-y-2 mt-4">
            <p className=" ml-3    hover:text-[#EE2478]  mt-3 font-bold">
              Deep Tissue Massage{" "}
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from epetition, injected humour.
              </p>
            </div>

            <button className=" underline ml-3 font-bold  hover:text-[#EE2478] cursor-pointer  text-black">
              Read More
            </button>
          </div>

          <div className="flex flex-col w-100    focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3 mt-3  hover:text-[#EE2478]  font-bold">
              Swedish Massage
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour.
              </p>
            </div>
            <button className="underline ml-3   hover:text-[#EE2478] cursor-pointer font-bold  text-black">
              Read More
            </button>
          </div>
          <div className="flex flex-col     w-100 focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3    hover:text-[#EE2478]  mt-3 font-bold">
              Turkish Bath
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour.
              </p>
            </div>

            <button className="underline  hover:text-[#EE2478] cursor-pointer  ml-3 font-bold  text-black">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="relative  mt-10 -left-10 ml-12 border-radius w-full max-w-lg mx-auto group">
        <div className="flex space-x-4">
          <img src={massag4} alt="img1" className="w-100 " />
          <img src={massag5} alt="img2" className="w-100" />
          <img src={massag6} alt="img3" className="w-100" />
        </div>
      </div>

      {/*  img massage description */}
      <div className="relative  flex  h-40 w-70 -mt-4 -ml-0 max-w-lg mx-auto group">
        <div className="flex flex-row  space-x-4">
          <div className="flex flex-col     w-100  h-30 focus:outline-none items-start space-y-2 mt-4">
            <p className=" ml-3   hover:text-[#EE2478]  mt-3 font-bold">
              Therapeutic Massage
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from epetition, injected humour.
              </p>
            </div>

            <button className=" underline ml-3 font-bold   hover:text-[#EE2478] cursor-pointer text-black">
              Read More
            </button>
          </div>

          <div className="flex flex-col w-100    focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3 mt-3   hover:text-[#EE2478]  font-bold">
              Thai Massage
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour.
              </p>
            </div>

            <button className="underline ml-3 font-bold   hover:text-[#EE2478] cursor-pointer text-black">
              Read More
            </button>
          </div>
          <div className="flex flex-col     w-100 focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3 mt-3  hover:text-[#EE2478]   font-bold">
              Aromatherapy Massage
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour.
              </p>
            </div>

            <button className="underline ml-3 font-bold  hover:text-[#EE2478] cursor-pointer text-black">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className="relative  mt-10  -left-10 ml-12 border-radius w-full max-w-lg mx-auto group">
        <div className="flex space-x-4">
          <img src={massag7} alt="img1" className="w-100 " />
        </div>
      </div>

      {/*  img massage description */}
      <div className="relative  flex  h-40 w-70 -mt-4 -ml-0 max-w-lg mx-auto group">
        <div className="flex flex-row  space-x-4">
          <div className="flex flex-col     w-100  h-30 focus:outline-none items-start space-y-2 mt-4">
            <p className=" ml-3   hover:text-[#EE2478]    mt-3 font-bold">
              Sports Massage{" "}
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from epetition, injected humour.
              </p>
            </div>

            <button className=" underline ml-3 font-bold hover:text-[#EE2478] cursor-pointer text-black">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/*  treatments massage description 1*/}

      <div>
        <p className="mt-15 font-bold text-xl w-130 text-[#000000]">
          Explore The Best Salons For Hair Treatments Near You
        </p>
      </div>
      <div className="flex space-x-40 text-center  -ml-16 mt-4  font-sans">
        <div>
          <p className=" mt-3 ml-15 font-normal font-sans text-[#000000]">
            Liverpool{" "}
          </p>
          <p className=" mt-3 ml-15 font-normal font-sans text-[#000000]">
            Manchester
          </p>
        </div>

        <div>
          <p className=" mt-3  font-normal font-sans text-[#000000]">Leeds </p>
          <p className=" mt-3  font-normal font-sans text-[#000000]">
            Edinburgh
          </p>
        </div>

        <div>
          <p className=" mt-3 font-normal font-sans text-[#000000]">London</p>
          <p className=" mt-3 font-normal font-sans text-[#000000]">Glasgow</p>
        </div>
      </div>

      {/*  treatments massage description  2*/}

      <div>
        <p className="mt-15 font-bold text-xl w-130 text-[#000000]">
          More Hair Treatments
        </p>
      </div>
      <div className="flex space-x-35 text-center  -ml-24 mt-4  font-sans">
        <div>
          <p className=" mt-3 ml-12 font-normal  text-[15px] font-sans text-[#000000]">
            Afro Hairdressing{" "}
          </p>
          <p className=" mt-3 ml-25 font-normal  w-[180px]  text-[15px] font-sans text-[#000000]">
            Beard Trimming & Shaving
          </p>
          <p className=" mt-3 ml-1 font-normal  text-[15px] font-sans text-[#000000]">
            Braids
          </p>
        </div>

        <div>
          <p className=" mt-3  font-normal  text-[15px] font-sans text-[#000000]">
            Children's Haircuts{" "}
          </p>
          <p className=" mt-3  font-normal text-[15px] font-sans text-[#000000]">
            Hair Loss Treatments
          </p>
          <p className=" mt-3  font-normal  text-[15px] font-sans text-[#000000]">
            Hair Styling and Updos
          </p>
        </div>

        <div className="">
          <p className=" mt-3 font-normal font-sans   text-[15px] text-[#000000]">
            Japanese Straightening
          </p>
          <p className=" mt-3 font-normal font-sans  w-[200px] text-[15px] text-[#000000]">
            Ladies' Hair Conditioning and ScalpTreatments
          </p>
          <p className=" mt-3  font-normal font-sans  text-[15px] text-[#000000]">
            Men's Hair Colouring
          </p>
        </div>

        <div>
          <p className=" mt-3 font-normal font-sans text-[15px] text-[#000000]">
            Men's Haircut
          </p>
          <p className=" mt-3 font-normal font-sans  text-[15px] text-[#000000]">
            Permanent Waves
          </p>
          <p className=" mt-3  font-normal  text-[15px]  font-sans text-[#000000]">
            Wedding Hair
          </p>
        </div>
      </div>

      {/*  treatments massage description  text */}

      <div className="  mt-5">
        <div className="w-265 text-[#000000]  font-sans  text-[15px]">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="w-265 text-[#000000] mt-4 font-sans  text-[15px]">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable.
          </p>
        </div>

        <div className="w-265 text-[#000000]  font-sans  mt-4 text-[15px]">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics,
          </p>
        </div>

        <div className="w-265 text-[#000000]  font-sans mt-4 text-[15px]">
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
      </div>
      {/*  img   massage description 2*/}

      <div>
        <p className="mt-15 font-bold text-xl w-130 text-[#000000]">
          Other tempting treatments
        </p>
      </div>

      <div className="relative  mt-10 -left-10 ml-12 border-radius w-full max-w-lg mx-auto group">
        <div className="flex space-x-4">
          <img src={m1} alt="img1" className="w-100 " />
          <img src={m2} alt="img2" className="w-100" />
          <img src={m3} alt="img3" className="w-100" />
        </div>
      </div>

      {/*  massage description */}
      <div className="relative  flex  h-40 w-70 -mt-4 -ml-0 max-w-lg mx-auto group">
        <div className="flex flex-row  space-x-4">
          <div className="flex flex-col     w-100  h-30 focus:outline-none items-start space-y-2 mt-4">
            <p className=" ml-3  hover:text-[#EE2478]   mt-3 font-bold">Body</p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from epetition, injected humour.
              </p>
            </div>

            <button className=" underline ml-3 font-bold hover:text-[#EE2478] cursor-pointer text-black">
              Read More
            </button>
          </div>

          <div className="flex flex-col w-100    focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3   hover:text-[#EE2478]   mt-3 font-bold">
              Face
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour.
              </p>
            </div>

            <button className="underline ml-3 font-bold  text-black">
              Read More
            </button>
          </div>
          <div className="flex flex-col     w-100 focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3 mt-3   hover:text-[#EE2478]  font-bold">
              Dental
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour.
              </p>
            </div>
            <button className="underline ml-3 font-bold hover:text-[#EE2478] cursor-pointer text-black">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* treatments massage description */}

      <div className="relative  mt-10 -left-10 ml-12 border-radius w-full max-w-lg mx-auto group">
        <div className="flex space-x-4">
          <img src={massag4} alt="m4" className="w-100 " />
          <img src={massag5} alt="m5" className="w-100" />
        </div>
      </div>

      {/*  img massage description */}
      <div className="relative  flex  h-40 w-70 -mt-4 -ml-0 max-w-lg mx-auto group">
        <div className="flex flex-row  space-x-4">
          <div className="flex flex-col     w-100  h-30 focus:outline-none items-start space-y-2 mt-4">
            <p className=" ml-3  mt-3  hover:text-[#EE2478]  font-bold">
              Therapeutic Massage
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from epetition, injected humour.
              </p>
            </div>

            <button className=" underline ml-3  hover:text-[#EE2478] cursor-pointer font-bold  text-black">
              Read More
            </button>
          </div>

          <div className="flex flex-col w-100    focus:outline-none items-start space-y-2 mt-4">
            <p className="  ml-3 mt-3   hover:text-[#EE2478]  font-bold">
              Thai Massage
            </p>
            <div className="flex  ml-3 w-90 items-center">
              <p className="font-sans text-[15px]">
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour.
              </p>
            </div>

            <button className="underline ml-3  hover:text-[#EE2478] cursor-pointer font-bold  text-black">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hair;
