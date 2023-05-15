import React from 'react'

interface Statusbarprops {
  currentColor : string
  text:string
  level : string
}
const Statusbar:React.FC<Statusbarprops> = ({currentColor , text, level}) => {
  console.log(level)
  return (
    <div className='w-[90%] h-4 rounded-lg m-2 bg-white overflow-hidden relative'>
       <div style={{ background: currentColor  }} className={`h-4  ${level} flex items-center justify-center`}>
       <div className='text-xs font-bold opacity-30 italic'><p className=' absolute top-0 left-24'>{text}</p></div> </div>
    </div>
  )
}

export default Statusbar