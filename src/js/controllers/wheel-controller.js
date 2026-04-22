import { rotateWheel } from "../ui/wheel-ui.js";

let currentRotation = 0;

export const WheelController = {
  spin(participants, callback) {
    const total = participants.length;
    const segment = 360 / total;

    const winnerIndex =
      Math.floor(Math.random() * total);

    const winnerAngle =
      winnerIndex * segment + segment / 2;

    const targetRotation = 360 - winnerAngle;

    const currentVisible =
      currentRotation % 360;

    let delta =
      targetRotation - currentVisible;

    if (delta < 0) delta += 360;

    const extraSpins = 1800;

    currentRotation += extraSpins + delta;

    console.log({
      currentVisible,
      targetRotation,
      delta,
      final: currentRotation % 360,
      index: winnerIndex,
      winner: participants[winnerIndex]
    });

    rotateWheel(currentRotation);

    setTimeout(() => {
      callback(participants[winnerIndex]);
    }, 5000);
  }
};