import React from 'react';
import logo from '../assets/logo.png';
// import insta from '../assets/instagram.png';
// import github from '../assets/github.png';
// import linkdin from '../components/Linkdin.jsx'
import InstagramIcon from '../components/instagram-svgrepo-com.svg'
import github from '../components/github-svgrepo-com.svg'
import twitter from '../components/twitter-svgrepo-com.svg'
function LogoArea() {
  return (
    <div className='flex flex-col gap-8 '>
      <div className='flex flex-row gap-8 justify-center items-center'>
        <img src={InstagramIcon} alt="Instagram" className='socialIcon h-12 w-12' />
        <img src={github} alt="LinkedIn" className='socialIcon h-12 w-12' />
        <img src={twitter} alt="GitHub" className='socialIcon h-12 w-12'/>
      </div>
      <div className="flex justify-center items-center">
        <img src={logo} alt="FitClub logo" className="h-15" />
      </div>
    </div>
  );
}

export default LogoArea;
