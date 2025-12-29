import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import Project from '../Components/UI/Project'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'

function AllProjects() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      details: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
      category: "fullstack",
      githubLink: "https://github.com/MitulPatil/ChatApp",  
      projectLink: "https://webrtc-chatapp.onrender.com/"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      details: "An analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking. Built with React and Chart.js.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&auto=format&fit=crop&q=60",
      category: "frontend",
      githubLink: "https://github.com/MitulPatil/ChatApp",  
      projectLink: "https://webrtc-chatapp.onrender.com/"
    },
    {
      id: 3,
      title: "Task Management App",
      details: "A collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time updates using Socket.io.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&auto=format&fit=crop&q=60",
      category: "fullstack",
      githubLink: "https://github.com/MitulPatil/ChatApp",  
      projectLink: "https://webrtc-chatapp.onrender.com/"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      details: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data. Integrated with OpenWeather API.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&auto=format&fit=crop&q=60",
      category: "frontend",
      githubLink: "https://github.com/MitulPatil/ChatApp",  
      projectLink: "https://webrtc-chatapp.onrender.com/"
    },
    {
      id: 5,
      title: "Portfolio Website",
      details: "A modern portfolio website with smooth animations using GSAP, responsive design, and optimized performance. Built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop&q=60",
      category: "frontend",
      githubLink: "https://github.com/MitulPatil/ChatApp",  
      projectLink: "https://webrtc-chatapp.onrender.com/"
    },
    {
      id: 6,
      title: "Mr.Dhobi - Laundry Service",
      details: "Mr. Dhobi is a modern on-demand laundry solution designed to streamline the entire workflow—from booking and pickup to delivery and payment—using real-time data synchronization and a centralized admin dashboard.",
      technologies: ["React Native (Expo)","TypeScript", "Firebase", "Razorpay"],
      image: "/projects/mrdhobi.webp",
      githubLink: "https://github.com/Omkumar7Parmar/Mr.Dhobi-otp-payment",  
      projectLink: "https://play.google.com/store/apps/details?id=com.omkumar_78.mrdhobi&pcampaignid=web_share",
      category: "mobile",
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
