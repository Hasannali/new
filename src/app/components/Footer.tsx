import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full h-[100px]'>
        <nav className=''>
        <ul className='flex flex-wrap gap-3 justify-center pt-8'>
            <li className='text-white text-2xl hover:text-blue-700 hover:transition-all ease-in-out'><a href="https://github.com/Hasannali">Github</a></li>
            <li className='text-white text-2xl hover:text-blue-700 hover:transition-all ease-in-out'><a href="https://www.linkedin.com/in/muhammad-hasan-08104026b">Linkedin</a></li>
        </ul>
    </nav>
    <h2 className='text-center text-white font-normal'> Develop by Muhammad Hasan @2024.</h2>
    </div>
  )
}

export default Footer
