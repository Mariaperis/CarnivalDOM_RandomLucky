const apiKey = "51154ebf8326cade5859c61f3a78df61";
const newsKey = "03bdbfbb245fe0261f7c5de3fa8b4f38";

let paisActual = "es";

navigator.geolocation.getCurrentPosition(async (pos) => {

    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

    const response = await fetch(url);
    const data = await response.json();

    const ciudad = data.name;
    const pais = data.sys.country.toLowerCase();
    paisActual = pais;

    const temp = Math.round(data.main.temp);
    const icono = data.weather[0].icon;

    const bandera = `https://flagsapi.com/${pais.toUpperCase()}/flat/64.png`;
    const iconoClima = `https://openweathermap.org/img/wn/${icono}.png`;

    document.getElementById("weatherBox").innerHTML = `
        <img src="${bandera}">
        <span>${ciudad}</span>
        <img src="${iconoClima}">
        <span>${temp}°C</span>
    `;

    cargarNoticias(pais, "general");

});


async function cargarNoticias(pais, categoria = "general") {

    const box = document.getElementById("newsBox");

    box.innerHTML = "Cargando noticias...";

    try {

        const categorias = {
            general: "breaking-news",
            sports: "sports",
            business: "business",
            technology: "technology"
        };

        const tema = categorias[categoria] || "breaking-news";

        /* ===============================
           PRIMER INTENTO: PAÍS USUARIO
        =============================== */

        let url =
            `https://gnews.io/api/v4/top-headlines?country=${pais}&lang=es&topic=${tema}&max=8&apikey=${newsKey}`;

        let res = await fetch(url);
        let data = await res.json();

        /* ===============================
           FALLBACK AUTOMÁTICO → USA
        =============================== */

        if (!data.articles || data.articles.length === 0) {

            url =
                `https://gnews.io/api/v4/top-headlines?country=us&lang=es&topic=${tema}&max=8&apikey=${newsKey}`;

            res = await fetch(url);
            data = await res.json();
        }

        /* ===============================
           MOSTRAR NOTICIAS
        =============================== */

        box.innerHTML = "";

        if (!data.articles || data.articles.length === 0) {
            box.innerHTML = "No hay noticias disponibles.";
            return;
        }

        data.articles.forEach(noticia => {

            box.innerHTML += `
                <div class="news-item">
                    <a href="${noticia.url}" target="_blank">
                        ${noticia.title}
                    </a>
                    <small>${noticia.source.name}</small>
                </div>
            `;
        });

    } catch (error) {

        box.innerHTML = "Error cargando noticias.";
        console.log(error);

    }
}


/* BOTONES */

document.getElementById("btnTrending").onclick = () => cargarNoticias(paisActual, "general");
document.getElementById("btnFutbol").onclick = () => cargarNoticias(paisActual, "sports");
document.getElementById("btnEconomia").onclick = () => cargarNoticias(paisActual, "business");
document.getElementById("btnGaming").onclick = () => cargarNoticias(paisActual, "technology");


/* DORIS */
const wheel = document.querySelector('.wheel-body');
const button = document.getElementById('spinButton');

let currentRotation = 0;

button.addEventListener('click', () => {
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalSpin = 1900 + extraDegrees;

    currentRotation += totalSpin;

    wheel.style.transform = `rotate(${currentRotation}deg)`;
});