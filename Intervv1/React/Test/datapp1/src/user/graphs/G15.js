import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "FAU",
    AmericanIndian: 19,
    Asian: 494,
    AfricanAmerican: 2638,
    HawaiianPacificIslander: 20,
    Hispanic: 3165,
    MultiRacial: 289,
    NotReported: 248,
    White: 5278,
  },
  {
    name: "FIU",
    AmericanIndian: 11,
    Asian: 306,
    AfricanAmerican: 1976,
    HawaiianPacificIslander: 19,
    Hispanic: 10588,
    MultiRacial: 116,
    NotReported: 622,
    White: 1492,
  },
  {
    name: "FSU",
    AmericanIndian: 43,
    Asian: 325,
    AfricanAmerican: 1323,
    HawaiianPacificIslander: 4,
    Hispanic: 1842,
    MultiRacial: 377,
    NotReported: 232,
    White: 9456,
  },
];

function App() {
  return (
    <div className="ChartContainer">
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="AmericanIndian"
            stackId="1"
            stroke="#A6DCEF"
            fill="#DDF3F5"
          />
          <Area
            type="monotone"
            dataKey="Asian"
            stackId="1"
            stroke="#E36387"
            fill="#F2AAAA"
          />
          <Area
            type="monotone"
            dataKey="AfricanAmerican"
            stackId="1"
            stroke="#BCE29E"
            fill="#E5EBB2"
          />
          <Area
            type="monotone"
            dataKey="HawaiianPacificIslander"
            stackId="1"
            stroke="#6155A6"
            fill="#A685E2"
          />
          <Area
            type="monotone"
            dataKey="Hispanic"
            stackId="1"
            stroke="#1D1CE5"
            fill="#4649FF"
          />
          <Area
            type="monotone"
            dataKey="MultiRacial"
            stackId="1"
            stroke="#7A86B6"
            fill="#A8A4CE"
          />
          <Area
            type="monotone"
            dataKey="NotReported"
            stackId="1"
            stroke="#4C3575"
            fill="#5B4B8A"
          />
          <Area
            type="monotone"
            dataKey="White"
            stackId="1"
            stroke="#ACDEAA"
            fill="D6F8B8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
