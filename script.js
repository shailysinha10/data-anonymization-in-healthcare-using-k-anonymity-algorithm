function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usertype = document.getElementById("usertype").value;
  
    if (username === "" || password === "") {
      document.getElementById("message").innerHTML = "Please enter both username and password.";
      return;
    }
  
    if (usertype === "admin") {
      if (username === "admin" && password === "admin123") {
        window.location.href = "admin.html";
      } else {
        document.getElementById("message").innerHTML = "Incorrect username, usertype or password.";
      }
    } else if (usertype === "doctor") {
      if (username === "doctor" && password === "doctor123") {
        window.location.href = "doctor.html";
      } else {
        document.getElementById("message").innerHTML = "Incorrect username, usertype or password.";
      }
    } else if (usertype === "researcher") {
      if (username === "researcher" && password === "researcher123") {
        window.location.href = "researcher.html";
      } else {
        document.getElementById("message").innerHTML = "Incorrect username, usertype or password.";
      }
    }
  }
  