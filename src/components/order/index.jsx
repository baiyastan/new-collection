import React from "react";
import './Order.css'

function Order() {
  return (
    <div className="order-container">
      <div className="container">
        <h2>Закажите образец</h2>
        <form className="form">
          <input type="text" placeholder="Имя" className="name"/>
          <input type="text" placeholder="Номер телефона" className="phone-number" />
          <button className="submit">Заказать</button>
        </form>
      </div>
    </div>
  );
}

export default Order;
