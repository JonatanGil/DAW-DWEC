<?php
/*header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');*/
function abrir_conexion($host, $usuario, $password, $bd){
   return mysqli_connect($host, $usuario, $password, $bd);
}


$conn = abrir_conexion('localhost', 'wpadmin', 'wp4dm1n', 'campoDeFutbol');

$result = mysqli_query($con, 'SELECT * FROM Jugadores');

$jugadores = mysqli_fetch_all($result);
 
$resutladoFinal =  json_encode($jugadores);

echo $resutladoFinal;


?>