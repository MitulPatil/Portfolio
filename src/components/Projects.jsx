import React from 'react'
import Project from './UI/Project'
import Button from './UI/Button';


function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Mr.Dhobi - Laundry Service",
      details: "Mr. Dhobi is a mobile laundry service application designed for Android and iOS that allows users to schedule laundry pickups, track orders in real time, and complete secure in-app payments. The app provides a smooth, user-friendly interface optimized for mobile devices and supports role-based access for customers, delivery agents, and admins.",
      technologies: ["React Native (Expo)","TypeScript", "Firebase", "Razorpay"],
      image: "/projects/mrdhobi.webp",
      githubLink: "https://github.com/Omkumar7Parmar/Mr.Dhobi-otp-payment",  
      projectLink: "https://play.google.com/store/apps/details?id=com.omkumar_78.mrdhobi&pcampaignid=web_share"
    },
    {
      id: 2,
      title: "Car Rental",
      details: "Full-stack car rental platform with dual interfaces for car owners and customers. Built using React, Node.js, Express, and MongoDB with JWT authentication. Features include car listing management, real-time availability checking, booking system, owner dashboard with analytics, and ImageKit integration for optimized image uploads.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "REST API", "ImageKit"],
      image: "/projects/chatapp.webp",
      githubLink: "https://github.com/MitulPatil/CarRental",  
      projectLink: "https://car-rental-nine-liard.vercel.app/"
    },
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
