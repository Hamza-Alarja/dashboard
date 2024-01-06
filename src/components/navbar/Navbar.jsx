import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function navbar() {
  return (
    <>
      <div className="col-12 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid bg-white">
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa-solid fa-list"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="wrap">
                <div className="search">
                  <input
                    type="text"
                    className="searchTerm ps-2"
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="links ms-auto pe-3 ">
                <Link to={"/profile"}>
                  <img
                    src="https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="user"
                    className="avatar ms-4 "
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <hr />
      </div>
    </>
  );
}
