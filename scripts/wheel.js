/* ==========================================
   RULETA
========================================== */

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