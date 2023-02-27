//function myFunction() {
//    document.getElementById("demo").innerHTML = "Hello, it's working!";
//}

document.getElementById("login-btn1").addEventListener(
    "click",
    () => {
      document.getElementById("login-grupo").hidden = true;
      document.getElementById("login-usuario").hidden = false;
      document.getElementById("login-contraseña").hidden = true;
    },
    false
);

document.getElementById("login-btn2").addEventListener(
    "click",
    () => {
      document.getElementById("login-grupo").hidden = true;
      document.getElementById("login-usuario").hidden = true;
      document.getElementById("login-contraseña").hidden = false;
      
    },
    false
);
