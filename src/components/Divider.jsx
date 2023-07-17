import React from "react";

const Divider = () => {
  return (
    <div>
      <section
        style={{
          backgroundColor: "#002D3A",
          color: "white",
          marginBottom: "2rem",
        }}
      >
        <div className="d-flex justify-content-around text-center align-contents-center my-4 py-3 ">
          <div>
            <h3>25+</h3>
            <p className="fs-6 fw-light">Happy Customers</p>
          </div>

          <div>
            <h3>10+</h3>
            <p className="fs-6 fw-light">Technical Support</p>
          </div>

          <div>
            <h3>27+</h3>
            <p className="fs-6 fw-light">Audience Analysis</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Divider;
