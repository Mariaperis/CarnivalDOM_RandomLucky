import { getNews } from "../api/news-api.js";

import {
  showLoading,
  showError,
  showEmpty,
  setActiveTab,
  renderNews
} from "../ui/news-ui.js";

let currentCountry = "es";

export function initNews(country = "es") {
  currentCountry = country;

  bindButtons();

  loadNews(currentCountry, "general");
}

function bindButtons() {
  document.getElementById("btnTrending")
    .addEventListener("click", () =>
      loadNews(currentCountry, "general")
    );

  document.getElementById("btnFutbol")
    .addEventListener("click", () =>
      loadNews(currentCountry, "sports")
    );

  document.getElementById("btnEconomia")
    .addEventListener("click", () =>
      loadNews(currentCountry, "business")
    );

  document.getElementById("btnGaming")
    .addEventListener("click", () =>
      loadNews(currentCountry, "technology")
    );
}

export function updateCountry(country) {
  currentCountry = country;
}

export async function loadNews(country, category = "general") {
  setActiveTab(category);
  showLoading();

  try {
    const articles = await getNews(country, category);

    if (!articles.length) {
      showEmpty();
      return;
    }

    renderNews(articles);

  } catch (error) {
    console.error(error);
    showError();
  }
}