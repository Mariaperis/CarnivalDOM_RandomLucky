export function initWheel() {
    const wheel = document.getElementById('wheel');
    const button = document.getElementById('spinButton');
    const list = document.getElementById("nameList");

    let currentRotation = 0;

    const updateWheelLabels = (names) => {
    wheel.querySelectorAll('.wheel-label').forEach(l => l.remove());
    
    const total = names.length;
    const segmentDegrees = 360 / total;
    const colors = ['#e6c4fc', '#c0d40e', '#f652e8', '#f0bb4a', '#0d72ad', '#e92246', '#a116ec', '#82d5e7', '#e27508', '#f2e67a'];
    let gradientParts = [];

    names.forEach((name, i) => {
        const start = i * segmentDegrees;
        const end = (i + 1) * segmentDegrees;
        gradientParts.push(`${colors[i % colors.length]} ${start}deg ${end}deg`);

        const label = document.createElement('div');
        label.className = 'wheel-label';
        label.innerText = name;

        // --- LA NUEVA LÓGICA RADIAL ---
        const angle = (i * segmentDegrees) + (segmentDegrees / 2) - 90;

        label.style.position = 'absolute';
        label.style.top = '50%';
        label.style.left = '50%';
        // El ancho de la etiqueta será casi el radio de la ruleta (200px)
        label.style.width = '160px'; 
        
        // Alineamos el texto a la IZQUIERDA (para que la primera letra esté en el borde)
        label.style.textAlign = 'left'; 
        label.style.paddingLeft = '10px'; // Pequeño margen con el borde exterior
        
        // Punto de giro en el inicio de la etiqueta (el centro de la ruleta)
        label.style.transformOrigin = '0% 50%'; 
        
        // Rotamos y movemos un poco para que no choque con el hub central
        label.style.transform = `rotate(${angle + 90}deg) translateY(0px)`;
        
        wheel.appendChild(label);
    });

    wheel.style.background = `conic-gradient(${gradientParts.join(', ')})`;
};


    button.addEventListener('click', (e) => {
        e.preventDefault();

        const participants = Array.from(list.querySelectorAll('li'))
                                  .map(li => li.textContent.trim());

        if (participants.length < 2) return alert("¡Mínimo 2 participantes!");

        updateWheelLabels(participants);

        const extraDegrees = Math.floor(Math.random() * 360);
        currentRotation += 1800 + extraDegrees;
        
        wheel.style.transform = `rotate(${currentRotation}deg)`;
        button.disabled = true;

        setTimeout(() => {
    const total = participants.length;
    const segmentDegrees = 360 / total;

        const actualRotation = currentRotation % 360;
    // 1. Calculamos el ángulo en el que se detuvo
     const correctedAngle = (360 - actualRotation + 270) % 360;

    
    // 3. Calculamos el índice con el ángulo corregido
    const winnerIndex = Math.floor(correctedAngle / segmentDegrees);
    const winner = participants[winnerIndex];
    
    alert(`🎉 ¡El ganador es: ${winner}!`);
    button.disabled = false;
}, 5000);

    });
}


