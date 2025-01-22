document.addEventListener("DOMContentLoaded", function () {
    fetch("componentes/menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("componentes/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o rodapé:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("componentes/carousel.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("carousel-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o carousel:", error));
});