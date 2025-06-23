import React from 'react'

function HomeFooter() {
    return (
      <div className='py-10 bg-[#464D53] text-white'>
        <div className='flex flex-col md:flex-row gap-10 md:gap-30'>
             <div className='text-4xl md:text-6xl font-bold p-8 w-full md:w-1/2'>
                <span className='stroke-text'>ready to </span><span>level up</span>
                <br />
                <span>your body </span><span className='stroke-text'>with us ?</span>
            </div>
            <div className='flex items-center justify-center gap-4 p-8 w-full md:w-1/2'>
                <input
                  type="Loginemail"
                  name="Loginemail"
                  id="Loginemail"
                  placeholder='Enter your Email Address here'
                  className='bg-gray-700 p-4 rounded-2xl placeholder-violet-50 font-bold w-full'
                />
                <button className='btn bg-amber-600 planCardButton'>Join Now</button>
            </div>
        </div>

        
      </div>
    )
}

export default HomeFooter
