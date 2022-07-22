import logo from './logo.svg';
import './App.css';
import { LineChart, Line } from 'recharts';


function App() {
  let data = fetch(
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
      costs.map(function (costs) {
        
      })

    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
