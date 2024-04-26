// BannerCarousel.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from "./Banner";
import slideData from "./banner";

import 'swiper/css';

function BannerCarousel() {
  const [carousel, setCarousel] = useState(0);
  const [direction, setDirection] = useState("from-right");

  // const nextSlide = () => {
  //   setCarousel((prevSlide) =>
  //     prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCarousel((prevSlide) =>
  //     prevSlide === 0 ? slideData.length - 1 : prevSlide - 1
  //   );
  // };

  const nextSlide = () => {
    setDirection("from-left");
    setCarousel((prevSlide) =>
      prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setDirection("from-right");
    setCarousel((prevSlide) =>
      prevSlide === 0 ? slideData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel-banner">
      <div className="carousel">
        {slideData.map((item, ind) => (
          <Banner
            key={ind}
            item={item}
            prev={prevSlide}
            next={nextSlide}
            isActive={carousel === ind}
            isSliding={carousel === ind && direction}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;
