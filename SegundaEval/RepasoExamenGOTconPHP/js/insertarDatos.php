<?php
  
     $nombre = $_GET["nombre"];   # O $_POST
     $apellido = $_GET["apellidos"];     
     $casa= $_GET["casa"];
     $titulo= $_GET["titulo"];
     $padres = $_GET["padres"];
     $imagen= $_GET["imagen"];



    $servidor = "localhost";
    $username = "GOTPlayer";
    $password = "GOTPlayer";
    $basedatos = "GOT";
  
    # Crear conexión
    $conn = mysqli_connect($servidor, $username, $password, $basedatos);
    
    # Comprobar conexión
      if (!$conn) {
      die("Conexi&ocacuten fallida: " . mysqli_connect_error());
      }
      #echo "Conexi&oacuten con &eacutexito <br><br>";
     
      $insercion = "INSERT INTO figuras VALUES (null)";
      $resultado = mysqli_query($conn, $insercion);
      # Como no se trata de un SELECT, mysqli_query devuelve TRUE
      # si se ha hecho correctamente y FALSE si ha habido error.
      if ($resultado == true) {
      #echo "Se ha modificado correctamente el dato <br>";
      } else {
      # La siguiente función muestra el último error, en caso
      # de haberlo.
      echo mysqli_error($conn);
      die("Hubo un error");
      }
      # Como no se trata de un SELECT, no hace falta el
      # mysqli_free_result($result)


        ?>
      
    
  
  
  
  
  
  