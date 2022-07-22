import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';
import { useState } from 'react';


function App() {
  let data
  const [dollarsData, setDollarsData] = useState([]);
  const [timeData, setTimeData] = useState([]);
  fetch(
    'http://localhost:8000/orders/',
    {
      method: 'GET',
      headers: {
        "Origin": "http://localhost:3000"
      }
    })
    .then(response => { return response.json() })
    .then(data => {
      let costs = data;
      console.log(costs)
      data.map(function (record, idx, arr) {
        dollarsData.push(record['cost_dollars_float']);
      });
      data.map(function (record, idx, arr) {
        timeData.push(record['delivery_time_text']);
      });
  });
  console.log(dollarsData);
  const trace = {
    x: useState(),
    y: dollarsData,
    type: "scatter",
    mode: 'lines+markers',
    marker: {color: 'red'},
  };
  const plotData = [trace]; 
  return (
    <div>
      <Plot
        data={plotData}
        layout={{
          title: "Diameter and height in cylinders",
        }}
      />
    </div>
  );
}

export default App;
