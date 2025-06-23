import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import Header from './Header'
import heart from '../assets/heart.png'
import hero from '../assets/hero.png'
import heroBack from '../assets/hero-back.png'
import calorie from '../assets/calorie.png'

export default function Hero() {
  const [isOn, setIsOn] = useState(false)
  const [isLoginPageOpen, setisLoginPageOpen] = useState(false)
  const handleToggle = ()=>{
    setIsOn(!isOn)
  }
 const handleLoginPage=()=>{
 
 }
  return (
    <>
      <div id='home' className="flex justify-between">
        <div className="left flex-3 p-8 pt-6">
        {/* the best ad */}
          <div onClick={handleToggle} className='flex justify-start items-center text-xl text-white border-2 border-[#838485] rounded-3xl uppercase object-contain px-4 py-1 inline-block bg-[#2e3236] mt-15 relative cursor-pointer'>
            <div  className={`${isOn?"on":"off"} bg-[#f48915] absolute z-0 w-16 h-[80%] top-1 left-2 rounded-3xl `}></div>
            <span  className={` relative z-3`}>
              the best fitness club in the town
            </span>
          </div>
          
          {/* Hero heading */}
          <div className=' text-white text-5xl flex flex-col gap-4 font-bold mt-10'>
            <div>
              <span className='stroke-text'>SHAPE</span> <span>YOUR</span>
            </div>
            <div className=''>IDEAL BODY</div>
            <div className='text-sm font-medium'>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
          </div>
           {/* figures */}
           <div className='uppercase flex gap-6 mt-5'>
            <div className='flex flex-col'>
              <span className='text-white text-2xl font-medium '>+ 140</span><span className='text-gray-400'>expert coaches</span>
            </div>
            <div className='flex flex-col'><span className='text-white text-2xl font-medium '>+ 978</span><span className='text-gray-400'>members joined</span></div>
            <div className='flex flex-col'>
            <span className='text-white text-2xl font-medium '>+50</span><span className='text-gray-400'>fitness programs</span>
            </div>
           </div>

           {/* hero buttons */}
          <div className='flex gap-4 mt-5'>
          <button className='btn bg-[#f48915]'
          onClick={handleLoginPage}>Get Started</button>
          <Link to='/learnMore'><button className='btn bg-transparent' >Learn More</button></Link>
          </div>
        </div>

        <div className="right flex-1 relative bg-[var(--orange)]">   
           <div className='p-8 pt-6 justify-items-end'>
           <button  className='planCardButton bg-white text-black px-3 py-1 flex justify-center font-medium mb-8 mr-8 '>Join Now</button>
            {/* heart rate div */}
            <div className='flex flex-col gap-4  w-28 h-auto bg-[#464D53] relative
             rounded-sm px-3 py-2 mr-12'>
             <img src={heart} alt="heart image" className='w-8 h-auto'/>
             <span className='text-gray-400'>Heart Rate</span>
             <span className='text-white text-xl '>116 bpm</span>
            </div>

            {/* hero image */}
            <img src={heroBack} alt="backgroung image" className='absolute top-16 right-80 -z-1 w-60'/>
            <img src={hero} alt="gym person image" className='absolute top-40 right-32 w-92' />
           </div>
           {/*calorie image  */}
           <div className='rounded-sm p-4 object-contain absolute top-128 right-112 flex gap-8 bg-[var(--caloryCard)] w-70'>
              <img src={calorie} alt="heart image" className='w-12 h-auto'/>
              <div className='flex flex-col text-white text-2xl justify-between'>
              <span className='text-gray-400'>Calories Burned</span>
              <span className='text-white text-xl'>220 Kcal
              </span>
              </div>
            </div>

        </div>
      </div>

    </>
  )
}
