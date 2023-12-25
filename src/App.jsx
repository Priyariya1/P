import React,{ useState } from 'react'
import NavBar from './components/NavBar'
import  Home  from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Works from './components/works'
import Experience from './components/Experience'
import Contact from './components/Contact'


function App(){
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Works />
      <Experience/>
      <Contact/>
    </div>
  )
}


export default App
