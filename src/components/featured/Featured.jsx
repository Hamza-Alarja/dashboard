import React from "react";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "./custom.scss";
import "react-circular-progressbar/dist/styles.css";
import { Container } from "react-grid-system";

const Featured = () => {
  const percentage = 70;
  return (
    <div className="featured">
      <div className="top   text-muted ">
        <h6 className="title fw-bolder ">Total Revenue</h6>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={4}
          />
        </div>
        <p className="title fw-bold text-muted pt-3">Total sales made today</p>
        <p className="amount p-0 m-0 fs-3">$420</p>
        <p className="decs text-muted m-3">
          completed agreement between a buyer and a seller to exchange goods
        </p>

        <div className="summary w-100">
          <Container
            fluid
            className=" d-flex justify-content-between align-center target "
          >
            <div className="item ps-2  me-2">
              <div className="itemTitle text-muted  pt-1">The Target</div>
              <div className="itemResult negative ">
                <i className="fa-solid fa-chevron-down  pe-1 "></i>
                $10.4k
              </div>
            </div>
            <div className="item ps-2 me-2">
              <div className="itemTitle text-muted  pt-1">Last Week</div>
              <div className="itemResult positive ">
                <i className="fa-solid fa-angle-up  pe-1 "></i>
                $12.4k
              </div>
            </div>
            <div className="item ps-2  me-2">
              <div className="itemTitle text-muted  pt-1">Last Month</div>
              <div className="itemResult positive ">
                <i className="fa-solid fa-angle-up  pe-1 "></i>
                $12.4k
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Featured;
