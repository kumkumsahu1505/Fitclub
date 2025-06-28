import React from 'react'
import GymFeatures from '../components/GymFeatures'
import PlanCard from '../components/PlanCard'
import ServiceBasedPlan from '../components/ServiceBasedPlan'
function Plans() {
  return (
    <>
    <div className='mt-10'>
        <h1 className='uppercase text-2xl text-cyan-200 font-bold text-center'>we have <span className='text-black font-extrabold'>goal based plan</span>  by which you can add the values in your daily routine </h1>
         <GymFeatures/>
    </div>

    <div className='mt-10'>
        <h1 className='uppercase text-2xl text-cyan-200 font-bold text-center'>we have <span className='text-black font-extrabold'>service based plan</span>  by which you can access the gym values in your daily routine </h1>
         <ServiceBasedPlan/>
    </div>

    <div className='mt-10 mb-10'>
        <h1 className='uppercase text-2xl text-cyan-200 font-bold text-center'>we have <span className='text-black font-extrabold'>time based plan</span>  by which you can take time for excercise on the basis of your time </h1>
         <PlanCard/>
    </div>
   
    </>
  )
}

export default Plans