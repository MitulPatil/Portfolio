import React from 'react'
import Project from './UI/Project'
import Button from './UI/Button';

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Real-time Chat App",
      details: "This is a web application that enables users to engage in real-time text-based chat and initiate peer-to-peer 1-on-1 video calls. The application is built with Node.js, Express, and utilizes WebSockets (via Socket.IO) for real-time communication and WebRTC for direct video streaming between users.",
      technologies: ["React", "Node.js", "Express", "Socket.IO", "WebRTC", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
      githubLink: "https://github.com/MitulPatil/ChatApp",  
      projectLink: "https://webrtc-chatapp.onrender.com/"
    },
    {
      id: 2,
      title: "title",
      details: "",
      technologies: [],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&auto=format&fit=crop&q=60",
      links: []
    }
  ]

  return (
    <div className='bg-black text-white min-h-screen p-6 sm:p-8 md:p-12 lg:p-16'>
      {/* Header Section */}
      <div className='flex justify-between items-start mb-12'>
        <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light uppercase'>
          projects
        </h1>
        <div className='text-right'>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-light uppercase'>
            recent
          </h2>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-light uppercase'>
            projects
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-12'>
        {projectData.map((project) => (
          <Project 
            key={project.id}
            title={project.title}
            technologies={project.technologies}
            details={project.details}
            image={project.image}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
          />
        ))}
      </div>

      {/* See All Button */}
      <div className='flex justify-center'>
        <Button text={"See More"} link="/projects"/>
      </div>
    </div>
  )
}

export default Projects
