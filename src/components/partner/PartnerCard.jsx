import React from "react";

function PartnerCard({ el }) {
  return (
    <div className="partner-card">
      <div className="partner-card-image">
      
        <img className="partner-card-svg" src={el.image} alt="image" />
      </div>
      <p>{el.text}</p>
    </div>
  );
}

export default PartnerCard;
