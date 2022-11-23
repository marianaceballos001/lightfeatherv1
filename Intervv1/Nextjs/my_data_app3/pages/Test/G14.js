import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
  },
};

const labels = ['American-Indian',	'Asian',	'African-American',	'Hawaiian/Pacific Islander',	'Hispanic',	'Multi Racial',	'Not Reported',	'White'];

export const data = {
  labels,
  datasets: [
    {
      label: 'FAU',
     data: [16, 489,	2744,	23,	3319,	335,	349,	5188
     ],
      borderColor: '#A6DCEF',
      backgroundColor: '#DDF3F5',
    },
    {
      label: 'FIU',
      data: [16,	327,	2071,	18,	11319,	156,	627,	1443],
      borderColor: '#E36387',
      backgroundColor: '#F2AAAA',
    },
    {
      label: 'FSU',
      data: [66, 305,	1330,	28,	2198,	368,	244,	9649
      ],
      borderColor: '#A685E2',
      backgroundColor:  '#6155A6',
    },
  ],
};

function App() {
  return (
    <div className="">
      <Bar options={options} data={data} />
    </div>
  );
}

export default App;
