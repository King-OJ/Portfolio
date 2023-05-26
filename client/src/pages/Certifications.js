import React from 'react'
import Title from '../components/Title'
import certs from '../utils/certs'

export default function Certifications() {
  
  return (
    <main className='page container '>
        <div className="py-10 px-1 md:py-16 lg:py-20 h-full w-full">
          <div className="w-full flex justify-center">
            <Title title='My Certificates'/>
          </div>
          <div className="my-10 lg:my-16 mx-4 space-y-12">
            {
              certs.map((cert, i)=>{
                return (
                  <div key={i} className="space-y-4">
                    <img src={cert.img} alt="" />
                    <h5 className='text-base md:text-2xl text-center font-extrabold tracking-widest'>{cert.title}</h5>
                  </div>
                )
              })
            }

           
          </div>
        </div>    
    </main>
  )
}
