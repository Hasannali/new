import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black w-full h-[100px]'>
        <nav className=''>
        <ul className='flex flex-wrap gap-3 justify-center pt-8'>
            <li className='text-white text-2xl hover:text-blue-700 hover:transition-all ease-in-out'><a href="/">Home</a></li>
            <li className='text-white text-2xl hover:text-blue-700 hover:transition-all ease-in-out'><a href="/services">Services</a></li>
            <li className='text-white text-2xl hover:text-blue-700 hover:transition-all ease-in-out'><a href="/projects">Projects</a></li>
            <li className='text-white text-2xl hover:text-blue-700 hover:transition-all ease-in-out'><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
