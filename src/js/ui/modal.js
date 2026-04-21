// ===== SPIN =====
function spinRoulette() {
    const active = participants.filter(p => !p.read);
    if (active.length === 0) { showToast('Agrega participantes primero'); return; }
    if (spinning) return;

    spinning = true;
    const btn = document.getElementById('playBtn');
    btn.disabled = true;

    // Reset previous winner marker
    participants.forEach(p => { p.isWinner = false; });
    renderList();

    // Pick winner
    const picked = active[Math.floor(Math.random() * active.length)];
    const pickedIndex = active.indexOf(picked);
    const sliceAngle = (Math.PI * 2) / active.length;

    // Calculate rotation so the pointer (top) lands on the picked slice
    const targetAngle = -(pickedIndex * sliceAngle) - sliceAngle / 2;
    const spins = 5 + Math.random() * 5;
    const totalRotation = currentRotation + spins * Math.PI * 2 + targetAngle - currentRotation % (Math.PI * 2);

    const duration = 4000 + Math.random() * 1500;
    const startTime = performance.now();
    const startRot = currentRotation;

    function easeOut(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        currentRotation = startTime + easeOut(progress) * (totalRotation - startRot);
        currentRotation = startRot + easeOut(progress) * (totalRotation - startRot);
        drawWheel(currentRotation);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            currentRotation = totalRotation;
            drawWheel(currentRotation);
            spinning = false;
            btn.disabled = false;
            onSpinComplete(picked);
        }
    }

    requestAnimationFrame(animate);
}

function onSpinComplete(winner) {
    const fortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];

    // Mark as read & winner
    const p = participants.find(x => x.id === winner.id);
    if (p) { p.read = true; p.isWinner = true; }
    saveToStorage();
    renderList();

    // Update inline result
    document.getElementById('resultName').textContent = winner.name;
    document.getElementById('resultFortune').textContent = fortune;
    document.getElementById('resultCard').classList.add('has-result');

    // Show modal
    document.getElementById('modalName').textContent = winner.name;
    document.getElementById('modalFortune').textContent = fortune;
    document.getElementById('resultOverlay').classList.add('active');
}

function closeOverlay() {
    document.getElementById('resultOverlay').classList.remove('active');
    drawWheel(currentRotation); // Redraw to show updated (read) slices
}