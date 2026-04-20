/* WEATHER UI */

import { getWeatherByCoords } from "../services/weather-api.js";
import { loadNews } from "./news.js";

export let currentCountry = "es";

export function initWeather() {

    navigator.geolocation.getCurrentPosition(async (pos) => {

        try {

            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            const data = await getWeatherByCoords(lat, lon);

            const city = data.name;
            const country = data.sys.country.toLowerCase();

            currentCountry = country;

            const temp = Math.round(data.main.temp);
            const icon = data.weather[0].icon;

            const flag =
                `https://flagsapi.com/${country.toUpperCase()}/flat/64.png`;

            const weatherIcon =
                `https://openweathermap.org/img/wn/${icon}.png`;

            document.getElementById("weatherBox").innerHTML = `
                <img src="${flag}">
                <span>${city}</span>
                <img src="${weatherIcon}">
                <span>${temp}°C</span>
            `;

            loadNews(country, "general");

        } catch (error) {
            console.error(error);
        }

    });
}