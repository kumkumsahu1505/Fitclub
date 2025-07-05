import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ScrollTop from './ScrollTop'

const AppLayout=()=> {
  
    return (
      <>
      <ScrollTop/>
      <Header/> 
      <Outlet/>
      <Footer/>
      </>
    )
  
}

export default AppLayout