export function initForm() {
  const form = document.getElementById("nameForm");
  const input = document.getElementById("nameInput");
  const list = document.getElementById("nameList");
  const errorMsg = document.getElementById("errorMsg");
  const clearBtn = document.getElementById("clearBtn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = input.value.trim();

    if (name === "") {
      input.value = "";
      input.placeholder = "Por favor escribe un nombre";
      input.classList.add("error-placeholder");
      return;
    }

    if (list.children.length >= 10) {
      input.value = "";
      input.placeholder = "Máximo 10 participantes";
      input.classList.add("error-placeholder");
      return;
    }

    input.classList.remove("error-placeholder");
    input.placeholder = "Escribe un nombre...";
    errorMsg.textContent = "";

    const li = document.createElement("li");

    const dot = document.createElement("span");
    dot.classList.add("dot", "gold");

    li.appendChild(dot);
    li.appendChild(document.createTextNode(name));

    list.appendChild(li);

    input.value = "";
  });

  clearBtn.addEventListener("click", function () {
    list.innerHTML = "";
  });
}