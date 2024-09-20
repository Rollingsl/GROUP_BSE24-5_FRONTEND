 importScripts(
   "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"
 );
 importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js"
 );

 const firebaseConfig = {
  apiKey: "AIzaSyAPZXE1lzpvQHXcvHF0EPp5KQOC4xOWdFo",
  authDomain: "hello-world-c12cf.firebaseapp.com",
  projectId: "hello-world-c12cf",
  storageBucket: "hello-world-c12cf.appspot.com",
  messagingSenderId: "926761744712",
  appId: "1:926761744712:web:563524a5403b9d185a9b7d",
  measurementId: "G-BMR9QQ4NMV"
 };

 firebase.initializeApp(firebaseConfig);

 const messaging = firebase.messaging();

 messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
   };

  self.registration.showNotification(notificationTitle, notificationOptions);
 });
