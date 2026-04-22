const form = document.getElementById("nameForm");
const input = document.getElementById("nameInput");
const list = document.getElementById("nameList");
const errorMsg = document.getElementById("errorMsg");
const clearBtn = document.getElementById("clearBtn");

export function getFormElements() {
  return { form, input, list, errorMsg, clearBtn };
}

export function addParticipant(name) {
  const li = document.createElement("li");

  const dot = document.createElement("span");
  dot.classList.add("dot", "gold");

  li.appendChild(dot);
  li.appendChild(document.createTextNode(name));

  list.appendChild(li);
}

export function clearParticipants() {
  list.innerHTML = "";
}

export function showInputError(message) {
  input.value = "";
  input.placeholder = message;
  input.classList.add("error-placeholder");
}

export function resetInput() {
  input.value = "";
  input.placeholder = "Escribe un nombre...";
  input.classList.remove("error-placeholder");
}

export function clearErrorMessage() {
  errorMsg.textContent = "";
}

export function getParticipantsCount() {
  return list.children.length;
}