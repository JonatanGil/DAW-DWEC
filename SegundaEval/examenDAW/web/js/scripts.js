var juego;
var itemsHTML;
var items;
var miJugada;
var jugadaMaquina;
var misPuntos = 0;
var maquinaPuntos = 0;
var mensaje = "";
var fin = false;
var puntuo = false;
var puntua = false;
var puntos = 0;
var mensajes = {};

window.onload = function () {
    ajaxRules();
    ajax();
    itemsHTML = document.getElementById("selector").getElementsByClassName("item");
    document.getElementById("continuar").addEventListener("click", continuar);
}
/********************************************************
 * Función continuar():
 * Realiza las labores de incicializar los elementos del tablero de juego. Teniendo
 * en cuenta, si el juego ya ha finalizado.
 ********************************************************/
function continuar() {
    puntuo = false;
    puntua = false;
    //Volvemos a ocultar el mensaje;
    document.getElementById("mensaje").className = "invisible";
    document.getElementById("proteccion").className = "invisible";
    document.getElementById("deliveracion").className = "invisible";
    if (fin) {
        document.getElementById("yo").innerHTML = "";
        document.getElementById("el").innerText = "";
        fin = false;
        misPuntos = 0;
        maquinaPuntos = 0;
    }
    //Reiniciamos todo menos los contadores de puntos
    cargar();

}

/********************************************************
 * Función comprobarResultado()
 * Comprueba las jugadas de cada jugador, deliberando y viendo quien gana
 */
function comprobarResultado() {


    switch (miJugada) {
        case "rock":
            if (jugadaMaquina == "paper") { puntua = true; mensaje = mensajes.papi }
            if (jugadaMaquina == "scissors") { puntuo = true; mensaje = mensajes.piti }
            if (jugadaMaquina == "lizard") { puntuo = true; mensaje = mensajes.pila }
            if (jugadaMaquina == "spock") { puntua = true; mensaje = mensajes.sppi }
            break;
        case "paper":
            if (jugadaMaquina == "rock") { puntuo = true; mensaje = mensajes.papi }
            if (jugadaMaquina == "scissors") { puntua = true; mensaje = mensajes.tipa }
            if (jugadaMaquina == "lizard") { puntua = true; mensaje = mensajes.lapa }
            if (jugadaMaquina == "spock") { puntuo = true; mensaje = mensajes.pasp }
            break;
        case "scissors":
            if (jugadaMaquina == "rock") { puntua = true; mensaje = mensajes.piti }
            if (jugadaMaquina == "paper") { puntuo = true; mensaje = mensajes.tipa }
            if (jugadaMaquina == "lizard") { puntuo = true; mensaje = mensajes.tila }
            if (jugadaMaquina == "spock") { puntua = true; mensaje = mensajes.spti }
            break;
        case "lizard":
            if (jugadaMaquina == "rock") { puntua = true; mensaje = mensajes.pila }
            if (jugadaMaquina == "paper") { puntuo = true; mensaje = mensajes.lapa }
            if (jugadaMaquina == "scissors") { puntua = true; mensaje = mensajes.tila }
            if (jugadaMaquina == "spock") { puntuo = true; mensaje = mensajes.lasp }
            break;
        case "spock":
            if (jugadaMaquina == "rock") { puntuo = true; mensaje = mensajes.sppi }
            if (jugadaMaquina == "paper") { puntua = true; mensaje = mensajes.pasp }
            if (jugadaMaquina == "scissors") { puntuo = true; mensaje = mensajes.spti }
            if (jugadaMaquina == "lizard") { puntua = true; mensaje = mensajes.lasp }
            break;
        default: break;
    }

    console.log(juego);
    if (puntuo && !puntua) {
        misPuntos += parseInt(juego.getElementById(miJugada).getElementsByTagName("puntos")[0].innerHTML);
    } else if (!puntuo && puntua) {
        maquinaPuntos += parseInt(juego.getElementById(jugadaMaquina).getElementsByTagName("puntos")[0].innerHTML);
    } else {
        mensaje = "¡Empate!";
    }
    setTimeout(deliverar, 500);
    /**********/

}

