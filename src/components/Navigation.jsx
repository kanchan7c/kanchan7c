import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" key="logo" to="/">
          iPort<span>folio</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
