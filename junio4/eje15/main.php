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

//ejercicio 34
echo"\n";
$Saludar = 0;
while ($Saludar < 2) {
    $Saludar++;
    echo "bienvenido al sistema\n";
}

//ejercicio 35
echo"\n";
$nombre = "Juan";
function saludarUsuario($nombre) {
    echo "Hola, " . $nombre . "!\n";
}
saludarUsuario($nombre);

//ejercicio 36
echo"\n";
$Numero1 = 10;
$Numero2 = 5;
function sumar($Numero1, $Numero2) {
    $Resultado = $Numero1 + $Numero2;
    return $Resultado;
}
$Resultado = sumar($Numero1, $Numero2);
echo "La suma es: " . $Resultado . "\n";

//ejercicio 37
echo"\n";
$Compra = 0;
$Precio = 100;
$Cantidad = 5;
function calcularTotal($Precio, $Cantidad) {
    $Total = $Precio * $Cantidad;
    return $Total;
}
$Compra = calcularTotal($Precio, $Cantidad);
echo "El total de la compra es: $" . $Compra . "\n";

//ejercicio 38
echo"\n";
$EDad = 20;
function esMayorDeEdad($EDad) {
    if ($EDad >= 18) {
        return true;
    } else {
        return false;
    }
}

//ejercicio 39
echo"\n";
$Numero = 7;
function esPar($Numero) {
    if ($Numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//ejercicio 40
echo"\n";
$PRecio = 100;
$DEScuento = 0.2;
function aplicarDescuento($PRecio, $DEScuento) {
    $PrecioFinal = $PRecio * (1 - $DEScuento);
    return $PrecioFinal;
}
$PrecioFinal = aplicarDescuento($PRecio, $DEScuento);
echo "El precio final con descuento es: $" . $PrecioFinal . "\n";

//ejercicio 41
echo"\n";
$NOTA1 = 8;
$NOTA2 = 7;
$NOTA3 = 9;
function calcularPromedio($NOTA1, $NOTA2, $NOTA3) {
    $Promedio = ($NOTA1 + $NOTA2 + $NOTA3) / 3;
    return $Promedio;
}
$Promedio = calcularPromedio($NOTA1, $NOTA2, $NOTA3);
echo "El promedio de las notas es: " . $Promedio . "\n";

$Aprobado = Aprobado($Promedio);
function Aprobado($Promedio) {
    if ($Promedio >= 6) {
        return true;
        echo "Aprobado\n";
    } else {
        echo "Reprobado\n";
        return false;
    }
}

//ejercicio 42
echo"\n";
$nombreS = ["Juan", "María", "Pedro", "Ana"];

foreach($nombreS as $Nombre) {
    echo $Nombre; 
}


//ejercicio 43 
echo"\n";
$NOmbres = ["Juan", "María", "Pedro", "Ana"];
foreach($NOmbres as $nombre) {
    echo $nombre . "\n";
}

  //ejercicio 44
  echo"\n";
  $PrEcios = [100, 200, 300, 400 , 500];
  echo "Precios:" . implode(" $  ", $PrEcios) . "\n";
  echo "Cantidad de precios: " . count($PrEcios) . "\n";

  //ejercicio 45
    echo"\n";
    $NUMeros = [1, 2, 3, 4, 5];
    foreach($NUMeros as $numero) {
        echo $numero . "\n";
    }
    array_sum($NUMeros);
    echo "La suma de los números es: " . array_sum($NUMeros) . "\n";
 
    //ejercicio 46
    echo"\n";
    $NUMeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     $Pares = [];
    foreach($NUMeros as $numero) {
        if ($numero % 2 == 0) {
            $Pares[] = $numero;
        }
    }
    echo "Números pares: " . implode(", ", $Pares) . "\n";

//ejercicio 47
echo"\n";
$Notas = [8, 7, 9, 6, 10];
$Mayores = [];
foreach($Notas as $nota) {
    if ($nota >= 6) {
        $Mayores[] = $nota;
    }
}
echo "Notas mayores o iguales a 6: " . implode(", ", $Mayores) . "\n";

//ejercicio 48
echo"\n";
$NOMBRES = ["Juan", "María", "Pedro", "Ana"];
$NOMBRE= ["Luis"];
if (in_array("Luis", $NOMBRES)) {
    echo "El nombre 'Luis' está en el arreglo.\n";
} else {
    echo "El nombre 'Luis' no está en el arreglo.\n";
}
in_array("Luis", $NOMBRES) ? print("El nombre 'Luis' está en el arreglo.\n") : print("El nombre 'Luis' no está en el arreglo.\n");

//ejercicio 49
echo"\n";
$Numeros = [1, 2, 3, 4, 5];
$Mayor = max($Numeros);
echo "El número mayor es: " . $Mayor . "\n";



//ejercicio 50
echo"\n";
$Numeros = [1, 2, 3, 4, 5];
$Suma = array_sum($Numeros);
echo "La suma de los números es: " . $Suma . "\n";
$Cantidad = count($Numeros);
echo "La cantidad de números es: " . $Cantidad . "\n";
$Promedio = $Suma / $Cantidad;
echo "El promedio de los números es: " . $Promedio . "\n";

//ejercicio 51
echo"\n";
$Notas = [8, 7, 9, 6, 10];
$Aprobada = [];
foreach($Notas as $nota) {
    if ($nota >= 5) {
        $Aprobada[] = $nota;
    }
}
echo "Notas aprobadas: " . implode(", ", $Aprobada) . "\n";

//ejercicio 52
echo"\n";
$Notas = [8, 7, 9, 6, 10];
foreach($Notas as $Notas)
    echo "Notas: " . $Notas . "\n";
$Promedio = array_sum($Notas) / count($Notas);
echo "Promedio: " . $Promedio . "\n";
$Aprobados = [];
foreach($Notas as $nota) {
    if ($nota >= 5) {
        $Aprobados[] = $nota;
    }
}
$Desaprobados = [];
foreach($Notas as $nota) {
    if ($nota < 5) {
        $Desaprobados[] = $nota;
    }
}
echo "Notas aprobadas: " . implode(", ", $Aprobados) . "\n";
echo "Notas desaprobadas: " . implode(", ", $Desaprobados) .
"\n";

//ejercicio 53
echo"\n";
$Notas = [8, 7, 9, 6, 10];
foreach($Notas as $Notas)
    echo "Notas: " . $Notas . "\n";
$Aprobados = [];
foreach($Notas as $nota) {
    if ($nota >= 5) {
        $Aprobados[] = $nota;
    }
}
$Desaprobados = [];
foreach($Notas as $nota) {
    if ($nota < 5) {
        $Desaprobados[] = $nota;
    }
}
echo "Notas aprobadas: " . implode(", ", $Aprobados) . "\n";
echo "Notas desaprobadas: " . implode(", ", $Desaprobados) .
"\n";

//ejercicio 54, igual al 53.

//ejercicio 55
echo"\n";
$Numeros = [1, 2, 3, 4, 5];
$Suma = array_sum($Numeros);
echo "La suma de los números es: " . $Suma . "\n";
$Promedio = $Suma / count($Numeros);
echo "El promedio de los números es: " . $Promedio . "\n";
$Mayor = max($Numeros);
echo "El número mayor es: " . $Mayor . "\n";
$Menor = min($Numeros);
echo "El número menor es: " . $Menor . "\n";
$Pares = [];
foreach($Numeros as $numero) {
    if ($numero % 2 == 0) {
        $Pares[] = $numero;
    }
}
echo "Números pares: " . implode(", ", $Pares) . "\n";
$Impares = [];
foreach($Numeros as $numero) {
    if ($numero % 2 != 0) {
        $Impares[] = $numero;
    }
}
echo "Números impares: " . implode(", ", $Impares) . "\n";


//ejercicio 56
echo"\n";
$persona = [
    "nombre" => "Ariana",
    "edad" => 20,
    "ciudad" => "San José"
];

echo "Hola, mi nombre es " . $persona["nombre"] .
     ", tengo " . $persona["edad"] .
     " años y vivo en " . $persona["ciudad"] . ".";


//ejercicio 57
echo"\n";
$producto = [
    "nombre" => "Teclado",
    "precio" => 1200,
    "stock" => 5
];
echo "Producto: " . $producto["nombre"] .
     ", Precio: $" . $producto["precio"] .
     ", Stock: " . $producto["stock"];


//ejercicio 58
echo"\n";
$producto = [
    "nombre" => "Teclado",
    "precio" => 1200,
    "stock" => 5
];
$producto["precio"] = 1000;
$producto["stock"] = 3;
$producto["categoria"] = "Tecnología";
echo "Producto: " . $producto["nombre"] .
        ", Precio: $" . $producto["precio"] .
        ", Stock: " . $producto["stock"] .
        ", Categoría: " . $producto["categoria"];

//ejercicio 59
echo"\n";
$producto = [
    "nombre" => "Teclado",
    "precio" => 1200,
    "stock" => 5,
    "cantidadSolicitada" => 10
];
if ($producto["cantidadSolicitada"] <= $producto["stock"]) {
    echo "Producto: " . $producto["nombre"] .
         ", Precio: $" . $producto["precio"] .
         ", Cantidad solicitada: " . $producto["cantidadSolicitada"];
} else {
    echo "No hay suficiente stock para satisfacer la solicitud.";
}   

$Productos = [
    [
        "nombre" => "Teclado",
        "precio" => 1200,
       
    ],
    [
        "nombre" => "Mouse",
        "precio" => 800,
    ],
    [
        "nombre" => "Monitor",
        "precio" => 5000,
        
    ]
];
echo "Productos:" .$Productos[0]["nombre"] . ", Precio: $" . $Productos[0]["precio"] . "\n";
echo "Productos:" .$Productos[1]["nombre"] . ", Precio: $" . $Productos[1]["precio"] . "\n";
echo "Productos:" .$Productos[2]["nombre"] . ", Precio: $" . $Productos
[2]["precio"] . "\n";   

//ejercicio 60
echo"\n";
$Productos = [
    [
        "nombre" => "Teclado",
        "precio" => 1200,
        "stock" => 5
    ],
    [
        "nombre" => "Mouse",
        "precio" => 800,
        "stock" => 10
    ],
    [
        "nombre" => "Monitor",
        "precio" => 5000,
        "stock" => 0
    ]
];
foreach($Productos as $Producto) {
    if ($Producto["stock"] > 0) {
        echo "Producto: " . $Producto["nombre"] .
             ", Precio: $" . $Producto["precio"] .
             ", Stock: " . $Producto["stock"] . "\n";
    }
}

//ejercicio 61
echo"\n";
$Productos = [
    [
        "nombre" => "Teclado",
        "precio" => 1200,
        "stock" => 5
    ],
    [
        "nombre" => "Mouse",
        "precio" => 800,
        "stock" => 10
    ],
    [
        "nombre" => "Monitor",
        "precio" => 5000,
        "stock" => 0
    ],
    [
        "nombre" => "Auriculares",
        "precio" => 1500,
        "stock" => 3
    ],
    [
        "nombre" => "Webcam",
        "precio" => 2000,
        "stock" => 2
    ]
];
foreach($Productos as $Producto) {
    if ($Producto["precio"] > 1000) {
        echo "Producto: " . $Producto["nombre"] . ", Precio: $" . $Producto["precio"] . "\n";
    }
}

//ejercicio 62
echo"\n";
$Productos = [
    [
        "nombre" => "Teclado",
        "precio" => 1200,
        "stock" => 5
    ],
    [
        "nombre" => "Mouse",
        "precio" => 800,
        "stock" => 10
    ],
    [
        "nombre" => "Monitor",
        "precio" => 5000,
        "stock" => 0
    ],
    [
        "nombre" => "Auriculares",
        "precio" => 1500,
        "stock" => 3
    ],
    [
        "nombre" => "Webcam",
        "precio" => 2000,
        "stock" => 2
    ]
];
$totalInventario = 0;

foreach ($Productos as $producto) {
    $valorInventario = $producto["precio"] * $producto["stock"];

    echo "Producto: " . $producto["nombre"] . "\n";
    echo "Precio: $" . $producto["precio"] . "\n";
    echo "Stock: " . $producto["stock"] . "\n";
    echo "Valor del inventario: $" . $valorInventario . "\n";
    echo "\n";

    $totalInventario += $valorInventario;
}

echo "Valor total del inventario: $" . $totalInventario . "\n";

//ejercicio 63
echo"\n";
$Productos = [
    [
        "nombre" => "Teclado",
        "precio" => 1200,
        "stock" => 5
    ],
    [
        "nombre" => "Mouse",
        "precio" => 800,
        "stock" => 10
    ],
    [
        "nombre" => "Monitor",
        "precio" => 5000,
        "stock" => 0
    ],
    [
        "nombre" => "Auriculares",
        "precio" => 1500,
        "stock" => 3
    ],
    [
        "nombre" => "Webcam",
        "precio" => 2000,
        "stock" => 2
    ]
];
$ProductoBuscado = "Auriculares";
foreach($Productos as $producto){
    if ($producto["nombre"]== $ProductoBuscado){
        echo "Producto Encontrado:" . $producto["nombre"] . "Precio: $" . $producto["precio"] . "Stock:" . $producto["stock"] . "\n";
    }
}

//ejercicio 64
echo"\n";
$Productos = [
    [
        "nombre" => "Teclado",
        "precio" => 1200,
        "stock" => 5,
        "id" => 1
    ],
    [
        "nombre" => "Mouse",
        "precio" => 800,
        "stock" => 10,
        "id" => 2
    ],
    [
        "nombre" => "Monitor",
        "precio" => 5000,
        "stock" => 0,
        "id" => 3
    ],
    [
        "nombre" => "Auriculares",
        "precio" => 1500,
        "stock" => 3,
        "id" => 4
    ],
    [
        "nombre" => "Webcam",
        "precio" => 2000,
        "stock" => 2,
        "id" => 5
    ]
];
$IdDeseada = 3;
foreach($Productos as $producto){
    if ($producto["id"]== $IdDeseada){
        echo "Producto Encontrado:" . $producto["nombre"] . "Precio: $" . $producto["precio"] . "Stock:" . $producto["stock"] . "\n";
    }
}

//ejercicio 65
echo"\n";   
$Productos = [
    [
        "nombre" => "Teclado",
        "precio" => 1200,
        "stock" => 5
    ],
    [
        "nombre" => "Mouse",
        "precio" => 800,
        "stock" => 10
    ],
    [
        "nombre" => "Monitor",
        "precio" => 5000,
        "stock" => 0
    ],
    [
        "nombre" => "Auriculares",
        "precio" => 1500,
        "stock" => 3
    ],
    [
        "nombre" => "Webcam",
        "precio" => 2000,
        "stock" => 2
    ]
];
$productoMayor = $Productos[0];

foreach ($Productos as $producto) {
    if ($producto["precio"] > $productoMayor["precio"]) {
        $productoMayor = $producto;
    }
}

echo "Producto con el precio más alto:\n";
echo "Nombre: " . $productoMayor["nombre"] . "\n";
echo "Precio: $" . $productoMayor["precio"] . "\n";


//ejercicio 66
echo"\n"; 
$idBuscado = 2;
$encontrado = false;

foreach ($Productos as $producto) {
    if ($producto["id"] == $idBuscado) {
        echo "Producto encontrado:\n";
        echo "ID: " . $producto["id"] . "\n";
        echo "Nombre: " . $producto["nombre"] . "\n";
        echo "Precio: $" . $producto["precio"] . "\n";
        echo "Stock: " . $producto["stock"] . "\n";

        $encontrado = true;
        break;
    }
}

if ($encontrado == false) {
    echo "Producto no encontrado";
}

//ejercico 67
echo"\n"; 

function sumarNumeros($numeros) {
    $suma = 0;

    foreach ($numeros as $numero) {
        $suma += $numero;
    }

    return $suma;
}

$numeros = [10, 20, 30, 40];

$resultado = sumarNumeros($numeros);

echo "La suma es: " . $resultado;



// ejercicio 68

$notas = [8, 5, 10, 6, 4];

function promedio($notas) {
    $suma = 0;

    foreach ($notas as $nota) {
        $suma = $suma + $nota;
    }

    return $suma / count($notas);
}

function aprobados($notas) {
    $cantidad = 0;

    foreach ($notas as $nota) {
        if ($nota >= 6) {
            $cantidad++;
        }
    }

    return $cantidad;
}

function desaprobados($notas) {
    $cantidad = 0;

    foreach ($notas as $nota) {
        if ($nota < 6) {
            $cantidad++;
        }
    }

    return $cantidad;
}

echo "Notas: ";

foreach ($notas as $nota) {
    echo $nota . " ";
}

echo "Promedio: " . promedio($notas);
echo " Nota mayor: " . max($notas);
echo " Nota menor: " . min($notas);
echo " Aprobados: " . aprobados($notas);
echo " Desaprobados: " . desaprobados($notas);


// ejercicio 69

$productos = [
    ["id"=>1, "nombre"=>"Teclado", "precio"=>1200, "stock"=>5, "categoria"=>"Informática"],
    ["id"=>2, "nombre"=>"Mouse", "precio"=>800, "stock"=>0, "categoria"=>"Informática"],
    ["id"=>3, "nombre"=>"Monitor", "precio"=>5000, "stock"=>3, "categoria"=>"Pantallas"]
];

function buscarProducto($productos, $id) {
    foreach ($productos as $producto) {
        if ($producto["id"] == $id) {
            return $producto;
        }
    }

    return null;
}

function valorInventario($productos) {
    $total = 0;

    foreach ($productos as $producto) {
        $total = $total + $producto["precio"] * $producto["stock"];
    }

    return $total;
}

echo "Productos: ";

foreach ($productos as $producto) {
    echo $producto["nombre"] . " ";
}

echo " Productos con stock: ";

foreach ($productos as $producto) {
    if ($producto["stock"] > 0) {
        echo $producto["nombre"] . " ";
    }
}

echo " Valor inventario: $" . valorInventario($productos);

$producto = buscarProducto($productos, 2);

if ($producto != null) {
    echo " Producto encontrado: " . $producto["nombre"];
}

echo " Producto más caro: " . $productos[2]["nombre"];


// ejercicio 70

$usuarios = [
    ["nombre"=>"Ana", "usuario"=>"ana123", "contraseña"=>"1234", "rol"=>"admin", "activo"=>true],
    ["nombre"=>"Juan", "usuario"=>"juan123", "contraseña"=>"5678", "rol"=>"empleado", "activo"=>true]
];

function buscarUsuario($usuarios, $nombre) {
    foreach ($usuarios as $usuario) {
        if ($usuario["usuario"] == $nombre) {
            return $usuario;
        }
    }

    return null;
}

$usuarioIngresado = "ana123";
$contraseñaIngresada = "1234";

$usuario = buscarUsuario($usuarios, $usuarioIngresado);

if ($usuario == null) {
    echo "Usuario incorrecto";
} elseif ($usuario["contraseña"] != $contraseñaIngresada) {
    echo "Contraseña incorrecta";
} elseif ($usuario["activo"] == false) {
    echo "Usuario inactivo";
} else {
    echo "Bienvenido " . $usuario["nombre"];

    if ($usuario["rol"] == "admin") {
        echo " Administrador";
    } else {
        echo " Empleado";
    }
}


// ejercicio 71

$carrito = [
    ["nombre"=>"Teclado", "precio"=>1200, "cantidad"=>2],
    ["nombre"=>"Mouse", "precio"=>800, "cantidad"=>1],
    ["nombre"=>"Auriculares", "precio"=>2000, "cantidad"=>1]
];

function subtotal($producto) {
    return $producto["precio"] * $producto["cantidad"];
}

function total($carrito) {
    $total = 0;

    foreach ($carrito as $producto) {
        $total = $total + subtotal($producto);
    }

    return $total;
}

foreach ($carrito as $producto) {
    echo $producto["nombre"];
    echo " Subtotal: $" . subtotal($producto);
}

$totalCompra = total($carrito);

echo " Total: $" . $totalCompra;

if ($totalCompra > 4000) {
    $totalCompra = $totalCompra * 0.90;
}

echo " Total final: $" . $totalCompra;
