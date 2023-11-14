import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Home } from "./home.js";
import "./index.css";
import { Timeline } from "./timeline.js";
import { Contact } from "./contact.js";
import { FAQS } from "./faqs.js";
import { Events } from "./event.js";
import { About } from "./about.js";

function App() {
  const [page, setpage] = useState(<Home></Home>);
  const home = () => {
    setpage(<Home></Home>);
  };
  const timeline = () => {
    setpage(<Timeline></Timeline>);
  };
  const contact = () => {
    setpage(<Contact></Contact>);
  };
  const about = () => {
    setpage(<About></About>);
  };
  const faqs = () => {
    setpage(<FAQS></FAQS>);
  };
  const events = () => {
    setpage(<Events></Events>);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{
              fontSize: 45,
              fontFamily: "Inter",
              fontWeight: "700",
              background: "linear-gradient(#B61AAE,purple)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Vortex 360
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    home();
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    timeline();
                  }}
                >
                  Timeline
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    contact();
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    about();
                  }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    faqs();
                  }}
                >
                  FAQS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    events();
                  }}
                >
                  Event Details
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: "white" }}
                    >
                      Prizes
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: "white" }}
                    >
                      Judges
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: "white" }}
                    >
                      Sponsers
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {page}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
