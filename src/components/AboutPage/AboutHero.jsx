import React from "react";
import abouthero from "../../assets/images/abouthero.png";

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="hero-inner">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="img-fluid">
              <img src={abouthero} alt="" />
            </div>
          </div>
          <h1>About Us</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
