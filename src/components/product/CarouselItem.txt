import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function CarouselItem({ image, activeIndex, setPopupOpen }) {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlice = currentIndex === image.length - 1;
    const newIndex = isLastSlice ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <div>
          <img src={`${image[currentIndex]}`} alt="carousel image" />
        </div>
      </div>
      <div className="carousel-left">
        <FaChevronLeft size={30} onClick={prevSlide} />
      </div>
      <div className="carousel-right">
        <FaChevronRight size={30} onClick={nextSlide} />
      </div>
      <div className="carousel-close">
        <IoMdClose size={30} onClick={() => setPopupOpen(false)} />
      </div>
    </div>
  );
}

export default CarouselItem;
