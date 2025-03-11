import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import omega from "../assets/omega/omega.jpg";
import grandcity2 from "../assets/grandcity/grandcity.png";
import grandcity5 from "../assets/grandcity/grandcity5.png";
import sitara from "../assets/sitara/sitaracard.jpg";

const data = [{img:omega},{img: grandcity5},{img:sitara}]


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => prev === data.length -1 ? 0 : prev +1)
    },10000);
      
    return () => clearInterval(slideInterval)
  })

  return (
    <motion.div initial={{opacity: 0.1}} animate={{opacity:1}} transition={{ duration: 2, ease:"easeIn" }} className='mt-10 sm:mt-24 md:mt-3 lg:mt-24 z-10 flex flex-col justify-center w-full min-h-screen' style={{zIndex: -1}} id='home'>
      {/* //Hero Image// */}
      <div className='relative w-full whitespace-nowrap overflow-hidden carousel'>
      {data.map((item,index) => {
        return <motion.img initial={{opacity: 0.1}} animate={{opacity:1}} transition={{ duration: 1, ease:"easeOut" }} src={item.img} key={index} className={`${currentSlide === index ? "" : "hidden"} w-full flex flex-shrink-0`} alt="" />
      })}
      </div>

      
      <motion.img initial={{opacity: 0, y: 50}} animate={{opacity:1, y: 0}} transition={{ duration: 1, ease:"easeOut", delay: 1.5 }} src={grandcity2} className='md:hidden mt-10' alt="" />
    
        {/* Hero Text  */}
      {/* <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay:3 }}
      className='absolute self-center bg-black/80 md:text-2xl lg:text-5xl text-white p-2 hidden md:block'>FIND YOUR DREAM PLACE TO LIVE</motion.h1> */}
    </motion.div>
  )
}

export default Hero
