<?php
function ListarProducto(){
// Conexión
    //require('abstraccion_datos.php');
    
    $link = mysqli_connect('localhost', 'wpadmin', 'wp4dm1n', 'Carrito');
    // Consulta
    $result = mysqli_query($link, 'SELECT * FROM Producto');

    if(!$link){
        echo "conexcion fallida";
        die;
    }

    // Rellenar el array
    $productos = array();
    while ($fila = mysqli_fetch_array($result))
    {   
    $productos[] = $fila;
    }



// Cierre de la conexión

mysqli_close($link);
return $productos;
}
