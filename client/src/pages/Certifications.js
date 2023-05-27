import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from '../assets/images/placeholders/cert-placeholder.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';
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
                  <div key={i} className="space-y-4 flex flex-col items-center">
                    <LazyLoadImage src={cert.img} alt={cert.alt} effect="blur" PlaceholderSrc={PlaceholderImage}/>
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
