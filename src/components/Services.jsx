import React from "react";
import check from "../images/check-verified-01.png";
import phone1 from "../images/phone1.png";
import phone2 from "../images/phone2.png";
import desktop1 from "../images/desktop1.png";
import desktop2 from "../images/desktop2.png";
import "../css/home.css";

const Services = () => {
  return (
    <div>
      <section className="service">
        <div className="container">
          <div className="text-center my-5">
            <h1>Our Services</h1>
            <p>
              Our luxury real estate services are available, as your one-stop
              real estate provider.
            </p>
          </div>
          <div className="row my-5">
            <div className="col-sm-4 cab">
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

            <div className="col-sm-4 cab">
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

            <div className="col-sm-4 cab">
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
            <div className="media d-md-flex">
              <img src={desktop1} alt="" className="desktop" />
              <img src={phone1} alt="" className="phone phone1" />
            </div>
            <div className="media2 d-md-flex">
              <img src={phone2} alt="" className="phone" />
              <img src={desktop2} alt="" className="desktop desktop2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
