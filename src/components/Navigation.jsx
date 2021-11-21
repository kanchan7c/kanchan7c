import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/Home">
          iPort<span>folio</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
