importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

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
  firebase.messaging();