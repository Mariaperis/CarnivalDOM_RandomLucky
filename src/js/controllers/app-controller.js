import { ParticipantsStore } from "../models/participants-store.js";
import { WheelController } from "./wheel-controller.js";
import { showWinnerModal } from "./modal-controller.js";

export function initApp() {
  const button = document.getElementById("spinButton");

  button.addEventListener("click", () => {

    const participants = ParticipantsStore.getAll();

    if (participants.length < 2) return;

    button.disabled = true;

    WheelController.spin(participants, winner => {

      showWinnerModal(winner);

      button.disabled = false;
    });
  });
}