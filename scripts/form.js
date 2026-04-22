export function initForm() {
  const form = document.getElementById("nameForm");
  const input = document.getElementById("nameInput");
  const list = document.getElementById("nameList");
  const errorMsg = document.getElementById("errorMsg");
  const clearBtn = document.getElementById("clearBtn");

  if (!form) return;

  const handleUIError = (message = "") => {
    errorMsg.textContent = message;
    if (message) {
      input.classList.add("input-error");
    } else {
      input.classList.remove("input-error");
    }
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = input.value.trim();

    if (name === "") {
      handleUIError("Por favor escribe un nombre");
      return;
    }

    if (!/^[a-zA-ZÁ-ÿ\s]+$/.test(name)) {
      handleUIError("Solo se permiten letras");
      return;
    }

    if (list.children.length >= 10) {
      handleUIError("Máximo 10 participantes");
      return;
    }

    handleUIError("");

    const li = document.createElement("li");
    li.innerHTML = `<span class="dot gold"></span> ${name}`;
    list.appendChild(li);

    input.value = "";
    input.focus(); // El cursor se queda listo para el siguiente nombre
  });

  input.addEventListener("input", () => handleUIError(""));
    
  clearBtn.addEventListener("click", function () {
    list.innerHTML = "";
    handleUIError("");
  });
}
