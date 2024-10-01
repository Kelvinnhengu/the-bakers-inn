import React from "react";
import footer1 from "../assets/images/footer1.png";
import footer2 from "../assets/images/footer2.png";
import footer3 from "../assets/images/footer3.png";
import footer4 from "../assets/images/footer4.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="row">
          <div className="col-12 col-md-5">
            
            <hr className="hr1" />
          </div>
          <div className="col-12 col-md-2">
            <img className="img-fluid" src={footer4} alt="" />
          </div>
          <div className="col-12 col-md-5">
            <hr className="hr2" />
          </div>
        </div>
      </div>

      <div className="mid">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="first">
              <h3>Instagram Feed</h3>
              <div className="images">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <img className="img-fluid" src={footer1} alt="" />
                  </div>
                  <div className="col-12 col-md-4">
                    <img className="img-fluid" src={footer2} alt="" />
                  </div>
                  <div className="col-12 col-md-4">
                    <img className="img-fluid" src={footer3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="second">
              <h3>Our Location</h3>
              <p>1 Sheperton Road,</p>
              <p>Graniteside</p>
              <p>Harare</p>
              <p>Zimbabwe.</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="third">
              <h3>Get Intouch With Us</h3>
              <p>08080151</p>
              <p>08080152</p>
              <p>+263 242 751 481</p>
              <p>+263 242 710 334</p>
              <p>markerting@bakersinnzim.com</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            {" "}
            <div className="forth">
              <h3>Sitemap</h3>
              <p>Home</p>
              <p>About Us</p>
              <p>Products</p>
              <p>Recipes</p>
              <p>Kids Corner</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <hr />

        <div className="text">
          <div className="one">
            <p>Subsidiary of</p>
          </div>
          <div className="two">
            <p>
              Copyright 2022 Bakers Inn. All rights reserved. Site by{" "}
              <span>K3LV1N NH3NGU</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
