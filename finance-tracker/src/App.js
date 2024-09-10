import './App.css';
import { useState } from 'react';
import React from 'react';
import InputField from './inputField'; 
import {Pie} from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, } from "chart.js";

ChartJS.register( Tooltip, Legend, ArcElement );

 
function App() {
  // Define state variables for Income, Bills, and Expenses
  const [income, setIncome] = useState(0);
  const [bills, setBills] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savings, setSavings] = useState(0);

  // Function to calculate remaining income
  const calculateSavings = () => {
    const remainingIncome = income - (bills + expenses);
    setSavings(remainingIncome);
  };

  // Define Pie Chart Data
  const PieChartData = {
    labels: ["Income / Month", "Bills", "Expenses", "Savings"],
    datasets: [
      {
        label: "Leva",
        data: [income, bills, expenses, savings],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 165, 0, 0.2)",
          "rgba(255, 0, 0, 0.2)",
          "rgba(75, 206, 86, 0.2)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  // Options for the Pie Chart (added the names of the variables and color above the chart)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="App">
      <h1 id="title">Basic Finance Tracker</h1>
      <div className="container">
      <div id="inputField">
      <InputField label="Income / Month" onSubmit={setIncome} />
      <InputField label="Bills" onSubmit={setBills} />
      <InputField label="Expenses" onSubmit={setExpenses} />
      
      </div>
      <div id="chart-container">
      <Pie options={options} data={PieChartData} />
      </div>
      </div>

      <button onClick={calculateSavings}>Calculate Savings</button>
      <button onClick={() => { setIncome(0); setBills(0); setExpenses(0); setSavings(0); }}>Reset</button>

      <h2>Monthly Savings: {savings}</h2>

    
    </div>
  );
}

export default App;
