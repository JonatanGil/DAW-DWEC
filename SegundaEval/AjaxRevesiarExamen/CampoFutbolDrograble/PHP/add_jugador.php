<?php

require_once('obtener_datos_funciones.php');

$datos = json_decode(file_get_contents('php://input'));

$nombreJugador = $datos->{'nombre'};
$imagensrc = $datos->{'imgsrc'};

addJugador($nombreJugador,$imagensrc);

obtenerJugadores();

?>