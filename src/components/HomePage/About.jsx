import React from "react";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import about4 from "../../assets/images/about4.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-inner">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="about-one">
              <h1>About Baker's Inn</h1>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="about-two">
              <p>
                It all startedd back in the eighties when bakers inn was just a
                small confectionery company that employed 40 people and produced
                about 30,000 loaves a day. We now aim to provide a nourishing,
                convenient and accessible answer to hunger's call.
              </p>

              <Link to="/about-us">
                <button>READ MORE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pics">
        <img src={about1} alt="" />
        <img src={about2} alt="" />
        <img src={about3} alt="" />
        <img src={about4} alt="" />
      </div>
    </div>
  );
};

export default About;
