errores = new Array();
errores[0]="Nombre invalido";
errores[1]="Apellido invalido";
errores[2]="e-mail invalido";
errores[3]="DNI no valido";
errores[4]="contrasela invalida";
errores[5]="Contraseña no igual";
errores[6]="IP invalida";

var contraReal;

  function nombreCorrecto(nombre){
    var nombreOk = document.valor.String.value;
    if(ctype_alpha (nombre)){

    var expresionRegular= /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]* )+$/;

    if(expresionRegular.test (nombre.value) == true){errores[0]="Correcto"; }else{
      errores[0]="El nombre es incorrecto";
    }
    alert(nombreOk);
  }

  
  function apellidoCorrecto(apellido){

    var expresionRegular= /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

    if(expresionRegular.test (apellido.value) == true){errores[1]="Correcto"; }else{
        errores[1]="El apellido es incorrecto";
    } 
  }

  function correoCorrecto(correo){

    var expresionRegular=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
      if (expresionRegular.test (correo.value) == true){
        /*alert("La dirección de email " + correo + " es correcta.");*/
        
        errores[2]="Correcto";
      } else {
        errores[2]="La dirección de email es incorrecta";
      }
    }

  function pwdCorrecto(pwd){

      var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]){8,50}/;

      if(regexp_password.test (pwd.value)){
        errores[4]="Correcto";
        contraReal=pwd.value;
      }else{
        errores[4]="Contraseña invalida";
      }

    }

  function pwdRepeatCorrecto(pwd2){
     
     var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&]){8,50}/;

        if(contraReal==pwd2.value){
          /*5 PARA SI LA PWD ES IGUAL A LA INTRODUCIDA Y ES CORRECTA 5 DEL ARRAY*/
          errores[5]="Correcto";
        }else{
          errores[5]="Contraseña no igual";
        }
    }

  }

  function ipValidar(ip){
  }
  function DNICorrecto(dni){
    
  var numero; 
  var letr;
  var letra;
  var expresion_regular_dni;

  /*cosa copiada de ethernet*/
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
  /*si no cumple 8 digitos y una letra todo junto error*/
  if(expresion_regular_dni.test (dni.value) == true){
  /*Obtienes los numeros menos el ultimo que es la letra*/
  numero = dni.value.substring(0,dni.value.length-1);

  /*Obtienes la letra el ultimo digito*/
  letr= dni.value[dni.value.length-1];

   /*divides el dni por 23 para saber que letra toca*/
  numero = numero % 23;

  letra='TRWAGMYFPDXBNJZSQVHLCKET';

  /*obtienes la letra para validar con el dni enconcreto*/
  letra=letra[numero];

  /*pasamos la letra a uper por si acaso lo a puesto en minuscula*/
  if (letra!=letr.toUpperCase()) {
  errores[3]="Dni erroneo, la letra del DNI no coincide";
  }else{
  errores[3]="Correcto";
  }

  }else{
  errores[3]="Dni erroneo, formato no válido";
  }
  }


  function enviar(){

    todoOk = false;

    for (let i = 0; i < 7; i++) {
      
      if(errores[i]="Correcto"){
        todoOk = true;
      }else{
        todoOk = false;return;
      }
      
    }

    if(!todoOk){
    alert("Nombre:"+errores[0]+"\n"+
    "Apellidos:"+errores[1]+"\n"+
    "e-mail:"+errores[2]+"\n"+
    "DNI:"+errores[3]+"\n"+
    "Password:"+errores[4]+"\n"+
    "Password es igual?:"+errores[5]+"\n"+
    "IP del equipo:"+errores[6]+"\n");
    }else{
      alert("TODO OK");
    }

  }
