

function Card({title, picture}){
    return(
            <figure className="gallery-item">
                <img src={picture} alt="card" />
                <span className="card-title">{title}</span>
            </figure>
    )
}
export default Card