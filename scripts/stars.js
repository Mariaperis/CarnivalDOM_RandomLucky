export function initStars() {
function generateStars(){

    const container = document.getElementById("stars-container");

    const total = 42; 

    for(let i=0; i<total; i++){

        const star = document.createElement("div");
        star.classList.add("star");

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 4 + 2;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(star);
    }
}

generateStars();
}