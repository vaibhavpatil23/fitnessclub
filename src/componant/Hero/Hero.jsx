import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
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
{/* hero button */}
<div className="hero-buttons">
<button className="btn">Get Started</button>
<button className="btn">Learn More</button>
</div>
</div>
      <div className="right-h">

        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back"/>
        <div className="calories">
          <img src={Calories} alt="" />
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
