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
      data: [338, 4948,	1100,	7180,	74,	6277,	69, 14164,	5378,	2837,	8539,	1274,	52178],
      backgroundColor: '#DDF3F5',
    },
    {
      label: 'Fall 2013',
      data: [373, 4992, 1174, 6963,	0	,6444,	77, 13734,	4931,	2913,	8627,	1330,	51558],
      backgroundColor: '#F2AAAA',
    },
    {
      label: 'Fall 2012',
      data: [424, 4893,	1113,	6504,	0,	6161,	68, 13346,	4252,	2801,	8684,	1371,	49617],
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
