import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import { Container, Row, Col } from "react-grid-system";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import AnimatedPages from "../AnimatedPages";

const home = () => {
  return (
    <div className="home d-flex">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <AnimatedPages>
          <div className="widgets">
            <Container fluid>
              <Row>
                <Col xl={3} sm={6} className=" mt-3 ">
                  <Widget tybe="user" />
                </Col>
                <Col xl={3} sm={6} className=" mt-3 ">
                  <Widget tybe="order" />
                </Col>
                <Col xl={3} sm={6} className=" mt-3 ">
                  <Widget tybe="earning" />
                </Col>
                <Col xl={3} sm={6} className=" mt-3 ">
                  <Widget tybe="balance" />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="charts mt-4">
            <Container fluid>
              <Row className="p-1">
                <Col md={12} lg={4} className="mt-3">
                  <Featured />
                </Col>
                <Col md={12} lg={8} className="mt-3">
                  <Chart />
                </Col>
              </Row>
            </Container>
          </div>
        </AnimatedPages>
      </div>
    </div>
  );
};

export default home;
