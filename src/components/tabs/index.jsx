import React, { useState } from "react";

import PopupCom from "../popup";
import dataTabs from "../../data/tabs";

import "./Tabs.css";

function Tabs() {
  const [currentTab, setCurrentTab] = useState("1");
  const [popup, setPopup] = useState(false);
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  const handlePopup = () => {
    setPopup(true);
  };

  return (
    <>
      <div className="tabs-btns">
        {dataTabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            className={currentTab === `${tab.id}` ? "active-tabs" : ""}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {dataTabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div className="tabs-content-text">
                <h2>{tab.title}</h2>
                <p>{tab.content}</p>
                <p>{tab.additional}</p>
                {tab.contact && (
                  <button onClick={handlePopup}>{tab.contact}</button>
                )}
                {popup && <PopupCom setPopup={setPopup} />}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Tabs;
