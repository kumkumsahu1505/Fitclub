import React from 'react'
import Logo from '../assets/logo.png'
import HeaderLink from './HeaderLink'
export default function Header() {
  return (
    <div className='header flex justify-between '>
            <img src={Logo} alt="fitClub" className='w-40 h-12 '/>
           <HeaderLink/>
    </div>
  )
}
