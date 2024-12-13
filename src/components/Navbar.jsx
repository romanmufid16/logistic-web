import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-around items-center py-4 text-sm border-b border-gray-200">
      <h1 className='text-3xl'>Logistic</h1>
      <ul className='hidden sm:flex gap-4'>
        <li className='text-accentHover'>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </nav>
  )
}

export default Navbar