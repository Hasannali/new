import React from 'react'

const contact = () => {
  return (
    <div className='w-full h-[550px] bg-black'>
      <div className="heading">
        <h2 className='pl-10 pt-5 font-bold text-5xl text-white pb-10'>Contact</h2>
      </div>
      <form action="">
        <label htmlFor="">
        <input type="text" placeholder='Enter your name'  className='h-[50px] w-[300px] pl-4 rounded ml-10'/>{"   "}
        <input type="email" placeholder='Enter your email'  className='h-[50px] w-[300px] pl-4 rounded ml-5'/>
        
        </label>
        <br />
        <input type="text" placeholder='Send your message' className='h-[200px] w-[623px] pb-40 pl-3 rounded ml-10 mt-5'/><br />
        <button className='hover:translate-x-3 delay-150 ease-in-out transition-all duration-300 px-8 py-3 border-2 bg-black text-white rounded-full ml-10 mt-5'>Send</button>
      </form>
      
    </div>
  )
}

export default contact
