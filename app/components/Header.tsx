"use client";
import React, { useState } from "react";
import "./NavigationHeader.css";

export default function NavigationHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navigation-header">
      {/* Left section (logo + nav links) */}
      <nav className="left-navigation">
        <div className="left-nav-container">
          <img
            src="./assets/zamp-logo.svg"
            alt="zamp-logo"
            width="101"
            height="22"
            className="logo"
          />
          <a className="nav-link">Product</a>
          <a className="nav-link company-link">Company</a>
          <a className="nav-link investors-link">Investors</a>
        </div>
      </nav>

      {/* Right section (nav + button) */}
      <div className="right-section">
        <div className="right-nav-container">
          <nav className="right-navigation">
            <a className="nav-link">Security</a>
            <a className="nav-link">Blog</a>
            <a className="nav-link">Login</a>
          </nav>
          <button
            className="cta-button"
            onClick={() => {
              console.log("Let's Talk clicked");
            }}
          >
            Let's Talk
          </button>
        </div>

        {/* Hamburger icon (only shown on mobile) */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Backdrop (covers entire screen when menu open) */}
      {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}

      {/* Mobile dropdown menu */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a className="nav-link" onClick={closeMenu}>
          Product
        </a>
        <a className="nav-link" onClick={closeMenu}>
          Company
        </a>
        <a className="nav-link" onClick={closeMenu}>
          Investors
        </a>
        <a className="nav-link" onClick={closeMenu}>
          Security
        </a>
        <a className="nav-link" onClick={closeMenu}>
          Blog
        </a>
        <a className="nav-link" onClick={closeMenu}>
          Login
        </a>
        <button
          className="cta-button"
          onClick={() => {
            console.log("Let's Talk clicked");
            closeMenu();
          }}
        >
          Let's Talk
        </button>
      </nav>
    </header>
  );
}
