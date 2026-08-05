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

//ejercicio 11
echo"\n";
$puntos = 50;

if ($puntos >= 50) {
    echo "Gano\n";
} else {
    echo "Perdio\n";
}

//ejercicio 12
echo"\n";
$numero = -5;

if ($numero > 0) {
    echo "Positivo\n";
} elseif ($numero < 0) {
    echo "Negativo\n";
} else {
    echo "Cero\n";
}

//ejercicio 13
echo"\n";
$numero = 8;

if ($numero % 2 == 0) {
    echo "Es par\n";
} else {
    echo "Es impar\n";
}

//ejercicio 14
echo"\n";
$nota = 9;

if ($nota < 1 || $nota > 12) {
    echo "Error\n";
} elseif ($nota < 6) {
    echo "Insuficiente\n";
} elseif ($nota <= 8) {
    echo "Aprobado\n";
} elseif ($nota <= 10) {
    echo "Muy bueno\n";
} else {
    echo "Excelente\n";
}

//ejercicio 15
echo"\n";

$usuario = "admin";
$contrasena = "1234";

if ($usuario == "admin" && $contrasena == "1234") {
    echo "Inicio de sesión correcto\n";
} else {
    echo "Usuario o contraseña incorrectos\n";
}

//ejercicio 16
echo"\n";

$rol = "docente";

if ($rol == "administrador" || $rol == "docente") {
    echo "Acceso permitido\n";
} else {
    echo "Acceso denegado\n";
}

//ejercicio 17
echo"\n";

$precio = 100;
$presupuesto = 500;
$stock = 10;
$cantidad = 4;

$total = $precio * $cantidad;

if ($stock >= $cantidad && $presupuesto >= $total) {
    echo "Compra realizada\n";
} else {
    echo "No se puede realizar la compra\n";
}

//ejercicio 18
echo"\n";
$edad = 16;
$tieneEntrada = true;
$acompanado = true;

if (($edad >= 18 && $tieneEntrada) || ($edad < 18 && $acompanado)) {
    echo "Puede entrar\n";
} else {
    echo "No puede entrar\n";
}

//ejercicio 19
echo"\n";
$Persona="Juan";
$Edad=10;
$PrecioEntrada=100;
$Descuento=0.5;
if ($Edad < 12) {
    $PrecioEntrada = $PrecioEntrada * (1 - $Descuento);
}
echo "El precio de la entrada para " . $Persona . " es: $" . $PrecioEntrada . "\n";

//ejercicio 20
echo"\n";
$PrecioUnitario=50;
$CantidadComprada = 10;
$Descuento= 0.1;
if ($CantidadComprada > 5) {
    $PrecioTotal = $PrecioUnitario * $CantidadComprada * (1 - $Descuento);
} else {
    $PrecioTotal = $PrecioUnitario * $CantidadComprada;
}

//ejercicio 21
echo"\n";
$TotalCompra= 4000;

if ($TotalCompra < 1000) {
    $Descuento = 0;
} else if ($TotalCompra <= 4999) {
    $Descuento =  $TotalCompra * 0.1;
} else if ($TotalCompra >= 5000) {
    $Descuento = $TotalCompra * 0.2;
}

echo "El descuento aplicado es: " . $Descuento  . "\n";
    
//ejercicio 22
echo"\n";
for ($i = 1; $i <= 10; $i++) {
    echo $i . "\n";
}

//ejercicio 23
echo"\n";
for ($i = 10; $i >= 1; $i--) {
    echo $i . "\n";
   if ($i == 1) {
        echo "Comenzamos\n";
    }

}

//ejercicio 24
echo"\n";
for ($i = 1; $i <= 20; $i++) {
    if ($i % 2 == 0) {
        echo $i . "\n";
    }

}

//ejercicio 25
echo"\n";
$Tabla = 5;
for ($i = 1; $i <= 10; $i++) {
    echo $Tabla . " x " . $i . " = " . ($Tabla * $i) . "\n";
}

//ejercicio 26
echo"\n";
$Suma = 0;
for ($i=1; $i <= 10; $i++) {
    $Suma += $i;
}
echo "La suma de los números del 1 al 10 es: " . $Suma . "\n";

//ejercicio 27
echo"\n";
$suma = 0;
for ($i = 1; $i <= 100; $i++) {
    $suma += $i;
}
echo "la suma del 1 al 100 es:"  .$suma . "\n";

//ejercicio 28
echo"\n";
$Contador = 0 ;
for ($i = 1; $i <= 50; $i++) {
   if ($i % 2 == 0) {
   
   $Contador ++;
   
   }

    }
 echo"Los numeros pares del 1 al 50 son:" .$Contador . "\n";

 //ejercicio 29 
 echo"\n";
 $COntador = 0;
 for ($i =1; $i <= 100; $i++) {
    if ($i % 3 == 0) {
        $COntador++;
    }
 }
echo "Los números múltiplos de 3 del 1 al 100 son: " . $COntador . "\n";

//ejercicio 33
echo"\n";
$ahorro = 0;
$mes = 0;
$meta = 5000;

while ($ahorro < $meta) {
    $mes++;
    $ahorro += 500;
    echo "Mes " . $mes . ": Ahorro = $" . $ahorro . "\n";
}

echo "Se alcanzó la meta en " . $mes . " meses.\n";

?>


