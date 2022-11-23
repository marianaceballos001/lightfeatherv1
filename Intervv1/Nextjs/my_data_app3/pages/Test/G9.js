import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [424/229680,  4893/229680, 	1113/229680, 	6504/229680, 	0/229680, 	6161/229680, 	68/229680,  13346/229680, 	4252/229680, 	2801/229680, 	8684/229680, 	1371/229680, 	49617/229680,],
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
