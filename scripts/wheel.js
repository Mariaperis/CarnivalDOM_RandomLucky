const wheel = document.querySelector('.wheel-body');
const button = document.getElementById('spinButton');

let currentRotation = 0;

button.addEventListener('click', () => {
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalSpin = 1900 + extraDegrees;

    currentRotation += totalSpin;
    
    wheel.style.transform = `rotate(${currentRotation}deg)`;
});