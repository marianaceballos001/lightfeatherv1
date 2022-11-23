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
      data: [558/239756, 		7262/239756,	1360/239756,	9469/239756,	13/239756,	7244/239756,	93/239756, 18425/239756,	6486/239756,	3654/239756,	11292/239756,	1840/239756,	67696/239756,],
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
