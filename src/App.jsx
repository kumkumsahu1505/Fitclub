import Home from './Pages/Home'
import Login from './Pages/Login'
import Faq from './components/Faqs'
// import Cardio from './Pages/Cardio'
// import FatBurning from './Pages/FatBurning'
import AppLayout from './components/AppLayout'
// import Health from './Pages/Health'
import LearnMore from './Pages/LearnMore'
// import Plans from './Pages/Plans'
import ProgramsPage from './Pages/ProgramsPage'
import Registration from './Pages/Registration'
// import Strength from './Pages/Strength'
// import Testimonial from './components/Testimonial'
import WhyUs from './Pages/WhyUs'
import ContactUs from './Pages/ContactUs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import PlanCard from './components/PlanCard'

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
        //          {
        //           path: '/cardio',
        //           element: <Cardio/>,
        //         },
        //         {
        //           path: '/fatBurning',
        //           element: <FatBurning/>,
        //         },
        //          {
        //           path: '/health',
        //           element: <Health/>,
        //         },
        {
          path: '/learnMore',
          element: <LearnMore />,
        },
        {
          path: '/faq',
          element: <Faq />,
        },
        //          {
        //           path: '/plans',
        //           element: <Plans/>,
        //         },
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
        //         {
        //           path: '/strength',
        //           element: <Strength/>,
        //         },
        // {
        //           path: '/testimonials',
        //           element: <Testimonial/>,
        //         },
        {
          path: '/whyFitClub',
          element: <WhyUs />
        }, 
        {
          path: '/contactUs',
          element: <ContactUs />
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
