import React from 'react';
import './App.css';
import DisplayAmount from './components/displayAmount'
import Input from './components/input'
import Transactions from './components/transactions'
import {GlobalProvider} from './context/globalState'
import { initNotification } from './services/firebaseService';
import firebase from 'firebase';

function App() {

  const [notificationPerm,setNotificationPerm] = React.useState("");

  const messaging = firebase.messaging();
  initNotification().then((perm)=>{

     
    if(perm === "granted"){ 

      setNotificationPerm("enabled");
      messaging.getToken().then((currentToken) => {
          if (currentToken) {
              console.log("TOKEN")
              console.log(currentToken);
          } else {
            console.log('No Instance ID token available. Request permission to generate one.');

          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });

        
  }
    if(perm === "denied"){ 

      setNotificationPerm("disabled");
    }


  })


//initNotification();



  return (
    <GlobalProvider>

    

      <h1 id = "header" >Expense Tracker</h1>
  <p> {notificationPerm ? 'Notifications: ' + notificationPerm : ""}</p>
    <div className="App">
     
    <DisplayAmount></DisplayAmount>
    <Transactions></Transactions>
    <Input></Input>
    
    </div>
    </GlobalProvider>
  );
}

export default App;
