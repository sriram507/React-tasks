import React, { useState } from 'react';
import './calculator.css'; // Create this file for custom styling

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Enter valid numbers');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }

    setResult(res);
    setHistory([...history, `${a} ${operator} ${b} = ${res}`]);
  };

  const handleReset = () => {
    setNum1('');
    setNum2('');
    setResult(null);
    setHistory([]);
  };

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>
      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>

      <div className="buttons">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>×</button>
        <button onClick={() => handleOperation('/')}>÷</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>

      <h3>Result: {result !== null ? result : '---'}</h3>

      <div className="history">
        <h4>History</h4>
        <ul>
          {history.map((entry, idx) => (
            <li key={idx}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
