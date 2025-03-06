import React from 'react';
import Hero from '../components/Hero';
import Loading from '../components/Loading';
import FeaturedProperties from '../components/FeaturedProperties';


const Home = () => {
  return (
    <div className='relative'>
      <Hero />
      <FeaturedProperties />
      {/* <Loading /> */}
    </div>
  )
}

export default Home
