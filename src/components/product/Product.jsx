import React, { useEffect, useState } from "react";
import axios from "axios";

// import ProductName from "./ProductName";
import Card from "./Card";

import "./Product.css";

const API = "https://api.escuelajs.co/api/v1/products";

function Product() {
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
    <section className="product">
      <div className="container">
        <div className="product-title">Какие изделия шьём</div>
        <div className="product-text">
          Специализируемся на женской одежде 1-2-3 слоя. Шьём всё, кроме вязаных
          изделий и нежного белья
        </div>
        <div className="product-box">
          <div className="product-box-name">
            {/* <ProductName items={["Платья", "Юбки"]} /> */}
          </div>
          <div className="product-box-card">
            <Card items={product} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
