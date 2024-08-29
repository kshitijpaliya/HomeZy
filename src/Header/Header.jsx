import React from "react";
import "./Header.css";
import "../../src/App.css";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth h-container">
        <img src="/logo4.png" alt="Logo" width={150}/>

        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button>
            <a href="">Contact</a>
          </button>
        </div>

        <div className="menu-icon">
          <BiMenuAltRight size={30} />
        </div>
      </div>    
    </section>
  );
}

export default Header;
