import React from 'react'
import {testimonialData} from '../data/TestimonialData'
function Testimonials() {
    const testimonials=testimonialData
  return (
   <section className="bg-gray-900 py-12 px-4 md:px-12">
      <h2 className="text-4xl font-bold text-center text-amber-400 mb-10">
        What Our Members Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[var(--caloryCard)] p-6 rounded-xl shadow-md hover:shadow-amber-500/100 transition duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-40 h-40 rounded-full mb-4 border-4 border-amber-400"
              />
              <p className="text-white text-center mb-4">"{t.message}"</p>
              <h4 className="text-amber-300 font-semibold text-lg">
                {t.name}
              </h4>
              <p className="text-sm text-gray-400">{t.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials