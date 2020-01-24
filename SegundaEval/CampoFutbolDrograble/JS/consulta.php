<?php

$host = "localhost"; /* Host name */
$user = "wpadmin"; /* User */
$password = "wp4dm1n"; /* Password */
$dbname = "campoDeFutbol"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}else{

     $consulta = "SELECT * FROM Jugadores";

     if ($resultado = $mysqli->query($consulta)) {
        // obtener un array asociativo 
        $arrRespuesta=array();

        while ($fila = $resultado->fetch_assoc()) {
            $arrRespuesta[]=$fila;
        } 

        // liberar el conjunto de resultados 
        $resultado->free();
     }else{
        $arrRespuesta=array("error"=>"Hubo un problema con la consulta");

     }


     
    // cerrar la conexión 
    $mysqli->close();
}


//Al final de todo imprimimos el JSON que será recogido en la petición //Ajax/jQuery
$json = json_encode($arrRespuesta);
header('Content-Type: application/json');
echo $json;
?>