export function renderWeather(data) {
  const city = data.name;
  const country = data.sys.country.toLowerCase();

  const temp = Math.round(data.main.temp);
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;

  document.getElementById("flagIcon").src =
    `https://flagcdn.com/w40/${country}.png`;

  document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

  document.getElementById("weatherCity").textContent = city;

  document.getElementById("weatherDesc").textContent = desc;

  document.getElementById("weatherTemp").textContent =
    `${temp}°C`;
}

export function renderPermissionError() {
  document.getElementById("weatherWidget").innerHTML = `
    <div class="permission-box">
      <span class="perm-icon">📍</span>

      <div>
        <div class="perm-title">Ubicación desactivada</div>
        <div class="perm-subtitle">
          Activa permisos del navegador
        </div>
      </div>
    </div>
  `;
}