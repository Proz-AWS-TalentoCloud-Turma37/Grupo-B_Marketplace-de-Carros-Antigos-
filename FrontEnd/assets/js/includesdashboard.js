document.addEventListener("DOMContentLoaded", function () {
    fetch("../../componentes/menuDashboardUser.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-dashboard-user").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../componentes/menuDashboardAdmin.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-dashboard-admin").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o menu:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../componentes/footerDashboard.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-dashboard").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o rodapé:", error));
});