/* WEATHER UI */

import { getWeatherByCoords } from "../services/weather-api.js";
import { loadNews } from "./news.js";

export let currentCountry = "es";

export function initWeather() {

    navigator.geolocation.getCurrentPosition(

        async (pos) => {

            try {

                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;

                const data = await getWeatherByCoords(lat, lon);

                const city = data.name;
                const country = data.sys.country.toLowerCase();

                currentCountry = country;

                const temp = Math.round(data.main.temp);
                const icon = data.weather[0].icon;
                const desc = data.weather[0].description;

                const flag = `https://flagcdn.com/w40/${country}.png`;
                const weatherIcon =
                    `https://openweathermap.org/img/wn/${icon}@2x.png`;

                document.getElementById("flagIcon").src = flag;
                document.getElementById("weatherIcon").src = weatherIcon;

                document.getElementById("weatherCity").textContent = city;
                document.getElementById("weatherDesc").textContent = desc;
                document.getElementById("weatherTemp").textContent = `${temp}°C`;

                loadNews(country, "general");

            } catch (error) {

                console.error("ERROR WEATHER:", error);

                showPermissionError();
                loadNews("es", "general");
            }

        },

        (error) => {

            console.warn("Permiso ubicación denegado");

            showPermissionError();

            loadNews("es", "general");
        }

    );
}


/* MENSAJE SI NO HAY PERMISOS */

function showPermissionError() {

    document.getElementById("weatherWidget").innerHTML = `
        <div class="permission-box">
            <span class="perm-icon">📍</span>

            <div>
                <div class="perm-title">
                    Ubicación desactivada
                </div>

                <div class="perm-subtitle">
                    Activa permisos del navegador
                </div>
            </div>
        </div>
    `;
}