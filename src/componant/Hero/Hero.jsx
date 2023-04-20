import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
const Hero = () => {
  const transition={type: 'spring', duration:1}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
        <motion.div
        initial={{left:'238px'}}
        whileInView={{left:'8px'}}
        transition={{...transition,type:tween}}
        ></motion.div>
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
        <motion.div
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:"20rem"}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back"/>
        <motion.div
         initial={{right:"37rem"}}
         whileInView={{right:"28rem"}}
         transition={transition}
        className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
