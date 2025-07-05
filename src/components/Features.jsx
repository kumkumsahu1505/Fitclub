import React from 'react'
import Program1 from '../assets/Program1.jpg'
import Program2 from '../assets/program2.jpg'
import Program3 from '../assets/Program3.jpg'
import Program4 from '../assets/Program4.mp4'
import Program5 from '../assets/Program5.jpg'
function Features() {
  return (
    <section className='flex flex-col items-center justify-center gap-6 bg-[#1B2024]'>
        <h1 className='text-3xl text-gray-400 font-medium uppercase'>Features</h1>
        <h1 className='text-5xl text-white font-bold'>For an active lifestyle</h1>
        <div className='mt-4 flex items-center justify-center gap-4'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <figure className='flex flex-col justify-center items-center gap-4 w-[20vw] h-[20vw]  border-2 border-gray-400  px-6 bg-[#172334]'>
              <h1 className='text-2xl font-bold  text-gray-400'>Unlimited access to</h1>
              <img src={Program1} alt="" />
              <h1 className='text-2xl font-bold text-gray-400'>PRO GYMS</h1>
            </figure>
            <figure
              className="flex flex-col justify-center items-center gap-4 w-[20vw] h-[20vw]  px-6 bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${Program2})` }}
            >
              <h1 className="text-4xl pt-25 font-bold text-gray-400">ELITE gyms & group classes</h1>
            </figure>

          </div>

          <img src={Program3} alt="" className='w-[25vw] h-auto ' />

          <div className='flex flex-col items-center justify-center gap-4'>
            <figure className='flex flex-col justify-center items-center gap-4 w-[20vw] h-[20vw]  border-2 border-gray-400 bg-[#172334]'>
              <h1 className='text-4xl text-center font-bold  text-gray-400'>At-Home
                Live Workout</h1>
              <video src={Program4} className=''></video>
            </figure>
            <figure className='flex flex-col justify-center items-center gap-4 w-[20vw] h-[20vw]  border-2 border-gray-400 bg-[#172334]'>
              <img src={Program5} alt="" />
              <h1  className='text-3xl text-center font-bold  text-gray-400'><span className='text-2xl'>SMART <br /></span>
                Workout plans</h1>
            </figure>

          </div>
        </div>
      </section>
  )
}

export default Features