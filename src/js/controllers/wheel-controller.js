export function initWheel() {
    const wheel = document.getElementById('wheel');
    const button = document.getElementById('spinButton');
    const list = document.getElementById("nameList");

    let currentRotation = 0;

    // 1. FUNCIÓN PARA DIBUJAR NOMBRES (DOM)
    const updateWheelLabels = (names) => {
    wheel.querySelectorAll('.wheel-label').forEach(l => l.remove());
    
    // 1. Calculamos cuánto mide cada gajo (ej: si son 6, mide 60°)
    const segmentDegrees = 360 / names.length;

    names.forEach((name, i) => {
        const label = document.createElement('div');
        label.className = 'wheel-label';
        label.innerText = name;

        // 2. Usamos segmentDegrees en lugar de 36. 
        // El (segmentDegrees / 2) es para que el texto quede en medio del gajo.
        const angle = (i * segmentDegrees) + (segmentDegrees / 2) - 90;
        
        label.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        wheel.appendChild(label);
    });
};


    // 2. EVENTO GIRAR
    button.addEventListener('click', (e) => {
        e.preventDefault(); // IMPORTANTE: Evita que la página se refresque

        const participants = Array.from(list.querySelectorAll('li'))
                                  .map(li => li.textContent.trim());

        if (participants.length < 2) {
            alert("¡Necesitas al menos 2 personas!");
            return;
        }

        updateWheelLabels(participants);

        // LÓGICA DE GIRO
        const extraDegrees = Math.floor(Math.random() * 360);
        currentRotation += 1800 + extraDegrees; // 5 vueltas + extra
        
        wheel.style.transform = `rotate(${currentRotation}deg)`;
        button.disabled = true;

        // 3. LÓGICA DEL GANADOR
        setTimeout(() => {
            // Calculamos qué gajo quedó bajo el puntero (arriba)
            const finalAngle = (360 - (currentRotation % 360)) % 360;
            const winnerIndex = Math.floor(((finalAngle + 90) % 360) / 36);
            const winner = participants[winnerIndex % participants.length];
            
            alert(`🎉 ¡El ganador es: ${winner}!`);
            button.disabled = false;
        }, 5000); 
    });
}
