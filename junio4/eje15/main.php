<?php
//ejercicio 1
$nombre = "Ana";
$edad = "17";
$ciudad = "Libertad";
echo "Hola, me llamo " . $nombre . ", tengo " . $edad . " años y vivo en " . $ciudad . ".\n";

//ejercicio 2
echo "\n";
$Producto = "Teclado";
$Precio = 1200;
$Stock = "5 unidades";
echo "Producto: " . $Producto . ", Precio: $" . $Precio . ", Stock: " . $Stock . "\n";

//ejercicio 3
echo "\n";
$Jugador = "Mateo";
$Personaje ="DregonX";
$Nivel = 25;
$Servidor = "Latinoamerica"; "\n";

echo "=== PERFIL DEL JUGADOR === \n";
echo "Mateo \n";
echo "Personaje: DragonX \n" ;
echo "💪: 25 \n" ;
echo "🌍: Latinoamérica \n";
echo "========================\n";


//ejercicio 4
echo"\n";
$Nombre = "Lucía";
$Curso = "Tercero";
$Materia = "Programación";

echo "Nombre: " . $Nombre ."\n";
echo "Curso: " . $Curso ."\n";
echo "Materia: " . $Materia ."\n";

//ejercicio 5
echo"\n";
$Numero1 = 10;
$Numero2 = 5;
$Suma = $Numero1 + $Numero2;
$Resta = $Numero1 - $Numero2;
$Multiplicacion = $Numero1 * $Numero2;
$Division = $Numero1 / $Numero2;
echo "Suma: " . $Suma . "\n";
echo "Resta: " . $Resta . "\n";
echo "Multiplicación: " . $Multiplicacion . "\n";
echo "División: " . $Division . "\n";

//ejercicio 6
echo"\n";
$Base = 15; 
$Altura = 30;
$Área = $Base * $Altura;
echo "El área del rectángulo es: " . $Área . "\n";

//ejercicio 7
echo"\n";
$Nota1 = 8;
$Nota2 = 7;
$Nota3 = 9;

$Promedio = (($Nota1 + $Nota2 + $Nota3)/3); 
echo "Promedio:" .$Promedio . "\n";

//ejercicio 7
echo"\n";
$TotalMinutos = 135;
$horas = intdiv($TotalMinutos, 60);
$minutos = $TotalMinutos % 60;

echo "Tiempo transcurrido: " . $horas . " horas y " . $minutos . " minutos.\n";

//ejercicio 8
echo"\n";
$Numero1 = 10;
$Numero2 = 5;
if ($Numero1 > $Numero2) {
    echo "El número mayor es: " . $Numero1 . "\n";
} elseif ($Numero2 > $Numero1) {
    echo "El número mayor es: " . $Numero2 . "\n";
} 

//ejercicio 9
echo"\n";
$Numero = 10;
$texto = "10";
if ($Numero === $texto) {
    echo "El número y el texto son iguales\n";
} else {
    echo "El número y el texto no son iguales\n";
}

//ejercicio 10
echo"\n";
$StockDisponible = 10;
$CantidadSolicitada = 1;
$Precio = 100;
$PresupoestoDelCliente = 700;
if ($CantidadSolicitada <= $StockDisponible){
    $CostoTotal = $CantidadSolicitada * $Precio;
    if ($PresupoestoDelCliente >= $CostoTotal){
        echo "Compra realizada con éxito" ."\n";
    } else {
        echo "No tienes suficiente presupuesto para realizar la compra\n";
    }
} else {
    echo "No hay suficiente stock disponible para realizar la compra\n";
}
?>
