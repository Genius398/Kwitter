var firebaseConfig = {
      apiKey: "AIzaSyCkvTqJwcrEeRfTC9fZ2qoDzPtz5S6714s",
      authDomain: "kwitter-45c78.firebaseapp.com",
      projectId: "kwitter-45c78",
      storageBucket: "kwitter-45c78.appspot.com",
      messagingSenderId: "456919426472",
      appId: "1:456919426472:web:58a60a29c742b0d41ee99d",
      measurementId: "G-2VVRMWRSFQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
