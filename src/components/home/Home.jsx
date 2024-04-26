import React from "react";

import Banner from "../banner/Banner";
import Product from "../product/Product";
import Partner from "../partner";

import "./Home.css";
import BannerCarousel from "../banner/BannerCarousel";

function Home() {
  return (
    <div className="home">
      {/* <Banner /> */}
      <BannerCarousel />
      <Partner />
      <Product />
    </div>
  );
}

export default Home;
