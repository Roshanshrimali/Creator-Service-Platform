import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  
  return (
    <footer className='bg-gray-900 text-white flex justify-center phone:px-4 phone:py-2 tab:px-10 tab:py-4 items-center'>
      <p className='font-semibold phone:text-base'>Copyright @{currentYear} GetUsBuyUs - All rights reserved</p>
    </footer>
  )
}

export default Footer
