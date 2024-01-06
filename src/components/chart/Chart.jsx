import "./chart.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Col, Container } from "react-bootstrap";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 400 },
  { name: "April", Total: 1900 },
  { name: "May", Total: 1450 },
  { name: "June", Total: 1700 },
];

const Chart = () => {
  return (
    <div className="chart">
      <Container>
        <div className="title text-muted fw-bolder">Last 6 Montsh </div>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <AreaChart width={730} height={250} data={data}>
            <defs>
              <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ec028c" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="ChartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#Total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Container>
    </div>
  );
};

export default Chart;
