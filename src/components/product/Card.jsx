import React from "react";

function Card({ items }) {
  return (
    <div className="box">
      {items.slice(0,5).map((el) => (
        <div className="card-item" key={el.id}>
          <img src={el.avatar} alt="card image"/>
        </div>
      ))}
    </div>
  );
}

export default Card;
