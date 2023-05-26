import React from 'react'
import logo from '../assets/images/logo.png'
import { ImProfile } from 'react-icons/im'
import { MdWorkHistory } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'
import { TiThMenuOutline } from 'react-icons/ti'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ toggleMenu }) {
  return (
    <nav className='h-[6rem] z-40 fixed top-0 right-0 left-0 shadow-sm dark:bg-slate-800 bg-white'>
        <div className="h-full container mx-auto px-6">
            <div className="h-full flex items-center justify-between">
                
                <Link to='/' className='flex items-center gap-3'>
                <img src={logo} alt="clem oj logo" />
                <h2 className='font-bold lg:text-3xl font-headingFont pt-1 '>Clem <span className='text-[#9E679E]'>OJ</span></h2>
                </Link>
                
                <div className="lg:hidden">
                  <button onClick={()=>toggleMenu()}><TiThMenuOutline className='font-bold text-[#9E679E] dark:text-white' size={23}/></button>
                </div>

                <ul className="hidden lg:flex gap-3 md:gap-6 items-center">
                  <li className='pb-1 transition hover:cursor-pointer tracking-wide'>
                    <NavLink to='about' className={({isActive})=> isActive ? 'hover:text-[#9E679E] transition text-[#9E679E] flex items-center gap-2' : 'hover:text-[#9E679E] transition flex items-center gap-2' } > <ImProfile size={20}/>About</NavLink>
                  </li>
                  <li className='tracking-wide'><NavLink to='works' className={({isActive})=> isActive ? 'hover:text-[#9E679E] transition text-[#9E679E] flex items-center gap-2' : 'hover:text-[#9E679E] transition flex items-center gap-2' }> <MdWorkHistory size={20}/>Works</NavLink></li>
                  <li className='tracking-wide'><NavLink to='certifications' className={({isActive})=> isActive ? 'hover:text-[#9E679E] transition text-[#9E679E] flex items-center gap-2' : 'hover:text-[#9E679E] transition flex items-center gap-2' }> <TbCertificate size={20} />Certifications</NavLink></li>
                  <li><NavLink to='contact' className= {({isActive})=> isActive ? 'animate-none cta-btn': 'animate-pulse cta-btn'}>Hire Me</NavLink></li>
                </ul>

            </div>
        </div>
    </nav>
  )
}
