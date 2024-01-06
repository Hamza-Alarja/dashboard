import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AnimatedPages from "../AnimatedPages";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import "./Orders.scss";

import necklace from "../../products-imgs/less.webp";
import backShirt from "../../products-imgs/back-shirt.jpg";
import cards from "../../products-imgs/glass.png";
import cap from "../../products-imgs/cap.jpg";
import mug from "../../products-imgs/mug.jpg";
import sweatshirt from "../../products-imgs/sweatshirt.jpg";

const Orders = () => {
  const [orders, setOrders] = useState([0, 0, 0, 0, 0, 0]);

  const handleInputChange = (index, value) => {
    const updatedOrders = [...orders];
    updatedOrders[index] = value;
    setOrders(updatedOrders);
  };

  const handleMinusClick = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index] = Math.max(updatedOrders[index] - 1, 0);
    setOrders(updatedOrders);
  };

  const handlePlusClick = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index] = updatedOrders[index] + 1;
    setOrders(updatedOrders);
  };

  return (
    <div className="status d-flex">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <AnimatedPages>
          <Container>
            <Row className="mt-2">
              <Col sm={12} md={6} lg={4}>
                <div className="Got">
                  <div className="Got_img">
                    <img src={necklace} alt="" />
                    <a href="#!">
                      <i className="far fa-heart text-danger"></i>
                    </a>
                  </div>
                  <div className="Got_content">
                    <div className="Got_title-section">
                      <a href="#!" className="Got_title">
                        Game OF Thrones Necklace
                      </a>
                      <a href="#!" className="Got_author">
                        Products
                      </a>
                    </div>
                    <div className="Got_bottom-section">
                      <div className="space-between">
                        <div>
                          <span className="fa fa-fire"></span> 220 - 280
                        </div>
                        <div className="pull-right">
                          <span className="badge badge-success">Veg</span>
                        </div>
                      </div>
                      <div className="space-between">
                        <div className="Got_price">
                          <span>4.99$</span>
                        </div>
                        <div className="Got_order-count">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-secondary minus-btn"
                                type="button"
                                onClick={() => handleMinusClick(0)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control input-manulator"
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              value={orders[0]}
                              onChange={(e) =>
                                handleInputChange(0, e.target.value)
                              }
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-secondary add-btn"
                                type="button"
                                onClick={() => handlePlusClick(0)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="Got">
                  <div className="Got_img">
                    <img src={backShirt} alt="" />
                    <a href="#!">
                      <i className="far fa-heart text-danger"></i>
                    </a>
                  </div>
                  <div className="Got_content">
                    <div className="Got_title-section">
                      <a href="#!" className="Got_title">
                        Back Printed T-shirt
                      </a>
                      <a href="#!" className="Got_author">
                        Products
                      </a>
                    </div>
                    <div className="Got_bottom-section">
                      <div className="space-between">
                        <div>
                          <span className="fa fa-fire"></span> 200 - 300
                        </div>
                        <div className="pull-right">
                          <span className="badge badge-danger">Non-veg</span>
                        </div>
                      </div>
                      <div className="space-between">
                        <div className="Got_price">
                          <span>14.99$</span>
                        </div>
                        <div className="Got_order-count">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-secondary minus-btn"
                                type="button"
                                onClick={() => handleMinusClick(1)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control input-manulator"
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              value={orders[1]}
                              onChange={(e) =>
                                handleInputChange(1, e.target.value)
                              }
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-secondary add-btn"
                                type="button"
                                onClick={() => handlePlusClick(1)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="Got">
                  <div className="Got_img">
                    <img src={cards} alt="" />
                    <a href="#!">
                      <i className="far fa-heart text-danger"></i>
                    </a>
                  </div>
                  <div className="Got_content">
                    <div className="Got_title-section">
                      <a href="#!" className="Got_title">
                        Glass Cards
                      </a>
                      <a href="#!" className="Got_author">
                        Products
                      </a>
                    </div>
                    <div className="Got_bottom-section">
                      <div className="space-between">
                        <div>
                          <span className="fa fa-fire"></span> 150 - 200
                        </div>
                        <div className="pull-right">
                          <span className="badge badge-danger">Non-veg</span>
                        </div>
                      </div>
                      <div className="space-between">
                        <div className="Got_price">
                          <span>9.99$</span>
                        </div>
                        <div className="Got_order-count">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-secondary minus-btn"
                                type="button"
                                onClick={() => handleMinusClick(2)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control input-manulator"
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              value={orders[2]}
                              onChange={(e) =>
                                handleInputChange(2, e.target.value)
                              }
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-secondary add-btn"
                                type="button"
                                onClick={() => handlePlusClick(2)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="Got">
                  <div className="Got_img">
                    <img src={cap} alt="" />
                    <a href="#!">
                      <i className="far fa-heart text-danger"></i>
                    </a>
                  </div>
                  <div className="Got_content">
                    <div className="Got_title-section">
                      <a href="#!" className="Got_title">
                        Baseball Cap
                      </a>
                      <a href="#!" className="Got_author">
                        Products
                      </a>
                    </div>
                    <div className="Got_bottom-section">
                      <div className="space-between">
                        <div>
                          <span className="fa fa-fire"></span> 100 - 150
                        </div>
                        <div className="pull-right">
                          <span className="badge badge-success">Veg</span>
                        </div>
                      </div>
                      <div className="space-between">
                        <div className="Got_price">
                          <span>7.99$</span>
                        </div>
                        <div className="Got_order-count">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-secondary minus-btn"
                                type="button"
                                onClick={() => handleMinusClick(3)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control input-manulator"
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              value={orders[3]}
                              onChange={(e) =>
                                handleInputChange(3, e.target.value)
                              }
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-secondary add-btn"
                                type="button"
                                onClick={() => handlePlusClick(3)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="Got">
                  <div className="Got_img">
                    <img src={mug} alt="" />
                    <a href="#!">
                      <i className="far fa-heart text-danger"></i>
                    </a>
                  </div>
                  <div className="Got_content">
                    <div className="Got_title-section">
                      <a href="#!" className="Got_title">
                        Customized Mug
                      </a>
                      <a href="#!" className="Got_author">
                        Products
                      </a>
                    </div>
                    <div className="Got_bottom-section">
                      <div className="space-between">
                        <div>
                          <span className="fa fa-fire"></span> 180 - 250
                        </div>
                        <div className="pull-right">
                          <span className="badge badge-danger">Non-veg</span>
                        </div>
                      </div>
                      <div className="space-between">
                        <div className="Got_price">
                          <span>6.99$</span>
                        </div>
                        <div className="Got_order-count">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-secondary minus-btn"
                                type="button"
                                onClick={() => handleMinusClick(4)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control input-manulator"
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              value={orders[4]}
                              onChange={(e) =>
                                handleInputChange(4, e.target.value)
                              }
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-secondary add-btn"
                                type="button"
                                onClick={() => handlePlusClick(4)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="Got">
                  <div className="Got_img">
                    <img src={sweatshirt} alt="" />
                    <a href="#!">
                      <i className="far fa-heart text-danger"></i>
                    </a>
                  </div>
                  <div className="Got_content">
                    <div className="Got_title-section">
                      <a href="#!" className="Got_title">
                        Hooded Sweatshirt
                      </a>
                      <a href="#!" className="Got_author">
                        Products
                      </a>
                    </div>
                    <div className="Got_bottom-section">
                      <div className="space-between">
                        <div>
                          <span className="fa fa-fire"></span> 280 - 350
                        </div>
                        <div className="pull-right">
                          <span className="badge badge-success">Veg</span>
                        </div>
                      </div>
                      <div className="space-between">
                        <div className="Got_price">
                          <span>19.99$</span>
                        </div>
                        <div className="Got_order-count">
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-secondary minus-btn"
                                type="button"
                                onClick={() => handleMinusClick(5)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control input-manulator"
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              value={orders[5]}
                              onChange={(e) =>
                                handleInputChange(5, e.target.value)
                              }
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-secondary add-btn"
                                type="button"
                                onClick={() => handlePlusClick(5)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </AnimatedPages>
      </div>
    </div>
  );
};

export default Orders;
