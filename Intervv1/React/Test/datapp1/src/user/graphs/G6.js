import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Fall 2014",
    FAMU: 338,
    FAU: 4948,
    FGCU: 1100,
    FIU: 7180,
    FPU: 74,
    FSU: 6277,
    NCF: 69,
    UCF: 14164,
    UF: 5378,
    UNF: 2837,
    USF: 8539,
    UWF: 1274,
    SUS: 52178,
  },
  {
    name: "Fall 2013",
    FAMU: 373,
    FAU: 4992,
    FGCU: 1174,
    FIU: 6963,
    FPU: 0,
    FSU: 6444,
    NCF: 77,
    UCF: 13734,
    UF: 4931,
    UNF: 2913,
    USF: 8627,
    UWF: 1330,
    SUS: 51558,
  },
  {
    name: "Fall 2012",
    FAMU: 424,
    FAU: 4893,
    FGCU: 1113,
    FIU: 6504,
    FPU: 0,
    FSU: 6161,
    NCF: 68,
    UCF: 13346,
    UF: 4252,
    UNF: 2801,
    USF: 8684,
    UWF: 1371,
    SUS: 49617,
  },
];

function App() {
  return (
    <div className="ChartContainer">
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={800}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="FAMU" stackId="a" fill="#DDF3F5" />
          <Bar dataKey="FAU" stackId="a" fill="#F2AAAA" />

          <Bar dataKey="FGCU" stackId="a" fill="#E5EBB2" />
          <Bar dataKey="FIU" stackId="a" fill="#A685E2" />

          <Bar dataKey="FPU" stackId="a" fill="#4649FF" />
          <Bar dataKey="FSU" stackId="a" fill="#A8A4CE" />

          <Bar dataKey="NCF" stackId="a" fill="#5B4B8A" />
          <Bar dataKey="UCF" stackId="a" fill="#D6F8B8" />

          <Bar dataKey="UF" stackId="a" fill="#FDA65D" />
          <Bar dataKey="UNF" stackId="a" fill="#FFA1CF" />

          <Bar dataKey="USF" stackId="a" fill="#E36BAE" />
          <Bar dataKey="UWF" stackId="a" fill="#7EA04D" />

          <Bar dataKey="SUS" stackId="a" fill="#7A4069" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
