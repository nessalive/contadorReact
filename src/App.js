import React, {useState}from 'react';
import './App.css';
import './index.css';

const App = () =>{
    const [conta, setConta] = useState(0);
    return (
      <div className="App">
        <h1 className="title">Contador</h1>
        <h2 className="mostrar">{conta}</h2>
        <div className="interno">
          <button className="add" onClick={() => setConta(conta+1)}>+</button>
          <button className="zerar" onClick={() => setConta(0)}>Reset</button>
          <button className="menos" onClick={() => setConta(conta-1)}>-</button>
        </div>
      </div>
    )};


export default App;
