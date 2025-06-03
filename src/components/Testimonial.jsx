import React,{useState} from 'react'
import {testimonial} from '../data/testimonial.jsx'
import rightArrow from '../assets/rightArrow.png'
import leftArrow from '../assets/leftArrow.png'
function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testData = testimonial[currentIndex];

    const handleLeftClick = () => {
      if(currentIndex===0) setCurrentIndex(testimonial.length - 1);
      else setCurrentIndex(currentIndex - 1);
      console.log(testData.review);
    }

    const handleRightClick = () => {
      if(currentIndex == testimonial.length - 1) setCurrentIndex(0);
      else setCurrentIndex(currentIndex + 1);
    }
    return (
        <div id='testimonial' className='w-auto flex flex-row gap-40 h-auto my-20'>
            {/* Left content remains unchanged */}
            <div className='px-10 mt-20 w-1/2'>
                <h3 className='text-orange-400 font-bold text-xl'>TESTIMONIALS</h3>
                <div className='text-5xl font-bold text-white'>
                    <h1 className='stroke-text py-8'>WHAT THEY</h1>
                    <h1>SAY ABOUT US</h1>
                </div>
                <p className='py-6 text-white font-normal'>
                    {testData.review}
                </p>
                <h3 className='text-orange-400 font-medium text-xl uppercase'>
                    {testData.name} - <span className='text-white'>{testData.status}</span>
                </h3>
            </div>

            <div className='flex flex-col items-center mt-20 relative mr-[5%]'>
                {/* Frame effect */}
                <div className='relative w-[250px] h-[300px]'>
                    <div className='absolute top-4 left-4 w-full h-full  bg-gradient-to-r from-[#fa5042] to-[#ffa739]'/>
                    <img
                        src={testData.image}
                        alt=""
                        className='w-full h-full object-cover relative z-10'
                    />
                </div>

                {/* Arrows under image */}
                <div className='flex flex-row gap-6 -mt-6 mr-130'>
                    <img src={leftArrow} onClick={handleLeftClick} alt="Left" className='arrow h-5 cursor-pointer' />
                    <img src={rightArrow} onClick={handleRightClick} alt="Right" className='arrow h-5 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Testimonial