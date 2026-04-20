/* NEWS API */


const NEWS_API_KEY = "03bdbfbb245fe0261f7c5de3fa8b4f38";

export async function getNews(country = "es", category = "general") {

    const categories = {
        general: "breaking-news",
        sports: "sports",
        business: "business",
        technology: "technology"
    };

    const topic = categories[category] || "breaking-news";

    let url =
        `https://gnews.io/api/v4/top-headlines?country=${country}&lang=es&topic=${topic}&max=8&apikey=${NEWS_API_KEY}`;

    let response = await fetch(url);
    let data = await response.json();

    /* fallback USA */
    if (!data.articles || data.articles.length === 0) {

        url =
            `https://gnews.io/api/v4/top-headlines?country=us&lang=es&topic=${topic}&max=8&apikey=${NEWS_API_KEY}`;

        response = await fetch(url);
        data = await response.json();
    }

    return data.articles || [];
}