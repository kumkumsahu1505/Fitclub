import { PrivacyPolicyData } from '../data/PrivacyPolicyData'
import React from 'react'

function PrivacyPolicy() {
    const privacyData= PrivacyPolicyData
  return (
     <div className="bg-gray-900 text-white min-h-screen px-6 md:px-20 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-4">
        {privacyData.title}
      </h1>
      <p className="text-center text-sm text-gray-400 mb-10">
        Effective Date: {privacyData.effectiveDate}
      </p>

      <div className="space-y-10">
        {privacyData.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-amber-300 mb-4">
              {section.heading}
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-gray-200">
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

export default PrivacyPolicy