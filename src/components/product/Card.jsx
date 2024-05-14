import React from "react";
import { Link } from "react-router-dom";

function Card({ items }) {
  return (
    <div className="box">
      {items.slice(0, 10).map((el) => (
        <Link to={`/${el.id}`} className="card-item" key={el.id}>
          <div className="image-container">
            <img src={el.images} alt="card image" />
          </div>
          <div className="card-content">
            <h2>{el.name} Jonh</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
