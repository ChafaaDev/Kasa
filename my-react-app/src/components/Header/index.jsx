import logo from '../../assets/LOGO.png'
import '../../../src/styles/Header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Header (){
    return(
        <header>
            <nav>
            <img src={logo} alt="logo Kasa" />
                <ul>
                   
                   <Link to="/"><li>Acceuil</li></Link> 
                   <Link to="/Apropos"><li>A propos</li></Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header