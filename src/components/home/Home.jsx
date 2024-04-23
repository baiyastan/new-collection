import React from "react";

import Banner from "../banner/Banner";
import Product from "../product/Product";
import Partner from "../partner";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Partner />
      <Product />
    </div>
  );
}

export default Home;
