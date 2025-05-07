"use client";
import React, { useState } from "react";
import "./NavigationHeader.css";

export default function NavigationHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navigation-header">
      {/* Always-visible logo */}
      <div className="logo-container">
        <img
          src="./assets/zamp-logo.svg"
          alt="zamp-logo"
          width="101"
          height="22"
          className="logo"
        />
      </div>

      {/* Right side nav and button - hidden on mobile */}
      <div className="right-nav-container">
        <nav className="nav-links">
          <a className="nav-link">Product</a>
          <a className="nav-link">Company</a>
          <a className="nav-link">Investors</a>
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

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <>
          <div className="backdrop" onClick={closeMenu}></div>
          <nav className="mobile-menu open">
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
        </>
      )}
    </header>
  );
}
