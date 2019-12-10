<?php

    

    $servidor = "localhost";
    $username = "cliente";
    $password = "cliente";
    $basedatos = "formulario";
    
    # Crear conexión
    $conn = mysqli_connect($servidor, $username, $password, $basedatos);
    
    if (!$conn) {
        die("Conexi&ocacuten fallida: " . mysqli_connect_error());
    }else{echo "Conexion con exito <br><br>";}

    echo $_POST["nombre"];

    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $dni = $_POST["DNI"];
    $email = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $password = $_POST["pwd"];
    $password2 = $_POST["pwd2"];
    $ip = $_POST["IP"];

    
    //Construiremos un INSERT que lanza

    //Si se inserta bien, escribimos OK
    //SI no NOOK

    $InsertarPersona = mysqli_query($conn, "INSERT INTO persona(nombre,apellidos,dni,email,telefono,password,password2,ip) VALUES ('$nombre','$apellidos','$dni','$email',$telefono,'$password','$password2','$ip')");

    if(!$InsertarPersona){
        echo "insert fallido<br>";
        echo mysqli_error($conn);
    }  else{
        echo "insert con exito<br>";
    }

/*
    while ($fila = mysqli_fetch_array($InsertarPersona)){ 
        echo $fila[0];
        $dniNumero=$fila[0];
    }*/

?>