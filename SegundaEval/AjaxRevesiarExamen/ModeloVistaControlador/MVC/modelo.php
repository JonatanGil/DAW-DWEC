<?php

function abrir_conexion($host, $usuario, $password, $bd){
    return mysqli_connect($host, $usuario, $password, $bd);
}

$conn = abrir_conexion('localhost', 'wpadmin', 'wp4dm1n', 'campodefutbol');

if(!$conn){
    echo "conexcion fallida";
    die;
}

$result = mysqli_query($conn, 'SELECT * FROM jugadores');

$productos = mysqli_fetch_all($result);
//es igual 
/*
   // Rellenar el array
        $productos = array();
        while ($fila = mysqli_fetch_array($result))
        {   
        $productos[] = $fila;
        }
*/



 
$resutladoFinal =  json_encode($productos);

echo $resutladoFinal;

?>
    