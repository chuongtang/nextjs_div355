import React from 'react'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="text-gray-600 body-font w-screen">
      <div className="container px-2 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 ml-4">
          © Copyright 2024 📜 TCRC Division 355
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <p className="text-center text-xs text-gray-500 lg:mt-0 lg:text-right">
          
           Built by <a href="https://chuongtang.com"
             className='underline italic decoration-yellow-500 decoration-2 text-shadow-xs mr-6'
           target="_blank">an avid learner</a>
       </p>
        </span>
      </div>
    </footer>

  )
}

export default Footer