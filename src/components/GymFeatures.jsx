import React from 'react'
import Diabates from '../assets/learnMoreDiabates.jpg'
import weightLoss from '../assets/learnMoreWeightLoss.jpg'
import health from '../assets/learnMoreHealthyMind.jpg'
import workOut from '../assets/learnMoreGymWorkOut.jpg'
function GymFeatures() {
    return (
        <div className='pt-8'>
            <div className='flex'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-extrabold text-white text-center'>CONTROL YOUR DIABETES</h1>
                    <img src={Diabates} alt="dibates control one of the gym feature provide to add the members of gym" className='min-w-[50vw] max-w-[60vw] object-contain p-10  min-h-[50vh] max-h-[60vw]' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-extrabold text-white text-center uppercase'>help to gain muscles</h1>
                    <img src={workOut} alt="workout one of the gym feature provide to add the members of gym" className='min-w-[50vw] max-w-[60vw] object-contain p-10 min-h-[50vh] max-h-[60vw]' />
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-extrabold text-white text-center uppercase'>improve your mental health</h1>
                    <img src={health} alt="healthy mind one of the gym feature provide to add the members of gym" className='min-w-[50vw] max-w-[60vw] object-contain p-10  min-h-[50vh] max-h-[60vw]' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-extrabold text-white text-center uppercase'> help to loose weight</h1>
                    <img src={weightLoss} alt="weight loss one of the gym feature provide to add the members of gym" className='min-w-[50vw] max-w-[60vw] object-contain p-10 min-h-[50vh] max-h-[60vw]' />
                </div>
            </div>
        </div>
    )
}

export default GymFeatures