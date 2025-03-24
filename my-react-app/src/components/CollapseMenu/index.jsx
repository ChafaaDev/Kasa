import "../../styles/Collapse.scss";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";


function CollapseMenu({ property, description }) {
  const [isActive, setIsActive] = useState(false);
  const ContentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setHeight(ContentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  function toggleText() {
    setIsActive((isActive) => !isActive);
  }

  return (
    <article className="collapse-container">
      <div className="collapse-item">
        <h3 className="title">{property}</h3>
        <button
          className={`arrow ${isActive ? "active" : ""}`}
          onClick={toggleText}
        >
          <IoIosArrowUp 
          size={30}
          color="#ffff"
          />
        </button>
      </div>

      <div
        ref={ContentRef}
        className="description"
        style={{ height: `${height}px` }}
      >
        <div className="description-text">{description}</div>
      </div>
    </article>
  );
}
export default CollapseMenu;
