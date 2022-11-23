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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'Students'
      }
    },
  },
};

const labels = ['FAMU',	'FAU',	'FGCU',	'FIU',	'FPU',	'FSU',	'NCF', 'UCF',	'UF',	'UNF',	'USF',	'UWF',	'SUS'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Fall 2014',
      data: [558, 7262,	1360,	9469,	13,	7244,	93, 18425,	6486,	3654,	11292,	1840,	67696],
      backgroundColor: '#DDF3F5',
    },
    {
      label: 'Fall 2013',
      data: [585, 7471, 1430, 9012, 0, 7744,	121, 17899,	5813,	3725,	11597,	1911,	67308],
      backgroundColor: '#F2AAAA',
    },
    {
      label: 'Fall 2012',
      data: [683, 7258,	1413,	8624,	0,	7441,	138, 17483,	4698,	3767,	11802,	1907,	65214],
      backgroundColor: '#7A4069',
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
