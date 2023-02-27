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

const scriptURL = 'https://script.google.com/macros/s/AKfycby30vY6196iQ9ZuU5nrwSVamL-adeTP9UevDIsew5gCHGCgovWNq7VAxdLs40qqVYMN/exec'
            const form = document.forms['google-sheet']
function verificardatos( form ) {
              var ss = SpreadsheetApp.getActiveSpreadsheet();
              var sheetUsuarios = ss.getSheetByName('amauta');
              var dataUsuarios = sheetUsuarios.getDataRange().getValues();
              for( var i in dataUsuarios) {
                if( dataUsuarios[i][1] == form.usuario && dataUsuarios[i][2] == form.contrasena && dataUsuarios[i][4] == form.grupo){
                  var usuario = {
                    nombre: dataUsuarios[i][0]
                  }
                  return usuario;
                }
              }
              throw ('Datos incorrectos. Recarga la página.')
            }
            
            document.getElementById("login-btn3").addEventListener(
              "click",
              () => {
                preventDefault();
                var button = document.getElementById("login-btn3");
                var buttonperfil = document.getElementById("login-btn4");
                button.disable = true;
                scriptURL.run
                  .withSuccessHandler(buttonperfil.disable=false.hidden=false)
                  .withFailureHandler()
                  .verificardatos(form)
              },
              false
          );