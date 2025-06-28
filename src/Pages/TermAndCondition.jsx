import React from 'react'
import { termAndCondition } from '../data/TermAndConditionData'
function TermAndCondition() {
    const termsData = termAndCondition
  return (
    <div className="bg-gray-900 text-white px-6 md:px-20 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-10 text-center">
        {termsData.title}
      </h1>
      <div className="space-y-10">
        {termsData.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-amber-300 mb-4">
              {section.heading}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TermAndCondition