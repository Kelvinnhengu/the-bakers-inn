import React from "react";
import booking from "../../assets/images/booking.png";


const Booking = () => {
  return (
    <div className="booking">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="text">
            <h1>Book A Factory Tour</h1>
            <p>
              Keen on seeing how Baker's Inn Products are made? Are you
              Interested in a field trip day for your school's class? Get
              intouch with us to book a tour of our factory that is closest to
              you. Fill in the booking form and we will get back to you.
            </p>

            <button>BOOK FACTORY TOUR</button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="pic">
            <img src={booking} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
