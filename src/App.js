import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState(null);

  const adicionarValor = (valor) => {
    setInput((prev) => prev + valor);
  };

  const limpar = () => {
    setInput('');
    setResultado(null);
  };

  const calcular = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input);
      setResultado(res);
    } catch {
      setResultado('Erro');
    }
  };

  return (
    <div className="App">

      <div className="display">
        <div className="input">{input}</div>
        {resultado !== null && <div className="resultado-visor">= {resultado}</div>}
      </div>

      <div className="teclado">
        <button onClick={() => adicionarValor('7')}>7</button>
        <button onClick={() => adicionarValor('8')}>8</button>
        <button onClick={() => adicionarValor('9')}>9</button>
        <button className='action' onClick={() => adicionarValor('/')}>/</button>

        <button onClick={() => adicionarValor('4')}>4</button>
        <button onClick={() => adicionarValor('5')}>5</button>
        <button onClick={() => adicionarValor('6')}>6</button>
        <button  className='action' onClick={() => adicionarValor('*')}>*</button>

        <button onClick={() => adicionarValor('1')}>1</button>
        <button onClick={() => adicionarValor('2')}>2</button>
        <button onClick={() => adicionarValor('3')}>3</button>
        <button className='action' onClick={() => adicionarValor('-')}>-</button>

        <button onClick={() => adicionarValor('0')}>0</button>
        <button  className='action' onClick={() => adicionarValor('.')}>.</button>
        <button  className='action' onClick={() => adicionarValor('+')}>+</button>
        <button className='clear' onClick={limpar}>C</button>

        <button className='resultado' onClick={calcular}>=</button>
      </div>
    </div>
  );
}

export default App;
