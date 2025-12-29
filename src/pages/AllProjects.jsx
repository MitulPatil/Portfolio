import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import Project from '../components/ui/Project'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

function AllProjects() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const projectData = [
    {
      id: 1,
      title: "Mr.Dhobi - Laundry Service",
      details: "Mr. Dhobi is a mobile laundry service application designed for Android and iOS that allows users to schedule laundry pickups, track orders in real time, and complete secure in-app payments. The app provides a smooth, user-friendly interface optimized for mobile devices and supports role-based access for customers, delivery agents, and admins.",
      technologies: ["React Native", "Expo","TypeScript", "Firebase", "Razorpay"],
      image: "/projects/mrdhobi.webp",
      category: "mobile",
      githubLink: "https://github.com/Omkumar7Parmar/Mr.Dhobi-otp-payment",  
      projectLink: "https://play.google.com/store/apps/details?id=com.omkumar_78.mrdhobi&pcampaignid=web_share",
    },
    {
      id: 2,
      title: "Car Rental",
      details: "Full-stack car rental platform with dual interfaces for car owners and customers. Built using React, Node.js, Express, and MongoDB with JWT authentication. Features include car listing management, real-time availability checking, booking system, owner dashboard with analytics, and ImageKit integration for optimized image uploads.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "REST API", "ImageKit"],
      image: "/projects/carrental.webp",
      category: "fullstack",
      githubLink: "https://github.com/MitulPatil/CarRental",  
      projectLink: "https://car-rental-nine-liard.vercel.app/"
    },
    {
      id: 3,
      title: "Real-time Chat App",
      details: "This is a web application that enables users to engage in real-time text-based chat and initiate peer-to-peer 1-on-1 video calls. The application is built with Node.js, Express, and utilizes WebSockets (via Socket.IO) for real-time communication and WebRTC for direct video streaming between users.",
      technologies: ["React", "Node.js", "Express", "Socket.IO", "WebRTC", "Tailwind CSS"],
      image: "/projects/chatapp.webp",
      category: "fullstack",
      githubLink: "https://github.com/MitulPatil/ChatApp",  
      projectLink: "https://webrtc-chatapp.onrender.com/"
    },
    {
      id: 4,
      title: "YouTube-Notes-Quiz-Generator",
      details: "Built an AI-powered web app converting YouTube lectures into interactive quizzes using Python, Streamlit, and Google Gemini LLM. Features automated transcript extraction, AI-generated notes with PDF export, 50+ quiz questions per video, performance analytics, and API fallback mechanisms for reliability.",
      technologies: ["Python","Streamlit","Google Gemini API","LiteLLM","YouTube Transcript API","ReportLab"],
      image: "/projects/youtube_quize.webp",
      category: "ai",
      githubLink: "https://github.com/MitulPatil/YouTube-Notes-Quiz-Generator",  
    },
    {
      id: 5,
      title: "Portfolio Website",
      details: "A modern, responsive portfolio website showcasing my full-stack development skills. Built with React, GSAP animations, and Tailwind CSS, featuring smooth transitions and optimized performance.",
      technologies:["React", "Vite", "Tailwind CSS", "GSAP", "React Router", "React Icons"],
      image: "/projects/portfolio.webp",
      category: "frontend",
      githubLink: "hhttps://github.com/MitulPatil/Portfolio",  
      projectLink: "https://www.mitulpatil.me/"
    },
    {
      id: 6,
      title: "Mr.Dhobi - info Site",
      details: "Built a modern, mobile-responsive landing page for MrDhobi, a premium laundry service platform. Implemented interactive components including pricing modals, policy viewers, FAQ accordions, and service cards using React and Tailwind CSS.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP"],
      image: "/projects/mrdhobi_info.webp",
      category: "frontend",
      githubLink: "https://github.com/Omkumar7Parmar/MrDhobi-Info",  
      projectLink: "https://www.mrdhobi.in/",
    }
  ]

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'mobile', label: 'Mobile Application' }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === selectedFilter)

  return (
    <div className='bg-black min-h-screen'>
      <div className='fixed top-0 left-0 right-0 z-50 bg-black'>
        <Navbar noAnimation={true} />
      </div>
      
      <div className='text-white px-6 sm:px-8 md:px-12 lg:px-16 pt-28 pb-16'>
        {/* Back Button */}
        <Link to="/" className='inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors mb-8'>
          <IoArrowBack className='text-2xl' />
          <span className='text-lg'>Back to Home</span>
        </Link>
        
        {/* Header Section */}
        <div className='mb-12'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4'>
            All Projects
          </h1>
          <p className='text-gray-400 text-lg'>
            Explore my complete portfolio of web development projects
          </p>
        </div>

        {/* Filter Section */}
        <div className='mb-12'>
          <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedFilter === category.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <p className='text-gray-500 text-sm mt-4 text-center md:text-left'>
            {selectedFilter === 'all' 
              ? `Showing all ${projectData.length} projects` 
              : `Showing ${filteredProjects.length} ${filterCategories.find(c => c.id === selectedFilter)?.label.toLowerCase()} project${filteredProjects.length !== 1 ? 's' : ''}`
            }
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Project 
                key={project.id}
                title={project.title}
                details={project.details}
                image={project.image}
                links={project.links}
                githubLink={project.githubLink}
                projectLink={project.projectLink}
                technologies={project.technologies || []}   
              />   
            ))
          ) : (
            <div className='col-span-full text-center py-16'>
              <p className='text-gray-400 text-xl'>
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AllProjects
