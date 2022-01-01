import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  let eduvibeLogo = {
    color: "#46F481",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: "24px",
    fontStyle: "normal",
    letterSpacing: "0.04em",
  };
  let ul = {
    fontFamily: "inherit",
    fontWeight: 400,
    fontSize: "18px",
    fontStyle: "normal",
    
    letterSpacing: "0.04em",
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#" style={eduvibeLogo}>
            Eduvibe
          </Link>
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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark" style={ul}>
              <li className="nav-item main-bar">
                <Link
                  className="nav-link active text-secondary"
                  aria-current="page"
                  to="#"
                >
                  Organise
                </Link>
              </li>
              <li className="nav-item main-bar">
                <Link
                  className="nav-link active text-secondary"
                  aria-current="page"
                  to="/plan"
                >
                  Plan
                </Link>
              </li>
              <li className="nav-item main-bar">
               < Link
                  className="nav-link active text-secondary"
                  aria-current="page"
                  to="/focus"
                >
                  Focus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
