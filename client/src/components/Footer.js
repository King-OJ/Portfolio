import React from 'react'
import reactlogo from '../assets/images/react-logo.png'
import nodelogo from '../assets/images/nodejs-logo.png'
import expresslogo from '../assets/images/express-logo.png'
import mongologo from '../assets/images/mongodb-logo.png'
import Title from './Title'

export default function Footer() {

  const tech = [
    {
      title: 'React',
      logo: reactlogo
    },
    {
      title: 'Node JS',
      logo: nodelogo
    },
    {
      title: 'Express JS',
      logo: expresslogo
    },
    {
      title: 'Mongo DB',
      logo: mongologo
    },
  ]

  return (
    <footer className='fixed right-0 left-0 bottom-0 h-[5rem] md:h-[10rem] shadow-sm dark:bg-slate-800 bg-white'>
        <div className="h-full container mx-auto px-2">
          <div className="h-full flex  flex-col items-center justify-center">
            <Title title='Technologies' />

            <ul className="mt-4 flex gap-8">
              {
                tech.map((item, i)=>{
                  return (
                  <li key={i} className='flex flex-col items-center'>
                    <img src={item.logo} alt="" className='h-6 w-6 md:h-8 md:w-8' />
                    <div className='hidden md:block mt-2 font-semibold text-base'>{item.title}</div>
                  </li>
                )
                })
              }
              
            </ul>
          </div>
        </div>
    </footer>
  )
}
