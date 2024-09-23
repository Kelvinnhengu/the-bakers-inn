import React from 'react'
import kidscorner1 from '../../assets/images/kidscorner1.png'
import kidscorner2 from "../../assets/images/kidscorner2.png";
import kidscorner3 from "../../assets/images/kidscorner3.png";

const KidsHero = () => {
  return (
    <div className='kids-hero'>
      <div className="hero-inner">
        <img src={kidscorner1} alt="" />
        <img src={kidscorner2} alt="" />
        <img src={kidscorner3} alt="" />
      </div>
    </div>
  )
}

export default KidsHero
