const box = document.getElementById("newsBox");
const tabs = document.querySelectorAll(".tab");

export function showLoading() {
  box.innerHTML = "Cargando noticias...";
}

export function showError() {
  box.innerHTML = "Error cargando noticias.";
}

export function showEmpty() {
  box.innerHTML = "No hay noticias disponibles.";
}

export function setActiveTab(category) {
  tabs.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.cat === category);
  });
}

export function renderNews(articles) {
  box.innerHTML = "";

  articles.forEach(article => {
    const item = document.createElement("div");

    item.className = "news-item";

    item.innerHTML = `
      <a href="${article.url}" target="_blank" rel="noopener noreferrer">
        ${article.title}
      </a>
      <small>${article.source.name}</small>
    `;

    box.appendChild(item);
  });
}

export function getTabs() {
  return tabs;
}