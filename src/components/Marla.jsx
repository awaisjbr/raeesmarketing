import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import grand3 from "../assets/grandcity/grand3.jpeg"


const Marla = () => {
  const {marla} = useParams()
  return (
    <div className=''>
        <img src={grand3} alt="" />
        <button>{marla}</button>
        {/* <Outlet /> */}
    </div>
  )
}

export default Marla
