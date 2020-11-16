import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tic Tac Toe</h2>
      </header>
      <Board/>
    </div>
  );
}

export default App;
