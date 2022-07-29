import React from 'react'
import ProjectsData from '../data/ProjectsData'

const Projects = () => {
  return (
    <section name="projects" className='w-full min-h-[110vh] bg-[#0a192f] text-[#ccd6f6]'>
       <div className='w-[90%] mx-auto px-6 flex flex-col justify-center h-screen'>
          <p className='text-3xl md:text-5xl font-bold w-fit border-b-pink-600 pb-1 mb-2 border-b-4'>
              Projects
          </p>
          <p className='text-1xl sm:text-2xl mb-2 text-[#8892b0] sm:mb-4'>
            Checkout some of my Projects
          </p>
          <div className='flex flex-wrap'>
            {ProjectsData.map(project => (
              <div className="w-[9rem] sm:w-[15rem] flex flex-col justify-center sm:justify-between m-1 sm:m-2 p-1 sm:p-3 border rounded-md border-gray-300" key={project._id} >
                <h1 className='text-base sm:text-xl font-bold w-fit border-b-pink-600 border-b-4'>{project.title}</h1>
                <div className='mt-1 sm:mt-2'>
                  <a className='block border-gray-400 border-2 w-fit rounded-lg px-2 py-1 my-1' href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a className='block border-gray-400 border-2 w-fit rounded-lg px-2 py-1 my-1' href={project.github} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  )
}

export default Projects