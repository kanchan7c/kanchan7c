import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" key="logo" href="/Home" rel="noreferrer">
          iPort<span>folio</span>
        </a>
      </div>
      <div
        class="alert alert-dismissible fade show text-center mx-auto"
        role="alert"
      >
        <strong>What's new? </strong> I'm learning React Native to gain
        knowledge on building mobile apps.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </nav>
  );
};

export default Navigation;
