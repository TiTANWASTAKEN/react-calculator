import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setDisplay('0');
      return;
    }
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
      return;
    }
    if (value === '+/-') {
      if (display.charAt(0) === '-') {
        setDisplay(display.substring(1));
      } else {
        setDisplay('-' + display);
      }
      return;
    }
    if (value === '%') {
      setDisplay((parseFloat(display) / 100).toString());
      return;
    }
    setDisplay((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
  };

  return (
    <div className="main">
      <div className="title">Calculator</div>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('AC')}>AC</button>
        <button onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button className="orange" onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="orange" onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="orange" onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="orange" onClick={() => handleButtonClick('+')}>+</button>
        <button className="zero" onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="orange" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
};

export default App;
