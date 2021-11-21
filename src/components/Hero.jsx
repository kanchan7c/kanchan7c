import React from "react";
import "./Hero.css";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="greeting">Hi I'm</h3>
            <Fade top cascade>
              <h1 ClassName="hero__text">Kanchan</h1>
              <h1 ClassName="hero__text">Chaudhary</h1>
            </Fade>
            <Fade right cascade>
              <h2>
                I'm a{" "}
                <span className="fs-1">
                  {" "}
                  <span>&lt;</span> Frontend Developer <span> &gt;</span>
                </span>
              </h2>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
