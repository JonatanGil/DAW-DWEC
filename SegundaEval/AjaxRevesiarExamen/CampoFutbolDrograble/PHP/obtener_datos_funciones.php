<?php
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

function addJugador($nombre,$img){

$nombreJugador = (String) $nombre;
$imgJugador = (String) $img;

$conn = abrir_conexion('localhost', 'wpadmin', 'wp4dm1n', 'campodefutbol');

$sql =  "INSERT INTO jugadores values(null, '$nombre','Portero','$img')";


if (mysqli_query($conn, $sql)) {
    //echo "New record created successfully";   explota
} else {
    //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);


 
}




?>