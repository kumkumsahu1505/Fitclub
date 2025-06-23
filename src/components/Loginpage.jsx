import { useState } from 'react'
import { CiDumbbell } from "react-icons/ci";
import loginImage from '../assets/loginImage.png'
import Register from '../components/Register';
import Login from '../components/Login';

function Loginpage() {
  const [isLogin, setisLogin] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault();
  }




  return (
    <div>
      <div className='w-full flex flex-row p-20 bg-neutral-800 h-screen'>
        <section className='bg-[#2e3236] flex flex-col items-center justify-center w-1/2 gap-4'>
          <CiDumbbell className='text-white text-6xl' />
          <h1 className='text-white font-bold text-xl'>FITCLUB GYM</h1>
          <img src={loginImage} alt="muscillar man image"
            className='w-[40vw] object-contain h-[25vw]' />
        </section>
        <section className='bg-gray-500 w-1/2 flex flex-col items-center justify-center gap-4 h-full'>
          <CiDumbbell className='text-white text-6xl' />
          <div className='flex gap-8 '>
            <a onClick={(e) => {
              { handleLogin(e) }
              setisLogin(false)
            }} className={`uppercase text-white font-bold text-xl hover:text-gray-800 hover:underline `}>Register</a>

            <a onClick={(e) => {
              handleLogin(e)
              setisLogin(true)
            }} className={`uppercase text-white font-bold text-xl hover:text-gray-800 hover:underline `}>Login</a>
          </div>
          <div className="w-full px-10 py-6 min-h-[400px]">
            {isLogin ? <Login /> : <Register />}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Loginpage