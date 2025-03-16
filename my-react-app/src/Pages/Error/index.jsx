import errorMessage from '../../assets/404.png'
import { Link } from 'react-router-dom'
import '../../styles/Error.scss'
function Error(){
    
    return(
            <div className="error-page-container">
                <img src={errorMessage} alt="404 error" />
                <span className="error-message">Oups! La page que vous demandez n'existe pas.</span>
               <Link to='/'>Reourner sur la page d'acceuil</Link>
            </div>

    )
}
export default Error