import React from 'react'
import bread from '../../assets/images/zvingwa.png'

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="row">
        <div className="col-12 col-md-7">
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
        </div>

        <div className="col-12 col-md-5">
          <div className="img">
            <img className="img-fluid" src={bread} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications
