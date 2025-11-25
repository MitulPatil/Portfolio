import React from 'react'
import Homecenter from "./Layout/Homecenter";
import Navbar from "./Layout/Navbar";

function Home() {
  return (
    <div className='h-auto md:min-h-screen w-full'>
        <div className='fixed top-0 left-0 right-0 z-50 bg-black'>
          <Navbar />
        </div>
        <div className='pt-20'>
          <Homecenter />
        </div>
    </div>
  )
}

export default Home
