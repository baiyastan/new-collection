import React from "react";

function SchemaCard({ el }) {
  return (
    <div className="schema-container">
      <div className="schema-card">
        <div className="schema-card-image">
          <img src={el.image} alt="schema image" />
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
