import React from 'react'
import peopleCentric from '../assets/peopleCentric.avif'
import nimbagility from '../assets/nimbagility.avif'
import continuousImprovement from '../assets/continuousImprove.avif'
import collaboration from '../assets/collaboration.avif'
import empathy from '../assets/empathy.avif'
import inclusivity from '../assets/inclusivity.avif' 
function OurValues() {
    return (
        <>
        <div className='px-40 mt-10 tracking-widest'>
             <h1 className='uppercase text-4xl text-orange-400 font-bold pb-4 text-center'>our values</h1>
                <p className='text-white text-xl text-center'>We live and breathe our six core values and six brand promises — they serve as the backbone of our operations and speak of our commitment to improving the lives of our customers, supporting our team, championing industry standards, and driving our business with integrity and passion.</p>
        </div>
            <div className='ourValue px-4 flex flex-wrap justify-center gap-8 py-20'>
               
                <figure>
                    <img src={peopleCentric} alt="" />
                <h1 className='uppercase text-4xl text-amber-200 font-bold pb-8 text-center'>People Centric</h1>
                <p className='text-white text-xl text-center'>Prioritising the happiness and wellbeing of our team members, customers, and stakeholders before all else.</p>
                </figure >
                <figure>
                    <img src={nimbagility} alt="" />
                <h1 className='uppercase text-4xl text-amber-200 font-bold pb-8 text-center'>nimbagility</h1>
                <p className='text-white text-xl text-center'>Combining nimble actions with agile thinking to approach challenges, fostering resilience through creative and efficient problem-solving.</p>
                </figure>
               <figure>
                 <img src={continuousImprovement} alt="" />
                <h1 className='uppercase text-4xl text-amber-200 font-bold pb-8 text-center'>continuous Improvement</h1>
                <p className='text-white text-xl text-center'>Constantly seeking new ways to grow, learn, and innovate — embracing and leading change as a catalyst for progress.</p>
               </figure>
                <figure>
                    <img src={collaboration} alt="" />
                <h1 className='uppercase text-4xl text-amber-200 font-bold pb-8 text-center'>collaboration</h1>
                <p className='text-white text-xl text-center'>Working together with effective communication, mutual respect and individual ownership to achieve shared goals and collective accountability.</p>
                </figure>
                <figure><img src={empathy} alt="" />
                <h1 className='uppercase text-4xl text-amber-200 font-bold pb-8 text-center'>empathy</h1>
                <p className='text-white text-xl text-center'>Demonstrating kindness, compassion and understanding towards others to cultivate deeper relationships and create a positive impact.</p></figure>
                <figure>
                    <img src={inclusivity} alt="" />
                <h1 className='uppercase text-4xl text-amber-200 font-bold pb-8 text-center'>inclusivity</h1>
                <p className='text-white text-xl text-center'>Cultivating a culture that welcomes differences, celebrates unique perspectives, and provides a respectful and nurturing environment.</p>
                </figure>
            </div>
        </>
    )
}

export default OurValues