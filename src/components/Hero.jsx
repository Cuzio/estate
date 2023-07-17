import React from "react";
import arrow from "../images/arrow-narrow-right.png";
import sittingRoom from "../images/sitting-room.png";
import teacher from "../images/teaching.png";
import meeting from "../images/meeting.png";
import sitOut from "../images/sit-out.png";

const Hero = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-between ">
          <div className="col-md-7 my-5">
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
          <div className="col-md-5 my-4 mx-auto">
            <div className="d-flex justify-content-evenly">
              <div>
                <img
                  src={sittingRoom}
                  alt="sittingRoom"
                  // height={150}
                  // width={200}
                  className="w-75 h-25 my-4"
                />
                <img
                  src={teacher}
                  alt="sittingRoom"
                  // height={200}
                  // width={200}
                  className="w-75 h-50 my-4"
                />
              </div>
              <div>
                <img
                  src={meeting}
                  alt="sittingRoom"
                  // height={200}
                  // width={200}
                  className="w-75 h-50 my-4"
                />
                <img
                  src={sitOut}
                  alt="sittingRoom"
                  // height={150}
                  // width={200}
                  className="w-75 h-25 my-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
