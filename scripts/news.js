/* NEWS UI */

import { getNews } from "../services/news-api.js";

const box = document.getElementById("newsBox");
const tabs = document.querySelectorAll(".tab");

export function initNews(country) {

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            // cargar categoría
            const category = tab.dataset.cat;

            loadNews(country, category);
        });
    });

    loadNews(country, "general");
}

export async function loadNews(country, category = "general") {

    tabs.forEach(tab => {
        tab.classList.remove("active");

        if (tab.dataset.cat === category) {
            tab.classList.add("active");
        }
    });

    box.innerHTML = "Cargando noticias...";

    try {

        const articles = await getNews(country, category);

        if (!articles.length) {
            box.innerHTML = "No hay noticias disponibles.";
            return;
        }

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

    } catch (error) {

        box.innerHTML = "Error cargando noticias.";
        console.error(error);
    }
}