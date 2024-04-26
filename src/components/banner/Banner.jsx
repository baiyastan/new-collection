// Banner.js
import React from "react";
import "./Banner.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Banner({ item, prev, next, isActive, isSliding }) {
  return (
    <>
      <section
        // className={`${isActive ? "home-banner" : "home-banner home-hidden"}`}
        // style={{ transform: isActive ? "translateX(0)" : "translateX(-100%)" }}
        className={`home-banner ${isSliding ? "sliding" : ""} ${
          isActive ? "" : "home-hidden"
        }`}
      >
        <div className="banner-title">
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
        <div className="banner-image">
          <img
            src={item.image}
            alt="banner image"
            className="banner-image-back"
          />
        </div>
      </section>
      <IoIosArrowBack onClick={prev} className="arrow arrow-left" />
      <IoIosArrowForward onClick={next} className=" arrow arrow-right" />
    </>
  );
}

export default Banner;
