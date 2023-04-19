import React,{ useRef} from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'
const Join = () => {
    const from = useRef()
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">

        <form ref={form} className="email-container">
            <input type="email" name="user_email" placeholder="Enter your Email address" />
            <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
