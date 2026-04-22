import { initWeather } from "./controllers/weather-controller.js";
import { initNews } from "./controllers/news-controller.js";
import { initForm } from "./controllers/forms-controller.js";
import { initStars } from "./controllers/stars-controller.js";
import { initApp } from "./controllers/app-controller.js";
import { initModalController } from "./controllers/modal-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  initWeather();
  initNews("es");
  initForm();
  initStars();
  initApp();
  initModalController();
});


