<?php
function abrir_conexion($host, $usuario, $password, $bd)
{
return mysqli_connect($host, $usuario, $password, $bd);
}


function extraer_resultados($result){
    return mysqli_fetch_array($result);
}


$conn = abrir_conexion('localhost', 'wpadmin', 'wp4dm1n', 'Carrito');

$result = mysqli_query($link, 'SELECT * FROM Producto');




?>
