import logo from '../../assets/LOGO.png'
import '../../../src/styles/Header.scss'
import { Link } from 'react-router-dom'
function Header (){
    return(
        <header>
            <nav>
            <img src={logo} alt="logo Kasa" />
                <ul>
                   
                   <Link to="acceuil"><li>Acceuil</li></Link> 
                    <li>A propos</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header