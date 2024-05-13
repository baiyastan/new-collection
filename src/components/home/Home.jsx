import React from "react";

import Product from "../product/Product";
import Partner from "../partner";
import Schema from "../schema-production";
import Order from "../order";

import "./Home.css";
import BannerDress from "../banner-dress/BannerDress";

function Home() {
  return (
    <div className="home">
      <Partner />
      <Order />
      <Schema />
      <Product />
    </div>
  );
}

export default Home;
