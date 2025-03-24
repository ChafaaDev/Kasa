function Card({ id, title, picture }) {
  return (
    <figure className="gallery-item" id={id}>
      <img src={picture} alt="card" />
      <span className="card-title">{title}</span>
    </figure>
  );
}
export default Card;
