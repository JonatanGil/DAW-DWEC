<html>
<head>
<title>List of Posts</title>
<link rel="stylesheet" type="text/css" href="../css/pagina.css">
</head>
<body>
<h1>List of Posts</h1>
<table>
<tr><th>Id</th><th>Nombre</th><th>Precio</th><th>Comprar</th></tr>
<!--crear sesion-->
<?php  
    session_start();
    if (!isset($_SESSION['array'])) {
        $_SESSION['array'] = array();
      } else {
          //si le has dado al boton de al ladao de los productos entra aqui y añade a la sesion el idproducto para despues confirmar y comrpar
          if($_POST["productoParaComprar"]){
            $arrayProductos = $_SESSION['array'];
            array_push($arrayProductos,$_POST["IdProducto"]);

            //este for each muestra todos los elementos de las esision
            foreach ($arrayProductos as &$valor) {
                echo $valor;
            }

            $_SESSION['array'] = $arrayProductos; 
          }
      }
?>
<?php foreach ($productos as $producto): ?>

<form action="controlador.php" method="POST">
<tr>
<td><input type="text" name="IdProducto" value='<?php echo $producto['IdProducto']?>' hidden> <?php echo $producto['IdProducto']?></td>
<td><?php echo $producto['nombre'] ?></td>
<td><?php echo $producto['precio'] ?></td>
<td><input type="submit" name="productoParaComprar" value="1"></td>
</tr>
</form>

<?php endforeach; ?>
</table>

<form action="controlador.php">
    <input type="submit" name="comprar" value="comprar">
</form>

<?php 


if($_POST["form"]){
    echo "hola";
}


?>


</body>
</html>
