const apiKey = "51154ebf8326cade5859c61f3a78df61";

navigator.geolocation.getCurrentPosition(async (pos) => {

    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

    const response = await fetch(url);
    const data = await response.json();

    const ciudad = data.name;
    const pais = data.sys.country;
    const temp = Math.round(data.main.temp);
    const icono = data.weather[0].icon;

    const bandera = `https://flagsapi.com/${pais}/flat/64.png`;
    const iconoClima = `https://openweathermap.org/img/wn/${icono}.png`;

    document.getElementById("weatherBox").innerHTML = `
        <img src="${bandera}">
        <span>${ciudad}</span>
        <img src="${iconoClima}">
        <span>${temp}°C</span>
    `;

});