import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js';
import { useState, useEffect } from 'react';
import { Data } from './Data';
import PieChart from './components/PieChart';
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";

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
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null);
  const [data7, setData7] = useState(null);
  const [data8, setData8] = useState(null);
  const [data9, setData9] = useState(null);
  const [data10, setData10] = useState(null);
  const [data11, setData11] = useState(null);
  const [data12, setData12] = useState(null);
  const [data13, setData13] = useState(null);
  const [data14, setData14] = useState(null);
  const [data15, setData15] = useState(null);
  const [data16, setData16] = useState(null);
  const [data17, setData17] = useState(null);
  const [data18, setData18] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type/1/')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error("Error fecthing data: ", error);
      setError(error);
    })
    fetch('https://pokeapi.co/api/v2/type/2/')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data2 => {
      setData2(data2);
    })
    fetch('https://pokeapi.co/api/v2/type/3/')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data3 => {
      setData3(data3);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

  if (loading) return "Loading...";
  if (error) return "Error!";

  let pokemonTypes = [];
  pokemonTypes.push(data.name, data2.name, data3.name)

  let pokemonCount = [];
  pokemonCount.push(data.pokemon.length, data2.pokemon.length, data3.pokemon.length);

  const ChartData = {
    labels: pokemonTypes,
    datasets: [
      {
        label: "# of Pokemon for this type ",
        data: pokemonCount,
        backgroundColor: [
          "gray",
          "brown",
          "blue"
        ],
        borderColor: "",
        borderWidth: 1
      }
    ]    
  }



  return (
    <div className="App">
      <PieChart chartData={chartData}/>
      <LineChart chartData={chartData}/>
      <BarChart chartData={chartData}/>
      {data.pokemon.length}
      <PieChart chartData={ChartData}/>
      <LineChart chartData={ChartData}/>
  <BarChart chartData={ChartData}/>
    </div>
  );
}
