import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import {motion,useInView} from "framer-motion";
// import { useInView } from "react-intersection-observer";
import grandcity from "../assets/grandcity/grandcity.jpeg";
import grandcity1 from "../assets/grandcity/grandcity-hero.jpeg";
import grandcity2 from "../assets/grandcity/grandcity1.jpeg";
import grandcity3 from "../assets/grandcity/grandcity2.jpeg";
import grandcity4 from "../assets/grandcity/grandcity3.jpeg";
import cart from "../assets/icons/cart.png";
import cctv from "../assets/icons/cctv.png";
import cinema from "../assets/icons/cinema.png";
import hospital from "../assets/icons/hospital.png";
import mosque from "../assets/icons/mosque.png";
import park from "../assets/icons/park.png";
import restaurant from "../assets/icons/restaurant.png";
import saloon from "../assets/icons/saloon.png";
import school from "../assets/icons/school.png";
import video from "../assets/grandcity/grandvideoceo.mp4";
import grandcityIntroVideo from "../assets/grandcity/grandcityIntro.mp4";
import amenities from "../assets/grandcity/amenities.jpeg";
import amenities1 from "../assets/grandcity/amenities1.jpeg";
import amenities2 from "../assets/grandcity/amenities2.jpeg";
import amenities3 from "../assets/grandcity/amenities3.jpeg";
import paymentPlan from "../assets/grandcity/payment-plan-phase-1.jpg";
import paymentPlanOnGround from "../assets/grandcity/payment-plan-onground.jpeg";
import paymentPlanCommercial from "../assets/grandcity/payment-plan-commercial.jpeg";
import paymentPDF from "../assets/grandcity/Grandcity-1-Faisalabad.pdf";

const images = [{img: grandcity1},{img:grandcity2},{img:grandcity4},{img:grandcity3}]

