const overlay = document.getElementById("resultOverlay");
const modalName = document.getElementById("modalName");
const modalFortune = document.getElementById("modalFortune");

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

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

window.closeOverlay = closeModal;