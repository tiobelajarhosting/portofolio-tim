import React from 'react'
import { BiBriefcase, BiCode, BiHome, BiMailSend, BiRightArrowAlt } from 'react-icons/bi'
import logo from '../../public/logo.png'
const HeaderLeft = () => {
  return (
    <div className='md:flex-[1]'>
        <div className='min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-teal-600 text-white'>
            <div className='flex flex-col items-center'>
                {/* Company Logo Section */}
                <div className='mb-16 flex flex-col items-center'>
                    <img 
                        src={logo} // Replace with your actual logo path
                        alt="Company Logo"
                        className='w-32 h-32 object-contain rounded-full mb-4 border-4 border-white'
                    />
                    <h2 className='text-2xl font-bold'>R&T Company</h2>
                </div>

                <ul className='flex flex-col gap-10'>
                    {['Home','Experience','Projects','Contact'].map((item) => (
                        <li key={item} className='flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl'>
                            <BiRightArrowAlt className='text-4xl-translate-x-5 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0'/>
                            <a href={`#${item}`} className='transition-all duration-200 hover:translate-x-3'>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Mobile Header with Logo */}
        <div className='fixed left-0 right-0 top-0 z-10 flex justify-between items-center bg-teal-600 p-3 text-white md:hidden'>
            <div className='flex items-center'>
                <img 
                    src="/logo.png" // Replace with your actual logo path
                    alt="Company Logo"
                    className='w-10 h-10 object-contain rounded-full mr-2 border-2 border-white'
                />
                <span className='font-bold text-sm'>Your Company</span>
            </div>
            <div className='flex justify-evenly flex-1'>
                <a href="#home" className='flex flex-col items-center justify-center px-2'>
                    <BiHome className='text-2xl'/>
                    <span className='text-xs'>Home</span>
                </a>
                <a href="#experience" className='flex flex-col items-center justify-center px-2'>
                    <BiBriefcase className='text-2xl'/>
                    <span className='text-xs'>Experience</span>
                </a>
                <a href="#projects" className='flex flex-col items-center justify-center px-2'>
                    <BiCode className='text-2xl'/>
                    <span className='text-xs'>Projects</span>
                </a>
                <a href="#contact" className='flex flex-col items-center justify-center px-2'>
                    <BiMailSend className='text-2xl'/>
                    <span className='text-xs'>Contact</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default HeaderLeft