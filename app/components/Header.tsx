"use client";
import * as React from "react";
import "./NavigationHeader.css";

export default function NavigationHeader() {
  return (
    <header className="navigation-header">
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
      <div className="right-section">
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
    </header>
  );
}
