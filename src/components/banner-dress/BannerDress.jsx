import React from "react";
import dressImage from "../../assets/image/material.jpg";

import "./BannerDress.css";

function BannerDress() {
  return (
    <div className="banner-dress">
      <div className="container">
        <div className="dress-image">
          <img src={dressImage} alt="dress image" />
        </div>
        <div className="dress-text">
          <h2>Мы отшиваем под ваш бренд и по вашим моделям</h2>
          <p>
            Для получения более детальной информации свяжитесь с нашими
            менеджерами.
          </p>
          <button>связаться</button>
        </div>
      </div>
    </div>
  );
}

export default BannerDress;
