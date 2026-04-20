/* WHEEL */


export function initWheel() {

    const button = document.getElementById("spinButton");
    const wheel = document.getElementById("wheel");

    let rotation = 0;

    button.addEventListener("click", () => {

        const extra = Math.floor(Math.random() * 360);
        rotation += 1440 + extra;

        wheel.style.transform = `rotate(${rotation}deg)`;
    });
}


const wheel = document.querySelector('.wheel-body');
const button = document.getElementById('spinButton');

let currentRotation = 0;

button.addEventListener('click', () => {
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalSpin = 1900 + extraDegrees;

    currentRotation += totalSpin;
    
    wheel.style.transform = `rotate(${currentRotation}deg)`;
});
