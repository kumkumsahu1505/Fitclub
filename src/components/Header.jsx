import React from 'react'
import Logo from '../assets/logo.png'
import HeaderLink from './HeaderLink'
export default function Header() {
  return (
    <div className='header flex justify-between items-center pt-8 bg-gray-800 '>
            <img src={Logo} alt="fitClub" className='w-40 h-12 ml-15'/>
           <HeaderLink/>
    </div>
  )
}
