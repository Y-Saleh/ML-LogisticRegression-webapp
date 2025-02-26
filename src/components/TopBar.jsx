import React from 'react'

import { AiOutlineDocker } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
      <AiOutlineDocker size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>Rock Or Mine</h1>
      </div>

      
    </div>
  )
}

export default TopBar