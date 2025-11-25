import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import Project from '../Components/UI/Project'
import Navbar from '../Components/Layout/Navbar'
import Footer from '../Components/Layout/Footer'

function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const projectData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      details: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
      links: []
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      details: "An analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking. Built with React and Chart.js.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&auto=format&fit=crop&q=60",
      links: []
    },
    {
      id: 3,
      title: "Task Management App",
      details: "A collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time updates using Socket.io.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&auto=format&fit=crop&q=60",
      links: []
    },
    {
      id: 4,
      title: "Weather Forecast App",
      details: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data. Integrated with OpenWeather API.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&auto=format&fit=crop&q=60",
      links: []
    },
    {
      id: 5,
      title: "Portfolio Website",
      details: "A modern portfolio website with smooth animations using GSAP, responsive design, and optimized performance. Built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop&q=60",
      links: []
    },
    {
      id: 6,
      title: "Fitness Tracker",
      details: "A fitness tracking application with workout logging, progress tracking, and nutrition planning. Features data visualization and goal setting capabilities.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop&q=60",
      links: []
    }
  ]

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

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {projectData.map((project) => (
            <Project 
              key={project.id}
              title={project.title}
              details={project.details}
              image={project.image}
              links={project.links}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AllProjects
