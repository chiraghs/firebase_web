

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
     document.getElementById("login-page").style.display="none";
     document.getElementById("welcome-page").style.display="block";
      // ...
    } else {
      // User is signed out.
      // ...
      document.getElementById("login-page").style.display="block";
      document.getElementById("welcome-page").style.display="none";
     
    }
  });

  function login(){
    var email=document.getElementById("uemail").value;
    var password=document.getElementById("upass").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
        }
  