import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const labels = [
  "American-Indian",
  "Asian",
  "African-American",
  "Hawaiian/Pacific Islander",
  "Hispanic",
  "Multi Racial",
  "Not Reported",
  "White",
];

export const data = {
  labels,
  datasets: [
    {
      label: "FAU",
      data: [19, 494, 2638, 20, 3165, 289, 248, 5278],
      borderColor: "#A6DCEF",
      backgroundColor: "#DDF3F5",
    },
    {
      label: "FIU",
      data: [11, 306, 1976, 19, 10588, 116, 622, 1492],
      borderColor: "#E36387",
      backgroundColor: "#F2AAAA",
    },
    {
      label: "FSU",
      data: [43, 325, 1323, 4, 1842, 377, 232, 9456],
      borderColor: "#A685E2",
      backgroundColor: "#6155A6",
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
