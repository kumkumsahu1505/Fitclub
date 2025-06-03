import React from 'react'
import whiteTick from '../assets/whiteTick.png'
function PlanPoints({text}) {
  return (
    <div className='flex items-center gap-3 text-white'>
             <img src={whiteTick} className='h-4 w-4'/><span>{text}</span>
             </div>
  )
}

export default PlanPoints