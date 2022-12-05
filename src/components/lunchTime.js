import React from "react";
import "./launch.css";

const lunchTime = () => {
  function setFoodTime() {
    const date = new Date().getHours();
    let str = "";
    if (date >= 12 && date <= 18) {
      str = "Lunch time";
    } else if (date < 12) {
      str = "BreakFast time";
    } else {
      str = "dinner time";
    }
    return str;
  }
  return (
    <div className="main">
      <div className="body">
        <h1>{setFoodTime()}</h1>
      </div>
    </div>
  );
};

export default lunchTime;
