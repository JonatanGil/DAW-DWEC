<?php

// Requerir el modelo
require_once('modelo.php');
// Extraer la lista de mensajes
$productos = ListarProductos();
//var_dump($productos);

require('vista.php');

?>
