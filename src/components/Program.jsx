import React from 'react';
import { programsData } from '../data/programData.jsx'; 
import rightArrow from '../assets/rightArrow.png';
function Program() {
  return (
    <>
      {/* Program Heading */}
      <div id='program' className="programHeading flex justify-evenly text-5xl font-bold mt-50 text-white">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>

      {/* Program Cards */}
      <div className='flex justify-around gap-4 mt-10 text-white mx-5 flex-wrap'>
        {programsData.map((cardData, index) => (
          <div key={index} className='card bg-[var(--caloryCard)] px-10 py-5 h-60 max-w-90'>
          {cardData.image}
            <h1 className='font-bold text-xl mb-3 mt-3'>{cardData.heading}</h1>
            <p >{cardData.details}</p>
            <div className='flex gap-10 mt-5 items-center'>
            <span className='font-semibold'>Join Now</span> 
            <img src={rightArrow} alt="right Arrow"  className='w-5 h-5'/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Program;
