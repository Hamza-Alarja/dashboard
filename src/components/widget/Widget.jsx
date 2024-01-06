import React from "react";
import "./widget.scss";

const Widget = ({ tybe }) => {
  let data;

  const amount = 100;
  const percentage = 20;

  if (tybe === "user") {
    data = {
      title: "USERS",
      isMoney: false,
      Link: "See All Users",
      icon: (
        <i
          className="fa-regular fa-user icon"
          style={{
            color: "crimson",
            backgroundColor: "rgb(255, 100, 0,0.2)",
          }}
        ></i>
      ),
    };
  }
  if (tybe == "order") {
    data = {
      title: "ORDERS",
      isMoney: false,
      Link: "See All orders",
      icon: (
        <i
          className="fa-solid fa-cart-shopping icon"
          style={{
            color: "goldenred",
            backgroundColor: "rgba(218,165,32,0.2)",
          }}
        ></i>
      ),
    };
  }
  if (tybe == "earning") {
    data = {
      title: "EARNING",
      isMoney: true,
      Link: "net Earnings",
      icon: (
        <i
          className="fa-solid fa-circle-dollar-to-slot icon"
          style={{
            color: "green",
            backgroundColor: "rgba(0,128,0,0.2)",
          }}
        ></i>
      ),
    };
  }
  if (tybe == "balance") {
    data = {
      title: "BALANCE",
      isMoney: true,
      Link: "See Deatils",
      icon: (
        <i
          className="fa-solid fa-wallet icon"
          style={{
            color: "purple",
            backgroundColor: "rgba(128,0,128,0.2)",
          }}
        ></i>
      ),
    };
  }

  return (
    <div className="widget  ">
      <div className="left">
        <div className="title mb-2">{data.title}</div>
        <div className="counter mb-2">
          {data.isMoney && "$"}
          {amount}
        </div>
        <div className="link">{data.Link}</div>
      </div>
      <div className="right">
        <div className="percentage positive ">
          <i className="fa-solid fa-arrow-up pe-2 fs-6"></i>
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