/*********************************************************
 * función deliverar()
 * Mensaje estúpido para simular una deliveración de la máquina.
 ********************************************************/
function deliverar() {
    document.getElementById("proteccion").className = "visible";
    document.getElementById("deliveracion").className = "visible";
    setTimeout(mostrarMensaje, 2000);
}

/**********************************************************
 * función pintarPuntos()
 * @param puntos
 * @param totalPuntos
 * comprueba los puntos que tiene que pintar, y comprueba si el total
 * de puntos del jugador ganador, supera o igual los 10 que necesita para
 * finalizar el juego
 **********************************************************/
function pintarPuntos(puntos, totalPuntos) {
    var contenedor;

    if (puntuo && totalPuntos >= 10) {
        mensaje = "Has ganado!";
        fin = true;
    }
    if (puntua && totalPuntos >= 10) {
        mensaje = "Has perdido!";
        fin = true;
    }

    if (puntuo) contenedor = document.getElementById("yo");
    else if (puntua) contenedor = document.getElementById("el");

    if (puntuo || puntua) {
        for (let i = 0; i < puntos; i++) {
            var punto = document.createElement("div");
            punto.className = "punto";
            if (puntuo) punto.classList.add("mio");
            else punto.classList.add("suyo");
            contenedor.appendChild(punto);
        }
    }
}

/*******************************************************
 * función mostrarMensaje()
 * Muestra el mensaje resultado de la deliberación de cada unaa de las jugadas.
 * Este mensaje es extraído del Array llamado "mensajes", y que ha sido cargado previamente
 * mediante una descarga asíncrona del archivo "mensajes.json" que hay alojado en el servidor.
 *******************************************************/
function mostrarMensaje() {
    var jugada;
    if (puntuo) {
        jugada = miJugada;
        puntosJugada = misPuntos;
    }
    else if (puntua) {
        jugada = jugadaMaquina;
        puntosJugada = maquinaPuntos;
    }

    pintarPuntos(parseInt(juego.getElementById(jugada).getElementsByTagName("puntos")[0].innerHTML), puntosJugada);
    var msg = document.getElementById("mensaje");
    msg.getElementsByTagName("p")[0].innerHTML = mensaje;
    msg.className = "visible";
    document.getElementById("proteccion").className = "visible";
}

/***********************************************
 * función selecciónMáquina()
 * Cuando el jugador selecciona su jugada, situando la imagen correspondiente en la
 * celda de juego, la máquina actua calculando un número aleatorio y eligiendo su jugada.
 *************************************************/
function seleccionMaquina() {
    //Calculamos un número random de 0 a 4
    var eleccion = Math.floor(Math.random() * 5);
    //colocamos la elección de la máquina en su círculo
    jugadaMaquina = items[eleccion].id;
    document.getElementById("enemigo").getElementsByTagName("img")[0].src = items[eleccion].getElementsByTagName("imagen")[0].innerHTML;
    comprobarResultado();
}

/************************* CARGA AJAX ********************************/

//Cargar desde el servidor info.xml
//Enlazar cada item con su correspondiente elemento HTML

//Cargar desde el servidor mensajes.json
//Enlazar los mensajes con el array hecho para ese uso "mensajes".

function ajaxRules() {

}



