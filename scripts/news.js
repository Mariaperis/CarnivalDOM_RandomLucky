/* ==========================================
   NEWS UI
========================================== */

import { getNews } from "../services/news-api.js";

export async function loadNews(country, category = "general") {

    const box = document.getElementById("newsBox");

    box.innerHTML = "Cargando noticias...";

    try {

        const articles = await getNews(country, category);

        if (!articles.length) {
            box.innerHTML = "No hay noticias disponibles.";
            return;
        }

        box.innerHTML = "";

        articles.forEach(article => {

            box.innerHTML += `
                <div class="news-item">
                    <a href="${article.url}" target="_blank">
                        ${article.title}
                    </a>
                    <small>${article.source.name}</small>
                </div>
            `;
        });

    } catch (error) {

        box.innerHTML = "Error cargando noticias.";
        console.error(error);

    }
}