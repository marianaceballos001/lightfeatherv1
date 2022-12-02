import React, { PureComponent } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  {
    x: 1,
    y: 17,
    z: 6.944
  },
  {
    x: 10,
    y: 18,
    z: 6.944
  },
  {
    x: 128,
    y: 19,
    z: 6.944
  },
  {
    x: 683,
    y: 20,
    z: 6.944
  },
  {
    x: 1750,
    y: 21,
    z: 6.944
  },
  {
    x: 2247,
    y: 22,
    z: 6.944
  },
  {
    x: 2374,
    y: 23,
    z: 6.944
  },
  {
    x: 2047,
    y: 24,
    z: 6.944
  },
  {
    x: 1487,
    y: 25,
    z: 6.944
  },
  {
    x: 1126,
    y: 26,
    z: 6.944
  },
  {
    x: 829,
    y: 27,
    z: 6.944
  },
  {
    x: 669,
    y: 28,
    z: 6.944
  },
  {
    x: 535,
    y: 29,
    z: 6.944
  },
  {
    x: 408,
    y: 30,
    z: 6.944
  },
  {
    x: 2355,
    y: 31,
    z: 6.944
  },

];
const data2 = [
  {
    x: 0,
    y: 17,
    z: 6.72
  },
  {
    x: 12,
    y: 18,
    z: 6.72
  },
  {
    x: 90,
    y: 19,
    z: 6.72
  },
  {
    x: 663,
    y: 20,
    z: 6.72
  },
  {
    x: 1554,
    y: 21,
    z: 6.72
  },
  {
    x: 2317,
    y: 22,
    z: 6.72
  },
  {
    x: 2384,
    y: 23,
    z: 6.72
  },
  {
    x: 1870,
    y: 24,
    z: 6.72
  },
  {
    x: 1388,
    y: 25,
    z: 6.72
  },
  {
    x: 1044,
    y: 26,
    z: 6.72
  },
  {
    x: 796,
    y: 27,
    z: 6.72
  },
  {
    x: 602,
    y: 28,
    z: 6.72
  },
  {
    x: 488,
    y: 29,
    z: 6.72
  },
  {
    x: 444,
    y: 30,
    z: 6.72
  },
  {
    x: 2325,
    y: 31,
    z: 6.72
  },


];
const data3 = [
  {
    x: 0,
    y: 17,
    z: 6.587
  },
  {
    x: 4,
    y: 18,
    z: 6.587
  },
  {
    x: 65,
    y: 19,
    z: 6.587
  },
  {
    x: 580,
    y: 20,
    z: 6.587
  },
  {
    x: 1680,
    y: 21,
    z: 6.587
  },
  {
    x: 2362,
    y: 22,
    z: 6.587
  },
  {
    x: 2143,
    y: 23,
    z: 6.587
  },
  {
    x: 1645,
    y: 24,
    z: 6.587
  },
  {
    x: 1228,
    y: 25,
    z: 6.587
  },
  {
    x: 899,
    y: 26,
    z: 6.587
  },
  {
    x: 718,
    y: 27,
    z: 6.587
  },
  {
    x: 603,
    y: 28,
    z: 6.587
  },
  {
    x: 484,
    y: 29,
    z: 6.587
  },
  {
    x: 384,
    y: 30,
    z: 6.587
  },
  {
    x: 2335,
    y: 31,
    z: 6.587
  },

];

function App() {
  return (
    <div className="ChartContainer">
      <ResponsiveContainer width="100%" aspect={2}>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="students" label={{ value: 'Students', position: 'insideBottomRight', offset: -20 }} />
          <YAxis type="number" dataKey="y" name="age" label={{ value: 'Age', angle: -90, position: 'insideLeft' }} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="2014" data={data1} fill="#6155A6" />
          <Scatter name="2013" data={data2} fill="#E36387" />
          <Scatter name="2012" data={data3} fill="#A6DCEF" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
