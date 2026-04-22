import { getWeatherByCoords } from "../api/weather-api.js";

import {
  renderWeather,
  renderPermissionError
} from "../ui/weather-ui.js";

import {
  updateCountry,
  loadNews
} from "./news-controller.js";

export function initWeather() {
  navigator.geolocation.getCurrentPosition(
    onSuccess,
    onError
  );
}

async function onSuccess(pos) {
  try {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const data = await getWeatherByCoords(lat, lon);

    const country = data.sys.country.toLowerCase();

    renderWeather(data);

    updateCountry(country);

    loadNews(country, "general");

  } catch (error) {
    console.error(error);

    renderPermissionError();

    updateCountry("es");

    loadNews("es", "general");
  }
}

function onError() {
  renderPermissionError();

  updateCountry("es");

  loadNews("es", "general");
}