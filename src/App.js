import React from 'react';
import Header from './component/Header';
import Balance from './component/Balance';
import Income from './component/IncomeExpenses'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Income />
      </div>
    </div>
  );
}

export default App;
