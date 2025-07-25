import React from "react";
import "./Abconstyle.css";
import ab1 from "../Assets/img/ab1.jpg";
import ab3 from "../Assets/img/ab3.png";

const Abcon = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a react Front-End Developer. I create responsive secure websites
          for my clients.
        </p>
      </div>
      <div className="right">
        <div className="imgCont">
          <div className="imgStack top">
            <img src={ab1} alt="img" className="img" />
          </div>
          <div className="imgStack bottom">
          <img src={ab3} alt="img" className="img img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abcon;
