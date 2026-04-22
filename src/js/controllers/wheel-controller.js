import { rotateWheel } from "../ui/wheel-ui.js";

let currentRotation = 0;

export const WheelController = {
  spin(participants, callback) {
    const extra = Math.floor(Math.random() * 360);
    currentRotation += 1800 + extra;

    rotateWheel(currentRotation);

    setTimeout(() => {
      const winner = this.getWinner(participants);
      callback(winner);
    }, 5000);
  },

  getWinner(participants) {
    const total = participants.length;
    const segment = 360 / total;

    const angle = currentRotation % 360;
    const corrected = (360 - angle + 270) % 360;

    const index = Math.floor(corrected / segment);

    return participants[index];
  }
};