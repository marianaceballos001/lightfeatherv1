import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['FAMU',	'FAU',	'FGCU',	'FIU',	'FPU',	'FSU',	'NCF', 'UCF',	'UF',	'UNF',	'USF',	'UWF',	'SUS'],
  datasets: [
    {
      label: '# of Votes',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    <div style={{height:"100px"}} className="">
      <Doughnut data={data} />
    </div>
  );
}

export default App;
