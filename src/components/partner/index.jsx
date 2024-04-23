import React, { useState } from "react";

import PartnerCard from "./PartnerCard";
import partnerArray from "./partner";

import "./Partner.css";

function Partner() {
  return (
    <div className="partner">
      <div className="container">
        <h2>Почему вам выгодно партнерство с нашей компанией?</h2>
        <div className="partner-box">
          {partnerArray.map((el) => (
            <PartnerCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partner;
