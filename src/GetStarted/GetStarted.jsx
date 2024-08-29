import React from "react";
import "./GetStarted.css";
import "../../src/App.css";

function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with HomeZy</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon!
          </span>
          <button className="button">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
