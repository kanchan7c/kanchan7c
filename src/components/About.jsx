import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="container about">
      <div className="row">
        <div className="col-10 offset-1">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="row">
        <Fade left cascade>
          <div className="col-lg-6">
            <div className="img-div">
              <img src="./images/meeting-deadlines.png" alt="deadlines" />
            </div>
          </div>
        </Fade>
        <Fade right cascade>
          <div className="col-lg-6 about__content">
            <p>
              I'm a <strong>Front End Developer</strong> based in Gurgaon,
              India.
            </p>
            <p>
              I describe myself as a passionate developer who loves coding.
              Aside from my job, I like to create and contribute to open source.
              That helps me to learn a ton of new stuff, grow as a developer and
              support other open source projects.
            </p>
            <p>
              In my free time you can find me learning new things, cooking,
              trying out new CSS styles or spending time with my family in
              Gurgaon.
            </p>
            <p>
              I am a fresher to the world of coding however I have worked on
              several projects on my own to gain the coding knowledge and
              experience.
            </p>
            <div className="about__buttons">
              <a
                href="https://drive.google.com/file/d/1tpuMExOJWwzq2W8QfeR4iptkIxUFmN7m/view?usp=sharing"
                className="btn"
                download
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
