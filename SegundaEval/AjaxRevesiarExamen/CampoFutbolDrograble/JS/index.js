window.onload = init;

function init() {


  //crear equipos jugadores dos para probar

  crearJugadores();
  crearEquipos();


  var botonJugador = document.getElementById("AñadirJugador");
  botonJugador.addEventListener('click',addjugador);

}

async function addjugador(){
  
  console.log("añadir");
  let nombreJ = document.getElementById("nombreJugador").value;
  let imgJugador = document.getElementById("imagenJugador").value;

  let jugador = {nombre:String(nombreJ),
              imgsrc:String(imgJugador)
  };

  let data = {
    method: 'POST',
    body: JSON.stringify(jugador),
    headers:{'Content-Type':'application/json'}
  };

 fetch("./PHP/add_jugador.php",data)
 .then(function (res) {
     if (res.status >= 200 && res.status < 300) {
         return res.json();
     }
 }).then(resjson => {
   return resjson;
   //imprimir jugadores async?
 }).then( resjson2 =>{
    document.getElementById("jugadores").innerHTML="";
    crearJugadores();
 }).catch(function (err) {
   console.log(err+"+asdas");
 });

/*
  let data = {
    nombreJugador:nombre,
    imgsrc:img
  };

(async () => {
    const rawResponse = await fetch('./PHP/add_jugador.php' ,{
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
  })();*/

}

function crearEquipos() {

  var divEquipos = document.getElementById("equipos");





  var divJugadores = document.getElementById("jugadores");
  console.log(divJugadores);

  //la ruta relativa se hace desde el archivo que obtiene el codigo hasta donde esta el php
  fetch("./PHP/obtener_equipos.php")
  .then(function (res) {
      if (res.status >= 200 && res.status < 300) {
          return res.json();
      }
  }).then(resjson => {

    resjson.forEach(equipo => {

      console.log(equipo);
      var equipoID = equipo[0];
      var equipoNombre = equipo[1];

      var equipo = document.createElement("nav");
      equipo.id = "equipo"+equipoID;
      equipo.innerHTML += equipoNombre;
      equipo.classList.add("equipo");
      equipo.addEventListener("dragover", allowDrop);
      equipo.addEventListener("drop", drop);
      divEquipos.appendChild(equipo);

    });

  }).catch(function (err) {
    console.log(err);
  });


}


function crearJugadores() {

  var divJugadores = document.getElementById("jugadores");
  console.log(divJugadores);

  //la ruta relativa se hace desde el archivo que obtiene el codigo hasta donde esta el php
  fetch("./PHP/obtener_jugadores.php")
  .then(function (res) {
      if (res.status >= 200 && res.status < 300) {
          return res.json();
      }
  }).then(resjson => {

    resjson.forEach(jugador => {

      var jugadorID = jugador[0];
      var nombreJugador = jugador[1];
      var posicionJugador = jugador[2];
      var imagenJugador = jugador[3];
      console.log(jugador);
      var jugador = document.createElement("img");
      jugador.id = "jugador"+jugadorID;
      jugador.src= imagenJugador;
      jugador.style.backgroundRepeat = "repeat-y"; 
      jugador.setAttribute("posicion",posicionJugador);
      jugador.classList.add("jugador");
      jugador.draggable = true;
      jugador.addEventListener("dragstart", drag);
      console.log(jugador);
      divJugadores.appendChild(jugador);
    
    });

  }).catch(function (err) {
    console.log(err);
  });

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
  console.log(data);
  ev.target.appendChild(document.getElementById(data));
}

