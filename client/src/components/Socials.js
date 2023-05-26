import React from 'react'
import { HiLightBulb } from 'react-icons/hi'
import socials from '../utils/socials'

export default function Socials() {

const toggleTheme = ()=> document.documentElement.classList.toggle('dark')



return (
    <div className="z-20 fixed top-[30%] left-2 ">
          <ul className="bg-[#9E679E] dark:bg-opacity-20 bg-opacity-20 space-y-6 rounded-full px-[3px] py-2 md:py-4">
            <li onClick={toggleTheme} className="p-[2px] md:p-3 rounded-full transition hover:cursor-pointer hover:bg-[#3a133a] hover:text-white"><HiLightBulb size={20} /></li>
            {
              socials.map((social, i)=>{

                return <li key={i} className="p-[2px] md:p-3 rounded-full transition hover:cursor-pointer hover:bg-[#3a133a] hover:bg-opacity-20"><a target='_blank' rel='noreferrer' href={social.link}>{social.icon}</a></li>
              })
            }

          </ul>
        </div>
  )
}
