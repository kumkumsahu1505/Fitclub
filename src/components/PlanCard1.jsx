import React from 'react'
import dumble from '../assets/dumble.png'
import PlanPoints from './PlanPoints'
import arrow from '../assets/arrow.png'
function PlanCard1() {
  return (
    <>
      <div className={`flex flex-col justify-start gap-6 p-4 h-auto w-80 bg-gradient-to-bl from-[#fa5042] to-[#ffa739] -mt-15 `}>
        <img src={dumble} alt="image in the plan card section" className='h-8 w-8 object-cover' />
        <h3 className='font-semibold text-white text-xl uppercase'>Premium plan</h3>
        <h1 className='font-semibold text-white text-5xl'>$ 30</h1>
        <PlanPoints text="5 hour of excercises" />
        <PlanPoints text="Free consultation of coaches" />
        <PlanPoints text="Accessto minibar" />
        <div className='flex  text-white gap-2'>
          <a href="">See more benefits
          </a>
          <img src={arrow} alt="arrow image" className='bg-transparent' />
        </div>
        <button className='planCardButton flex p-2 items-center justify-center text-lg bg-white text-[#ffa739] font-bold'>Join now</button>
      </div>
    </>
  )
}

export default PlanCard1