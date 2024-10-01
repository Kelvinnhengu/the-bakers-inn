import React from 'react'
import mission from '../../assets/images/ourmission.png'
import vision from "../../assets/images/ourvision.png";

const OurMission = () => {
  return (
    <div className="our-mission">
      <div className="container">
        <div className="row">
          <div className="col-1 col-md-6">
            <div className="first">
              <h2>Our Mission</h2>
              <div className="text">
                <img src={mission} alt="" />
                <p>
                  To sharpen our edge in the manufacture and marketing of
                  quality baked products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-1 col-md-6">
            <div className="first">
              <h2>Our Vision</h2>
              <div className="text">
                <img src={vision} alt="" />
                <p>
                  To provide a nourishing, convenient and accessible answer to
                  hunger's call
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission
