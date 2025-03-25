import errorMessage from "../../assets/404.png";
import { Link } from "react-router-dom";
import "../../styles/Error.scss";
import small from "../../assets/errSmall.png";
function Error() {
  return (
    <div className="error-page-container">
      <picture>
        <source media="(max-width:665px)" srcSet={small} />
        <img src={errorMessage} alt="404 error" />
      </picture>
      <span className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
  );
}
export default Error;
