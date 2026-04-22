import {
  getFormElements,
  addParticipant,
  clearParticipants,
  showInputError,
  resetInput,
  clearErrorMessage,
  getParticipantsCount
} from "../ui/forms-ui.js";

export function initForm() {
  const { form, input, clearBtn } = getFormElements();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = input.value.trim();

    if (!name) {
      showInputError("Por favor escribe un nombre");
      return;
    }

    if (getParticipantsCount() >= 10) {
      showInputError("Máximo 10 participantes");
      return;
    }

    addParticipant(name);
    resetInput();
    clearErrorMessage();
  });

  clearBtn.addEventListener("click", clearParticipants);
}