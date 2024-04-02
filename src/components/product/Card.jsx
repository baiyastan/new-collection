import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

function Card({ items }) {
  const [activeId, setActiveId] = useState(null);
  const [popupOpen, setPopupOpen] = useState({});

  const openPopup = (id) => {
    setActiveId(id === activeId ? null : id);
    setPopupOpen((prevState) => ({ ...prevState, [id]: true }));
  };

  const closePopup = () => {
    setPopupOpen({});
  };

  return (
    <div className="box">
      {items.slice(0, 5).map((el) => (
        <div
          className="card-item"
          key={el.id}
          style={{ zIndex: activeId === el.id ? 1 : "auto" }}
        >
          <div className="image-container">
            <img src={el.avatar} alt="card image" />
          </div>
          <div className="hover-background">
            <p onClick={() => openPopup(el.id)}>+</p>
          </div>
          {popupOpen[el.id] && activeId === el.id && (
            <div className="popup-container">
              <div className="popup">
                <CarouselItem
                  image={items.slice(0, 5).map((item) => item.avatar)}
                  activeIndex={items.findIndex((item) => item.id === activeId)}
                  setPopupOpen={setPopupOpen}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
