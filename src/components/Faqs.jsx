import React from 'react'
import { useState } from 'react'
import { FAQ } from '../data/FAQS'
import { Link } from 'react-router';
function Faqs() {
    
    const [activeIndex,setActiveIndex]=useState(null);
   
    return (
       <Link to='/faq'>
        <div className='mx-[10vw] my-[2vw] text-white py-[2vw]'>
            <section className='flex justify-between'>
                <h1 className='text-5xl font-bold'>FAQS</h1>
                
            </section>
            <section className='mt-[2vw]'>
                {FAQ.map((item, index) => {
                    return (
                        <ul className='mt-3  justify-between items-center'>
                            <li type='disc' key={index} className='text-lg font-semibold flex justify-between'>
                                {item.question}
                                <button className='text-white ml-2' key={index} onClick={()=>{setActiveIndex(index)}}>
                                   {activeIndex===index?'▲':'▼'}
                                </button>
                            </li>
                              <li type='disc' key={index} className='text-lg ml-5 font-semibold flex justify-between'>
                                {activeIndex===index?item.answer:""}
                                
                            </li>
                            <div className="w-full h-0.5 bg-gray-500 mt-10"></div>
                        </ul>
                    )
                })}

            </section>
        </div>
       </Link>
    )
}
//  <li type='none' 
//                                     key={index} 
//                                     className='mt-2 ml-4'
//                                     > {toggle?item.answer:""}  
//                                     </li> 
export default Faqs