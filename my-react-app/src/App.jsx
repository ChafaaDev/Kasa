import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/home'
import About from './Pages/About'
import './styles/app.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/Apropos' element={<About />}/>
      </Routes>
     <Footer />
    </Router>  
   
    </>
  )
}

export default App
