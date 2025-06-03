import React from 'react'

function HeaderLink() {
  return (
    <div className='header flex justify-center mb-4'>
        <ul className='ml-4 flex gap-8 text-white text-lg'> 
              <li> <a href="#home">Home</a></li>
              <li><a href="#program">Programs</a></li>
              <li><a href="#why">Why us</a></li>
              <li><a href="#plan">Plans</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
            </ul>
    </div>
  )
}

export default HeaderLink