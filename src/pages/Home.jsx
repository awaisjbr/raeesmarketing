import React from 'react';
import Hero from '../components/Hero';
import { FaSquareWhatsapp } from "react-icons/fa6";
import Loading from '../components/Loading';
import FeaturedProperties from '../components/FeaturedProperties';


const Home = ({whatsapp}) => {
  return (
    <div className='relative'>
      <Hero />
      <FeaturedProperties />
      {/* <Loading /> */}
      <div onClick={() => whatsapp()} className="fixed bottom-8 right-6 bg-white rounded-md text-5xl lg:text-7xl cursor-pointer text-green-500 hover:text-green-600 hover:scale-110 transition-transform duration-300 ease-linear">
        <FaSquareWhatsapp />
      </div>
    </div>
  )
}

export default Home
