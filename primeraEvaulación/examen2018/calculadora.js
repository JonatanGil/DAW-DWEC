window.onload = function(){

    let a =  document.getElementsByClassName("boton");

    for (let i = 0; i < a.length; i++) {

        a[i].addEventListener("click", sombraBoton);
        
    }
    

    function sombraBoton(evento){

        /*alert(isNaN(this.innerText));
        alert(isNaN(this.innerInt));*/
        //el valor que clicamos
        var real=this.innerText;


        let simbolos = ["+","-","*","%","/"];

        //si no es un numero no entra para imprimir numero.
        if(!isNaN(real)){
         for (var num = 0; num < 10; num++) {

            if(real==num){
                cambiarTexto(num);
            }
            
          }
        }

        //si es una coma pone en la cadena una coma.
        if(this.innerText==(".")){
            cambiarTexto(".");
        }
        
        if(this.innerText==("«")){
            retroceder();
       }

    if(confirmarSimbolo(real)){

       if(this.innerText==("+")){
           cambiarTexto("+");
          }
       if(this.innerText==("-")){
        cambiarTexto("-");
        }
        if(this.innerText==("x")){
            cambiarTexto("x");
        }
        if(this.innerText==("%")){
            cambiarTexto("%");
        }
        if(this.innerText==("/")){
            cambiarTexto("/");
        }
       

    }

    if(this.innerText==("=")){
        calcular("=");
        
    }
    if(this.innerText==("()")){
        cambiarTexto("()");
    }
    if(this.innerText=="C"){
        reset()
    }   
    }

    function reset(){

        var input = document.getElementById("texto");
        var aux = input.getAttribute("value");

        input.setAttribute("value", "0");
    }

    function calcular(){

        var input = document.getElementById("texto");
        var aux = input.getAttribute("value");

        input.setAttribute("value", eval(aux));

    }

    function confirmarSimbolo(real){

        var confirm = false;

        //compruebo si el ultimo digito, es decir el boton que clicamos es un digito
        if(real == "+" | real == "-" | real == "x" | real == "%" | real == "/"){

            var input = document.getElementById("texto");
            var aux = input.getAttribute("value");

            //obtengo el penultimo digito para comprobar con el real, si los dos son un digito confirm es false y no inserta otro simbolo.
            //si el penultimo no es un simbolo inserta un simbolo

            var penultimoDigito = aux.substr(aux.length-1,1)

            if(penultimoDigito != "+" && penultimoDigito != "-" && penultimoDigito != "x" && penultimoDigito != "%" && penultimoDigito != "/" ){
                confirm = true;
            }
        }
        return confirm;

    }

    function retroceder(){
        var input = document.getElementById("texto");
        var aux = input.getAttribute("value");
        if(aux.length!=1){
          input.setAttribute("value", aux.substring(0,aux.length-1));
        }else{
            input.setAttribute("value",0);
        }
    }


    function cambiarTexto(texto){


    if(texto=="."){
          var input = document.getElementById("texto");
          var aux = input.getAttribute("value");
          
          if(aux.indexOf(",") != -1){
              //alert("como contiene , no insertamos otra");
        }else{
            //insertamos ,
            input.setAttribute("value", aux+",");
        }
    }else{



        var input = document.getElementById("texto");
        var aux = input.getAttribute("value");

           if(aux==0){
               console.log(texto);
               console.log(isNaN(texto));
               if(!isNaN(texto)|texto==0){
                input.setAttribute("value", texto);
               }else{

                input.setAttribute("value", aux+texto);
               }
              
             }else{
                  input.setAttribute("value", aux+texto);
            }
    }
    }





};