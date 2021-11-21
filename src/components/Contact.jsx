import React from "react";
import "./Contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <h1>Contact</h1>
          <div className="row contact-all">
            <div className="col-lg-5 offest-1 image">
              <img src="./images/web-development.png" alt="webdev" />
            </div>
            <div className="col-lg-5 offest-1 contact-content">
              <h3>Follow me</h3>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=100010316479068"
                  className="social"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://twitter.com/KanchanSamajS"
                  className="social"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://github.com/kanchan7c"
                  className="social"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/kanchan-chaudhary-a38568bb/"
                  className="social"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <a
                href="mailto:kanchan.chaudhary77@gmail.com"
                className="btn"
                onClick={() =>
                  alert("Hi! Thank you for showing your interest.")
                }
                target="_blank"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
