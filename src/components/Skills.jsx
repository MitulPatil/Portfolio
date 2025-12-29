import React from 'react'
import SkillItem from './UI/SkillItem'

function Skills() {
  const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODEJS", "MONGODB", "EXPRESSJS", "POSTMAN", "GSAP", "CSS-ANIMATION", 'SCROLL-TRIGGER','python', 'TAILWIND CSS','GIT', 'GITHUB','LLM INTEGRATION']
  
  return (
    <div className='bg-black text-white py-12 sm:py-16 md:py-20 overflow-hidden'>
      <div className='mb-8 sm:mb-12 px-6 sm:px-6 md:px-8 lg:px-15'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-3xl  uppercase'>
          Skills & Technologies
        </h2>
      </div>
      
      {/* Horizontal Scrolling Container */}
      <div className='relative'>
        {/* First Row - Left to Right */}
        <div className='flex mb-4 lg:mb-8 overflow-hidden relative h-16 sm:h-18 md:h-20'>
          <div className='flex animate-scroll-left absolute whitespace-nowrap'>
            {skills.map((skill, index) => (
              <SkillItem 
                key={`set1-${index}`}
                skillName={skill}
                bgColor="bg-zinc-800"
                borderColor="border-zinc-600"
                hoverBg="hover:bg-zinc-700"
              />
            ))}
          </div>
          <div className='flex animate-scroll-left-delayed absolute whitespace-nowrap'>
            {skills.map((skill, index) => (
              <SkillItem 
                key={`set2-${index}`}
                skillName={skill}
                bgColor="bg-zinc-800"
                borderColor="border-zinc-600"
                hoverBg="hover:bg-zinc-700"
              />
            ))}
          </div>
        </div>
        
        {/* Second Row - Right to Left */}
        <div className='flex overflow-hidden relative h-16 sm:h-18 md:h-20'>
          <div className='flex animate-scroll-right absolute whitespace-nowrap'>
            {skills.map((skill, index) => (
              <SkillItem 
                key={`reverse1-${index}`}
                skillName={skill}
                bgColor="bg-zinc-900"
                borderColor="border-zinc-700"
                hoverBg="hover:bg-zinc-800"
              />
            ))}
          </div>
          <div className='flex animate-scroll-right-delayed absolute whitespace-nowrap'>
            {skills.map((skill, index) => (
              <SkillItem 
                key={`reverse2-${index}`}
                skillName={skill}
                bgColor="bg-zinc-900"
                borderColor="border-zinc-700"
                hoverBg="hover:bg-zinc-800"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Global CSS for truly infinite scrolling */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-left-delayed {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-right-delayed {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-left-delayed {
          animation: scroll-left-delayed 20s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
        
        .animate-scroll-right-delayed {
          animation: scroll-right-delayed 25s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Skills
