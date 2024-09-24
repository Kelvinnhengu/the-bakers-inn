import React from 'react'
import kids1 from '../../assets/images/kids1.png'
import kids2 from '../../assets/images/kids2.png'
import kids3 from '../../assets/images/kids3.png'
import mario from '../../assets/images/Mario.png'

const KidsCorner = () => {
  return (
    <div className="kids-corner">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="pics">
            <img className="img-fluid"  src={mario} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic
              doloremque, ullam libero doloribus quis odit incidunt neque?
              Perferendis, neque nostrum!
            </p>

            <button>PLAY GAMES</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidsCorner
