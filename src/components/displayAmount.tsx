import React from 'react';
import {GlobalContext} from '../context/globalState'
import './styling.css';
 




function DisplayAmount() {
 
const {state} = React.useContext(GlobalContext);

let income = 0;
let expense = 0;

state.map(val => {
    
if (parseInt(val.amount) > 0) {

income = income + parseInt(val.amount);

}

if (parseInt(val.amount) < 0){

  expense = expense + Math.abs(parseInt(val.amount))
}

return null;

})

let balance = income - expense;


  return (
    <div className = "wrapper">
     <div id = "outerContainer">
        <div id = "innerContainer">
            <h2 id = "creditHeading">Debit</h2>
            <hr></hr>
            <h3 id = "creditAmount">${income}</h3>
        </div>
        <div id = "innerContainer">
            <h2 id = "debitHeading">Credit</h2>
            <hr></hr>
            <h3 id = "debitAmount">${expense}</h3>
        </div>
        
  <h2 id = "balance">Balance: ${balance}</h2>
     </div>

     </div>
   
  );
}

export default DisplayAmount;
