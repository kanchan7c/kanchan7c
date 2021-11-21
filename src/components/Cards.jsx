import React from "react";
import "./Cards.css";
import Fade from "react-reveal/Fade";

const Cards = ({ src, alt, title, description, created, github, online }) => {
  return (
    <div className="cards mb-5 p-4">
      <Fade left cascade>
        <div className="card rounded">
          <img src={src} className="card-img-top img-fluid" alt={alt} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted d-block">Created - {created}</small>
              {online ? (
                <a href={online} class="btn d-lg-inline-block" target="_blank">
                  View Online
                </a>
              ) : (
                ""
              )}
              <a href={github} class="btn d-lg-inline-block" target="_blank">
                View Code
              </a>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Cards;
