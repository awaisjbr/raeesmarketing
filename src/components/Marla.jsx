import React from 'react'
import { useParams } from 'react-router-dom';
import grand3 from "../assets/grand3.jpeg"


const Marla = () => {
    const {marla} = useParams();
    console.log(marla);
  return (
    <div className='h-screen flex items-center justify-center'>
        <img src={grand3} alt="" />
    </div>
  )
}

export default Marla
