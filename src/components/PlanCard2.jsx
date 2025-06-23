import React from 'react'
import {Link} from 'react-router-dom'
import heartHealth from '../assets/heartHealth.png'
import PlanPoints from './PlanPoints'
import arrow from '../assets/arrow.png'
function PlanCard2() {
    return (
        <>
            <div className={`flex flex-col justify-start gap-6 p-4 h-auto w-80 bg-[var(--caloryCard)] `}>
                <img src={heartHealth} alt="image in the plan card section" className='h-8 w-8 object-cover' />
                <h3 className='font-semibold text-white text-xl uppercase'>basic plan</h3>
                <h1 className='font-semibold text-white text-5xl'>$ 25</h1>
                <PlanPoints text="2 hour of excercises" />
                <PlanPoints text="Free consultation of coaches" />
                <PlanPoints text="Accessto community" />
                <div className='flex  text-white gap-2'>
                    <a href="">See more benefits
                    </a>
                    <img src={arrow} alt="arrow image" />
                </div>
                <Link to='/registration'>
                   <button className='planCardButton flex p-2 items-center justify-center text-lg bg-white text-black font-bold'>Join now</button>
                </Link>
             
            </div>
        </>
    )
}

export default PlanCard2