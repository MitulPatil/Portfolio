import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../UI/Button';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Homecenter() {
  const containerRef = useRef(null)
  const fullStackRef = useRef(null)
  const developerRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonsRef = useRef(null)
  
  useEffect(() => {
    const container = containerRef.current
    const fullStack = fullStackRef.current
    const developer = developerRef.current
    const paragraph = paragraphRef.current
    const buttons = buttonsRef.current
    
    // Check if screen is mobile (width < 768px)
    const isMobile = window.innerWidth < 768
    
    if (isMobile) {
      // On mobile, show elements immediately without animation
      gsap.set([fullStack, developer, paragraph, buttons], {
        y: 0,
        opacity: 1
      })
    } else {
      // On desktop/tablet, apply animations
      // Set initial state - elements start from above and invisible
      gsap.set([fullStack, developer, paragraph, buttons], {
        y: -100,
        opacity: 0
      })
      
      // Create entrance animation timeline with delay to come after navbar
      const tl = gsap.timeline({ delay: 1 }) // Wait for navbar animation to complete first
      
      // Animate elements one by one from top
      tl.to(fullStack, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(developer, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, 0.5) // Start 0.5s after fullStack
      .to(paragraph, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, 1) // Start 0.7s after developer
      .to(buttons, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, 1.3) // Start 0.6s after paragraph
    }
  }, [])

  return (
    <>
        <div className="flex justify-center flex-col leading-none space-y-3 lg:space-y-0 cursor-pointer mt-10 sm:mt-20 md:mt-20" ref={containerRef}>
          <h2 className="text-[85px] break-words flex-wrap flex items-center md:text-[130px] lg:text-[130px] leading-none font-bold text-gray-300 ml-4 sm:ml-8 md:ml-12 lg:ml-14" ref={fullStackRef}>
            <div className="break-words title hover:text-orange-300 uppercase full-text">Full</div> 
            <div className="h-4 w-16 lg:w-80 border-b-2 border-gray-300"></div> 
            <div className="break-words title hover:text-orange-300 uppercase stack-text ">Stack</div>
          </h2>
          <h2 className="text-[85px] md:text-[130px] lg:text-[130px] break-words mt-5 leading-none font-bold text-gray-300 hover:text-orange-300 title uppercase ml-4 sm:ml-8 md:ml-12 lg:ml-14" ref={developerRef}>
            DEVELOPER
          </h2>
        </div>
        <h4 className='text-sm sm:text-base md:text-lg lg:text-xl ml-4 sm:ml-8 md:ml-12 lg:ml-14 mt-7 sm:mt-6 md:mt-8 text-gray-400 sm:max-w-md md:max-w-lg lg:whitespace-nowrap lg:w-auto' ref={paragraphRef}>Creating web products that are user-friendly, visually appealing, and backed by scalable, reliable code.</h4>
        <div className='flex sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 ml-4 sm:ml-8 md:ml-12 lg:ml-14 mt-7 sm:mt-8 md:mt-10 mb-12 lg:mb-0 sm:mb-16 md:mb-20' ref={buttonsRef}>
          <Button text={"Resume"} href="/Mitul_Patil_Resume.pdf" download="Mitul_Patil_Resume.pdf"/>
          <Button text={"Browse Projects"} link="/projects"/>
        </div>
    </>
  )
}

export default Homecenter
