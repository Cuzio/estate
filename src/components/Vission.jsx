import React from "react";
import teacher from "../images/teaching.png";
import meeting2 from "../images/meeting2.png";

const Vission = () => {
  return (
    <div className="container">
      <div className="row image2">
        <div className="col-sm-6 mission">
          <h2>Our Vision</h2>
          <p>
            To provide real estate companies the power to use social media. We
            care about our customers and maximize their value.
          </p>
        </div>
        <div className="col-sm-6">
          <img src={teacher} alt="" className="w-50 h-50 hand" />
          <img src={meeting2} alt="" className="w-50 h-50 meeting meeting2" />
        </div>
      </div>
    </div>
  );
};

export default Vission;
