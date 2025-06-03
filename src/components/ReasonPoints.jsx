import React from 'react'

function ReasonPoints({image,text}) {
  return (
    <div className='flex items-center gap-6 '>
             <img src={image} className='h-8 w-8'/><span>{text}</span>
             </div>
  )
}

export default ReasonPoints