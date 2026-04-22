import {
  getWheelElements,
  rotateWheel,
  disableSpinButton,
  enableSpinButton
} from "../ui/wheel-ui.js";

let currentRotation = 0;
let isSpinning = false;

export function initWheel() {
  const { button } = getWheelElements();

  button.addEventListener("click", handleSpin);
}

function handleSpin() {
  if (isSpinning) return;

  isSpinning = true;

  disableSpinButton();

  const extraDegrees = Math.floor(Math.random() * 360);

  const totalSpin = 1800 + extraDegrees;

  currentRotation += totalSpin;

  rotateWheel(currentRotation);

  setTimeout(() => {
    enableSpinButton();
    isSpinning = false;
  }, 4000);
}