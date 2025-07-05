import Home from './Pages/Home'
import Login from './Pages/Login'
import Faq from './components/Faqs'
import AppLayout from './components/AppLayout'
import LearnMore from './Pages/LearnMore'
import Plans from './Pages/Plans'
import ProgramsPage from './Pages/ProgramsPage'
import Registration from './Pages/Registration'
import Testimonial from  './Pages/Testimonials'
import WhyUs from './Pages/WhyUs'
import ContactUs from './Pages/ContactUs'
import TermAndCondition from './Pages/TermAndCondition'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import PlanCard from './components/PlanCard'
import PrivacyPolicy from './Pages/PrivacyPolicy'

function App() {
    
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,

        },
        {
          path: '/learnMore',
          element: <LearnMore />,
        },
        {
          path: '/faq',
          element: <Faq />,
        },
                 {
                  path: '/plans',
                  element: <Plans/>,
                },
        {
          path: '/programs',
          element: <ProgramsPage />,
        },
        {
          path: '/OurPlan',
          element: <PlanCard />,
        },
        {
          path: '/registration',
          element: <Registration />,
        },
        {
          path: '/PrivacyPolicy',
          element: <PrivacyPolicy />,
        },
        {
          path: '/testimonials',
          element: <Testimonial/>,
        },
        {
          path: '/whyFitClub',
          element: <WhyUs />
        }, 
        {
          path: '/contactUs',
          element: <ContactUs />
        },{
          path:'/term&condition',
          element:<TermAndCondition/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
