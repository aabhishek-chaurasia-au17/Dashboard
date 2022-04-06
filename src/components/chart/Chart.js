import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000
        },
        {
            name: 'Fab',
            "Active User": 3000
        },
        {
            name: 'Mar',
            "Active User": 4000
        },
        {
          name: 'Apr',
          "Active User": 1000
        },
        {
            name: 'May',
            "Active User": 4000
        },
        {
            name: 'Jun',
            "Active User": 2000
        },
        {
          name: 'Jul',
          "Active User": 3000
        },
        {
            name: 'Agu',
            "Active User": 4000
        },
        {
            name: 'Sep',
            "Active User": 3000
        },
        {
            name: 'Oct',
            "Active User": 2000
        },
        {
          name: 'Nav',
          "Active User": 4000
        },
        {
            name: 'Dec',
            "Active User": 3000
        }
      ];
      
  return (
    <div className="chart">
      <h3 className="chartTitle">Chart</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          {/* {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />} */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}