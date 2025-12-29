import React, { lazy, Suspense } from 'react'
import Home from '../components/Home'

// Lazy load below-the-fold components for faster initial load
const About = lazy(() => import('../components/About'))
const Skills = lazy(() => import('../components/Skills'))
const Projects = lazy(() => import('../components/Projects'))
const Contact = lazy(() => import('../components/Contact'))
const Footer = lazy(() => import('../components/Layout/Footer'))

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
