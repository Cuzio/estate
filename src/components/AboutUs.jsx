import React from "react";
import arrow from "../images/arrow-narrow-right.png";
import people from "../images/people.png";
import "../css/mission.css";

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-6 about">
          <h1>About Us</h1>
          <p>
            Medya is a social Media Marketing Agency focused on the real estate
            niche. By working with real estate agents and offices, we get them
            to large audiences and they become stronger on social media. We use
            all the new exciting features of social media and stay up to date.
            We make your business stand out from the crowd by been creative and
            innovative. In line with your goals, we develop the most suitable
            strategy for you and work with the excitement of technology.
          </p>
          <button className="btn btn-primary">
            Let’s connect <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="col-sm-6">
          <img src={people} alt="" className="w-100 h-75" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
