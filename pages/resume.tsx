import React from 'react' 

import { AiOutlineCloudDownload } from 'react-icons/ai';

    const resume = () => {
  return (
    <div className='flex justify-center items-center h-screen group duration-300'>

       <a className='  bg-green-600 border-2 p-4 rounded-lg text-white font-semibold flex items-center align-center gap-2 '
        href="https://drive.google.com/file/d/13KONBHKsxp08YZjMFF0c3TfJELv-o_VI/view?usp=share_link">
             <AiOutlineCloudDownload className='  hover:flex group-hover:text-3xl'/><span className='group-hover:hidden'>Download</span> </a>
   
    </div>
  )
}

export default resume