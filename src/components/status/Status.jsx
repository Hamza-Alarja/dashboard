import React from "react";
import "./Status.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Container, Col } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import AnimatedPages from "../AnimatedPages";

const data = [
  { name: "A", uv: 400, pv: 2400, amt: 240 },
  { name: "B", uv: 300, pv: 1398, amt: 221 },
  { name: "C", uv: 200, pv: 9800, amt: 229 },
  { name: "D", uv: 278, pv: 3908, amt: 200 },
  { name: "E", uv: 189, pv: 4800, amt: 218 },
  { name: "F", uv: 239, pv: 3800, amt: 250 },
  { name: "G", uv: 349, pv: 4300, amt: 210 },
];

export default function Status() {
  return (
    <>
      <div className="status d-flex">
        <Sidebar />
        <div className="singleContainer ">
          <Navbar />
          <AnimatedPages>
            <Container className=" py-3 d-flex align-items-center justify-content-center">
              <Col md={12} className=" w-100 Status-box">
                <div className="mt-5" style={{ width: "100%", height: 500 }}>
                  <ResponsiveContainer>
                    <LineChart data={data}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                      <Tooltip />
                      <Legend />

                      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                      <Line
                        type="monotone"
                        dataKey="amt"
                        stroke="#ffc658"
                        strokeWidth={1}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Col>
            </Container>
          </AnimatedPages>
        </div>
      </div>
    </>
  );
}
