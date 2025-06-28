import React, { useState } from 'react'
import {serviceData} from '../data/ServiceBasedPlanData'
function ServiceBasedPlan() {
    const plans = serviceData;
  return (
    <>
    <div className="grid md:grid-cols-3 gap-6 mt-10">
  {plans.map(plan => (
    <div className="ServiceCard bg-[var(--caloryCard)] p-6 rounded-xl shadow-lg text-white">
      <img src={plan.image} alt={plan.title} className="rounded-lg mb-4" />
      <h2 className="text-xl font-bold text-orange-50">{plan.title}</h2>
      <p className="text-lg mt-2 text-green-300">{plan.price}</p>
      <ul className="list-disc mt-3 pl-4 text-sm">
        {plan.features.map(f => <li key={f}>{f}</li>)}
      </ul>
    </div>
  ))}
</div>

    </>
  )
}

export default ServiceBasedPlan