import React from "react";
import "./Cards.css";
import Fade from "react-reveal/Fade";

const Cards = ({
  src,
  alt,
  title,
  description,
  created,
  github,
  online,
  tech,
  role,
}) => {
  return (
    <Fade left cascade>
      <div className="cards mb-5 p-3">
        <div className="card rounded">
          <img src={src} className="card-img-hrefp img-fluid" alt={alt} />
          <div className="card-body">
            <h5 key={title} className="card-title">
              {title}
            </h5>
            <p key={description} className="card-text">
              {description}
            </p>
            <p key={tech} className="card-text">
              Technologies Used - <span>{tech}</span>
            </p>
            <p key={role} className="card-text">
              Role - <span>{role}</span>
            </p>
            <p className="card-text">
              <small className="text-muted d-block">Created - {created}</small>
              {online ? (
                <a
                  key={online}
                  href={online}
                  class="btn d-lg-inline-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Online
                </a>
              ) : (
                ""
              )}
              <a
                key={github}
                href={github}
                class="btn d-lg-inline-block"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Cards;
