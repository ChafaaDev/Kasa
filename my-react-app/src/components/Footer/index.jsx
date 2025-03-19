import logoFooter from '../../assets/logoFooter.png'
import '../../styles/Footer.scss'
import { FaRegCopyright } from "react-icons/fa";
function Footer(){

    return(
            <footer className="kasa-footer">
                <img src={logoFooter} alt="logo-Kasa" />
                <span className='copy-text'><FaRegCopyright style={{alignSelf:'center'}}/>{new Date().getFullYear()} Kasa. all rights reserved</span>
            </footer>
    )
}
export default Footer 