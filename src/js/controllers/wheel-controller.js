import { rotateWheel } from "../ui/wheel-ui.js";

let currentRotation = 0;

export const WheelController = {
  spin(participants, callback) {
    if (!participants.length) return;

    const total = participants.length;
    const segment = 360 / total;

    const index = Math.floor(Math.random() * total);
    const selected = participants[index];

    const centerAngle = index * segment + segment / 2;

    const targetAngle = 360 - centerAngle;

    const currentVisible = currentRotation % 360;

    let delta = targetAngle - currentVisible;

    if (delta < 0) delta += 360;

    currentRotation += 1800 + delta;

    rotateWheel(currentRotation);

    console.log({
      index,
      winner: selected.name
    });

    setTimeout(() => {
      callback(selected.name);
    }, 5000);
  }
};