import React from 'react';
import Header from './component/Header';
import Balance from './component/Balance';
import Income from './component/IncomeExpenses';
import Transaction from './component/Transaction';
import AddTransaction from './component/AddTransaction';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <Transaction />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
