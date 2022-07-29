import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <section name="home" className='w-full min-h-screen sm:min-h-[110vh] bg-[#0a192f] text-[#ccd6f6]'>
      <div className='w-[90%] mx-auto flex flex-col justify-center h-screen px-6'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>Prabhat Singh</h1>
        <h2 className='text-2xl sm:text-5xl md:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
        <p className="py-2 max-w-[700px]">I'm a Frontend Developer Skilled in building responsive web application.
            Currently my focus on React , Styled-Components and TailWindCSS and i'm also exploring 
            different web technologies to enhance my skill and build pixel perfect web application
        </p>
        <div>
            <button className='text-white p-2 border-white border-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Work <AiOutlineArrowRight className='ml-3'/>
            </button>
        </div>
      </div>
    </section>
  )
}

export default Home