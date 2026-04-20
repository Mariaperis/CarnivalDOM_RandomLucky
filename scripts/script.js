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

  if (name === "") {
    errorMsg.textContent = "Por favor escribe un nombre";
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
