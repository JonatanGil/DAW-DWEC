<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <?php
        $servidor = "localhost";
        $username = "cliente";
        $password = "cliente";
        $basedatos = "formulario";
    

        # Crear conexión
        $conn = mysqli_connect($servidor, $username, $password, $basedatos);
    
        if (!$conn) {
            die("Conexi&ocacuten fallida: " . mysqli_connect_error());
        }
        echo "Conexi&oacuten con &eacutexito <br><br>";

    ?>
    
    <p>registro.php</p>    



</body>
</html>