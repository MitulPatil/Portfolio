import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Layout/Footer'

function MainPage() {
  return (
    <div className='bg-black text-white h-full w-full'>
      <Home/>
      <About/>
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  )
}

export default MainPage
