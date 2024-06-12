import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ position: "relative", maxWidth: "500px", margin: "auto" }}>
      <FaArrowAltCircleLeft
        style={{ position: "absolute", top: "50%", left: "10px", fontSize: "2em", cursor: "pointer" }}
        onClick={prevImage}
      />
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        style={{ width: "100%", display: "block" }}
      />
      <FaArrowAltCircleRight
        style={{ position: "absolute", top: "50%", right: "10px", fontSize: "2em", cursor: "pointer" }}
        onClick={nextImage}
      />
    </div>
  );
};

export default Carousel;
