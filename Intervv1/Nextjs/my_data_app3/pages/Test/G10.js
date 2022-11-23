import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      
      title: {
        display: true,
        text: 'Age'
      }
  },
    x:
    {
      title: {
        display: true,
        text: 'Students'
      }
    },
  },
};

export const data = {
  datasets: [
    {
      label: "2014",
      data: [
        {
          x: 21,
          y: 17,
          r: 5.09,
        },
        {
          x: 411,
          y: 18,
          r: 5.09,
        },
        {
          x: 755,
          y: 19,
          r: 5.09,
        },
        {
          x: 858,
          y: 20,
          r: 5.09,
        },
        {
          x: 1298,
          y: 21,
          r: 5.09,
        },
        {
          x: 1351,
          y: 22,
          r: 5.09,
        },
        {
          x: 1292,
          y: 23,
          r: 5.09,
        },
        {
          x: 1160,
          y: 24,
          r: 5.09,
        },
        {
          x: 855,
          y: 25,
          r: 5.09,
        },
        {
          x: 653,
          y: 26,
          r: 5.09,
        },
        {
          x: 528,
          y: 27,
          r: 5.09,
        },
        {
          x: 392,
          y: 28,
          r: 5.09,
        },
        {
          x: 306,
          y: 29,
          r: 5.09,
        },
        {
          x: 249,
          y: 30,
          r: 5.09,
        },
        {
          x: 2081,
          y: 31,
          r: 5.09,
        },
      ],


      backgroundColor: "#6155A6",
    },
    {
      label: "2013",
      data: [
        {
          x: 16,
          y: 17,
          r: 5.24,
        },
        {
          x: 546,
          y: 18,
          r: 5.24,
        },
        {
          x: 723,
          y: 19,
          r: 5.24,
        },
        {
          x: 949,
          y: 20,
          r: 5.24,
        },
        {
          x: 1195,
          y: 21,
          r: 5.24,
        },
        {
          x: 1441,
          y: 22,
          r: 5.24,
        },
        {
          x: 1389,
          y: 23,
          r: 5.24,
        },
        {
          x: 1062,
          y: 24,
          r: 5.24,
        },
        {
          x: 844,
          y: 25,
          r: 5.24,
        },
        {
          x: 629,
          y: 26,
          r: 5.24,
        },
        {
          x: 513,
          y: 27,
          r: 5.24,
        },
        {
          x: 418,
          y: 28,
          r: 5.24,
        },
        {
          x: 308,
          y: 29,
          r: 5.24,
        },
        {
          x: 281,
          y: 30,
          r: 5.24,
        },
        {
          x: 2149,
          y: 31,
          r: 5.24,
        },
      ],

      backgroundColor: "#E36387",
    },
    {
      label: "2012",
      data: [
        {
          x: 21,
          y: 17,
          r: 5.29,
        },
        {
          x: 468,
          y: 18,
          r: 5.29,
        },
        {
          x: 761,
          y: 19,
          r: 5.29,
        },
        {
          x: 751,
          y: 20,
          r: 5.29,
        },
        {
          x: 1178,
          y: 21,
          r: 5.29,
        },
        {
          x: 1448,
          y: 22,
          r: 5.29,
        },
        {
          x: 1316,
          y: 23,
          r: 5.29,
        },
        {
          x: 1055,
          y: 24,
          r: 5.29,
        },
        {
          x: 828,
          y: 25,
          r: 5.29,
        },
        {
          x: 661,
          y: 26,
          r: 5.29,
        },
        {
          x: 512,
          y: 27,
          r: 5.29,
        },
        {
          x: 369,
          y: 28,
          r: 5.29,
        },
        {
          x: 350,
          y: 29,
          r: 5.29,
        },
        {
          x: 283,
          y: 30,
          r: 5.29,
        },
        {
          x: 2150,
          y: 31,
          r: 5.29,
        },
      ],

      backgroundColor: "#A6DCEF",
    },
  ],
};

function App() {
  return (
    <div className="">
      <Bubble options={options} data={data} />
    </div>
  );
}

export default App;