const Property = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const { name } = useParams();
  const [imgSrc, setImgSrc] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setImgSrc(null);
      }
    };
    // document.body.style.overflow = auto;
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="pt-24 lg:pt-28 flex flex-col items-center justify-center">
      {/* Images Container */}
      <div className="w-full flex flex-col items-center p-5 lg:pt-10 bg-gradient-to-r from-[#947054] via-cyan-100 to-[#a38373]">
        <motion.h1 initial={{opacity:0, y:30}} animate={{opacity: 1, y:0}} transition={{duration: 1, ease: "easeIn"}} className="font-bold text-xl lg:text-3xl bg-gradient-to-r from-sky-500 via-red-500 to-pink-500 py-2 px-3 rounded-md text-white">Grandcity Phase-1</motion.h1>
        <motion.p initial={{opacity:0, y:30}} animate={{opacity: 1, y:0}} transition={{duration: 1, ease: "easeIn"}} className="text-xs md:text-sm lg:text-lg font-semibold mt-1">Sarghodha Road Faisalabad.</motion.p>
        <div className="flex flex-col lg:flex-row items-center gap-5 justify-evenly mt-5 mb-5 px-5 w-full">
          <motion.div initial={{opacity:0, y:30}} animate={{opacity: 1, y:0}} transition={{duration: 1, ease: "easeIn", delay:0.5}}>
            <img src={grandcity} className="w-[450px] md:w-[500px] cursor-pointer" onClick={() => setImgSrc(grandcity)}/>
            {/* <video width={500} controls><source src={grandcityIntroVideo} /></video> */}
          </motion.div>
          <motion.div className="grid grid-cols-4 lg:grid-cols-2 gap-5">
            {images.map((item,index) => {
              return <motion.img src={item.img} key={index} className="w-[151px] lg:w-[237px] cursor-pointer" alt="" onClick={() => setImgSrc(item.img)}  initial={{opacity:0, y:30}} animate={{opacity: 1, y:0}} transition={{duration: 1, ease: "easeIn", delay:0.7}} />

            })}
            {/* <img src={grandcity2} className="w-[151px] lg:w-[237px] cursor-pointer" alt="" onClick={() => setImgSrc(grandcity2)} />
            <img src={grandcity4} className="w-[151px] lg:w-[237px] cursor-pointer" alt="" onClick={() => setImgSrc(grandcity4)} />
            <img src={grandcity3} className="w-[151px] lg:w-[237px] cursor-pointer" alt="" onClick={() => setImgSrc(grandcity3)} /> */}
          </motion.div>
        </div>
        {/* Sizes Available */}
        <div className="mt-5">
          <h1 className="font-bold flex w-fit mx-auto px-2 py-1 text-xl lg:text-3xl text-center bg-gradient-to-tr from-sky-500 via-red-500 to-pink-500 rounded-md text-white">Available Sizes</h1>
          <div className="my-5 flex flex-wrap justify-center gap-10">
            <NavLink to={`/property/${name}/3-marla`}><button className="bg-blue-600 text-white font-semibold py-2 px-3 hover:scale-110 transition-all duration-150 ease-linear rounded-md">3-Marla</button></NavLink>
            <NavLink to={`/property/${name}/5-marla`}><button className="bg-blue-600 text-white font-semibold py-2 px-3 hover:scale-110 transition-all duration-150 ease-linear rounded-md">5-Marla</button></NavLink>
            <NavLink to={`/property/${name}/7-marla`}><button className="bg-blue-600 text-white font-semibold py-2 px-3 hover:scale-110 transition-all duration-150 ease-linear rounded-md">7-Marla</button></NavLink>
            <NavLink to={`/property/${name}/10-marla`}><button className="bg-blue-600 text-white font-semibold py-2 px-3 hover:scale-110 transition-all duration-150 ease-linear rounded-md">10-Marla</button></NavLink>
            <NavLink to={`/property/${name}/20-marla`}><button className="bg-blue-600 text-white font-semibold py-2 px-3 hover:scale-110 transition-all duration-150 ease-linear rounded-md">1-Kanal</button></NavLink>
          </div>
        </div>
        {/* Payment Plan */}
        <div className="mt-5 flex flex-col">
          <h1 className="font-bold text-sm flex w-fit mx-auto px-2 py-1 md:text-xl lg:text-3xl text-center bg-gradient-to-tr from-sky-500 via-red-500 to-pink-500 rounded-md text-white mb-5 lg:mb-10">Payment 2 & 3 Years Plan</h1>
          <div className="w-fit flex flex-col gap-5 items-center">
            <img src={paymentPlanOnGround} alt="payment plan" className="cursor-pointer w-full" onClick={() => setImgSrc(paymentPlanOnGround)}/>
            <img src={paymentPlan} alt="payment plan" className="cursor-pointer w-full" onClick={() => setImgSrc(paymentPlan)}/>
            <img src={paymentPlanCommercial} alt="payment plan" className="cursor-pointer w-full" onClick={() => setImgSrc(paymentPlanCommercial)}/>
          </div>
          <button className="bg-[#082b49] flex items-center text-white gap-2 py-3 px-4 rounded-full font-bold w-fit mx-auto mt-5 hover:bg-[#082b49ea]"><FaRegArrowAltCircleDown /><a className="hover:underline active:text-red-600" href={paymentPDF} download>Download Map</a></button>
          <div className="mt-5">
            <p className="font-semibold underline underline-offset-2 my-2">Terms & Conditions</p>
            <ul className="pl-10" style={{listStyleType: "square"}}>
              <li className="text-sm">Processing Fee: PKR 10,000/-</li>
              <li className="text-sm">Development charges are excluded.</li>
              <li className="text-sm">10% extra will be charged for premium plots i.e Facing Park, Corner Plots & at Main Boulevard.</li>
              <li className="text-sm">10% discount on full payment & 5% discount on 50% payment in advance.</li>
              <li className="text-sm">Privileged plots will be offered to customers buying in 50% & 100% payments in advance.</li>
            </ul>
          </div>
        </div>
      </div>
      
      
    {/* Amenities */}
      <div className="bg-gray-100 mt-10 w-full flex flex-col items-center">
        <h1 className="font-bold text-xl lg:text-3xl py-2 px-3 rounded-md my-5">Features / Amenities</h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 justify-center my-5 transition-all duration-300 ease-linear">
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={mosque} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">MOSQUE</h1>
            <p className="w-[90%] mx-auto text-center">The community's mosques offer a convenient place for prayer and reflection</p>
          </div>
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={school} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">SCHOOL</h1>
            <p className="w-[90%] mx-auto text-center">Creating a pathway to success through education and character development.</p>
          </div>
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={hospital} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">HOSPITAL</h1>
            <p className="w-[90%] mx-auto text-center">Your trusted healthcare partner for quality medical services within the community.</p>
          </div>
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={park} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">PARKS</h1>
            <p className="w-[90%] mx-auto text-center">Tranquil green spaces where serenity meets nature, offering a peaceful escape.</p>
          </div>
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={restaurant} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">RESTAURANT</h1>
            <p className="w-[90%] mx-auto text-center">Embark on a culinary journey where every bite narrates a tale of flavor and delight.</p>
          </div>
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={cinema} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">CINEMA</h1>
            <p className="w-[90%] mx-auto text-center">Opera Cinema is your destination for cinematic excellence and immersive entertainment.</p>
          </div>
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={cart} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">SHOPPING MART</h1>
            <p className="w-[90%] mx-auto text-center">Your premier one-stop destination for all your shopping needs and desires.</p>
          </div>
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={cctv} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">24/7 CCTV</h1>
            <p className="w-[90%] mx-auto text-center">Ensuring peace of mind with vigilant surveillance, ensuring safety around the clock</p>
          </div>
          <div className="bg-white h-64 w-64 flex flex-col items-center justify-center gap-5 shadow-lg text-[#947054]">
            <img src={saloon} className="w-20" alt="" />
            <h1 className="text-lg font-semibold underline underline-offset-2">PARLOUR</h1>
            <p className="w-[90%] mx-auto text-center">Where style and sophistication converge, bringing out your best look.</p>
          </div>
        </div>
      {/* visual amenities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 pb-5 gap-10 lg:gap-7">
          <img src={amenities} className="w-[300px]  lg:w-[350px] cursor-pointer" alt="" onClick={() => setImgSrc(amenities)} />
          <img src={amenities1} className="w-[300px] lg:w-[350px] cursor-pointer" alt="" onClick={() => setImgSrc(amenities1)} />
          <img src={amenities2} className="w-[300px] lg:w-[350px] cursor-pointer" alt="" onClick={() => setImgSrc(amenities2)} />
          <img src={amenities3} className="w-[300px] lg:w-[350px] cursor-pointer" alt="" onClick={() => setImgSrc(amenities3)} />
        </div>
      </div>


      {/* Our Message */}
        <div className="my-5 lg:my-10 w-full">
          <h1 className="font-bold text-center text-xl lg:text-3xl py-2 px-3 rounded-md my-5">Our Message</h1>
          <div className="overflow-hidden flex gap-2 flex-col lg:flex-row w-[90%] mx-auto">
            <div className="flex-1 bg-black flex items-center justify-center">
              <video width={250} controls>
                <source src={video}/>
              </video>
            </div>
            <div className="flex-1 flex items-center justify-center px-20">
              <div className="hidden lg:block">
                <p>At Raees Estate, we are dedicated to helping you find the perfect place to call home. With years of experience in the real estate market, our team of expert agents is committed to providing personalized service, market insights, and seamless transactions.
                <br /><br />Whether you're buying, selling, or investing, we offer a full range of real estate solutions tailored to your needs.
                <br /><br /> Our deep understanding of local markets, cutting-edge technology, and client-first approach set us apart.We believe that finding the right property is more than just a transaction—it’s about creating a lifestyle.
                <br /><br /> Let us guide you every step of the way and turn your real estate dreams into reality.
                <br /><br />Let’s find your dream home together!</p>
               </div>
              </div>
          </div>
        </div>


        {/* Open full Image */}
        {imgSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-5" onClick={() => setImgSrc(null)}>
          <img src={imgSrc} alt="full screen" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default Property;


{/* <div className="grid grid-cols-4 lg:grid-cols-2 gap-5">

</div> */}