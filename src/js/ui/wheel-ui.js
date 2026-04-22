const wheel = document.getElementById("wheel");

const colors = [
    "#e6c4fc", "#c0d40e", "#f652e8", "#f0bb4a", "#0d72ad",
    "#e92246", "#a116ec", "#82d5e7", "#e27508", "#f2e67a"
];

export function renderWheel(names) {
  const canvas = document.getElementById("wheelCanvas");
  const ctx = canvas.getContext("2d");

  const size = wheel.offsetWidth;
  canvas.width = size;
  canvas.height = size;

  // limpiar SIEMPRE primero
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // si no hay nombres, dejar ruleta vacía
  if (!names.length) {
    wheel.style.background = "#333";
    return;
  }

  const center = size / 2;
  const radius = size / 2;

  const total = names.length;
  const segment = (Math.PI * 2) / total;

  const gradients = [];

  names.forEach((name, i) => {
    const startDeg = i * (360 / total);
    const endDeg = startDeg + (360 / total);

    gradients.push(
      `${colors[i % colors.length]} ${startDeg}deg ${endDeg}deg`
    );
  });

  wheel.style.background =
    `conic-gradient(${gradients.join(",")})`;

  names.forEach((name, i) => {
    const angle = i * segment + segment / 2 - Math.PI / 2;

    const textRadius = radius * 0.63;

    const x = center + Math.cos(angle) * textRadius;
    const y = center + Math.sin(angle) * textRadius;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle + Math.PI / 2);

    ctx.fillStyle = "white";
    ctx.font = "bold 18px Poppins";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(name, 0, 0);

    ctx.restore();
  });
}

export function rotateWheel(deg) {
    wheel.style.transform = `rotate(${deg}deg)`;
}