import React,{useState} from 'react'
import { FaBars,FaTimes } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsMedium,BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from "react-scroll"

const menu = ["Home","About","Skills","Projects"]

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <header className='fixed w-full h-16 flex justify-between items-center px-3 bg-[#0a192f] text-gray-300 '>
       <h1 className='text-4xl font-normal text-pink-600 z-10'>
            P S
        </h1>
        <ul className='hidden sm:flex z-10'>
           {
            menu.map(option => (
              <Link className='mx-4 cursor-pointer' key={option} activeClass="active" to={option} spy={true} smooth={true} offset={50} duration={500}>
                {option}
              </Link>
            ))
           }
        </ul>

        {
         isVisible && 
          <ul className='fixed top-0 bottom-0 left-0 right-0 bg-[#0a192f] flex flex-col justify-center items-center'>
           {
            menu.map(option => (
              <Link className='m-6 cursor-pointer text-3xl' key={option} to={option} smooth={true} offset={50} duration={500} onClick={()=>setIsVisible(prev => !prev)}>
                {option}
              </Link>
            ))
           }
          </ul> 
        }
       
        <div className='sm:hidden cursor-pointer z-10' onClick={()=>setIsVisible(prev => !prev)}>
          {isVisible ? <FaTimes/> : <FaBars/>}
        </div>

        <ul className='hidden sm:block fixed top-[35%] left-0'>
          <li>
            <a href='https://www.linkedin.com/in/prabhat-singh-93a54b1b6/' target="_blank" 
            className='w-[130px] p-2 cursor-pointer flex items-center justify-between bg-[#0072b1] ml-[-85px] hover:ml-[0px] duration-300' rel="noreferrer">
              LinkedIn <BsLinkedin size={30}/>
            </a>
          </li>
          <li>
            <a href='https://github.com/dev-prabhat' target="_blank" className='w-[130px] p-2 cursor-pointer flex items-center justify-between bg-[#171515] ml-[-85px] hover:ml-[0px] duration-300' rel="noreferrer">
              GitHub <BsGithub size={30}/>
            </a>
          </li>
          <li>
            <a href='https://medium.com/@singhprabhatp.s.224' target="_blank" className='w-[130px] p-2 cursor-pointer flex items-center justify-between bg-[#66cdaa] ml-[-85px] hover:ml-[0px] duration-300' rel="noreferrer">
               Medium <BsMedium size={30}/>
            </a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1ih6XBANF4VLIUMVEBHBSSuMz9pP4t0ha/view?usp=sharing' target="_blank" className='w-[130px] p-2 cursor-pointer flex items-center justify-between bg-[#565f69] ml-[-85px] hover:ml-[0px] duration-300' rel="noreferrer">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>

        <ul className='block sm:hidden fixed top-[35%] left-0'>
          <li>
            <a href='https://www.linkedin.com/in/prabhat-singh-93a54b1b6/' target="_blank" 
            className='p-2 cursor-pointer flex items-center justify-between bg-[#0072b1] ' rel="noreferrer">
              <BsLinkedin size={20}/>
            </a>
          </li>
          <li>
            <a href='https://github.com/dev-prabhat' target="_blank" className='p-2 cursor-pointer flex items-center justify-between bg-[#171515]' rel="noreferrer">
              <BsGithub size={20}/>
            </a>
          </li>
          <li>
            <a href='https://medium.com/@singhprabhatp.s.224' target="_blank" className='p-2 cursor-pointer flex items-center justify-between bg-[#66cdaa]' rel="noreferrer">
              <BsMedium size={20}/>
            </a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1ih6XBANF4VLIUMVEBHBSSuMz9pP4t0ha/view?usp=sharing' target="_blank" className='p-2 cursor-pointer flex items-center justify-between bg-[#565f69]' rel="noreferrer">
              <BsFillPersonLinesFill size={20}/>
            </a>
          </li>
        </ul>
    </header>
  )
}

export default Navbar