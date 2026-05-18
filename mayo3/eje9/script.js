
{
    alert("Hola Mundo!");

}

{
    name = prompt("¿Cuál es tu nombre?");
alert("Hola " + name );
}

{
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:")); 
    let suma = num1 + num2;
    alert("La suma de " + num1 + " y " + num2 + " es: " + suma);
}
var edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("No eres mayor de edad.");
}

{
    let numero = parseInt(prompt("Ingrese un número:"));

    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}

{
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));
    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    alert("El número mayor es: " + mayor);
}
var Nota = parseInt(prompt("Ingrese su nota:"));
if (Nota < 5) {
    alert("Insuficiente");
} else {
    if (Nota === 5) {
        alert("Suficiente");
    } else {
        if (Nota > 5) {
            alert("Muy bien");
        }
    }
}
alert("Contando del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    alert(i);
 }
 alert("Contando del 1 al 20, mostrando solo los números pares:");
 for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      alert(i);
    }
    }
    let contraseña = prompt("Ingrese la contraseña:");
     if (contraseña === "1234") {
        alert("Contraseña correcta. Bienvenido.");
    } else {
        alert("Contraseña incorrecta. Acceso denegado.");
    }   
let suma = 0;
let numero = parseInt(prompt("Ingrese un número (0 para finalizar):"));
while (numero !== 0) {
    suma += numero;
    numero = parseInt(prompt("Ingrese otro número (0 para finalizar):"));
   
}
 alert("La suma de los números ingresados es: " + suma);

 let calculadora = prompt("Ingrese la operación que desea realizar (suma, resta, multiplicación, división):");
 let num1 = parseFloat(prompt("Ingrese el primer número:"));
 let num2 = parseFloat(prompt("Ingrese el segundo número:"));
 let resultado;
    switch (calculadora) {
        case "suma":
            resultado = num1 + num2;
            alert("El resultado de la suma es: " + resultado);
            break;
        case "resta":
            resultado = num1 - num2;
            alert("El resultado de la resta es: " + resultado);
            break;
        case "multiplicación":
            resultado = num1 * num2;
            alert("El resultado de la multiplicación es: " + resultado);    
            break;
        case "división":
            if (num2 !== 0) {
                resultado = num1 / num2;
                alert("El resultado de la división es: " + resultado);
            } else {
                alert("Error: No se puede dividir por cero.");
            }
            break;
        default:
            alert("Operación no válida.");
    }   
    let opciones = prompt("Seleccione una opción: Saludar 1, Fecha 2, random 3");
    switch (opciones) {
        case "1":
            alert("¡Hola! ¿Cómo estás?");
            break;  
        case "2":
            let fecha = new Date();
            alert("La fecha y hora actual es: " + fecha);
            break;
        case "3":
            let random = Math.random();
            alert("Número aleatorio generado: " + random);
            break;
    }
    
    let numeroRandom = Math.floor(Math.random() * 10) + 1;
    let intento = parseInt(prompt("Adivina el número entre 1 y 10:"));
    if (intento === numeroRandom) {
        alert("¡Felicidades! Has adivinado el número.");
    } else {
        alert("Lo siento, no adivinaste el número. El número era: " + numeroRandom);
    }
    let cantidad = 0;
    for (let i = 1; i <= cantidad; i++) {
        let numeriP=arseInt(prompt("Ingrese un número:"));
        if (numeriP % 2 === 0) {
         cantidad++;
        } 
    }
    alert("La cantidad de números pares ingresados es: " + cantidad);

let nombres = [ "Juan", "María", "Pedro", "Ana", "Luis"];
    console.log(nombres);

    let nombres1 = [ "Juan", "María", "Pedro", "Ana", "Luis"];
    for (let i = 0; i < nombres1.length; i++) {
        console.log(nombres1[i]);
    }
 let numerosMyM = [5, 10, 15, 20, 25];
   let mayor = numerosMyM[0];
    let menor = numerosMyM[0];
    for (let i = 1; i < numerosMyM.length; i++) {
        if (numerosMyM[i] > mayor) {
            mayor = numerosMyM[i];
        }   
        if (numerosMyM[i] < menor) {
            menor = numerosMyM[i];
        }
    }
    console.log("El número mayor es: " + mayor);
    console.log("El número menor es: " + menor);
    let notasP = [7, 8, 9, 10];
    let promedio = 0;
    for (let i = 0; i < notasP.length; i++) {
        promedio += notasP[i];
    }
    promedio /= notasP.length;
    console.log("El promedio de las notas es: " + promedio);
    
let nombresU = [];
let nombreU;
while (nombreU !== "salir") {
    nombreU = prompt("Ingrese un nombre (o escriba 'salir' para finalizar):");
    if (nombreU !== "salir") {
        nombresU.push(nombreU);
    }
}
console.log("Los nombres ingresados son:");
for (let i = 0; i < nombresU.length; i++) {
    console.log(nombresU[i]);
}
console.log("La cantidad de nombres ingresados es: " + nombresU.length);
let numerosPares = [];
let numeroP;
while (numeroP !== 0) {
    numeroP = parseInt(prompt("Ingrese un número (0 para finalizar):"));
    if (numeroP !== 0 && numeroP % 2 === 0) {
        numerosPares.push(numeroP);
    }
}
console.log("Los números pares ingresados son:");
for (let i = 0; i < numerosPares.length; i++) {
    console.log(numerosPares[i]);
}
console.log("La cantidad de números pares ingresados es: " + numerosPares.length);

let frutas = ["manzana", "banana", "naranja", "uva", "pera"];
let frutaBuscada = prompt("Ingrese el nombre de la fruta que desea buscar:");
console.log(frutas.includes(frutaBuscada));
frutas.pop(); 
console.log(frutas);
frutas.push("sandía");
console.log(frutas);