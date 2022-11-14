import React from 'react'
import { useState } from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
// Shrinked menu icon toggle
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>
{/* Get the contant of the navLink and set it as ancor links */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index  === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
{/* Open the navbar-menu list on small devices by clicking on the img */}
        <img src={toggle ? close : menu} alt='menu'
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle((prev) => !prev) } />
{/* Hide form the navbar the bun if the window wider than 140px */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute
        top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]
              ${index  === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar