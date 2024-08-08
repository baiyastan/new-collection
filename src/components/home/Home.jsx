import React from "react";

import Banner from "../banner/Banner";
import Product from "../product/Product";
import Partner from "../partner";
import Schema from "../schema-production";
import Order from "../order";
import InfoUs from "../infoUs";

import "./Home.css";
import Brand from "../brand";

function Home() {
  return (
    <div className="home">
      <Banner />
      <InfoUs />
      <Partner />
      <Order />
      <Schema />
      <Product />
      <Brand />
    </div>
  );
}

export default Home;
