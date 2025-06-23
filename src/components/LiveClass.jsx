import React from 'react'
import ProgramVideo1 from '../assets/ProgramVideo1.mp4';
import ProgramVideo2 from '../assets/ProgramVideo2.mp4';
function LiveClass() {
    return (
      <>
          <div className='flex flex-col justify-center items-center gap-8 mt-10  w-auto h-auto'>
                <h1 className='text-5xl text-white font-bold uppercase'>JOIN OUR LIVE CLASSES</h1>
                <video
                    src={ProgramVideo1}
                    className='w-[60vw] h-[50vw] object-cover'
                    autoPlay
                    loop
                    muted

                ></video>
            </div>


            <div className='flex flex-col justify-center items-center gap-4 mt-10 text-white mx-5 w-auto h-auto'>
                <h3  className='text-2xl text-gray-400 font-bold uppercase'>AT-HOME</h3>
                <h1  className='text-5xl text-white font-bold uppercase'>Explore variety of formate</h1>
                <video src={ProgramVideo2} className='w-[60vw] h-[50vw] object-cover'
                autoPlay
                loop
                muted></video>
            </div>
      </>
    )
}

export default LiveClass