import logoFooter from '../../assets/logoFooter.png'
import '../../styles/Footer.scss'
function Footer(){

    return(
            <footer className="kasa-footer">
                <img src={logoFooter} alt="logo-Kasa" />
                <span className='copy-text'>{new Date().getFullYear()} Kasa. all rights reserved</span>
            </footer>
    )
}
export default Footer 