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
//ADD YOUR FIREBASE LINKS HERE


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"Adding Room Name"});
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr> ";
      document.getElementById("output").innerHTML+=row;
      
       //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";
}