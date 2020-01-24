<?php
// Conexión a base de datos
$conn = mysqli_connect('localhost', 'wpadmin', 'wp4dm1n', 'Carrito');

// Consulta SQL
$result = mysqli_query('SELECT fecha, titulo FROM mensaje', $conn);
echo $result;
?>
<html>
<head>
<title>Lista de mensajes</title>
</head>
<body>
<h1>Lista de mensajes</h1>
<table>
<tr><th>Fecha</th><th>Titulo</th></tr>
<?php
// Impresión de resultados en HTML
while ($row = mysqli_fetch_array($result))
{
echo "\t<tr>\n";
printf("\t\t<td> %s </td>\n", $row['fecha']);
printf("\t\t<td> %s </td>\n", $row['titulo']);
echo "\t</tr>\n";
}
?>
</table>
</body>
</html>
<?php
// Cierre de la conexión
mysqli_close($conn);
?>

<!--

            header("Location: 10.2.php");

-->