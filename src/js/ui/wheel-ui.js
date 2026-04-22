// wheelUI.js
import { WheelLogic } from '../controllers/wheel-controller.js  

export function initWheel() {
    const wheel = document.getElementById('wheel');
    const button = document.getElementById('spinButton');
    const list = document.getElementById("nameList");

    let currentRotation = 0;

    // --- FUNCIÓN PARA DIBUJAR LOS NOMBRES ---
    const updateWheelLabels = (names) => {
        // Borramos nombres anteriores
        wheel.querySelectorAll('.wheel-label').forEach(l => l.remove());

        names.forEach((name, i) => {
            const label = document.createElement('div');
            label.className = 'wheel-label';
            label.innerText = name;

            // Lógica de posición:
            // Cada gajo es 36°. El centro del gajo es (i * 36 + 18).
            // Restamos 90 porque el 0 de CSS empieza a la derecha y tu ruleta arriba.
            const angle = (i * 36) + 18 - 90;
            
            // Aplicamos rotación
            label.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            
            wheel.appendChild(label);
        });
    };

    // --- EVENTO DEL BOTÓN GIRAR ---
    button.addEventListener('click', () => {
        const participants = Array.from(list.querySelectorAll('li'))
                                  .map(li => li.textContent.trim());

        if (participants.length < 2) return alert("¡Añade al menos 2 nombres!");

        // 1. Dibujamos los nombres en sus sitios
        updateWheelLabels(participants);

        // 2. Calculamos y aplicamos el giro
        currentRotation = WheelLogic.calculateRotation(currentRotation);
        wheel.style.transform = `rotate(${currentRotation}deg)`;

        // 3. Desactivar botón para evitar doble clic
        button.disabled = true;

        // 4. Mostrar resultado tras la animación (5 segundos)
        setTimeout(() => {
            const winnerIdx = WheelLogic.getWinnerIndex(currentRotation);
            const winnerName = participants[winnerIdx % participants.length];
            
            alert(`🎉 ¡El ganador es: ${winnerName}!`);
            button.disabled = false;
        }, 5000);
    });
}
