import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
        <div></div>
        <span>The best Fitness club in the toun</span>
        </div>
      {/* Hero heading */}
<div className="hero-text">
<div>
<span className="stroke-text">Shape </span>
<span>Your</span>
</div>
<div>
  <spane>Ideal body</spane>
</div>
<div>
  <span>

‘The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.’
  </span>
</div>
</div>
<div className="figures">
<div>
  <span>+130</span>
  <span>expert coaches</span>
</div>
<div>
  <span>+965</span>
  <span>members joined</span> 
  </div>
<div>
  <span>+40</span>
  <span>fitness programs</span> 
  </div>
 
</div>
</div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
