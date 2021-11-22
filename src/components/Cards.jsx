import React from "react";
import "./Cards.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Cards = ({ src, alt, title, description, created, github, online }) => {
  return (
    <div className="cards mb-5 p-3">
      <Fade left cascade>
        <div className="card rounded">
          <img src={src} className="card-img-top img-fluid" alt={alt} />
          <div className="card-body">
            <h5 key={title} className="card-title">
              {title}
            </h5>
            <p key={description} className="card-text">
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted d-block">Created - {created}</small>
              {online ? (
                <Link
                  key={online}
                  to={online}
                  class="btn d-lg-inline-block"
                  target="_blank"
                >
                  View Online
                </Link>
              ) : (
                ""
              )}
              <Link
                key={github}
                to={github}
                class="btn d-lg-inline-block"
                target="_blank"
              >
                View Code
              </Link>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Cards;
