import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js';
import { useState } from 'react';
import { Data } from './Data';
import PieChart from './components/PieChart';

Chart.register(CategoryScale);

export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.number),
    datasets: [
      {
        label: "Numbers Gained ",
        data: Data.map((data) => data.added),
        backgroundColor: [
          "red",
          "blue",
          "green",
          "yellow"
        ],
        borderColor: "",
        borderWidth: 1
      }
    ]
  });

  return (
    <div className="App">
      <PieChart chartData={chartData}/>
    </div>
  );
}
