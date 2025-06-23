import React from 'react';
import logo from '../assets/logo.png';
import HeaderLink from './HeaderLink';
import InstagramIcon from '../assets/instagram-svgrepo-com.svg'
import github from '../assets/github-svgrepo-com.svg'
import twitter from '../assets/twitter-svgrepo-com.svg'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-gray-800 p-10 mt-20 text-white'>
    <div className='flex gap-5 justify-around'>
      <div className='max-w-[30vw] flex flex-col gap-6'>
        <img src={logo} alt="FitClub logo" className="h-15 object-contain" />
        <p>At Fitclub, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay
        Fitclub for business</p>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='uppercase text-white font-bold text-2xl underline'>useful links </h1>
        <Link to='/login'>Account</Link>
        <Link to='/programs'>Loyalty Program</Link>
        <Link to='/affiliates'>Affiliates</Link>
        <Link to='/brands'>Brands</Link>
        <Link to='/blogs'>Blogs</Link>
        <Link to='/fitOuts'>Commercial Fit Outs</Link>

      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='uppercase text-white font-bold text-2xl underline'>SUPPORT </h1>
        <Link to='/faq'>FAQ</Link>
        <Link to='/contactUs'>contact us</Link>
        <Link to='/privacyPolicy'>privacy policy</Link>
        <Link to='/t&c'>terms & conditions</Link>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='uppercase text-white font-bold text-2xl underline'>company </h1>
         <Link to='/'>Home</Link>
        <Link to='/whyFitClub'>About Us</Link>
        <Link to='/contactUs'>contact us</Link>
        <Link to='/OurPlan'>plans</Link>
        <Link to='/t&c'>terms & conditions</Link>
      </div>
      <div className='flex flex-col gap-5'>
        <img src={InstagramIcon} alt="Instagram" className='socialIcon h-12 w-12' />
        <img src={github} alt="LinkedIn" className='socialIcon h-12 w-12' />
        <img src={twitter} alt="GitHub" className='socialIcon h-12 w-12'/>
      </div>
    </div>
    <div>
      @ 2025, Gym and Fitness | Refund Policy | Privacy policy | Terms and services
    </div>
    </div>
  );
}

export default Footer;

