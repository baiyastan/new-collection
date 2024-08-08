import React from "react";

import "./style.css";

import brand from "../../data/brand";

const Brand = () => {
  return (
    <section className="brand">
      <div className="container">
        <h2>Бренды, для которых мы шьем</h2>
        <div className="brand-box">
          {brand.map((el) => (
            <a href={el.link} target="_blank" className="brand-card">
              <img src={el.image} alt="brand image" className="brand-img" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
