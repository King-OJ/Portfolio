import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import FormRow from '../components/FormRow'
import { useForm } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xwkjjrvk")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setSuccess(true)
    setTimeout(()=>{
      setSuccess(false)
    }, 3000)
  }, [state.succeeded, state.errors])
  


  if (state.succeeded) {
    return (
      <main className='page container '>
        <div className="py-10 md:py-16 lg:py-20 h-full w-full">
          <div className="w-full flex justify-center">
            <Title title='Contact'/>
          </div>
          {success && 
            <div className="text-center my-10 text-green-500 ">
            Thanks for contacting me! I'll give a response as soon as I get this!
            </div>  
           
          }
          <form onSubmit={handleSubmit} className="pb-10 lg:pb-0 space-y-8 my-10 lg:my-16 w-[80%] max-w-2xl mx-auto">
           <FormRow label='name' type='text'/>
           <FormRow label='email' type='email'/>
           <FormRow label='phone' type='tel'/>
           <div className="relative">
              <textarea name='message' id="message" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-[#9E679E] appearance-none dark:text-white dark:focus:border-[#9E679E] focus:outline-none focus:ring-0 focus:border-[#9E679E] peer" placeholder=" " />
              <label htmlFor="message" className="absolute text-sm text-black dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Message</label>
            </div>
            <button type='submit' disabled={state.submitting} className="cta-btn w-full">Send Proposal</button>
          </form> 
        </div>    
    </main>
    );
}

  if (state.errors.length > 0) {
    return (
      <main className='page container '>
        <div className="py-10 md:py-16 lg:py-20 h-full w-full">
          <div className="w-full flex justify-center">
            <Title title='Contact'/>
          </div>
          {success &&
            <div className="text-center my-10 text-red-500 ">
            There was an error! Try Again!!!
          </div>   
          }
            
          <form onSubmit={handleSubmit} className="pb-10 lg:pb-0 space-y-8 my-10 lg:my-16 w-[80%] max-w-2xl mx-auto">
           <FormRow label='name' type='text'/>
           <FormRow label='email' type='email'/>
           <FormRow label='phone' type='tel'/>
           <div className="relative">
              <textarea name='message' id="message" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-[#9E679E] appearance-none dark:text-white dark:focus:border-[#9E679E] focus:outline-none focus:ring-0 focus:border-[#9E679E] peer" placeholder=" " />
              <label htmlFor="message" className="absolute text-sm text-black dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Message</label>
            </div>
            <button type='submit' disabled={state.submitting} className="cta-btn w-full">Send Proposal</button>
          </form> 
        </div>    
    </main>
    );
}

  return (
    <main className='page container '>
        <div className="py-10 md:py-16 lg:py-20 h-full w-full">
          <div className="w-full flex justify-center">
            <Title title='Contact'/>
          </div>
          <form onSubmit={handleSubmit} className="pb-10 lg:pb-0 space-y-8 my-10 lg:my-16 w-[80%] max-w-2xl mx-auto">
           <FormRow label='name' type='text'/>
           <FormRow label='email' type='email'/>
           <FormRow label='phone' type='tel'/>
           <div className="relative">
              <textarea name='message' id="message" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-[#9E679E] appearance-none dark:text-white dark:focus:border-[#9E679E] focus:outline-none focus:ring-0 focus:border-[#9E679E] peer" placeholder=" " />
              <label htmlFor="message" className="absolute text-sm text-black dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Message</label>
            </div>
            <button type='submit' disabled={state.submitting} className="cta-btn w-full">Send Proposal</button>
          </form>    

        </div>    
    </main>
  )
}
