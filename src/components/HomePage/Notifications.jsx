import React from 'react'
import bread from '../../assets/images/zvingwa.png'

const Notifications = () => {
  return (


    <div className="notifications">
      
      <div className="text">
        <h1>Get Notified About Promotions We Offer</h1>
        <div className="form">
          <form className="the-form" action="">
            <input
              className="email"
              type="email"
              required
              placeholder="Email "
            />
            <input className="btn" type="submit" />
          </form>
        </div>
      </div>
      
        <img src={bread} alt="" />
     
    </div>
  );
}

export default Notifications
