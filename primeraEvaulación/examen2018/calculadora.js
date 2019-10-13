window.onload = function(){

    let a =  document.getElementsByClassName("boton");

    for (let i = 0; i < a.length; i++) {

        a[i].addEventListener("click", insertarBoton);
        
        a[i].addEventListener("mousedown", sombra);
        a[i].addEventListener("mouseup", QuitSombra);
    }
    
    
    document.addEventListener("keypress", teclao, false);


    function sombra(boton){ 
        /*Añado una clase al css, pero no se si se puede en el pdf pone solo con js*/
        this.classList.add("HacerSombra");

    }

    function QuitSombra(boton){

        this.classList.remove("HacerSombra");

    }

    function teclao(event){
        
        var keyCode = event.keyCode;
        /*
        alert(event.key);
        alert(keyCode.key);*/
        alert(keyCode);

        //numeros extaños del teclado de arriba que lso numeros
        //del 1 al 9 son los mismo en todas las partes del taclado
      if(keyCode>=48 && keyCode<=57 | keyCode>=96 && keyCode<=105){
        cambiarTexto(event.key);
      }

      //43+  45-  47/  42*  13=   46,   37%



      //45 insert
      //delete 46 se supone, mi teclado al ahcer clic en el alert no sale nada con las teclas raras del teclado, sera porque es uno mecanico con numpad aparte.
      //del 96 al 105 del 0 al 9 del numpad no me funciona lo pongo igual
      //110 decimal point 188 coma

      //el 45 es mi restar el 109 tambien, el 45 pued ser enter por google puede hacer cosas raras

      if(keyCode==43|keyCode==107){cambiarTexto("+");}
      if(keyCode==45|keyCode==109){cambiarTexto("-");}
      if(keyCode==47|keyCode==111){cambiarTexto("/");}
      if(keyCode==42|keyCode==106){cambiarTexto("x");}
      if(keyCode==13){calcular("=");}
      if(keyCode==46|keyCode==188|keyCode==110){cambiarTexto(".");}
      if(keyCode==37){cambiarTexto("%");}





     
    }



    function insertarBoton(evento){

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
        aux = aux.replace("x","*");


        for (var index = 1; index < 10; index++) {
            
         aux = aux.replace(")"+index,")*"+index);
            
        }

        /*
        var result = eval(aux);*/
        /*No funciona no se, NaN es lo que da al imprimir 0, e probado con Infinity  -   Number.NaN pero nada*/ 
       
       /* if( result=="NaN"){
            alert("Infinito");
            aux=0;
        }*/

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


    if(texto=="()"){

        var input = document.getElementById("texto");
        var aux = input.getAttribute("value");
        var par1="(";
        var par2=")";
        aux = par1+aux+par2;
        input.setAttribute("value", aux);

    }else{

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

}



};