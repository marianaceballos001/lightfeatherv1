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
    x: 4,
    y: 17,
    z: 5.639
  },
  {
    x: 577,
    y: 18,
    z: 5.639
  },
  {
    x: 1886,
    y: 19,
    z: 5.639
  },
  {
    x: 2832,
    y: 20,
    z: 5.639
  },
  {
    x: 2955,
    y: 21,
    z: 5.639
  },
  {
    x: 2109,
    y: 22,
    z: 5.639
  },
  {
    x: 1001,
    y: 23,
    z: 5.639
  },
  {
    x: 554,
    y: 24,
    z: 5.639
  },
  {
    x: 333,
    y: 25,
    z: 5.639
  },
  {
    x: 232,
    y: 26,
    z: 5.639
  },
  {
    x: 165,
    y: 27,
    z: 5.639
  },
  {
    x: 119,
    y: 28,
    z: 5.639
  },
  {
    x: 88,
    y: 29,
    z: 5.639
  },
  {
    x: 87,
    y: 30,
    z: 5.639
  },
  {
    x: 579,
    y: 31,
    z: 5.639
  },

];
const data2 = [
  {
    x: 11,
    y: 17,
    z: 5.967
  },
  {
    x: 1345,
    y: 18,
    z: 5.967
  },
  {
    x: 2228,
    y: 19,
    z: 5.967
  },
  {
    x: 2649,
    y: 20,
    z: 5.967
  },
  {
    x: 2795,
    y: 21,
    z: 5.967
  },
  {
    x: 1972,
    y: 22,
    z: 5.967
  },
  {
    x: 1020,
    y: 23,
    z: 5.967
  },
  {
    x: 548,
    y: 24,
    z: 5.967
  },
  {
    x: 322,
    y: 25,
    z: 5.967
  },
  {
    x: 236,
    y: 26,
    z: 5.967
  },
  {
    x: 163,
    y: 27,
    z: 5.967
  },
  {
    x: 129,
    y: 28,
    z: 5.967
  },
  {
    x: 105,
    y: 29,
    z: 5.967
  },
  {
    x: 76,
    y: 30,
    z: 5.967
  },
  {
    x: 589,
    y: 31,
    z: 5.967
  },



];
const data3 = [
  {
    x: 13,
    y: 17,
    z: 5.914
  },
  {
    x: 1245,
    y: 18,
    z: 5.914
  },
  {
    x: 2176,
    y: 19,
    z: 5.914
  },
  {
    x: 2401,
    y: 20,
    z: 5.914
  },
  {
    x: 2628,
    y: 21,
    z: 5.914
  },
  {
    x: 1923,
    y: 22,
    z: 5.914
  },
  {
    x: 1035,
    y: 23,
    z: 5.914
  },
  {
    x: 499,
    y: 24,
    z: 5.914
  },
  {
    x: 333,
    y: 25,
    z: 5.914
  },
  {
    x: 209,
    y: 26,
    z: 5.914
  },
  {
    x: 167,
    y: 27,
    z: 5.914
  },
  {
    x: 144,
    y: 28,
    z: 5.914
  },
  {
    x: 108,
    y: 29,
    z: 5.914
  },
  {
    x: 101,
    y: 30,
    z: 5.914
  },
  {
    x: 620,
    y: 31,
    z: 5.914
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
