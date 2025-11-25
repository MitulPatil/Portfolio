import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiRedux } from "react-icons/si";


function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const tools = [
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500' },
    { name: 'GSAP', icon: '◈', color: 'text-green-400' },
    { name: 'TailwindCSS', icon: <RiTailwindCssFill />, color: 'text-cyan-400' },
    { name: 'Javascript', icon: <IoLogoJavascript />, color: 'text-yellow-400' },
    { name: 'React', icon: <SiReact />, color: 'text-cyan-400'},
    { name: 'Redux', icon: <SiRedux />, color: 'text-purple-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400'},
    { name: 'Socket.io', icon: <SiSocketdotio />, color: 'text-white' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-400' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500'},
    { name: 'Github', icon: <FaGithub />, color: 'text-white' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-orange-400' },
    { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
    { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
  ]

  return (
    <div className='bg-black min-h-screen'>
      <div className='fixed top-0 left-0 right-0 z-50 bg-black'>
        <Navbar noAnimation={true} />
      </div>
      
      <div className='text-white px-6 sm:px-8 md:px-12 lg:px-16 pt-28 pb-16 max-w-7xl mx-auto'>
        {/* Back Button */}
        <Link to="/" className='inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors mb-8'>
          <IoArrowBack className='text-2xl' />
          <span className='text-lg'>Back to Home</span>
        </Link>
        
        {/* Profile Image */}
        <div className='mb-8'>
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl object-cover object-top '
          />
        </div>

        {/* Heading */}
        <h1 className='text-xl sm:text-2xl md:text-2xl mb-8'>
          Hi, I'm Mitul
        </h1>

        {/* Description */}
        <div className='mb-12 max-w-4xl'>
          <p className='text-gray-300 text-base sm:text-lg mb-4'>
            I'm Mitul Patil — a passionate MERN Full-Stack Developer who enjoys blending creativity with engineering. I build digital experiences that are fast, intuitive, and meaningful. With expertise in React, Tailwind, Node.js, MongoDB, Socket.IO, and WebRTC, I love working on real-time applications, performance optimization, and modern UI/UX interactions. My goal is simple: create web solutions that feel great to use and work flawlessly behind the scenes.
          </p>
        </div>

        {/* Tools Section */}
        <div className='mb-8'>
          <h2 className='text-xl sm:text-2xl md:text-2xl mb-6'>
            Tools
          </h2>
          <p className='text-gray-300 text-base sm:text-lg mb-8 max-w-4xl'>
            My primary stack includes React, Tailwindcss & JavaScript (React + JavaScript on the front-end and Express/Nodejs on the back-end). I have listed some of the languages/tools I have used or still use below.
          </p>
        </div>

        {/* Tools Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl'>
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className='flex items-center gap-3 hover:scale-105 transition-transform'
            >
              <span className={`text-2xl ${tool.color}`}>{tool.icon}</span>
              <span className='text-base text-gray-300'>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
