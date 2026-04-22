import { ParticipantsStore } from "../models/participants-store.js";
import { WheelController } from "./wheel-controller.js";

export function initApp() {
  const button = document.getElementById("spinButton");

  button.addEventListener("click", () => {
    const participants = ParticipantsStore.getAll();

    if (participants.length < 2) {
      alert("Añade mínimo 2 participantes");
      return;
    }

    button.disabled = true;

    WheelController.spin(participants, winner => {
      alert(`🎉 Ganador: ${winner}`);
      button.disabled = false;
    });
  });
}