import React from "react";

import Banner from "../banner/Banner";
import Product from "../product/Product";
import Partner from "../partner";
import Schema from "../schema-production";
import Order from "../order";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Partner />
      <Order />
      <Schema />
      <Product />
    </div>
  );
}

export default Home;
