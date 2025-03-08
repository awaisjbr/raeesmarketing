import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Property = () => {
    const {name, marla} = useParams();
    console.log(name, marla)
    
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1>Single Property: {name}</h1>
      {/* <br />
      <NavLink to={`/property/${name}/3-marla`}><button>3</button></NavLink>
      <NavLink to={`/property/${name}/5-marla`}><button>5</button></NavLink>
      <NavLink to={`/property/${name}/7-marla`}><button>7</button></NavLink> */}
    </div>
  )
}

export default Property
