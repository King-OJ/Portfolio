import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileMenu({isMenuOpen, toggleMenu }) {
  return (
    <div className={isMenuOpen ? 'mobile-menu opacity-100 translate-y-full ' : 'mobile-menu opacity-0 translate-y-0'}>
        <div className="container mx-auto" >
          <div className="bg-white dark:bg-slate-800 shadow-md py-8 px-6">
            <ul className="flex flex-col gap-3 md:gap-6 items-center font-semibold">
              <li onClick={()=>toggleMenu()} className='pb-1 transition hover:cursor-pointer tracking-wide'>
                <NavLink to='/' className={({isActive})=> isActive ? 'hover:text-[#9E679E] transition text-[#9E679E] flex items-center gap-2' : 'hover:text-[#9E679E] transition flex items-center gap-2' } >Home</NavLink>
              </li>
              <li onClick={()=>toggleMenu()} className='pb-1 transition hover:cursor-pointer tracking-wide'>
                <NavLink to='about' className={({isActive})=> isActive ? 'hover:text-[#9E679E] transition text-[#9E679E] flex items-center gap-2' : 'hover:text-[#9E679E] transition flex items-center gap-2' } >About</NavLink>
              </li>
              <li onClick={()=>toggleMenu()} className='tracking-wide'><NavLink to='works' className={({isActive})=> isActive ? 'hover:text-[#9E679E] transition text-[#9E679E] flex items-center gap-2' : 'hover:text-[#9E679E] transition flex items-center gap-2' }>Works</NavLink></li>
              <li onClick={()=>toggleMenu()} className='tracking-wide'><NavLink to='certifications' className={({isActive})=> isActive ? 'hover:text-[#9E679E] transition text-[#9E679E] flex items-center gap-2' : 'hover:text-[#9E679E] transition flex items-center gap-2' }>Certifications</NavLink></li>
              <li onClick={()=>toggleMenu()}><NavLink to='contact' className= {({isActive})=> isActive ? 'animate-none cta-btn': 'animate-pulse cta-btn'}>Hire Me</NavLink></li>
            </ul>
          </div>
        </div>
    </div>
  )
}
