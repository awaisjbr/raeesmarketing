import { useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../assets/logo1.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if(window.scrollY > 72){
      setIsSticky(true)
    }else{
      setIsSticky(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  },[]);

  return (
    <div className="z-50 w-full top-0 left-0 fixed">
      {/* Header Top */}
      <div className={`flex md:flex-row border-b-2 border-[#947054] h-10`}>
        <div className="bg-[#212529] text-[#808080] flex items-center pl-2 w-full text-sm"><a href="mailto:contact@resees.com">contact@raeesmarketing.com</a></div>
        <div className="bg-[#947054] w-full text-white flex items-center gap-5 md:w-[40%] lg:w-[30%]">
          <FiPhoneCall className="bg-white h-full w-12 text-[#947054] p-3" />
          <a className="text-xs md:text-sm" href="tel:+923280555595">+92 328 0555595</a>
        </div>
      </div>

      {/* Header NAV */}
      <div className={`h-14 md:h-16 lg:h-20 w-full bg-[#212529] flex items-center justify-between transition-all duration-300 ease-linear ${isSticky ? "bg-black/50" : ""}`}>
        {/* LOGO */}
        <img src={logo} alt="logo.png" className="w-12 ml-5 md:w-12 lg:w-16 cursor-pointer" />
        {/* Nav Links */}
        <div className="flex gap-5 lg:gap-10 pr-6 md:pr-16 lg:pr-32 text-xs sm:text-sm md:text-lg font-semibold text-white lg:text-xl">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/all-properties"}>Properties</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



{/* LOGO */}
{/* <img src={logo} alt="logo.png" className="w-14 ml-5 md:w-16 lg:w-20 cursor-pointer" /> */}
{/* Nav Links */}
{/* <div className="flex gap-5 lg:gap-10 pr-6 md:pr-16 lg:pr-32 text-sm font-semibold lg:text-white lg:text-lg">
  <NavLink to={"/"}>Home</NavLink>
  <NavLink to={"/projects"}>Projects</NavLink>
  <NavLink to={"/about"}>About</NavLink>
</div> */}
