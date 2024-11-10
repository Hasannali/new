import React from 'react'


const Hero = () => {
  return (
    <div className='w-full h-[550px] bg-black flex flex-wrap items-center justify-center gap-10'>
      <div className='w-50% text-white pr-2 pl-10 '>
        <h1 className='text-3xl font-bold pt-5'>MH one</h1>
        <h1 className='text-3xl pb-10'>Frontend Developer</h1>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Non quo qui ab perferendis, commodi molestiae possimus accusamus <br/>sequi vitae esse expedita quia impedit tenetur beatae odit. Aut dignissimos<br/> atque earum?</p>
        <button className='hover:translate-x-3 hover:bg-white hover:text-black delay-150 ease-in-out transition-all duration-300 px-8 py-3 border-2 bg-black text-text-white rounded-full'>Let's Talk</button>
      </div>
      <div className='w-50% flex items-center justify-center pt-10'><img height={300} width={600} className='pr-10 pl-2 rounded-lg' src="https://img.freepik.com/free-photo/wet-sphere-reflective-water-abstract-beauty-generated-by-ai_188544-19616.jpg?t=st=1731218363~exp=1731221963~hmac=89615ac34ec4781cd74aba7274b1deebfb76ba85b35e3ffa00870f76e1857075&w=826" alt="" />
      
      </div>
    </div>
  )
}

export default Hero
