import PropTypes from "prop-types";
import placeHolder from '../../assets/Thumbnail.png'
function Card({ id, title, picture }) {
  return (
    <figure className="gallery-item" id={id}>
      <img src={picture} alt="card" />
      <span className="card-title">{title}</span>
    </figure>
  );
}
export default Card;
Card.prototype = {
  id:PropTypes.string,
  title:PropTypes.string,
  picture:PropTypes.string
}
Card.defaultProps = {
  id:'id',
  title:'Logement',
  picture:{placeHolder}
}