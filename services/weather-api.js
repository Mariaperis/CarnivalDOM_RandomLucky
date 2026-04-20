/* ==========================================
   WEATHER API
========================================== */

const WEATHER_API_KEY = "51154ebf8326cade5859c61f3a78df61";

export async function getWeatherByCoords(lat, lon) {
    const url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=es`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error consultando OpenWeather");
    }

    return await response.json();
}