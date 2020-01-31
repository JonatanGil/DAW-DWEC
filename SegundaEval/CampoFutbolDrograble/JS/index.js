window.onload = init;

function init() {


  //crear equipos jugadores dos para probar

  crearJugadores();
  crearEquipos();

  var jugadores = document.getElementById("jugadores");

  jugadores.addEventListener("drop", drop);
  jugadores.addEventListener("dragover", allowDrop);


}


/*

<section id="container" ondrop="drop(event)" ondragover="allowDrop(event)">
  <div class="padre">
     <div class="tipo" id="fuego" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
     <div class="tipo" id="agua" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
  </div>
  <img class="pokemon" src="http://i65.tinypic.com/j0itlk.png" draggable="true" ondragstart="drag(event)" id="drag1"/>
  <img class="pokemon" src="http://i65.tinypic.com/214vxts.png" draggable="true" ondragstart="drag(event)" id="drag2"/>
  <img class="pokemon" src="http://i66.tinypic.com/ckf41.jpg" draggable="true" ondragstart="drag(event)" id="drag3"/>
  <img class="pokemon" src="http://i66.tinypic.com/2nq5pp3.png" draggable="true" ondragstart="drag(event)" id="drag4"/>
</section>
<div id="resultado">...</div>

*/

function crearEquipos() {

  var divEquipos = document.getElementById("equipos");

  var equipo = document.createElement("div");
  equipo.id = "equipo1";
  equipo.classList.add("equipo");

  equipo.addEventListener("drop", drop);

  equipo.addEventListener("dragover", allowDrop);

  divEquipos.appendChild(equipo);
}


function crearJugadores() {

  var divJugadores = document.getElementById("jugadores");
  console.log(divJugadores);

  fetch("../PHP/consulta.php")
        .then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            }
        }).then(resjson => {
            console.log(resjson);
        }).catch(function (err) {
        });






  var jugador = document.createElement("h1");
  jugador.id = "jugador1";
  //jugador.src='./img/índice.png';
  jugador.innerHTML = "O";
  jugador.classList.add("jugador");
  jugador.draggable = true;
  jugador.addEventListener("dragstart", drag);
  divJugadores.appendChild(jugador);


}


function allowDrop(ev) {
  console.log(ev);
  ev.preventDefault();
}

function drag(ev) {
  console.log(ev);
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  console.log(ev);
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

