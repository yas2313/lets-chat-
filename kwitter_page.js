//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCbxXBoVri6nlFmTV-kU7l5lowxMAVV3X8",
      authDomain: "kwitter-563d1.firebaseapp.com",
      databaseURL: "https://kwitter-563d1-default-rtdb.firebaseio.com",
      projectId: "kwitter-563d1",
      storageBucket: "kwitter-563d1.appspot.com",
      messagingSenderId: "1004123201552",
      appId: "1:1004123201552:web:9cb416cd1f5aa509492a95"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
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
