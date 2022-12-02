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
    AmericanIndian: 16,
    Asian: 489,
    AfricanAmerican: 2744,
    HawaiianPacificIslander: 23,
    Hispanic: 3319,
    MultiRacial: 335,
    NotReported: 349,
    White: 5188,
  },
  {
    name: "FIU",
    AmericanIndian: 16,
    Asian: 327,
    AfricanAmerican: 2071,
    HawaiianPacificIslander: 18,
    Hispanic: 11319,
    MultiRacial: 156,
    NotReported: 627,
    White: 1443,
  },
  {
    name: "FSU",
    AmericanIndian: 66,
    Asian: 305,
    AfricanAmerican: 1330,
    HawaiianPacificIslander: 28,
    Hispanic: 2198,
    MultiRacial: 368,
    NotReported: 244,
    White: 9649,
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
