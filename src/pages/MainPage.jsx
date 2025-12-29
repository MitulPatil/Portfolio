import React, { lazy, Suspense } from 'react'
import Home from '../Components/Home'

// Lazy load below-the-fold components for faster initial load
const About = lazy(() => import('../Components/About'))
const Skills = lazy(() => import('../Components/Skills'))
const Projects = lazy(() => import('../Components/Projects'))
const Contact = lazy(() => import('../Components/Contact'))
const Footer = lazy(() => import('../Components/Layout/Footer'))

function MainPage() {
  return (
    <div className='bg-black text-white h-full w-full'>
      <Home/>
      <Suspense fallback={<div className="h-20"></div>}>
        <About/>
        <Skills />
        <Projects/>
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default MainPage
