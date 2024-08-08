import React from "react";
import "./style.css";

const InfoUs = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info-box">
          <span>- 1 -</span>
          <h2>8 лет на рынке</h2>
          <p>
            Наша швейная фабрика основана в 2017 году в городе Бишкеке, 4
            производства в всему городу
          </p>
        </div>
        <div className="info-box">
          <span>- 2 -</span>
          <h2>+90 сотрудников</h2>
          <p>Дизайнеры, технологи, закройщики, швеи, утюжишники и т.д</p>
        </div>
        <div className="info-box">
          <span>- 3 -</span>
          <h2>+15 000 изделий</h2>
          <p>Наша швейная фабрика готова отшивать каждый в неделю</p>
        </div>
      </div>
    </section>
  );
};

export default InfoUs;
