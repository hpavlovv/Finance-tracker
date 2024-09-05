import './App.css';
import { useState } from 'react';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 style={{textAlign: 'center'}}>This is a basic Finance-tracker.</h1>
//         <p>
//           Income / Month:
//         </p>
//         <p>
//           Expenses:
//         </p>
//         <p>
//           Monthly Savings: 
//         </p>
//       </header>
//     </div>
//   );
// }

// function App() {
//   const [inputFields, setInputFields] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputFields);
//   }


// return (
//   <div className="IField">
//   <br></br>

//   <form onSubmit={handleSubmit}>
//     <div>Income / Month: {inputFields}</div>
//       <input type="number" value={inputFields} onChange={(e)  => setInputFields(e.target.value)}/>
//       <input type="submit" />
//   </form>

//   <form onSubmit={handleSubmit}>
//     <div>Expenses: {inputFields}</div>
//       <input type="number" value={inputFields} onChange={(e)  => setInputFields(e.target.value)}/>
//       <input type="submit" />
//   </form>

//   <form onSubmit={handleSubmit}>
//     <div>Monthly Savings: {inputFields}</div>
//       <input type="number" value={inputFields} onChange={(e)  => setInputFields(e.target.value)}/>
//       <input type="submit" />
//   </form>



//   </div>


// )}


import InputField from './inputField'; // Import the reusable component

function App() {
  const handleIncomeSubmit = (value) => {
    alert(`Submitted Income: ${value}`);
  };

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Basic Finance Tracker</h1>
      <InputField label="Income / Month" onSubmit={handleIncomeSubmit} />
      <InputField label="Expenses" onSubmit={handleIncomeSubmit} />
      <InputField label="Monthly Savings" onSubmit={handleIncomeSubmit} />
    </div>
  );
}



export default App;
