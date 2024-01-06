import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Col, Container } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import AnimatedPages from "../AnimatedPages";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="status d-flex">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <Container className="py-3 d-flex align-items-center justify-content-center">
            <AnimatedPages>
              <Col md={12} className="w-100 Status-box">
                <div>
                  <Calendar
                    className={"w-100 calendar"}
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </Col>
            </AnimatedPages>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CalendarComponent;
