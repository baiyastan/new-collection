import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import banner11 from "../../assets/image/banner11.png";
import banner2 from "../../assets/image/banner-2.png";
import banner3 from "../../assets/image/banner-3.png";
import banner4 from "../../assets/image/banner-4.png";

import "./Banner.css";

function Banner() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="banner-top"></div>
      <div className="banner-container">
        <div className="carousel-parent">
          <div className="carousel">
            <Carousel>
              <Carousel.Item interval={800}>
                <img height={"100px"} src={banner11} alt="carousel image" />
                <Carousel.Caption>
                  <a href="#review" className="link-btn" onClick={handleScroll}>
                    Оставить заявку
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img height={"100px"} src={banner2} alt="carousel image" />
                <Carousel.Caption>
                  <a href="#review" className="link-btn" onClick={handleScroll}>
                    Оставить заявку
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img height={"100px"} src={banner3} alt="carousel image" />
                <Carousel.Caption>
                  <a href="#review" className="link-btn" onClick={handleScroll}>
                    Оставить заявку
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img height={"100px"} src={banner4} alt="carousel image" />
                <Carousel.Caption>
                  <a href="#review" className="link-btn" onClick={handleScroll}>
                    Оставить заявку
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
