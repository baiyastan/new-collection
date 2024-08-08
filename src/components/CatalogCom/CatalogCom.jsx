import React, { useEffect, useState } from "react";
import axios from "axios";

import CatalogName from "./CatalogName";
import Card from "../product/Card";

import "./Catalog.css";

const API = "https://api.escuelajs.co/api/v1/products";

function CatalogCom() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(API);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="catalog-header"></div>
      <div className="catalog-container">
        <div className="container">
          <div className="catalog-text">Наша коллекция</div>
          <div className="collection">
            {/* <div className="catalog-sidebar">
              <div className="catalog-text-category">Категории</div>
              <CatalogName items={["Платья", "Юбки"]} />
            </div> */}
            <div className="catalog-content">
              <Card items={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatalogCom;
