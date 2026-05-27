const formulario = document.getElementById('Formulario');
const input = document.getElementById('tarea');
const lista = document.getElementById('lista-tareas');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(event) {

    event.preventDefault();

    const textoTarea = input.value;

    if (textoTarea === '') {
        alert('Por favor, ingresa una tarea.');
    } else {

       
        const nuevaTarea = document.createElement("li");

      
        const texto = document.createElement("span");
        texto.textContent = textoTarea;

     
        const botonCompletar = document.createElement("button");
        botonCompletar.textContent = "Completar";

        botonCompletar.addEventListener("click", function() {
            texto.classList.toggle("completada");
        });

     
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function() {
            nuevaTarea.remove();
        });

       
        nuevaTarea.appendChild(texto);
        nuevaTarea.appendChild(botonCompletar);
        nuevaTarea.appendChild(botonEliminar);

        lista.appendChild(nuevaTarea);

       
        input.value = '';
    }
let totalTareas = 0;
let tareasCompletadas = 0;

total.textContent = totalTareas;

completadas.textContent = tareasCompletadas;

pendientes.textContent = totalTareas - tareasCompletadas;
totalTareas++;

total.textContent = totalTareas;
pendientes.textContent = totalTareas - tareasCompletadas;


if (li.classList.contains("completada")) {
    tareasCompletadas++;
} else {
    tareasCompletadas--;
}
completadas.textContent = tareasCompletadas;
pendientes.textContent = totalTareas - tareasCompletadas;
if (li.classList.contains("completada")) {
    tareasCompletadas--;
}

totalTareas--;

total.textContent = totalTareas;
completadas.textContent = tareasCompletadas;
pendientes.textContent = totalTareas - tareasCompletadas;
});
const borrarTodo = document.getElementById("borrarTodo");

borrarTodo.addEventListener("click", function() {

    lista.innerHTML = "";

    totalTareas = 0;
    tareasCompletadas = 0;

    total.textContent = 0;
    completadas.textContent = 0;
    pendientes.textContent = 0;
});
document.getElementById("todas").addEventListener("click", function() {

    const tareas = document.querySelectorAll("li");

    tareas.forEach(function(li) {
        li.style.display = "list-item";
    });
});
document.getElementById("filtroCompletadas").addEventListener("click", function() {

    const tareas = document.querySelectorAll("li");

    tareas.forEach(function(li) {

        if (li.classList.contains("completada")) {
            li.style.display = "list-item";
        } else {
            li.style.display = "none";
        }

    });
});
document.getElementById("filtroPendientes").addEventListener("click", function() {

    const tareas = document.querySelectorAll("li");

    tareas.forEach(function(li) {

        if (!li.classList.contains("completada")) {
            li.style.display = "list-item";
        } else {
            li.style.display = "none";
        }

    });
});