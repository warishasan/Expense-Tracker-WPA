import React from 'react';
import './App.css';
import DisplayAmount from './components/displayAmount'
import Input from './components/input'
import Transactions from './components/transactions'
import {GlobalProvider} from './context/globalState'
import './components/styling.css';

function App() {


  return (
    <GlobalProvider>

      <h1 id = "mainHeading">Expense Tracker Application</h1>
    <div className="App">
     
    <DisplayAmount></DisplayAmount>
    <Transactions></Transactions>
    <Input></Input>
    
    </div>
    </GlobalProvider>
  );
}

export default App;
