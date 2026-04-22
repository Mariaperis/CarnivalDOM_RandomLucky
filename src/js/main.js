import { initWeather } from "./controllers/weather-controller.js";
import { initNews } from "./controllers/news-controller.js";
import { initWheel } from "./controllers/wheel-controller.js";
import { initForm } from "./controllers/forms-controller.js";
import { initStars } from "./controllers/stars-controller.js";
import { initModalController } from "./controllers/modal-controller.js";

function initApp() {
  initWeather();
  initNews("es");
  initWheel();
  initForm();
  initStars();
  initModalController();
}

initApp();