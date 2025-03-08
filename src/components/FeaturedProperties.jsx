import React from 'react';
import { motion } from 'framer-motion';
import omegaCard from "../assets/omegaLogo.jpeg";
import omegaEnclaveCard from "../assets/omegaEncalve.png";
import grandcityCard from "../assets/grandcityLogo.jpeg";
import electricity from "../assets/electricity.png";
import gas from "../assets/gas.png";
import sewerage from "../assets/sewerage.png";
import fda from "../assets/fda.png";
import { useInView } from "react-intersection-observer";
import { NavLink } from 'react-router-dom';

const FeaturedProperties = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div className='my-5'>
      <div className='text-center'>
        <h1 className='text-[#323232] font-bold text-2xl lg:text-4xl'>CHOOSE PROPERTIES</h1>
        <p className='text-[#947054] text-sm font-semibold italic'>Explore our properties to build your home</p>
      </div>
      {/* Proprty Cards */}
      <motion.div ref={ref} initial={{opacity: 0.7}} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 2, delay : 1 }} className='flex flex-wrap justify-center gap-10 mt-10'>
        <motion.div ref={ref} initial={{opacity: 0.7, scale: 0.7 }} animate={inView ? { opacity: 1, scale : 1 } : {}} transition={{ duration: 2, delay : 1 }} className='flex flex-col cursor-pointer overflow-hidden relative'>
            <img src={grandcityCard} className='w-80 md:w-96 h-72 hover:scale-110 transition-all duration-300 ease-linear' alt="omegaCard" />
            <div className='border border-[#947054] py-10 flex flex-col gap-3'>
                <h3 className='text-[#323232] font-semibold text-center lg:text-xl'>Grand City Faisalabad</h3>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-10' src={fda} alt="" title='FDA Approved' />
                    <img className='w-10' src={electricity} alt="" title='UnderGround Electricity' />
                    <img className='w-10' src={gas} alt="" title='LPG Gas' />
                    <img className='w-10' src={sewerage} alt="" title='Sewerage Line'/>
                </div>
            </div>
            <NavLink to={`property/${"grandcity"}`}><button className='absolute bottom-1 rounded-md right-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Explore</button></NavLink>
        </motion.div>
        <motion.div ref={ref} initial={{opacity: 0.7, scale: 0.7 }} animate={inView ? { opacity: 1, scale : 1 } : {}} transition={{ duration: 2, delay : 1.5 }} className='flex flex-col cursor-pointer overflow-hidden relative border border-[#947054]'>
            <img src={omegaEnclaveCard} className='w-80 md:w-96 h-72 hover:scale-110 transition-all duration-300 ease-linear' alt="omegaCard" />
            <div className='border-t border-[#947054] py-10 flex flex-col gap-3'>
                <h3 className='text-[#323232] font-semibold text-center lg:text-xl'>Omega Enclave Faisalabad</h3>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-10' src={fda} alt="" title='FDA Approved' />
                    <img className='w-10' src={electricity} alt="" title='UnderGround Electricity' />
                    <img className='w-10' src={gas} alt="" title='LPG Gas' />
                    <img className='w-10' src={sewerage} alt="" title='Sewerage Line'/>
                </div>
            </div>
            <button className='absolute bottom-1 rounded-md right-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Explore</button>
        </motion.div>
        <motion.div ref={ref} initial={{opacity: 0.7, scale: 0.7 }} animate={inView ? { opacity: 1, scale : 1 } : {}} transition={{ duration: 2, delay : 2 }} className='flex flex-col cursor-pointer overflow-hidden relative'>
            <img src={omegaCard} className='w-80 md:w-96 h-72 hover:scale-110 transition-all duration-300 ease-linear' alt="omegaCard" />
            <div className='border border-[#947054] py-10 flex flex-col gap-3'>
                <h3 className='text-[#323232] font-semibold text-center lg:text-xl'>Omega Residencia Faisalabad</h3>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-10' src={fda} alt="" title='FDA Approved' />
                    <img className='w-10' src={electricity} alt="" title='UnderGround Electricity' />
                    <img className='w-10' src={gas} alt="" title='LPG Gas' />
                    <img className='w-10' src={sewerage} alt="" title='Sewerage Line'/>
                </div>
            </div>
            <button className='absolute bottom-1 rounded-md right-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Explore</button>
        </motion.div>
       
      </motion.div>
    </div>
  )
}

export default FeaturedProperties
