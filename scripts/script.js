// Seleccionamos elementos del DOM
const form = document.getElementById("nameForm");
const input = document.getElementById("nameInput");
const list = document.getElementById("nameList");
const errorMsg = document.getElementById("errorMsg");
const clearBtn = document.getElementById("clearBtn");

// Evento al enviar formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  // Evita que la página se recargue

  const name = input.value.trim();
  // Quitamos espacios extra

// 1. Validar si está vacío
  if (name === "") {
    input.value = ""; 
    input.placeholder = "Por favor escribe un nombre"; 
    input.classList.add("error-placeholder"); 
    return; // Sale de la función aquí
  }
  
  // 2. Validar el máximo de 10
  if (list.children.length >= 10) {
    input.value = ""; 
    input.placeholder = "Máximo 10 participantes"; 
    input.classList.add("error-placeholder");
    return; // Sale de la función aquí
  }

  // Si pasa las validaciones, limpiamos estilos de error
  input.classList.remove("error-placeholder");
  input.placeholder = "Escribe un nombre...";

  if (name === "") {
    errorMsg.textContent = "Por favor escribe un nombre";
    return;
  }

  if (list.children.length >= 10) {
  errorMsg.textContent = "Máximo 10 participantes";
  return;
}

  // Limpiamos error si todo va bien
  errorMsg.textContent = "";

  // Crear nuevo elemento <li>
  const li = document.createElement("li");

  // Crear punto decorativo
  const dot = document.createElement("span");
  dot.classList.add("dot", "gold");

  li.appendChild(dot);
  li.appendChild(document.createTextNode(name));

  // Añadir a la lista
  list.appendChild(li);

  // Limpiar input
  input.value = "";
});

// Botón limpiar
clearBtn.addEventListener("click", function () {
  list.innerHTML = "";
  // Borra todos los elementos de la lista
});
// 1. Identificamos las piezas que vamos a mover
