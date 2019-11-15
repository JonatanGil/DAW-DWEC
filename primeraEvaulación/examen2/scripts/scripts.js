var ganar = true;
window.onload = function() {
    var teclado = document.getElementById("teclado");

    for(let teclaActual = 65; teclaActual <= 90;teclaActual++) {
        tecla = document.createElement("button");
        tecla.innerText = String.fromCharCode(teclaActual);
        tecla.classList.add("tecla");
        teclado.appendChild(tecla);
        tecla.addEventListener('click',tipoLetra);
        
 
    }

    //adevenlistener para todo el teclado faltaria poner margen para abcedario solo
    window.addEventListener('keydown',tipoLetra);

    peliculaRandom();
    monigote();

}

function puntuacion(letraParaPuntos){

    var puntos = document.getElementById("puntos");
    //cuadrar puntos
    var sumar=0;

    //contar cuantas veces esta la letra a sumar
    console.log(peliculaActual);
    for (let index = 0; index < peliculaActual.length; index++) {
        //si existe la letrea mas uno para despues multiplicar por extremidadesvivas 10 entotal *1000-100 cada vez que falte una
        if(peliculaActual[index]==letraParaPuntos){
            sumar++;
        }
        
    }

    //pasar a int
    var puntosActuales = parseInt(puntos.innerHTML);
    //sumar resultado
    sumar=sumar*extremidadesVistas;
    var resultado = puntosActuales+sumar;
    
    //añadimos los 0 a la derecha
    for (let j = resultado.length; j < 8; j++) {
        resultado = "0"+resultado;

        
    }
    
    puntos.innerText=resultado;
    console.log(resultado);


    if(sumar==0){
        quitarVida();
    }

    gameover();
    ganador();

}

function ganador(){


    //falta que cuando las letras de la pelicula actual, esten en las letras abc puestas has ganado
    for (let k = 0; k < peliculaActual.length; k++) {
        
        for (let p = 0; p < abc.length; p++) {
            if(peliculaActual[k]==abc[p]){
                ganar = true;
                p==100;
            }
        }

        
    }

}

function gameover(){

    if(extremidadesVistas==0){
        alert("Fin del juego");
    }

}

function quitarVida(){

   var extremidades = document.getElementsByClassName("extremidad");


   //cada vez que fallas se inserta una extremidad del papa noel
    for (let a = 0; a < extremidades.length; a++) {

        //si opacity es 0 pones opacity a 1 y sales del for, a =10, pondria break pero  no te gusta
        if(extremidades[a].style.opacity=="0"){
            extremidades[a].style.opacity="1";
            a=10;
        }
        
    }
    extremidadesVistas-=100;


}

function monigote(){
    var papaNoel = document.getElementsByClassName("extremidad");
    var i;
    for (i = 0; i < papaNoel.length; i++) {
        papaNoel[i].style.opacity="0";
    } 

    //si la letra no esta del 1 al 10 1 la cabeza 2 tronco etc, pero no me da tiempo
    //cambiar opacity a 1 cada vez q falla letrr

}

function peliculaRandom(){


    var peliculasDiv = document.getElementById("tituloPelicula");
    peliculasDiv.classList.add("peliculaTexto");
    var num = Math.floor(Math.random() * 3);

    var pelicula = peliculas[num];
    peliculaActual = pelicula;

    try {

    for (let g = 0; g < pelicula.length; g++) {
        //creo div 
        var div = document.createElement("div");
        div.classList.add("letrasPeliculas");
        
        //letra vacio lo pongo todo transparente si no imprimo letra
       if(pelicula[g]==" "){
            div.style.opacity="0";
       }else{
            div.innerText=pelicula[g];
       }
        peliculasDiv.appendChild(div);
        
    }
        /*peliculasDiv.innerText=pelicula;*/
        

    } catch (error) {

    }


}

function tipoLetra(ev){
    console.log(ev);
    if(ev.key){
        LetraPulsada(ev.key);
    }else{
        LetraPulsada(this.innerText);
    }
}

function LetraPulsada(ev){

    console.log(ev);

    var letra = ev;
    letra = letra.toLowerCase();

    /**ULTIMA LETRA PULSDASA*/

    //obtengo con el id la letra que e pulsado para indicar la ultima
    var ultimaLetra = document.getElementById('ultimaLetra');
    //le añado el class con el font score
    ultimaLetra.classList.add('ultimaLetra');

    //si esta vacio pues pongo una letra solo si no la quito con sub -1 y añado la nueva xD
    if(ultimaLetra==null){
        ultimaLetra.innerText = letra;
    }else{
        ultimaLetra.innerText=ultimaLetra.innerHTML.substring(0,ultimaLetra.innerHTML.length-1) +letra;
    }



        /* LAS LETRAS PULSADAS PARA MOSTRAR SIN REPETICION*/
    try {
        /*si esta vacio da error*/
        var letrasUsadas = document.getElementById("letrasUsadasLista");
    } catch (error) {
    }

    //si no tiene array la letra es que no la a utilizado la añadimos
    if(!abc.includes(letra)){

        //creo div
        var letrita = document.createElement("div");
        //metemos la clase css
        letrita.classList.add("letraUsada");
        //le metemos la clase letra para obtener despues el div para parpadeo de color
        letrita.classList.add(letra);
        //lo e intentado con value pero no se obtener el div por le value
        letrita.value=letra;
        //metemos la letra
        letrita.innerText=letra;
        //metemos el div creado en el div de letras usadas
        letrasUsadas.appendChild(letrita);
        //añadimos letrita para cuando termina la transiciones la retiramos de tecla repetira la quitamos
        letrita.addEventListener('transitionend', removeTrans);
        //metemos la letra ahid entro para que no se repita y salgan mas papanoeles y puntos
        abc.push(letra);

        puntuacion(letra);
    }else{
        //obtenemos el div apartir de la clase letra
        var a = document.getElementsByClassName(letra);
        console.log(a);
        //indicamos [0] porque para este caso no se repetira nunca y le indicamos background red trnas 1s
        a[0].classList.add("letraParpadeo");
        

    }

}

function removeTrans(){
    this.classList.remove("letraParpadeo");
}

//pelis
var peliculas = ["cuento de navidad", "pesadillas antes de navidad", "jack frost"];
var peliculaActual="";
//letras descubiertas
var abc = []; 
//para sumar puntos
var extremidadesVistas=1000;
