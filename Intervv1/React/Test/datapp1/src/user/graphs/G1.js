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
    FAMU: 558,
    FAU: 7262,
    FGCU: 1360,
    FIU: 9469,
    FPU: 13,
    FSU: 7244,
    NCF: 93,
    UCF: 18425,
    UF: 6486,
    UNF: 3654,
    USF: 11292,
    UWF: 1840,
    SUS: 67696,
  },
  {
    name: "Fall 2013",
    FAMU: 558,
    FAU: 7471,
    FGCU: 1430,
    FIU: 9012,
    FPU: 0,
    FSU: 7744,
    NCF: 121,
    UCF: 17899,
    UF: 5813,
    UNF: 3725,
    USF: 11597,
    UWF: 1911,
    SUS: 67308,
  },
  {
    name: "Fall 2012",
    FAMU: 683,
    FAU: 7258,
    FGCU: 1413,
    FIU: 8624,
    FPU: 0,
    FSU: 7441,
    NCF: 138,
    UCF: 1748,
    UF: 4698,
    UNF: 3767,
    USF: 11802,
    UWF: 1907,
    SUS: 65214,
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
