import React from 'react'
import { MdOutlineGppGood  } from 'react-icons/md'
import heroImg from '../assets/images/heroImg.jpeg'
import Title from '../components/Title'
import resume from '../assets/myresume.pdf'

export default function Landing() {

  const features = [
    {
      feature: 'Proper DB Query Structure'
    },
    {
      feature: 'Modern App Features'
    },
    {
      feature: 'Smooth Pagination'
    },
    {
      feature: 'Modern User Interface / Experience'
    },
    {
      feature: 'Code Restructuring and Debugging'
    },
    {
      feature: 'Smooth Animations'
    },
    {
      feature: 'Search Engine Optimization'
    },
    {
      feature: 'Data and Web Security'
    },
    {
      feature: 'Readable File Structure and minimal code'
    },
  ]

  return (
    <main className="page container">
      <div className="flex flex-col space-y-6 lg:space-y-0 items-center lg:flex-row-reverse py-10 md:py-16 lg:py-20 w-full">
        <div className="lg:w-[50%] h-full flex justify-end md:pl-6">
          <div className="ring-[#9E679E] ring-2 h-60 w-60 md:h-96 md:w-96 rounded-full overflow-hidden">
            <img src={heroImg} alt="" className='scale-150' />
          </div>
        </div>
        <div className="lg:w-[50%] h-full flex flex-col items-end justify-center">
          <div className='font-bodyFont text-center lg:text-left max-w-md ml-auto'>
            <h1 className='tracking-wider text-2xl lg:text-3xl font-extrabold'>Hi, I'm Clement Ojiguo</h1>
            <p className='text-base lg:text-lg mt-4 font-semibold max-w-xs md:max-w-sm lg:max-w-none'>I'm a Fullstack Website Developer and Online Freelancer with proven passion for technology. I am consistently on a journey to design, develop and improve web applications with modern technologies and techniques to meet the growing advancement in todays world.</p>
            <div className="mt-4">
              <a href={resume} download className='cta-btn'>Download Resume</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20 flex flex-col space-y-6 items-center">
        <Title title='What I Can Offer You!' />
        <ul className='flex text-sm md:text-base dark:text-green-500 flex-col items-center space-y-4 md:space-y-6'>
          {
            features.map((feature, i)=>{
              return <li key={i} className='flex items-center gap-2.5 font-semibold'><MdOutlineGppGood />{feature.feature}</li>
              
            })
          }
        </ul>
      </div>
    </main>
  )
}
