import React from 'react'

function SkillItem({ skillName, bgColor = 'bg-zinc-800', borderColor = 'border-zinc-600', hoverBg = 'hover:bg-zinc-700' }) {
  return (
    <div className={`flex-shrink-0 mx-2 sm:mx-6 md:mx-8 px-6 sm:px-5 md:px-7 py-2 sm:py-4 md:py-4 ${bgColor} rounded-lg border ${borderColor} hover:border-violet-500 ${hoverBg} transition-all duration-300`}>
      <span className='text-sm sm:text-xl md:text-2xl lg:text-2xl font-thin whitespace-nowrap'>
        {skillName}
      </span>
    </div>
  )
}

export default SkillItem
