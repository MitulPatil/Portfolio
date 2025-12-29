import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function About() {
  const paragraphsRef = useRef([])
  
  useEffect(() => {
    const paragraphs = paragraphsRef.current
    
    // Set initial state - all paragraphs hidden
    gsap.set(paragraphs, {
      y: 50,
      opacity: 0
    })
    
    // Create scroll-triggered animation for each paragraph
    paragraphs.forEach((paragraph, index) => {
      gsap.to(paragraph, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraph,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false
        }
      })
    })
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  
  // Function to add refs to paragraphs
  const addToRefs = (el) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el)
    }
  }
  return (
    <div className='bg-black text-white h-auto py-1 sm:py-5 md:py-5 md:mb-10 px-6 sm:px-10 md:px-8 lg:px-15'>
      <h1 className='uppercase text-2xl sm:text-3xl md:text-3xl lg:text-3xl mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
        About Me
      </h1>
      
      <div className='max-w-full lg:max-w-4xl text-gray-400'>
        <div className=''>
          <p ref={addToRefs} className='text-base sm:text-lg md:text-xl lg:text-2xl font-thin'>
            I'm a full-stack software engineer with a primary focus on front-end development.
          </p>
      
          <p ref={addToRefs} className='text-base sm:text-lg md:text-xl lg:text-2xl font-thin  '>
            I make web products beautiful that function in a strong way
          </p>
          
          <p ref={addToRefs} className='text-base sm:text-lg md:text-xl lg:text-2xl font-thin  '>
            I love jobs where planning joins reason since
          </p>
          
          <p ref={addToRefs} className='text-base sm:text-lg md:text-xl lg:text-2xl font-thin  '>
            usefulness merges with artistry.
          </p>
          
          <p ref={addToRefs} className='text-base sm:text-lg md:text-xl lg:text-2xl font-thin  '>
            I love turning ideas into reality by code.
          </p>
          
          <p ref={addToRefs} className='text-base sm:text-lg md:text-xl lg:text-2xl font-thin'>
           From user-friendly interfaces to scalable back-end systems, 
          </p>
          
          <p ref={addToRefs} className='text-base sm:text-lg md:text-xl lg:text-2xl font-thin'>
            I focus on complete solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About