import React from "react";
import arrow from "../images/arrow-narrow-right.png";
import sittingRoom from "../images/sitting-room.png";
import teacher from "../images/teaching.png";
import meeting from "../images/meeting.png";
import sitOut from "../images/sit-out.png";
import "../css/home.css";

const Hero = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-between hero ">
          <div className="col-md-6 my-md-5">
            <h1>
              Your Social media real estate agency that gets your dream house
            </h1>
            <p>
              We offer you the best services with our expert team. With the
              personal consultants we will assign to you, you will no longer
              look back.
            </p>
            <button className="btn btn-primary">
              Let’s connect <img src={arrow} alt="arrow" />
            </button>
          </div>
          <div className="col-md-5 mx-auto">
            <div className="d-flex justify-content-evenly">
              <div>
                <img src={sittingRoom} alt="sittingRoom" className="m-2 img1" />
                <img src={teacher} alt="sittingRoom" className="m-2 img2" />
              </div>
              <div>
                <img src={meeting} alt="sittingRoom" className="m-2 img2" />
                <img src={sitOut} alt="sittingRoom" className="m-2 img1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
