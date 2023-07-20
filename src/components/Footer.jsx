import React from "react";
import logo from "../images/katman 3.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#002D3A",
        padding: "10px",
        color: "white",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <div className="d-md-flex madya">
              <img src={logo} alt="" height={30} className="mx-1 logo" />
              <h3 className="mx-md-1 estate">Madya Estate</h3>
            </div>
          </div>

          <div className="col-sm-5 my-4 move ">
            <Link to="/" className="text-decoration-none mx-2 text-light list">
              Home
            </Link>
            <Link
              to="/about"
              className="text-decoration-none mx-2 text-light list"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none mx-2 text-light list"
            >
              Contact
            </Link>
          </div>

          <div className="col-sm-3">
            <div className="goto">
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
    </div>
  );
};

export default Footer;
