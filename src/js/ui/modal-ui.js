const overlay = document.getElementById("resultOverlay");
const modalName = document.getElementById("modalName");
const modalFortune = document.getElementById("modalFortune");
const closeBtn = document.getElementById("closeModalBtn");

export function openModal(name, fortune) {
  modalName.textContent = name;
  modalFortune.textContent = fortune;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

export function closeModal() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// botón cerrar
closeBtn.addEventListener("click", closeModal);

// tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// clic fuera del modal
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});