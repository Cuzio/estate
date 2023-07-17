import React from "react";
import bell from "../images/Notification bell 3d cartoon style icon on white background  1.png";
import arrow from "../images/arrow-narrow-right.png";

const Bell = () => {
  return (
    <div className="container">
      <div className="text-center my-4 mx-4">
        <div className="row">
          <div className="col-sm-4">
            <img src={bell} alt="" height={200} />
          </div>
          <div className="col-sm-4">
            <h3>Be the first to get updated</h3>
            <p>Enter your email and get update on our daily news letters</p>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Email here..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn "
                type="button"
                id="button-addon2"
                style={{ background: "white" }}
              >
                <img
                  src={arrow}
                  alt=""
                  style={{ background: "#05A3A3", borderRadius: "50%" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bell;
