import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad"></div>
        <div></div>
        <span>The best Fitness club in the toun</span>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
