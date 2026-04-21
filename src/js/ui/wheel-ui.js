const wheel = document.querySelector(".wheel-body");
const button = document.getElementById("spinButton");

export function getWheelElements() {
  return { wheel, button };
}

export function rotateWheel(degrees) {
  wheel.style.transform = `rotate(${degrees}deg)`;
}

export function disableSpinButton() {
  button.disabled = true;
}

export function enableSpinButton() {
  button.disabled = false;
}