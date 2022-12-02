import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";


function App() {
  return (
    <div className="ChartContainer">
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          margin={{
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Legend />
          <Bar dataKey="FAMU"  fill="#DDF3F5" />
          <Bar dataKey="FAU" fill="#F2AAAA" />
          
          <Bar dataKey="FGCU" fill="#E5EBB2" />
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
