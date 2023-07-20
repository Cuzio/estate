import React from "react";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import "../css/contact.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="container my-5">
      <section className="align-items-center">
        <div className="row">
          <div className="get col-sm-6">
            <div className="place text-white">
              <h2 className="fs-1 fw-bold touch">Get in Touch</h2>
              <p className="fs-6">
                Reach out to us , we can make something together
              </p>
              <div className="pt-5">
                <p>Address</p>
                <p>
                  Fulya Mahallesi Yesilcimen sokak polat tower independent
                  section, 12/430 34/394 sisli/istanbul
                </p>
                <p>Email</p>
                <p className="pt-0">hi@mediaestate.com</p>
                <p>Follow us: </p>
                <div>
                  <Link to="https://instagram.com">
                    <img src={instagram} alt="" className="mx-2" />
                  </Link>
                  <Link to="https://linkedin.com">
                    <img src={linkedin} alt="" className="mx-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="place">
              <h2 className="contact">Contact us</h2>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter full name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Details
                </label>
                <textarea
                  className="form-control"
                  id="Enter message details"
                  rows="3"
                ></textarea>
              </div>
              <a class="btn btn-primary" href="#" role="button">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
