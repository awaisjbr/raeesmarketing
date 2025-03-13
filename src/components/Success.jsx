import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Success = () => {
  return (
    <div className='pt-20 h-screen flex flex-col items-center justify-center gap-3'>
      <div className='text-green-500 w-16 h-16 border-2 text-2xl border-green-500 flex items-center justify-center rounded-full'><FaCheck /></div>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-green-500 font-semibold font-poppins lg:text-2xl'>Thank You for Reaching Out!</h1>
        <p className='text-center w-[80%] text-slate-600 font-poppins'>Your message has been successfully submitted. We appreciate your interest in our services and will get back to you shortly.</p>
        <NavLink to={"/"}><button className='text-green-500 font-bigShoulder font-bold underline tracking-wider text-xl '>Go back</button></NavLink>
      </div>
    </div>
  )
}

export default Success