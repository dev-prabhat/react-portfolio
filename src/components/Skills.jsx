import React from 'react'
import SkillData from "../data/SkillData"

const Skills = () => {
    console.log(SkillData)
  return (
    <section name="skills" className='w-full min-h-[110vh] bg-[#0a192f] text-[#ccd6f6]'>
      <div className='w-[90%] mx-auto flex flex-col justify-center h-screen px-6'>
          <p className='text-3xl md:text-5xl font-bold w-fit border-b-pink-600 pb-1 mb-2 border-b-4'>
            Skills
          </p>
          <p className='text-1xl sm:text-2xl mb-2 text-[#8892b0] sm:mb-4'>
            These are technologies I've worked with and created multiple projects
          </p>
          <div className='flex flex-wrap justify-start gap-0 sm:gap-5'>
            {SkillData.map(({img,_id,name,alt})=>(
                <figure key={_id} className="w-[6rem] sm:w-[8rem] md:w-[10rem] m-2 p-3 border rounded-md border-gray-300">
                    <img src={img} className="mx-auto w-8 sm:w-16" alt={alt}/>
                    <figcaption className='text-sm text-center mt-1 break-words'>{name}</figcaption>
                </figure>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Skills