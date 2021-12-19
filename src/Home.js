import React from "react";
import { Link } from "react-router-dom";
import img1 from "./home-img1.png";
import img2 from "./home-img2.png";
import img3 from "./home-img3.png";
import "./home.css";
export function Home() {
  let navStyle = {
    width: "1366px",
    height: "81px",
    background: "white",
    boxShadow: "0px 1px 50px rgba(0,0,0,0.07)",
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={navStyle}
      >
        <div className="container-fluid">
          <p className="main-logo">Eduvibe</p>
        </div>
      </nav>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <Link className="carousel-content " id="img1" to="/login">
              <div>Login</div>
            </Link>
            <p className="carousel-content-2" id="home-content1">
              Don't have an account? <Link to="#">Sign up for free</Link>
            </p>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <Link className="carousel-content " id="img2" to="/login">
              <div>Login</div>
            </Link>
            <p className="carousel-content-2">
              Don't have an account? <Link to="#">Sign up for free</Link>
            </p>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <Link className="carousel-content" id="img3" to="/login">
              <div>Login</div>
            </Link>
            <p className="carousel-content-2" id="home-content-3">
              Don't have an account? <Link to="#">Sign up for free</Link>
            </p>
            <div className="dots">...</div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home;
