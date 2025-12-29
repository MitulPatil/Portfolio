import React from 'react'
import { PiLinkSimpleBold } from "react-icons/pi";
import { SiGithub } from "react-icons/si";


function Project({ title = "title", details, image, githubLink, projectLink, technologies = [] }) {
  const defaultDetails = [
    "projects details",
    "projects details", 
    "projects details"
  ]

  const projectDetails = details.length > 0 ? details : defaultDetails

  return (
    <div className='rounded-lg overflow-hidden bg-black text-white'>
      {/* Project Image */}
      <div className='w-full h-48 overflow-hidden rounded-lg sm:h-56 md:h-64 lg:h-72 bg-gray-800'>
        <img 
          src={image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60"} 
          alt={title}
          className='w-full h-full object-cover'
          loading="lazy"
          decoding="async"
        />
      </div>
      
      {/* Project Content */}
      <div className='pt-5'>
        {/* Title */}
        <h3 className='text-xl sm:text-2xl font-medium mb-4 text-white'>
          {title}
        </h3>
        
        {/* Details */}
        <div className='mb-4 space-y-1'>
            <p className='text-gray-400 text-sm sm:text-base'>
              {details}
            </p>
        </div>
        
        {/* Technologies */}
        {technologies.length > 0 && (
          <div className='mb-6'>
            <div className='flex flex-wrap gap-2'>
              Technology:
              {technologies.map((tech, index) => (
                <p className='text-gray-400 text-sm sm:text-base lowercase' key={index}>{tech},</p>
              ))}
            </div>
          </div>
        )}
        
        {/* Links Section */}
        <div className='flex items-center gap-3'>
          {projectLink && (
            <div className="h-6 cursor-pointer">
              <PiLinkSimpleBold onClick={() => window.open(projectLink, "_blank")} style={{ fontSize: '20px' }}/>
            </div>
          )}
          {githubLink && (
            <div className='w-6 h-6 cursor-pointer' style={{ fontSize: '20px' }}>
              <SiGithub onClick={() => window.open(githubLink, "_blank")} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project