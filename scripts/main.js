import { initWeather, currentCountry } from "./weather.js";
import { loadNews } from "./news.js";
import { initWheel } from "./wheel.js";
import { initForm } from "./form.js";
import { initStars } from "./stars.js";

initWeather();
initWheel();
initForm();
initStars();

/* BOTONES */

document.getElementById("btnTrending")
.addEventListener("click", () => loadNews(currentCountry, "general"));

document.getElementById("btnFutbol")
.addEventListener("click", () => loadNews(currentCountry, "sports"));

document.getElementById("btnEconomia")
.addEventListener("click", () => loadNews(currentCountry, "business"));

document.getElementById("btnGaming")
.addEventListener("click", () => loadNews(currentCountry, "technology"));