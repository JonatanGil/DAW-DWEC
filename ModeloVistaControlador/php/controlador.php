<?php
// Requerir el modelo
require_once('modelo.php');
// Extraer la lista de mensajes
$productos = ListarProducto();
// Requerir la vista

//var_dump($productos);

require('vista.php');
?>
