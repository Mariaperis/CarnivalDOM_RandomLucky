import { ParticipantsStore } from "../models/participants-store.js";
import {
  getFormElements,
  renderParticipants,
  resetInput
} from "../ui/forms-ui.js";

import { renderWheel } from "../ui/wheel-ui.js";

export function initForm() {
  const { form, input, clearBtn } = getFormElements();

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = input.value.trim();

    if (!name) return;
    if (ParticipantsStore.count() >= 10) return;

    ParticipantsStore.add(name);
    syncUI();
    resetInput();
  });

  clearBtn.addEventListener("click", () => {
    ParticipantsStore.clear();
    syncUI();
  });

  syncUI();
}

export function syncUI() {
  const names = ParticipantsStore.getAll();

  renderParticipants(names);
  renderWheel(names);
}