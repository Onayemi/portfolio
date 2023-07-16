import React from "react";
// import { Link } from "react-router-dom";
import cv from "../assets/images/SamuelCV.pdf";

const header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Onayemi <span className="text-warning">Samuel</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                My Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="modal" href="#about_portfolio">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={cv} target="_blank" download>
                Download CV
              </a>
              {/* <Link className="nav-link" to={cv} target="_blank" download>
                Download CV
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default header;
