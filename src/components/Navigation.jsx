import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" key="logo" href="#">
          iPort<span>folio</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
