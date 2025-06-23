import React from 'react'
import {Link} from 'react-router-dom'
function HeaderLink() {
  return (
    <div className='header flex justify-center mb-4 mr-15'>
        <ul className='ml-4 flex gap-8 text-white text-lg'> 
              <li> <Link to='/' href="#home">Home</Link></li>
              <li><Link to='/programs' href="#program">Programs</Link></li>
              <li><Link to='/whyFitClub' href="#why">Why us</Link></li>
              <li><Link to='plans' href="#plan">Plans</Link></li>
              <li><Link to='/testimonial' href="#testimonial">Testimonial</Link></li>
            </ul>
    </div>
  )
}

export default HeaderLink