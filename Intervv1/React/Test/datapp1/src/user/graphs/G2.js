import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const data01 = [
  {name:'Female', value:56},
  {name:'Male', value:44},
  ];
  
  const data02 = [
    {name:'Female', value:0.56},
    {name:'Male', value:  0.44
  },
  ];

function App() {
    return (

      <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
    <ResponsiveContainer width="100%" aspect={1}>

          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#A35D6A"
              label
            />
            <Pie dataKey="value" data={data02} cx={500} cy={100} innerRadius={40} outerRadius={80} fill="#82ca9d" />
            <Tooltip />
          </PieChart>
          </ResponsiveContainer>

		</div>
	</div>
</div>


      );
    
}

export default App;
