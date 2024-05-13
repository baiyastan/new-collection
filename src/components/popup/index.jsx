import React from "react";
import { IoMdClose } from "react-icons/io";

import "./Popup.css";

function PopupCom({ setPopup }) {
  return (
    <form className="popup-container">
      <div className="popup-content">
        <h2>Связаться</h2>
        <p>
          Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
        </p>
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Номер телефона" />
        <div className="check">
          <input type="checkbox" />
          <p>
            Даю согласие на обработку персональных данных в соответствии с
            Политикой конфиденциальности.
          </p>
        </div>
      </div>
      <button>Оформить заказ</button>
      <div className="popup-position">
        <IoMdClose onClick={() => setPopup(false)} style={{ fontSize: "20px" }} />
      </div>
    </form>
  );
}

export default PopupCom;
