import React, { useRef } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSlider from "../../hooks/useSlider";
// import Login from "../Login/Login";

const Slider = ({ images }) => {
  const slideImage = useRef(null);
  const slideText = useRef(null);
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  );

  return (
    <div className="slider" ref={slideImage}>
      <div className="slider--content">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z" />
          </svg>
        </button>
        <div className="slider--feature" style={{display:"none"}}>
          <h1 className="feature--title"></h1>
          <p ref={slideText} className="feature--text" style={{display:"none"}}></p>
         
        </div>
        <button onClick={goToNextSlide} style={{color:"white"}} className="slider__btn-right">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
