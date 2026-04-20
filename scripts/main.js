import { initWeather, currentCountry } from "./weather.js";
import { loadNews } from "./news.js";
import { initWheel } from "./wheel.js";

initWeather();
initWheel();

/* BOTONES */

document.getElementById("btnTrending")
.addEventListener("click", () => loadNews(currentCountry, "general"));

document.getElementById("btnFutbol")
.addEventListener("click", () => loadNews(currentCountry, "sports"));

document.getElementById("btnEconomia")
.addEventListener("click", () => loadNews(currentCountry, "business"));

document.getElementById("btnGaming")
.addEventListener("click", () => loadNews(currentCountry, "technology"));