import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [373/237750,  4992/237750,	1174/237750,	6963/237750,	0/237750,	6444/237750,	77/237750, 13734/237750,	
      4931/237750,	2913/237750,	8627/237750,	1330/237750,	51558/237750  ],
      backgroundColor: [
        '#DDF3F5',
        '#F2AAAA',
        '#E5EBB2',
        '#A685E2',
        '#4649FF',
        '#A8A4CE',
        '#5B4B8A',
        '#D6F8B8',
        '#FDA65D',
        '#FFA1CF',
        '#E36BAE',
        '#7EA04D',
        '#7A4069',
      ],
      borderColor: [
        '#A6DCEF',
        '#E36387',
        '#BCE29E',
        '#6155A6',
        '#1D1CE5',
        '#7A86B6',
        '#4C3575',
        '#ACDEAA',
        '#E26A2C',
        '#FF74B1',
        '#B34180',
        '#335D2D',
        '#513252',
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <div className="">
      <Doughnut data={data} />
    </div>
  );
}

export default App;
