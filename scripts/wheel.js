/* WHEEL */
export function initWheel() {
    const wheel = document.querySelector('.wheel-body');
    const button = document.getElementById('spinButton');
    const list = document.getElementById("nameList");

    let currentRotation = 0;

    // --- FUNCIÓN PARA MOSTRAR NOMBRES EN LA RULETA ---
    const updateWheelLabels = (names) => {
        // Limpiamos nombres anteriores pero mantenemos tus gajos de colores
        const oldLabels = wheel.querySelectorAll('.wheel-label');
        oldLabels.forEach(label => label.remove());

        // Colocamos cada nombre en su segmento (360° / 10 segmentos = 36° cada uno)
        names.forEach((name, i) => {
            const label = document.createElement('div');
            label.className = 'wheel-label';
            label.innerText = name;
            // Los centramos en cada gajo (i * 36 grados + 18 para el centro del gajo)
            label.style.transform = `rotate(${i * 36 + 18}deg) translateY(-120px)`;
            wheel.appendChild(label);
        });
    };

    button.addEventListener('click', () => {
        // 1. Obtener participantes actuales
        const participants = Array.from(list.querySelectorAll('li'))
                                  .map(li => li.textContent.trim());

        // 2. VALIDACIÓN: Mínimo 2, máximo 10
        if (participants.length < 2) {
            alert("¡Se necesitan al menos 2 participantes para jugar!");
            return;
        }

        // Actualizamos los nombres visualmente antes de girar
        updateWheelLabels(participants);

        // 3. LÓGICA DE GIRO
        const extraDegrees = Math.floor(Math.random() * 360);
        const totalSpin = 2189 + extraDegrees;
        currentRotation += totalSpin;
        wheel.style.transform = `rotate(${currentRotation}deg)`;

        // 4. RESULTADO
        setTimeout(() => {
            const finalAngle = (360 - (currentRotation % 360)) % 360;
            const segmentIndex = Math.floor(finalAngle / 36);
            
            // Si hay 10 gajos pero solo 3 personas, el ganador se repite en orden
            const winner = participants[segmentIndex % participants.length];
            
            alert(`🎉 ¡Felicidades! El ganador es: ${winner}`);
        }, 5000); // 5s de tu CSS
    });
}



















