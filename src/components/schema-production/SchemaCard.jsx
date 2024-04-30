import React from "react";

function SchemaCard({ el }) {
  return (
    <div className="schema-container">
      <div className="schema-card">
        <div>
          <img src={el.image} alt="" />
        </div>
        <div className="schema-card-text">
          <h2>{el.text}</h2>
          <p>{el.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SchemaCard;
