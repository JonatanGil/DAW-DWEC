<?php


/*header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');*/

function abrir_conexion($host, $usuario, $password, $bd){
    return mysqli_connect($host, $usuario, $password, $bd);
}


function obtenerJugadores(){
    

$conn = abrir_conexion('localhost', 'wpadmin', 'wp4dm1n', 'campodefutbol');

$result = mysqli_query($conn, 'SELECT * FROM jugadores');

$jugadores = mysqli_fetch_all($result);
 
$resutladoFinal =  json_encode($jugadores);

echo $resutladoFinal;

}

function obtenerEquipos(){


$conn = abrir_conexion('localhost', 'wpadmin', 'wp4dm1n', 'campodefutbol');

$result = mysqli_query($conn, 'SELECT * FROM equipo');

$equipos = mysqli_fetch_all($result);
 
$resutladoFinal =  json_encode($equipos);

echo $resutladoFinal;

}




?>