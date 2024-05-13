import axios from "axios"; // Перемещаем оператор импорта вверх
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./content.css";
import Tabs from "../tabs";

const API = "https://api.escuelajs.co/api/v1/products/";

function ProductId() {
  const { id } = useParams();
  const [getProduct, setGetProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(API + id);
        if (res.status === 200) {
          setGetProduct(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="product-header"></div>
      <div className="product-id-content">
        <div className="container">
          <div className="get-container">
            <div className="image-content">
              <img src={getProduct.images} alt="images" />
            </div>
            <div className="get-product-content">
              <h2>{getProduct.title}</h2>
              <div className="content-block">
                <div className="block-description">
                  <p>
                    <strong>Артикул:</strong>Шуба 233-23
                  </p>
                  <p>
                    <strong>Застежка:</strong>На замке (молния)
                  </p>
                  <p>
                    <strong>Фасон:</strong>Оверсайз
                  </p>
                  <p>
                    <strong>Воротник:</strong>Стойка
                  </p>
                  <p>
                    <strong>Рукав:</strong>Втачной, одношовный, спущенный, на
                    манжете
                  </p>
                  <p>
                    <strong>Карман:</strong>На боковых швах, карман накладной с
                    застежкой
                  </p>
                  <p>
                    <strong>Подклад:</strong>Полиэстер
                  </p>
                  <p>
                    <strong>Длина изделия:</strong>73 см.
                  </p>
                </div>
                <div className="block-size">
                  <h2>Размер:</h2>
                  <div className="box-size">
                    <div className="card-size">42</div>
                    <div className="card-size">44</div>
                    <div className="card-size">46</div>
                    <div className="card-size">48</div>
                  </div>
                  <p>Минимальное количество изделия на заказ - 1 шт.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tabs-container">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductId;
