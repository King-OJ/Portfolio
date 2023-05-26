import React from 'react'

export default function Title({ title }) {
  return (
    <div className=''>
        <h6 className='text-xl md:text-2xl font-semibold'>{title}</h6>
        <div className='h-[2px] md:h-1 w-full md:my-2 bg-gradient-to-r from-[#9E679E] to-[#3a133a]'></div>
    </div>
  )
}
