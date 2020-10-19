import React from 'react';
import './App.css';

//importing components
import Balance from './Balance';
import TransactionList from "./TransactionsList";
import AddTransaction from "./AddTransaction";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Expense Tracker</h1>
      <Balance />
      <TransactionList />
      <hr></hr>
      <AddTransaction />
    </div>
  );
}

export default App;
