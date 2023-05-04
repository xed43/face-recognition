import React from "react";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo ma4 mt0">
      <div className="inner-logo">
        <img className="brain" src={brain} alt="brain logo" />
      </div>
    </div>
  );
};

export default Logo;
