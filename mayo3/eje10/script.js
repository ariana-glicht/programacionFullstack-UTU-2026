// Ejercicio 1
function cambiarTexto() {

    let title = document.getElementById("title");

    title.textContent = "¡Ejercicio 10!";
}

// Ejercicio 2
function cambiarTextoElemento() {

    let paragraph = document.getElementById("paragraph");

    paragraph.textContent = "¡Texto cambiado!";
}

// Ejercicio 3
function cambiarImagen() {

    let image = document.getElementById("image");

    image.src =
    "https://i.pinimg.com/1200x/76/ef/ae/76efae9ee07592b98129359a5eda2c8b.jpg";
}

// Ejercicio 4
function mostrarMensaje() {

    let texto =
    document.getElementById("mensaje1").value;

    document.getElementById("resultado1").textContent = texto;
}

// Ejercicio 5
const texto = document.querySelector("#texto");

texto.classList.add("rojo");

// Ejercicio 6
const texto2 = document.querySelector("#texto2");

texto2.classList.remove("rojo");

// Ejercicio 7
const botonModo = document.querySelector(".btn");

botonModo.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});

// Ejercicio 8
function agregarElemento() {

    const lista =
    document.querySelector(".lista");

    const nuevoElemento =
    document.createElement("li");

    nuevoElemento.textContent =
    "Nuevo elemento";

    lista.appendChild(nuevoElemento);
}

// Ejercicio 9
const botonFinal =
document.querySelector("#btnlast");
const $title = document.querySelector(".form-title");

const nombreinput = document.querySelector("#nombre");
const color = document.querySelector("#color");
const mensaje = document.querySelector("#mensaje2");

const nombreResultado = document.querySelector("#nombreResultado");
const colorResultado = document.querySelector("#colorResultado");
const mensajeResultado = document.querySelector("#mensajeResultado");

const errorDiv = document.querySelector(".error");


botonFinal.addEventListener("click", function () {
    if (nombreinput.value !== "" && color.value !== "" && mensaje.value !== "") {
        errorDiv.textContent = "";
        $title.classList.add("rojo");
        nombreResultado.textContent = nombreinput.value;
        colorResultado.textContent = color.value;
        mensajeResultado.textContent = mensaje.value;

        const card = document.createElement("div");
    card.innerHTML = `
        <h3>Nombre: ${nombreinput.value}</h3>
        <p>Color favorito: ${color.value}</p>
        <p>Mensaje: ${mensaje.value}</p>
    `;
    document.body.appendChild(card);

    
       
    } else {
       errorDiv.textContent = "Por favor, completa todos los campos.";
    }

    

});