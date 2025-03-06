import React from 'react';
import { motion } from 'framer-motion';
import omega from "../assets/omega.jpg";
import grandcity2 from "../assets/grandcity.png";


const Hero = () => {
  return (
    <motion.div initial={{opacity: 0.1}} animate={{opacity:1}} transition={{ duration: 2, ease:"easeIn" }} className='mt-10 sm:mt-24 md:mt-3 lg:mt-24 z-10 flex flex-col justify-center w-full min-h-screen' style={{zIndex: -1}} id='home'>
      {/* //Hero Image// */}
      <motion.img initial={{opacity: 0.1, y: -50}} animate={{opacity:1, y: 0}} transition={{ duration: 1, ease:"easeOut", delay: 0.5 }} src={omega} className='' alt="" />
      <motion.img initial={{opacity: 0, y: 50}} animate={{opacity:1, y: 0}} transition={{ duration: 1, ease:"easeOut", delay: 1.5 }} src={grandcity2} className='md:hidden mt-10' alt="" />
    
        {/* Hero Text  */}
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay:1 }}
      className='absolute self-center top-[168] bg-black/80 md:text-2xl lg:text-5xl text-white p-2 hidden md:block'>FIND YOUR DREAM PLACE TO LIVE</motion.h1>
    </motion.div>
  )
}

export default Hero
