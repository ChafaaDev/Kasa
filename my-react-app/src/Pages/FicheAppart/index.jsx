import AppartList from "../../data/AppartList.json";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../../styles/FicheAppart.scss";
import { FaStar } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import CollapseMenu from "../../components/CollapseMenu";

function FicheAppart() {
  const { id } = useParams();
  const isValidId = (id) => {
    const ids = AppartList.map((ap) => ap.id);
    return ids.includes(id);
  };
  if (!isValidId(id)) {
    return <Navigate to="*" />;
  }
  const filtered = AppartList.filter((appart) => appart.id === id);

  const pictures = filtered.map((pic) => pic.pictures);

  const tags = filtered.map((item) => item.tags);

  const rating = filtered.map((item) => item.rating);

  const equipments = filtered.map((elem) => elem.equipments);

  const [slideIndex, setSlideIndex] = useState(0);

  const [hasGallery, setGallery] = useState(true);

  const imageRef = useRef();

  function nextSlide(index, cb) {
    setSlideIndex((s) => s + index);
    if (slideIndex >= pictures[0].length - 1) {
      setSlideIndex(0);
    }
    cb();
  }

  function prevSlide(index, cb) {
    setSlideIndex((s) => s - index);
    if (slideIndex == 0) {
      setSlideIndex(pictures[0].length - 1);
    }
    cb();
  }
  function handleFadeInPicture() {
    imageRef.current.classList.add("animated");
    setTimeout(() => {
      imageRef.current.classList.remove("animated");
    }, 600);
  }

  useEffect(() => {
    if (pictures[0].length < 2) {
      setGallery(false);
    } else {
      setGallery(true);
    }
  }, []);

  function setStarcolors(index) {
    if (index < rating) {
      return "#FF6060";
    } else {
      return "#E3E3E3";
    }
  }

  return (
    <div className="house-content">
      <div className="slider">
        {hasGallery ? (
          <div className="slider-controls">
            <button
              className="next-button"
              onClick={() => nextSlide(1, handleFadeInPicture)}
            >
              <MdArrowForwardIos size={48} color="#ffff" />
            </button>

            <button
              className="prev-button"
              onClick={() => prevSlide(1, handleFadeInPicture)}
            >
              <MdArrowBackIosNew size={48} color="#ffff" />
            </button>

            <span className="slider-pagination">
              {slideIndex + 1}/{pictures[0].length}
            </span>
          </div>
        ) : null}

        <img
          ref={imageRef}
          className="slider-item"
          src={pictures[0][slideIndex]}
          alt="picture"
        />
      </div>
      <section className="house-properties">
        <div className="title-location-tags">
          <h2 className="title">{filtered.map((item) => item.title)}</h2>
          <h3 className="house-location">
            {filtered.map((item) => item.location)}
          </h3>
          <div className="tags">
            <ul>
              {tags[0].map((item, index) => (
                <li key={index} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="host-and-ratings">
          <div className="host-container">
            <h4 className="host-title">
              {filtered.map((item) => item.host.name)}
            </h4>

            <img
              src={filtered.map((item) => item.host.picture)}
              alt="host-picture"
              style={{
                objectFit: "cover",
                height: "64px",
                width: "64px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="rating-stars-container">
            {[...Array(5)].map((_, index) => {
              return (
                <FaStar
                  className="star"
                  key={index}
                  color={setStarcolors(index)}
                  size={24}
                  style={{ marginRight: ".5em", border: "none" }}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="details">
        <div className="accordion">
          <CollapseMenu
            property="Description"
            description={filtered.map((item) => item.description)}
          />
        </div>
        <ul className="accordion">
          <CollapseMenu
            property="Equipement"
            description={equipments[0].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          />
        </ul>
      </section>
    </div>
  );
}
export default FicheAppart;
