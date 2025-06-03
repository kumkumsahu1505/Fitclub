import React from 'react'
import PlanCard1 from './PlanCard1'
import PlanCard2 from './PlanCard2'
import PlanCard3 from './PlanCard3'
function PlanCard() {
  return (
    <>
    <div className='planCardBackground flex justify-center items-center gap-6 mt-20  h-full w-full '>
    <PlanCard2/>
    <PlanCard1/>
    <PlanCard3/>
    </div>
    </>
  )
}

export default PlanCard