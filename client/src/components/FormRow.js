import React from 'react'

export default function FormRow({label, type}) {
  return (
    <div className="relative">
    <input name={label} type={type} id={label} aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-[#9E679E] appearance-none dark:text-white dark:focus:border-[#9E679E] focus:outline-none focus:ring-0 focus:border-[#9E679E] peer" placeholder=" " />
    <label name={label} htmlFor={label} className="capitalize absolute text-sm text-black dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{label}</label>
</div>
  )
}
