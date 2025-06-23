import React from 'react'
import Logo from '../assets/logo.png'

function Login() {
  return (
     <section className='flex justify-center items-center mt-10'>
     
        <form action="" className='flex flex-col gap-8 text-white text-lg items-center h-full min-h-[500px] min-w-[50vw] justify-center bg-gray-800 border-2 border-white'>
           <img src={Logo} alt="" className='w-[10vw]'/>
        <input type="email" name="email" id="email" placeholder='Enter Your Email' className='border-2 rounded-xl p-2 outline-none'/>
        <input type="password" name="password" id="password" placeholder='Enter Your Password' className='border-2 rounded-xl p-2 outline-none'/>
        <button className='text-md 
        py-2 px-10 bg-gray-700 outline-none w-auto'
        onClick={(e)=>e.preventDefault()}>LOGIN</button>
        <a className='underline text-center text-cyan-200' href="" onClick={(e)=>e.preventDefault()}>Forget password </a>
    </form>
    </section>
  )
}

export default Login