import React from 'react'
import kidscorner1 from '../../assets/images/kidscorner1.png'
import kidscorner2 from "../../assets/images/kidscorner2.png";
import kidscorner3 from "../../assets/images/kidscorner3.png";

const KidsHero = () => {
  return (
    <div className="kids-hero">
      <div className="hero-inner">
        
        <div className="row">
          <div className="col-12 col-md-4">
            <img className="img-fluid one" src={kidscorner1} alt="" />
          </div>
          <div className="col-12 col-md-4">
            <img className="img-fluid two" src={kidscorner2} alt="" />
          </div>
          <div className="col-12 col-md-4">
            <img className="img-fluid three" src={kidscorner3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidsHero
