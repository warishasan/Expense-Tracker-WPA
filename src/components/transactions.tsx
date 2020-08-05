import React from 'react';
import { GlobalContext } from '../context/globalState'
import './styling.css';

function Transactions() {

    const { state, deleteTransaction } = React.useContext(GlobalContext);

    
    
    return (

        <div className = "wrapper">
        <div id = "transactionContainer">

            {state.map((items) => {

                return <li className= "listItems" key={items.id}>
                    
                    <button id = 'deleteButton' onClick = {()=>{deleteTransaction(items.id)}}>X</button>
                    <span>
                    <h3 className = {parseInt(items.amount)<0 ? 'listItemDetailMinus':'listItemDetailPlus'}>{items.details} ( ${items.amount} )</h3>
                  
                    </span>
                
                </li>
            }


            )}

        </div>

        </div>
    );
}

export default Transactions;


