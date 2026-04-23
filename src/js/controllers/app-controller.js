import { ParticipantsStore } from "../models/participants-store.js";
import { WheelController } from "./wheel-controller.js";
import { showWinnerModal } from "./modal-controller.js";

export function initApp() {
  const spinBtn = document.getElementById("spinButton");

  spinBtn.addEventListener("click", () => {
    const participants = ParticipantsStore.getActive();

    if (participants.length < 1) return;

    WheelController.spin(participants, winner => {
      showWinnerModal(winner);
    });
  });
}