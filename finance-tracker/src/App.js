import './App.css';
import { useState } from 'react';
import React from 'react';
import InputField from './inputField'; 
import { PieGraph } from './components/Pie';


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

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Basic Finance Tracker</h1>

      
      <InputField label="Income / Month" onSubmit={setIncome} />
      <InputField label="Bills" onSubmit={setBills} />
      <InputField label="Expenses" onSubmit={setExpenses} />
      
      
      <button onClick={calculateSavings}>Calculate Savings</button>
      <button onClick={ () => {setIncome(0); setBills(0); setExpenses(0); setSavings(0)}}>Reset</button>

      
      <h2>Monthly Savings: {savings}</h2>
    </div>
  );
}


export default App;
