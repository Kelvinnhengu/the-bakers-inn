import React from "react";
import loaf1 from "../../assets/images/loaf1.png";
import loaf2 from "../../assets/images/loaf2.png";
import loaf3 from "../../assets/images/loaf3.png";
import loaf4 from "../../assets/images/loaf4.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="hero-inner1">
            <h1>
              Bringing you the <span>best value</span> at the{" "}
              <span>best prices.</span>
            </h1>
            <p>
              The freshest sandwitches you can make are with Baker's inn soft
              white loaf.
            </p>

            <Link to="/about">
              <button>READ MORE</button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="hero-inner2">
            <img src={loaf1} alt="" />
            <img src={loaf2} alt="" />
            <img src={loaf3} alt="" />
            <img src={loaf4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
