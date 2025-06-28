import React from 'react'
import Features from '../components/Features'
import LiveClass from '../components/LiveClass'
import PlanCard from '../components/PlanCard'

function ProgramsPage() {
  return (
    <div className='bg-[#1B2024] py-15 '>
      <Features/>
      <LiveClass/>
      <PlanCard/>
    </div>
  )
}

export default ProgramsPage