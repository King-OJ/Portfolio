import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import slides from '../utils/works'
import {  MdChevronRight, MdChevronLeft } from 'react-icons/md'

export default function Works() {

  const [active, setActive] = useState(0)

  let nextSlide = active + 1
  let timeOut

  function runSlider (){
    // console.log(`activeSlide : ${activeSlide}`)
    if(nextSlide > slides.length - 1 ){
      nextSlide = 0
    }
    timeOut = setTimeout(()=>{
      
      setActive(nextSlide)
      
    }, 6000)

    
    // console.log(`nextSlide : ${nextSlide}`)
    // console.log(`active : ${active}`)
   
  }

  const forwardSlide = ()=>{
    let currentSlide = active + 1
    nextSlide = nextSlide + 1
    if(currentSlide > slides.length - 1){
      currentSlide = 0
    }
    if(nextSlide > slides.length){
      nextSlide = 1
    }
    clearTimeout(timeOut)
    setActive(currentSlide)
  }

  const previousSlide = ()=> {
              
    let currentSlide = active - 1
    nextSlide = nextSlide - 1
    if(currentSlide < 0){
      currentSlide = slides.length - 1
    }

    if(nextSlide < 1 ){
      nextSlide = slides.length - 1
    }
    clearTimeout(timeOut)
    setActive(currentSlide)
    
    }

  useEffect(()=>{
    runSlider()
    // eslint-disable-next-line
  }, [active])



  return (
    <main className='page container '>
        <div className="px-1 py-10 md:py-16 lg:py-20 h-full w-full">
          <div className="w-full flex justify-center">
            <Title title='My Works'/>
          </div>
          <div className="my-8 lg:my-16 mx-4">
            {/* slide container */}
            <div className="relative pl-2 md:px-6 w-full">
              <div className="flex items-center justify-center overflow-x-hidden">
              {/* slides */}
              {
                slides.map((slide, i)=>{
                  return (
                    <div key={i} className={i === active ? 'block' : 'hidden'}>
                      <img src={slide.img} alt={slide.alt} className='h-80 md:h-96' />
                      <div className="my-6 font-headingFont flex justify-between ">
                        <a href={slide.liveLink} className='text-xs md:text-base underline underline-offset-4'>Visit site</a>
                        <h6 className='text-sm md:text-base font-semibold'>{slide.title}</h6>
                        <a href={slide.codeLink} className='text-xs md:text-base underline underline-offset-4'>View code</a>
                      </div>
                    </div>
                  )
                })
              }
              </div>
      
              {/* controls */}
              <div className="mt-2 md:mt-6 text-center space-x-6">
                <button onClick={previousSlide} className='p-1 md:p-2 hover:bg-[#9E679E] hover:shadow-md transition rounded-full border border-[#9E679E] dark:text-white'><MdChevronLeft size={22} /></button>
                <button onClick={forwardSlide} className='p-1 md:p-2 hover:bg-[#9E679E] hover:shadow-md transition rounded-full border border-[#9E679E] dark:text-white'><MdChevronRight size={22} /></button>
              </div>
            </div>
          </div>
        </div>    
    </main>
  )
}
