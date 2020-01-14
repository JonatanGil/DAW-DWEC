window.onload = init;

function init() {


  //crear equipos jugadores dos para probar

  crearJugadores();
  crearEquipos();


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

function crearJugadores(){

  var divJugadores =  document.getElementById("jugadores");
  console.log(divJugadores);
  
  var jugador = document.createElement("img");
  jugador.id="jugador1";
  jugador.src='./img/índice.png';
  jugador.classList.add("jugador");
  jugador.draggable=true;
  jugador.addEventListener("ondragstart",drag);
  divJugadores.appendChild(jugador);


}

function crearEquipos(){

  var divEquipos =  document.getElementById("equipos");

  var equipo = document.createElement("div");
  equipo.id="equipo1";
  equipo.classList.add("equipo");

  equipo.addEventListener("ondrop",drop);
  
  equipo.addEventListener("ondragover",allowDrop);

  divEquipos.appendChild(equipo);
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

