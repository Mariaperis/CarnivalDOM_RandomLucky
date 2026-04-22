import { openModal } from "../ui/modal-ui.js";

const FORTUNES = [
    "El universo conspira a tu favor. Hoy es el día en que todo cambia.",
    "Tu sonrisa tiene el poder de iluminar el camino de quienes te rodean.",
    "Una oportunidad inesperada llamará a tu puerta. Ábrela sin dudar.",
    "La paciencia que has tenido dará sus frutos más pronto de lo que imaginas.",
    "Los astros alinean una sorpresa especial para ti esta semana.",
    "Tu intuición nunca falla. Confía en ella y avanza.",
    "Un viejo sueño está a punto de convertirse en realidad.",
    "Alguien cercano guarda una admiración secreta hacia ti.",
    "El camino que parece difícil es exactamente el que te lleva a donde debes ir.",
    "La abundancia viene en muchas formas. Abre los ojos y notarás la tuya.",
    "Tu energía positiva es tan poderosa que contagia a todos a tu alrededor.",
    "Un giro inesperado en tu historia te llevará a un capítulo más emocionante.",
    "La perseverancia es tu mayor virtud. No te detengas ahora.",
    "Esta semana, una conversación cambiará tu perspectiva para siempre.",
    "Eres más valiente de lo que crees y más talentoso de lo que imaginas.",
    "El amor y la amistad que das volverán a ti multiplicados.",
    "Algo que perdiste tiempo atrás encontrará su camino de vuelta a ti.",
    "El éxito no te busca, pero tú ya lo estás alcanzando paso a paso.",
    "Nuevas amistades traerán alegría y oportunidades a tu vida.",
    "El secreto de tu felicidad está más cerca de lo que piensas.",
    "Una decisión valiente que tomes hoy definirá el mejor capítulo de tu vida.",
    "Los planetas alían sus fuerzas para traer prosperidad a tu hogar.",
    "Tu creatividad es un tesoro que el mundo necesita ver.",
    "Esta luna llena trae claridad mental y fuerza emocional para ti.",
    "Las semillas que has plantado con esfuerzo están a punto de florecer."
];


export function initModalController() {
    const spinButton = document.getElementById("spinButton");
    const nameList = document.getElementById("nameList");

    spinButton.addEventListener("click", () => {
        openModal("María", "La abundancia viene en muchas formas. Abre los ojos y notarás la tuya.");
    });
}