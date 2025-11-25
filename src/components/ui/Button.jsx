import React from 'react'
import { Link } from 'react-router-dom'

function Button({text, onClick, link, download, href}) {
  const buttonClasses = 'px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 bg-violet-500 hover:bg-violet-600 transition-colors border-none rounded-md text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white cursor-pointer'
  
  // If it's a download link
  if (download && href) {
    return (
      <a 
        href={href}
        download={download}
      >
        <button className={buttonClasses}>
          {text}
        </button>
      </a>
    )
  }
  
  // If it's a navigation link
  if (link) {
    return (
      <Link to={link}>
        <button className={buttonClasses}>
          {text}
        </button>
      </Link>
    )
  }

  // Regular button with onClick
  return (
    <button 
      onClick={onClick}
      className={buttonClasses}
    >
        {text}
    </button>
  )
}

export default Button
