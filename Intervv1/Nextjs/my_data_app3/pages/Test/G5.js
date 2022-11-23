import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Florida College Transfer Students Attending Florida Public Universities',
      
    },
  },
};

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [683/229680, 7258/229680, 1413/229680, 	8624/229680, 	0/229680, 	7441/229680, 	138/229680,  17483/229680, 	4698/229680, 	3767/229680, 	11802/229680, 	1907/229680, 	65214/229680, ],
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
