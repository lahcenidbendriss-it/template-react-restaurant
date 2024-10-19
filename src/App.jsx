import React from "react"
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages_navbar/Home"
import About from "./pages_navbar/About"
import Contact from "./pages_navbar/Contact"
import Gallery from "./pages_navbar/Gallery"
import Menu from "./pages_navbar/Menu"
import Service from "./pages_navbar/Service"
import Login from "./authentification/Login"
import Register from "./authentification/Register"
import Single from "./pages_navbar/Single"


function App() {
  

  return (
    <div>

    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/menu"  element={<Menu/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/services"  element={<Service/>} />
        <Route path="/gallery"  element={<Gallery/>} />
        <Route path="/single"  element={<Single/>} />

        <Route path="/contact"  element={<Contact/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/register"  element={<Register/>} />
       
        
      </Routes>
    </BrowserRouter>
   
    


  

   
 
    </div>
  )
}

export default App
