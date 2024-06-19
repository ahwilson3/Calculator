// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="." onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="=" onClick={handleEquals} />
        <Button value="C" onClick={handleClear} />
      </div>
    </div>
  );
};

const Button = ({ value, onClick }) => (
  <button onClick={() => onClick(value)}>
    {value}
  </button>
);

export default Calculator;
