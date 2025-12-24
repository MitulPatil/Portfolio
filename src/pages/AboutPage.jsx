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
import { SiFirebase } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";


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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, color: "text-red-500" },
        { name: "JavaScript (ES6+)", icon: <IoLogoJavascript />, color: "text-yellow-400" },
        { name: "Python", icon: <FaPython />, color: "text-blue-400" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <SiReact />, color: "text-cyan-400" },
        { name: "React Native", icon: <SiReact />, color: "text-cyan-500" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "text-cyan-400" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
        { name: "GSAP", icon: "◈", color: "text-green-400" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
        { name: "REST APIs", icon: <TbApi />, color: "text-blue-400" },
        { name: "Socket.IO", icon: <SiSocketdotio />, color: "text-white" },
        { name: "Firebase Auth", icon: <SiFirebase />, color: "text-yellow-500" },
        { name: "Firestore", icon: <SiFirebase />, color: "text-orange-500" },
        { name: "Cloud Functions", icon: <SiFirebase />, color: "text-yellow-400" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
        { name: "Firebase Firestore", icon: <SiFirebase />, color: "text-orange-500" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "GitHub", icon: <FaGithub />, color: "text-white" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
        { name: "Axios", icon: <SiAxios />, color: "text-purple-400" },
        { name: "Expo", icon: <SiExpo />, color: "text-white" },
        { name: "Razorpay", icon: "₹", color: "text-blue-500" }
      ]
    },
    {
      title: "AI",
      skills: [
        { name: "Streamlit", icon: <SiStreamlit />, color: "text-red-500" },
        { name: "Python", icon: <FaPython />, color: "text-blue-400" },
        { name: "Google Gemini", icon: <SiGooglegemini />, color: "text-blue-500" },
        { name: "LiteLLM", icon: "⚡", color: "text-yellow-400" }
      ]
    }
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
            I am a Full-Stack Developer with hands-on experience in building scalable web and mobile applications using the MERN stack and React Native. I specialize in developing clean user interfaces, efficient backend systems, and real-time features. My experience includes authentication, REST APIs, real-time communication, payment integration, and cloud services, with a strong focus on maintainable code and performance.
          </p>
        </div>

        {/* Skills & Technologies Section */}
        <div className='mb-12'>
          <h2 className='text-xl sm:text-2xl md:text-2xl mb-8'>
            Skills & Technologies
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl'>
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className='bg-zinc-900/50 border border-zinc-800 rounded-xl p-6'>
                {/* Category Title */}
                <h3 className='text-lg font-semibold mb-6 text-purple-400'>
                  {category.title}
                </h3>
                
                {/* Skills Grid with Icons */}
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className='flex items-center gap-3 hover:scale-105 transition-transform'
                    >
                      <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                      <span className='text-base text-gray-300'>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
