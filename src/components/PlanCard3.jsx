import React from 'react'
import {Link} from 'react-router-dom'
import dumble from '../assets/dumble.png'
import PlanPoints from './PlanPoints'
import arrow from '../assets/arrow.png'
function PlanCard3() {
    return (
        <>

            <div className={`flex flex-col justify-start gap-6 p-4 h-auto w-80 bg-[var(--caloryCard)]`}>
                <img src={dumble} alt="image in the plan card section" className='h-8 w-8 object-cover' />
                <h3 className='font-semibold text-white text-xl uppercase'>pro plan</h3>
                <h1 className='font-semibold text-white text-5xl'>$ 45</h1>
                <PlanPoints text="8 hour of excercises" />
                <PlanPoints text="consultation of private coach" />
                <PlanPoints text="Free fitness merchandises" />
                <div className='flex  text-white gap-2'>
                    <a href="">See more benefits
                    </a>
                    <img src={arrow} alt="arrow image" className='bg-transparent' />
                </div>
               <Link to='/registration'>
                <button className='planCardButton flex p-2 items-center justify-center text-lg bg-white text-black font-bold'>Join now</button></Link>
            </div>

        </>
    )
}

export default PlanCard3