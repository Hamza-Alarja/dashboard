import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import "./Profile.scss";
import AnimatedPages from "../AnimatedPages";

const Profile = () => {
  return (
    <div className="status d-flex">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <AnimatedPages>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className="panel panel-default my-4">
                  <div className="panel-body">
                    <div className="profile__avatar">
                      <img src="https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="profile__header my-3">
                      <h5>Rachel Deeb</h5>
                      <p className="text-muted m-0">
                        control panel is a crucial component of any system as it
                        provides a centralized interface for managing and
                        controlling various aspects of the system
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default my-5">
                  <div className="panel-heading">
                    <strong className="panel-title ">User info</strong>
                  </div>
                  <div className="panel-body">
                    <table className="table profile__table">
                      <tbody>
                        <tr>
                          <th>
                            <h6>Location</h6>
                          </th>
                          <td className="text-muted">6th of October City</td>
                        </tr>
                        <tr>
                          <th>
                            <h6>Company name</h6>
                          </th>
                          <td className="text-muted">Simpleqode.com</td>
                        </tr>
                        <tr>
                          <th>
                            <h6>Position</h6>
                          </th>
                          <td className="text-muted">Front-end developer</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading my-1">
                    <strong className="panel-title ">Community</strong>
                  </div>
                  <div className="panel-body">
                    <table className="table profile__table">
                      <tbody>
                        <tr>
                          <th>
                            <h6>Comments</h6>
                          </th>
                          <td className="text-muted">58584</td>
                        </tr>
                        <tr>
                          <th>
                            <h6>Member since</h6>
                          </th>
                          <td className="text-muted">Jan 01, 2016</td>
                        </tr>
                        <tr>
                          <th>
                            <h6>Last login</h6>
                          </th>
                          <td className="text-muted">1 day ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <hr className="profile__contact-hr" />

                <div className="profile__contact-info">
                  <div className="profile__contact-info-item">
                    <div className="profile__contact-info-icon">
                      <i className="fa fa-phone text-warning"></i>
                    </div>
                    <div className="profile__contact-info-body">
                      <h5 className="text-dark fs-6">Work number</h5>
                      (000)123-45-67
                    </div>
                  </div>
                  <div className="profile__contact-info-item">
                    <div className="profile__contact-info-icon">
                      <i className="fa fa-phone text-warning"></i>
                    </div>
                    <div className="profile__contact-info-body">
                      <h5 className="text-dark fs-6">Mobile number</h5>
                      (000)123-45-67
                    </div>
                  </div>
                  <div className="profile__contact-info-item">
                    <div className="profile__contact-info-icon">
                      <i className="fa fa-envelope-square text-warning"></i>
                    </div>
                    <div className="profile__contact-info-body">
                      <h5 className="text-dark fs-6">E-mail address</h5>
                      <a href="mailto:admin@domain.com">admin@domain.com</a>
                    </div>
                  </div>
                  <div className="profile__contact-info-item">
                    <div className="profile__contact-info-icon">
                      <i className="fa fa-map-marker text-warning"></i>
                    </div>
                    <div className="profile__contact-info-body">
                      <h5 className="text-dark fs-6">Work address</h5>
                      6th of October City
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedPages>
      </div>
    </div>
  );
};

export default Profile;
