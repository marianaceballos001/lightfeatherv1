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
     data: [17, 477, 2842,	19,	3340,	374,	294,	4847],
      borderColor: '#A6DCEF',
      backgroundColor: '#DDF3F5',
    },
    {
      label: 'FIU',
      data: [16, 350, 2174,	16,	11771,	229,	691,	1402],
      borderColor: '#E36387',
      backgroundColor: '#F2AAAA',
    },
    {
      label: 'FSU',
      data: [48, 276,	1276,	18,	2245,	405,	207,	9046],
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
