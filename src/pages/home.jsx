import React from 'react'
import {homeImage} from "../images"
const Home = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
      <h1 className='font-bold text-4xl'>Welcome to our page</h1>
      <img src={homeImage} alt="" />
    </div>
  )
}

export default Home
