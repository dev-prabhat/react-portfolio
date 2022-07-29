import React from 'react'

const About = () => {
  return (
    <section name="about" className='w-full min-h-[110vh] bg-[#0a192f] text-[#ccd6f6]'>
       <div className='w-[90%] mx-auto flex flex-col justify-center h-screen px-6'>
        <h1 className='text-3xl sm:text-5xl border-b-pink-600 border-b-4 pb-1 w-fit mb-2 sm:mb-8'>About</h1>
        <p className='text-2xl sm:text-4xl mb-2 text-[#8892b0] sm:mb-4'>
            Hi, I'm Prabhat nice to meet you. Please take a look round.
        </p>
        <p className='py-2 max-w-[700px]'>
            I'm skilled in Frontend Technologies with HTML, CSS, JavaScript, React and React ecosystem.
            I've also built multiple Frontend Project to showcase my skills and i'm learning continuously new technologies with better UI/UX design 
        </p>
       </div>
    </section>
  )
}

export default About