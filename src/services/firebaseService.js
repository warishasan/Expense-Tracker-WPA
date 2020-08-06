import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA2fIrE87kJHobvBO81MVkTgn55iuODxb8",
  authDomain: "expense-tracker-93454.firebaseapp.com",
  databaseURL: "https://expense-tracker-93454.firebaseio.com",
  projectId: "expense-tracker-93454",
  storageBucket: "expense-tracker-93454.appspot.com",
  messagingSenderId: "238501012154",
  appId: "1:238501012154:web:8e98d38cfa384086dfd883"
};
  firebase.initializeApp(firebaseConfig);
 // const messaging = firebase.messaging();

  /*
export function initNotification() {
    
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        
        
        if(permission === "granted"){ 


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
        })
    
}

*/




export function initNotification() {
    
   return Notification.requestPermission();
    
}

