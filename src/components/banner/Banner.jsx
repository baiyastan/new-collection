import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import banner from "../../assets/image/banner.jpg";
import banner11 from "../../assets/image/banner11.png";

import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="banner-top"></div>
      <div className="banner-container">
        <div className="carousel-parent">
          <div className="carousel">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img height={"100px"} src={banner11} alt="carousel image" />
                <Carousel.Caption>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <Link to="/catalog" className="link-btn">
                    Перейти в каталог
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img height={"100px"} src={banner11} alt="carousel image" />
                <Carousel.Caption>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Link to="/catalog" className="link-btn">
                    Перейти в каталог
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img height={"100px"} src={banner11} alt="carousel image" />
                <Carousel.Caption>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <Link to="/catalog" className="link-btn">
                    Перейти в каталог
                  </Link>
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
