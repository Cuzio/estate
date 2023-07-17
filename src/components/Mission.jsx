import React from "react";
import hand from "../images/hand.png";
import meeting from "../images/meeting.png";

const Mission = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="my-5">Why choose us</h2>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img src={hand} alt="" className="w-50 h-50" />
          <img src={meeting} alt="" className="w-50 h-50" />
        </div>
        <div className="col-sm-6">
          <h2>Our Mission</h2>
          <p>
            To provide our customers with an extraordinary experience. This
            experience is to do with a professional, creative and innovative
            approach, not with classical methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
