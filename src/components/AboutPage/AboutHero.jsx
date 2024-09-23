import React from "react";
import abouthero from "../../assets/images/abouthero.png";

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="hero-inner">
        <img src={abouthero} alt="" />
        <h1>About Us</h1>
      </div>
    </div>
  );
};

export default AboutHero;
