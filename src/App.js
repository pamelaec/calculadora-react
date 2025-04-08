import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Insira números válidos");
      return;
    }

    let res = 0;
    switch (operacao) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : 'Divisão por zero';
        break;
      default:
        res = 'Operação inválida';
    }

    setResultado(res);
  };

  return (
    <div className="App">
      <h1>Calculadora - React</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <div>
        <button onClick={() => calcular('+')}>+</button>
        <button onClick={() => calcular('-')}>-</button>
        <button onClick={() => calcular('*')}>*</button>
        <button onClick={() => calcular('/')}>/</button>
      </div>
      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
    </div>
  );
}

export default App;
