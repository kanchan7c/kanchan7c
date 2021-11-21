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
              <h1 className="hero__text">Kanchan Chaudhary</h1>
            </Fade>
            <Fade right cascade>
              <h2>
                I'm a <span className="fs-1"> Frontend Developer</span>
              </h2>
            </Fade>
            <a href="./About" className="btn fs-5 ">
              More About Me
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="hero__container">
    //     <h3>Hi I'm</h3>
    //     <Fade top>
    //       <h1 className="hero__text">Kanchan Chaudhary</h1>
    //     </Fade>
    //     <Fade right>
    //       <h2>
    //         I'm a <span> Frontend Developer</span>
    //       </h2>
    //     </Fade>
    //     <a href="./About">More About Me</a>
    //   </div>
    // </div>
  );
};

export default Hero;
