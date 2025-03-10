import React from 'react';
import { motion } from 'framer-motion';
import omegaCard from "../assets/omega/omegaLogo.jpeg";
import omegaEnclaveCard from "../assets/omegaenclave/omegaEncalve.png";
import grandcityCard from "../assets/grandcity/grandcityLogo.jpeg";
import sitaraEnclaveCard from "../assets/sitara/SitaraLogo.jpg";
import electricity from "../assets/icons/electricity.png";
import gas from "../assets/icons/gas.png";
import sewerage from "../assets/icons/sewerage.png";
import fda from "../assets/icons/fda.png";
import citihousing from "../assets/citihousing/citihousing.png";
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
      <motion.div ref={ref} initial={{opacity: 0.7}} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 2, delay : 1 }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 lg:w-[80%] lg:mx-auto mt-10'>
        <motion.div ref={ref} initial={{opacity: 0.7, scale: 0.7 }} animate={inView ? { opacity: 1, scale : 1 } : {}} transition={{ duration: 2, delay : 1 }} className='flex flex-col cursor-pointer overflow-hidden relative border border-[#947054] '>
            <img src={grandcityCard} className='w-80 h-72 p-2 hover:scale-105 transition-all duration-300 ease-linear' alt="omegaCard" />
            <div className='pt-3 pb-12 flex flex-col gap-3 border-t border-[#947054] '>
                <h3 className='text-[#323232] font-semibold text-center lg:text-xl'>Grand City Faisalabad</h3>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-10' src={fda} alt="" title='FDA Approved' />
                    <img className='w-10' src={electricity} alt="" title='UnderGround Electricity' />
                    <img className='w-10' src={gas} alt="" title='LPG Gas' />
                    <img className='w-10' src={sewerage} alt="" title='Sewerage Line'/>
                </div>
            </div>
            <NavLink to={`property/${"grandcity-phase-1"}`}><button className='absolute bottom-1 rounded-md left-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-s'>Explore Phase-1</button></NavLink>
            <NavLink to={`property/${"grandcity-phase-2"}`}><button className='absolute bottom-1 rounded-md right-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-s'>Explore Phase-2</button></NavLink>
        </motion.div>
        
        <motion.div ref={ref} initial={{opacity: 0.7, scale: 0.7 }} animate={inView ? { opacity: 1, scale : 1 } : {}} transition={{ duration: 2, delay : 1.5 }} className='flex flex-col cursor-pointer overflow-hidden relative border border-[#947054] '>
            <img src={omegaCard} className='w-80 h-72 p-2 hover:scale-105 transition-all duration-300 ease-linear' alt="omegaCard" />
            <div className='pt-3 pb-12 flex flex-col gap-3 border-t border-[#947054] '>
                <h3 className='text-[#323232] font-semibold text-center lg:text-lg'>Omega Residencia Faisalabad</h3>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-10' src={fda} alt="" title='FDA Approved' />
                    <img className='w-10' src={electricity} alt="" title='UnderGround Electricity' />
                    <img className='w-10' src={gas} alt="" title='LPG Gas' />
                    <img className='w-10' src={sewerage} alt="" title='Sewerage Line'/>
                </div>
            </div>
            <NavLink to={`property/${"omegaresidencia"}`}><button className='absolute bottom-1 rounded-md right-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Explore</button></NavLink>
        </motion.div>

        <motion.div ref={ref} initial={{opacity: 0.7, scale: 0.7 }} animate={inView ? { opacity: 1, scale : 1 } : {}} transition={{ duration: 2, delay : 2 }} className='flex flex-col cursor-pointer overflow-hidden relative border border-[#947054] '>
            <img src={sitaraEnclaveCard} className='w-80 h-72 p-10 hover:scale-110 transition-all duration-500 ease-linear' alt="omegaCard" />
            <div className='pt-3 pb-12 flex flex-col gap-3 border-t border-[#947054] '>
                <h3 className='text-[#323232] font-semibold text-center lg:text-xl'>Sitara Enclave Faisalabad</h3>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-10' src={fda} alt="" title='FDA Approved' />
                    <img className='w-10' src={electricity} alt="" title='UnderGround Electricity' />
                    <img className='w-10' src={gas} alt="" title='LPG Gas' />
                    <img className='w-10' src={sewerage} alt="" title='Sewerage Line'/>
                </div>
            </div>
            <NavLink to={`property/${"sitaraenclave"}`}><button className='absolute bottom-1 rounded-md right-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Explore</button></NavLink>
        </motion.div>

        <motion.div ref={ref} initial={{opacity: 0.7, scale: 0.7 }} animate={inView ? { opacity: 1, scale : 1 } : {}} transition={{ duration: 2, delay : 2.5 }} className='flex flex-col cursor-pointer overflow-hidden relative border border-[#947054] '>
            <img src={citihousing} className='w-80 h-72 p-2 hover:scale-105 transition-all duration-300 ease-linear' alt="omegaCard" />
            <div className='pt-3 pb-12 flex flex-col gap-3 border-t border-[#947054] '>
                <h3 className='text-[#323232] font-semibold text-center lg:text-xl'>Citihousing City Faisalabad</h3>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-10' src={fda} alt="" title='FDA Approved' />
                    <img className='w-10' src={electricity} alt="" title='UnderGround Electricity' />
                    <img className='w-10' src={gas} alt="" title='LPG Gas' />
                    <img className='w-10' src={sewerage} alt="" title='Sewerage Line'/>
                </div>
            </div>
            <NavLink to={`property/${"citihousing"}`}><button className='absolute bottom-1 rounded-md right-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Explore</button></NavLink>
        </motion.div>

        <motion.div ref={ref} initial={{opacity: 0.7, scale: 0.7 }} animate={inView ? { opacity: 1, scale : 1 } : {}} transition={{ duration: 2, delay : 3 }} className='flex flex-col cursor-pointer overflow-hidden relative border border-[#947054] '>
            <img src={omegaEnclaveCard} className='w-80 h-72 p-2 hover:scale-105 transition-all duration-300 ease-linear' alt="omegaCard" />
            <div className='pt-3 pb-12 flex flex-col gap-3 border-t border-[#947054] '>
                <h3 className='text-[#323232] font-semibold text-center lg:text-xl'>Omega Encalve Faisalabad</h3>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-10' src={fda} alt="" title='FDA Approved' />
                    <img className='w-10' src={electricity} alt="" title='UnderGround Electricity' />
                    <img className='w-10' src={gas} alt="" title='LPG Gas' />
                    <img className='w-10' src={sewerage} alt="" title='Sewerage Line'/>
                </div>
            </div>
            <NavLink to={`property/${"omegaenclave"}`}><button className='absolute bottom-1 rounded-md right-1 py-1 px-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Explore</button></NavLink>
        </motion.div>
       
       
      </motion.div>
    </div>
  )
}

export default FeaturedProperties
