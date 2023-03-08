import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <div className="header">
      <div className="navbar">
        <nav>
          <Link to="/">
            <h1 className="logo">Happy Stay</h1>
          </Link>
          <div className="main-nav">
            <Link to="/about">Jak to działa</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact" className="contact-link">
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
      <button className="btn-mobile-nav">
        <FontAwesomeIcon
          icon="fa-sharp fa-regular fa-bars"
          className="icon-mobile-nav"
        />
      </button>
    </div>
  );
}
