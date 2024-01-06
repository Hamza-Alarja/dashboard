import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <Link to={"/Home"} className="homeBord">
            AdminBord
          </Link>
        </div>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={"/Home"} className="router">
            <i className="fa-solid fa-grip-vertical"></i> Dashbord
          </Link>

          <p className="title">LISTS</p>

          <Link to={"/users"} className="router">
            <i className="fa-solid fa-address-card"></i> Users
          </Link>

          <Link to={"/orders"} className="router">
            <i className="fa-brands fa-jedi-order"></i> Orders
          </Link>

          <p className="title">SERVICE</p>

          <Link className="router" to={"/status"}>
            <i className="fa-solid fa-lightbulb"></i> Status
          </Link>
          <Link className="router" to={"/calendar"}>
            <i className="fa-solid fa-calendar-days"></i> Calendar
          </Link>

          <p className="title">USER</p>
          <Link className="router" to={"/profile"}>
            <i className="fa-solid fa-user"></i> Profile
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
