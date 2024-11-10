import React from 'react'


const projects = () => {
  return (
    <div>
      <div className='w-full h-[50px] bg-black flex items-center justify-center'>
        <h2 className='font-bold text-5xl text-white'>Projects</h2>
      </div>
      <div className='w-full h-[500px] bg-black flex flex-wrap items-center justify-center gap-4'>
        <div className="card w-[300px] h-[380px] bg-gray-500 rounded hover:-translate-y-3 delay-150 ease-in-out transition-all duration-300">
          <div className="card-img mx-auto rounded  w-[280px] h-[200px] mt-2 mb-5 bg-[url('https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?t=st=1731233674~exp=1731237274~hmac=ed41a405de9b996b2c9dba5fdbd7a721b238294209a4c29c6e9dc65b95fcd305&w=740')]"></div>
          <div className="title pl-3 pr-2 pt-2 ">
            <h2 className='font-bold text-2xl'>E-commerce design</h2>
            <p>HTML, CSS and Javascript</p>
            <a href="https://hasannali.github.io/ecommercedesign/" target='blank'>
            <button  className=' hover:bg-white hover:text-black hover:translate-x-3 delay-150 ease-in-out transition-all duration-300 px-8 py-3 border-2 bg-black text-white rounded-full mt-4'>See now</button>
            </a>
          </div>
        </div>

        <div className="card w-[300px] h-[380px] bg-gray-500 rounded hover:-translate-y-3 delay-150 ease-in-out transition-all duration-300">
          <div className="card-img mx-auto rounded  w-[280px] h-[200px] mt-2 mb-5 bg-[url('https://img.freepik.com/free-vector/yellow-background-with-dynamic-abstract-shapes_1393-144.jpg?t=st=1731233808~exp=1731237408~hmac=445f5667e77918ada826c0a304d964b601404b5d6c0339778abbb2bccef74de0&w=740')]"></div>
          <div className="title pl-3 pr-2 pt-2 ">
          <h2 className='font-bold text-2xl'>Calculator</h2>
            <p>HTML, CSS and Javascript</p>
            <a href="https://hasannali.github.io/Calculator/" target='blank'>
            <button  className=' hover:bg-white hover:text-black hover:translate-x-3 delay-150 ease-in-out transition-all duration-300 px-8 py-3 border-2 bg-black text-white rounded-full mt-4'>See now</button>
            </a>
          </div>
        </div>

        <div className="card w-[300px] h-[380px] bg-gray-500 rounded hover:-translate-y-3 delay-150 ease-in-out transition-all duration-300">
          <div className="card-img mx-auto w-[280px] h-[200px] mt-2 mb-5 rounded bg-[url('https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg?t=st=1731233635~exp=1731237235~hmac=8c7060648fb00efe1463ecbd0df1dae53e6d4d328a5c92f6cee51b0909d92dff&w=740')]"></div>
          <div className="title pl-3 pr-2 pt-2 ">
          <h2 className='font-bold text-2xl'>Todo list</h2>
            <p>HTML, CSS and Javascript</p>
            <a href="https://hasannali.github.io/todolist/" target='blank'>
            <button  className=' hover:bg-white hover:text-black hover:translate-x-3 delay-150 ease-in-out transition-all duration-300 px-8 py-3 border-2 bg-black text-white rounded-full mt-4'>See now</button>
            </a>
          </div>
        </div>
        <div className="card w-[300px] h-[380px] bg-gray-500 rounded hover:-translate-y-3 delay-150 ease-in-out transition-all duration-300">
          <div className="card-img mx-auto w-[280px] h-[200px] mt-2 mb-5 rounded bg-[url('https://img.freepik.com/free-photo/colorful-abstract-textured-background-design_53876-108265.jpg?t=st=1731233881~exp=1731237481~hmac=053f1fb430a70b6662c8c3238b1983a7521318f18c2a6b0d68134c824722124c&w=740')]"></div>
          <div className="title pl-3 pr-2 pt-2 ">
          <h2 className='font-bold text-2xl'>Digital Clock</h2>
            <p>HTML, CSS and Javascript</p>
            <a href="https://hasannali.github.io/Digitalclock/" target='blank'>
            <button  className=' hover:bg-white hover:text-black hover:translate-x-3 delay-150 ease-in-out transition-all duration-300 px-8 py-3 border-2 bg-black text-white rounded-full mt-4'>See now</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default projects
