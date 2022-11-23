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
        text: 'Age', 
      }
  },
    x:
    {
      title: {
        display: true,
        text: 'Students', 
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
          x: 1,
          y: 17,
          r: 6.944
        },
        {
          x: 10,
          y: 18,
          r: 6.944
        },
        {
          x: 128,
          y: 19,
          r: 6.944
        },
        {
          x: 683,
          y: 20,
          r: 6.944
        },
        {
          x: 1750,
          y: 21,
          r: 6.944
        },
        {
          x: 2247,
          y: 22,
          r: 6.944
        },
        {
          x: 2374,
          y: 23,
          r: 6.944
        },
        {
          x: 2047,
          y: 24,
          r: 6.944
        },
        {
          x: 1487,
          y: 25,
          r: 6.944
        },
        {
          x: 1126,
          y: 26,
          r: 6.944
        },
        {
          x: 829,
          y: 27,
          r: 6.944
        },
        {
          x: 669,
          y: 28,
          r: 6.944
        },
        {
          x: 535,
          y: 29,
          r: 6.944
        },
        {
          x: 408,
          y: 30,
          r: 6.944
        },
        {
          x: 2355,
          y: 31,
          r: 6.944
        },
      ],


      backgroundColor: "#6155A6",
    },
    {
      label: "2013",
      data: [
        {
          x: 0,
          y: 17,
          r: 6.72
        },
        {
          x: 12,
          y: 18,
          r: 6.72
        },
        {
          x: 90,
          y: 19,
          r: 6.72
        },
        {
          x: 663,
          y: 20,
          r: 6.72
        },
        {
          x: 1554,
          y: 21,
          r: 6.72
        },
        {
          x: 2317,
          y: 22,
          r: 6.72
        },
        {
          x: 2384,
          y: 23,
          r: 6.72
        },
        {
          x: 1870,
          y: 24,
          r: 6.72
        },
        {
          x: 1388,
          y: 25,
          r: 6.72
        },
        {
          x: 1044,
          y: 26,
          r: 6.72
        },
        {
          x: 796,
          y: 27,
          r: 6.72
        },
        {
          x: 602,
          y: 28,
          r: 6.72
        },
        {
          x: 488,
          y: 29,
          r: 6.72
        },
        {
          x: 444,
          y: 30,
          r: 6.72
        },
        {
          x: 2325,
          y: 31,
          r: 6.72
        },
      ],

      backgroundColor: "#E36387",
    },
    {
      label: "2012",
      data: [
        {
          x: 0,
          y: 17,
          r: 6.587
        },
        {
          x: 4,
          y: 18,
          r: 6.587
        },
        {
          x: 65,
          y: 19,
          r: 6.587
        },
        {
          x: 580,
          y: 20,
          r: 6.587
        },
        {
          x: 1680,
          y: 21,
          r: 6.587
        },
        {
          x: 2362,
          y: 22,
          r: 6.587
        },
        {
          x: 2143,
          y: 23,
          r: 6.587
        },
        {
          x: 1645,
          y: 24,
          r: 6.587
        },
        {
          x: 1228,
          y: 25,
          r: 6.587
        },
        {
          x: 899,
          y: 26,
          r: 6.587
        },
        {
          x: 718,
          y: 27,
          r: 6.587
        },
        {
          x: 603,
          y: 28,
          r: 6.587
        },
        {
          x: 484,
          y: 29,
          r: 6.587
        },
        {
          x: 384,
          y: 30,
          r: 6.587
        },
        {
          x: 2335,
          y: 31,
          r: 6.587
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
