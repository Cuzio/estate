import React from "react";
import check from "../images/check-verified-01.png";
import phone1 from "../images/phone1.png";
import phone2 from "../images/phone2.png";
import desktop1 from "../images/desktop1.png";
import desktop2 from "../images/desktop2.png";
import bell from "../images/Notification bell 3d cartoon style icon on white background  1.png";
import arrow from "../images/arrow-narrow-right.png";

const Services = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="text-center my-5">
            <h1>Our Services</h1>
            <p>
              Our luxury real estate services are available, as your one-stop
              real estate provider.
            </p>
          </div>
          <div className="row my-5">
            <div className="col-sm-4">
              <div
                class="card"
                style={{ backgroundColor: "inherit", border: "none" }}
              >
                <img
                  src={check}
                  //   class="card-img-top"
                  alt="..."
                  height={50}
                  width={50}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">What We Do</h5>
                  <p class="card-text">
                    To ensure that you get high efficiency with effective
                    strategies and planning in line with your company goals .
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                class="card"
                style={{ backgroundColor: "inherit", border: "none" }}
              >
                <img
                  src={check}
                  //   class="card-img-top"
                  alt="..."
                  height={50}
                  width={50}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">Our Goals</h5>
                  <p class="card-text">
                    To ensure that you get high efficiency with effective
                    strategies and planning in line with your company goals .
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                class="card"
                style={{ backgroundColor: "inherit", border: "none" }}
              >
                <img
                  src={check}
                  //   class="card-img-top"
                  alt="..."
                  height={50}
                  width={50}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title">What awaits you</h5>
                  <p class="card-text">
                    To ensure that you get high efficiency with effective
                    strategies and planning in line with your company goals .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center my-5">
            <h3>
              Your social media tracking made easy with our leading team of
              expertise, you have nothing to worry about.
            </h3>
            <div className="my-4">
              <img src={desktop1} alt="" className="h-75 w-75" />
              <img src={phone1} alt="" className="h-75 w-50 mx-4" />
            </div>
            <div>
              <img src={phone2} alt="" className="h-75 w-50 mx-4" />
              <img src={desktop2} alt="" className="h-75 w-75" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