function ajax() {



    var requestURL = './info.xml';

    var request = new XMLHttpRequest();


    request.open('GET', requestURL);
    request.responseType = 'xml';
    request.send();

    request.onload = function () {


        var xmlDoc = request.responseXML;
        items = xmlDoc.getElementsByTagName("item");
        //console.log(x[0].childNodes[1].textContent);
        //console.log(x[0].childNodes);
        //piedra

        var arribaImagenes = document.querySelectorAll(".item");
        var arribaImagenes2 = document.querySelectorAll(".contitem");
        //juego xml sin parsear????
        juego = xmlDoc;


        for (let i = 0; i < 5; i++) {

            var item = items[i].getAttribute("id");
            //console.log(arribaImagenes2[i]);
            //añado al los selectores el id en ingles apra comparar?
            
            for (let index = 1; index < 6; index = index + 2) {


                //EL ID es la Piedra Papel con la primera mayuscula apsar a minuscula Ç?
                var mano = xmlDoc.getElementById(item).childNodes[3].textContent;
                //console.log(xmlDoc.getElementById(item).childNodes[3].textContent);

                item[i].id = mano;

                if (index == 1) {


                    //obtenemos el valor y la imagen
                    var valor = xmlDoc.getElementById(item).childNodes[5].textContent;
                    //console.log(xmlDoc.getElementById(item).childNodes[5].textContent);
                    //img
                    var imgRuta = xmlDoc.getElementById(item).childNodes[1].textContent;
                    // console.log(xmlDoc.getElementById(item).childNodes[1].textContent);
                    //piedra pael lagarto etc

                    //arribaImagenes[i].setAttribute("id", mano);

                    var imagen = document.createElement("img");
                    imagen.src = imgRuta;
                    imagen.setAttribute("value", valor);
                    imagen.id = mano;
                    arribaImagenes2[i].childNodes[3].innerHTML=mano;
                    console.log(arribaImagenes);
                    arribaImagenes[i].appendChild(imagen);
                }
                //arribaImagenes[i].style.backgroundImage = url(imgRuta); 
                //document.body.style.backgroundImage = "url('img_tree.png')"; 

            }



        }




    }
    //        cargarMensajes();




    //  MENSAJES



    fetch("./mensajes.json")
        .then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            }
        }).then(resjson => {

            mensajes = resjson.mensajes[0];
            //console.log(mensajes);


        }).catch(function (err) {
            //console.log(err+"+asdas");
        });



    draganddrop();


}


/*************************** FIN CARGA AJAX **************************/

/***************************DRAG AND DROP ****************************/

function draganddrop() {

    var arribaImagenes = document.querySelectorAll(".item");
    //var arribaImagenes = document.querySelectorAll("img");

    /*
    var selecionado = document.getElementById("seleccionado");

    console.log(selecionado);*/
   /* console.log(arribaImagenes[1]);
    console.log(arribaImagenes[1].childNodes[0]);
    console.log(arribaImagenes[1].childNodes[1]);*/

    for (let a = 0; a < arribaImagenes.length - 1; a++) {
        arribaImagenes[a].addEventListener('dragstart', drag);

    }

    //console.log(arribaImagenes[5]);

    arribaImagenes[5].addEventListener("dragover", allowDrop);
    arribaImagenes[5].addEventListener('drop', drop);



}



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    //console.log(ev);
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    //console.log(ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //console.log(document.getElementById(data));
    ev.target.appendChild(document.getElementById(data));

    //console.log(data);
    miJugada = data;

    switch (data) {
        case "Tijeras":
            data = "scissors";
            break;
        case "Piedra":
            data = "rock";
            break;
        case "Papel":
            data = "paper";
            break;
        case "Lagarto":
            data = "lizard";
            break;
        case "Spock":
            data = "spock";
            break;
    }
    //data en ingles
    //console.log(data);
    //mijugada en ingles
    miJugada=data;
    //juego contenedores?=?=?= de los items
    //juego = document.getElementById(data);
    seleccionMaquina();
    //continuar();
}




/***************************FIN DRAG AND DROP **************************/


function cargar(){
    
    ajax();
    document.getElementById("seleccionado").innerHTML="";
    var arribaImagenes = document.querySelectorAll(".item");
    console.log(arribaImagenes);
    arribaImagenes[0].innerHTML="";

    arribaImagenes.forEach(element => {
            element.innerHTML="";
    });


}