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
    x: 21,
    y: 17,
    z: 5.09,
  },
  {
    x: 411,
    y: 18,
    z: 5.09,
  },
  {
    x: 755,
    y: 19,
    z: 5.09,
  },
  {
    x: 858,
    y: 20,
    z: 5.09,
  },
  {
    x: 1298,
    y: 21,
    z: 5.09,
  },
  {
    x: 1351,
    y: 22,
    z: 5.09,
  },
  {
    x: 1292,
    y: 23,
    z: 5.09,
  },
  {
    x: 1160,
    y: 24,
    z: 5.09,
  },
  {
    x: 855,
    y: 25,
    z: 5.09,
  },
  {
    x: 653,
    y: 26,
    z: 5.09,
  },
  {
    x: 528,
    y: 27,
    z: 5.09,
  },
  {
    x: 392,
    y: 28,
    z: 5.09,
  },
  {
    x: 306,
    y: 29,
    z: 5.09,
  },
  {
    x: 249,
    y: 30,
    z: 5.09,
  },
  {
    x: 2081,
    y: 31,
    z: 5.09,
  },
];
const data2 = [
  {
    x: 16,
    y: 17,
    z: 5.24,
  },
  {
    x: 546,
    y: 18,
    z: 5.24,
  },
  {
    x: 723,
    y: 19,
    z: 5.24,
  },
  {
    x: 949,
    y: 20,
    z: 5.24,
  },
  {
    x: 1195,
    y: 21,
    z: 5.24,
  },
  {
    x: 1441,
    y: 22,
    z: 5.24,
  },
  {
    x: 1389,
    y: 23,
    z: 5.24,
  },
  {
    x: 1062,
    y: 24,
    z: 5.24,
  },
  {
    x: 844,
    y: 25,
    z: 5.24,
  },
  {
    x: 629,
    y: 26,
    z: 5.24,
  },
  {
    x: 513,
    y: 27,
    z: 5.24,
  },
  {
    x: 418,
    y: 28,
    z: 5.24,
  },
  {
    x: 308,
    y: 29,
    z: 5.24,
  },
  {
    x: 281,
    y: 30,
    z: 5.24,
  },
  {
    x: 2149,
    y: 31,
    z: 5.24,
  },

];
const data3 = [
  {
    x: 21,
    y: 17,
    z: 5.29,
  },
  {
    x: 468,
    y: 18,
    z: 5.29,
  },
  {
    x: 761,
    y: 19,
    z: 5.29,
  },
  {
    x: 751,
    y: 20,
    z: 5.29,
  },
  {
    x: 1178,
    y: 21,
    z: 5.29,
  },
  {
    x: 1448,
    y: 22,
    z: 5.29,
  },
  {
    x: 1316,
    y: 23,
    z: 5.29,
  },
  {
    x: 1055,
    y: 24,
    z: 5.29,
  },
  {
    x: 828,
    y: 25,
    z: 5.29,
  },
  {
    x: 661,
    y: 26,
    z: 5.29,
  },
  {
    x: 512,
    y: 27,
    z: 5.29,
  },
  {
    x: 369,
    y: 28,
    z: 5.29,
  },
  {
    x: 350,
    y: 29,
    z: 5.29,
  },
  {
    x: 283,
    y: 30,
    z: 5.29,
  },
  {
    x: 2150,
    y: 31,
    z: 5.29,
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
