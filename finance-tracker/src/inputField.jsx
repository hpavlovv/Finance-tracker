
import "./App.css";

import React, { useState } from 'react';

const InputField = ({ label, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);  // Trigger the callback with the current value
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>{label}: {inputValue}</div>
      <input 
        type="number" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default InputField;
