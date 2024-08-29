import React from "react";
import "./Footer.css";
import "../../src/App.css";
// import logo from "../images/logo.png";
// import facebook from "../images/facebook.png";
// import twitter from "../images/twitter.png";
// import instagram from "../images/instagram.png";
// import linkedin from "../images/linkedin.png";
// import youtube from "../images/youtube.png";
// import pinterest from "../images/pinterest.png";

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side  */}
        <div className="flexColStart f-left">
          <img src="./logo_main.png" alt="" width={120} />

          <span className="secondaryText">
            Homezy is a platform that connects homeowners 
            <br />
            and tenants with professional service providers.
          </span>
        </div>

        {/* Right Side  */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 Manipal, Udupi, Karnataka</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Service</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
