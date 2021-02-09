//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCkvTqJwcrEeRfTC9fZ2qoDzPtz5S6714s",
      authDomain: "kwitter-45c78.firebaseapp.com",
      databaseURL: "https://kwitter-45c78-default-rtdb.firebaseio.com",
      projectId: "kwitter-45c78",
      storageBucket: "kwitter-45c78.appspot.com",
      messagingSenderId: "456919426472",
      appId: "1:456919426472:web:58a60a29c742b0d41ee99d",
      measurementId: "G-2VVRMWRSFQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
