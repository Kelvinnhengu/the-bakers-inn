import React from "react";

import donations from "../../assets/images/donations.png";

const Donations = () => {
  return (
    <div className="donations">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="pic">
            <img className="img-fluid" src={donations} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="text">
            <h1>Request A Donation</h1>
            <p>
              If you are holding an event that you wish to have us donate to,
              we're more than glad to help. Fill in the donation request form
              for us to best understand how we can increase your event's impact
              in the local community.
            </p>

            <button>REQUEST DONATION</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
