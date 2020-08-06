import React, {useState} from 'react';
import { GlobalContext } from '../context/globalState'
import './styling.css';

function Input() {

let [text,setText] = useState("");
let [amount,setAmount] = useState("0");

function onSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
 
e.preventDefault();

if (amount === "")
{
    amount = "0";
}

if (text ===""){

  text = "no text"
}

let newTransaction = {id: Math.floor(Math.random() * 100000000), details: text, amount: amount}
addTransaction(newTransaction);

setAmount("");
setText("")
}




const { addTransaction } = React.useContext(GlobalContext);
  return (

    <div className = "outerContainerInput">
    <div>
      
     <form id = "form">
         <label > Details: 
         <input className = "input" type = "text" value = {text} onChange = {(e) => setText(e.target.value)} placeholder = "Enter Details ..."/>
        </label>

        <label > Amount:
         <input className = "input" type = "number" value = {amount} onChange = {(e) => setAmount(e.target.value)} placeholder = "Enter Amount ..."/>
        </label>
     </form>
  
     <button id = "addTransaction" onClick = {(e)=>{onSubmit(e)}}>Add Transaction</button>
    </div>
    </div>
  );
}

export default Input;
