import React from "react";
import SchemaCard from "./SchemaCard";
import schemaArray from "./schema";

import "./Schema.css";

function Schema() {
  return (
    <div className="schema-component">
      <div className="container">
        <h2>Пошаговая инструкция для оформления заказа на производство</h2>
        <div className="schema-box">
          {schemaArray.map((el) => (
            <SchemaCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schema;
