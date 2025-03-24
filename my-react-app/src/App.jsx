// import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/home'
import About from './Pages/About'
import './styles/app.scss'
import Error from './Pages/Error'
import FicheAppart from './Pages/FicheAppart'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  // const [theme, setTheme] = useState('light')
  // function toggleTheme(){
  //   setTheme((curr)=>curr === 'light' ? 'dark': 'light')
  // }
  return (  
    <Router >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/Apropos' element={<About />}/>
        <Route path='/logement/:id' element={<FicheAppart/>}/>
        <Route path='*' element={<Error />}/>
      </Routes>
     <Footer />
    </Router>  
  )
}

export default App
