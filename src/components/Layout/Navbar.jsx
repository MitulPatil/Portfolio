import React, { useState, useEffect, useRef } from 'react'
import { VscMenu, VscClose } from "react-icons/vsc";
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

function Navbar({ noAnimation = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nameRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const name = nameRef.current
    const menu = menuRef.current
    
    // Check if screen is mobile (width < 768px)
    const isMobile = window.innerWidth < 768
    
    if (isMobile || noAnimation) {
      // On mobile or when noAnimation is true, show elements immediately without animation
      gsap.set([name, menu], {
        y: 0,
        opacity: 1
      })
    } else {
      // On desktop/tablet, apply animations
      // Set initial state - elements start from above and invisible
      gsap.set([name, menu], {
        y: -50,
        opacity: 0
      })
      
      // Create entrance animation timeline
      const tl = gsap.timeline({ delay: 0.2 })
      
      // Animate elements one by one from top
      tl.to(name, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
      })
      .to(menu, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
      }, 0.5) // Start 0.5s after name
    }
  }, [noAnimation])

  // Handle menu opacity with GSAP when menu state changes
  useEffect(() => {
    const name = nameRef.current
    if (name) {
      gsap.to(name, {
        opacity: isMenuOpen ? 0 : 1,
        duration: 0.2,
        ease: "power2.out"
      })
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <div className='relative'>
            {/* Navbar */}
            <div className='p-5 sm:p-5 flex items-center justify-between uppercase relative z-50 text-white'>
                <h1 ref={nameRef} className="sm:ml-6 md:ml-10 font-thin text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-white">Mitul Patil</h1>
                <div 
                    ref={menuRef}
                    className='mr-2 sm:mr-6 md:mr-10 font-inter text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl cursor-pointer text-white'
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <VscClose /> : <VscMenu />}
                </div>
            </div>

            {/* Menu Overlay */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-violet-500 z-40 transition-transform duration-500 ease-in-out ${
                isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
            }`}>
                <div className='flex flex-col items-center justify-center h-full text-white'>
                    {/* Close button */}
                    <div className='absolute top-5 right-2 sm:right-6 md:right-10'>
                        <button 
                            onClick={toggleMenu}
                            className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-white'
                        >
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className='text-center space-y-8'>
                        <div className='text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-bold uppercase'>
                            <Link to="/" className='block hover:text-zinc-900 transition-colors' onClick={toggleMenu}>HOME</Link>
                        </div>
                        <div className='text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-bold uppercase'>
                            <Link to="/about" className='block hover:text-zinc-900 transition-colors' onClick={toggleMenu}>ABOUT</Link>
                        </div>
                        <div className='text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-bold uppercase'>
                            <Link to="/projects" className='block hover:text-zinc-900 transition-colors' onClick={toggleMenu}>PROJECTS</Link>
                        </div>
                    </nav>

                    {/* Social Links */}
                    <div className='absolute bottom-10 flex space-x-8 text-sm'>
                        <a href="#" className='hover:text-gray-200 transition-colors'>LinkedIn</a>
                        <a href="#" className='hover:text-gray-200 transition-colors'>Github</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Navbar
