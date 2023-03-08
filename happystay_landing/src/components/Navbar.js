import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  function hideNav() {
    setShowNav(false);
  }

  return (
    <div className="header">
      <div className="navbar">
        <nav onMouseLeave={hideNav}>
          <Link to="/">
            <h1 className="logo">Happy Stay</h1>
          </Link>
          <button className="btn-mobile-nav" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} className="icon-mobile-nav" />
          </button>
          <div className={showNav ? "main-nav show" : "main-nav"}>
            <Link to="/about">Jak to działa</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact" className="contact-link">
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
