import React from "react";
import map from "../../assets/image/map.png";
import "./Delivery.css";

function Delivery() {
  return (
    <div className="delivery-container">
      <div className="container">
        <div className="delivery-content">
          <h2>Доставка</h2>
          <p>
            Доставка готовых изделий осуществляется на условиях. Мы помогаем
            клиентам заключить договор с транспортной компанией, чтобы им было
            проще ориентироваться на рынке транспортно -экспедиционных услуг
            Кыргызской Республики
          </p>
          <div className="delivery-content-div">
            Цена за доставку 1 кг товара — от 50 до 70 руб, срок доставки от 7
            дней.
          </div>
          <img src={map} alt="map image" />
        </div>
        <div className="delivery-content top-delivery">
          <h2>Оплата</h2>
          <p>
            Мы работаем по 100% предоплате. 50% оплаты необходимо произвести
            сразу после согласования моделей, цен и сроков, остальные 50% - по
            готовности товара, до отгрузки в транспортную компанию.
          </p>
          <p>
            Оплату вы можете произвести любым удобным для вас способом: на
            расчетные счета, карту или наличными.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
