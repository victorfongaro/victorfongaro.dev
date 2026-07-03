document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio carregado com sucesso!");

    const cards = document.querySelectorAll('.animate-card');
    const cardHardXP = document.getElementById("hardxp");
    const cardIFuteba = document.getElementById("ifuteba");
    const cardRobotica = document.getElementById("robotica");

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = "0 4px 20px rgba(157, 78, 223, 0.15)";
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = "none";
        });
    });

    if (cardHardXP) {
        cardHardXP.addEventListener("click", () => {
            window.location.href = "projetos/projeto1.html";
        });
    }

    if (cardIFuteba) {
        cardIFuteba.addEventListener("click", () => {
            window.location.href = "projetos/projeto2.html";
        });
    }
    if (cardRobotica) {
        cardRobotica.addEventListener("click", () => {
            window.location.href = "projetos/projeto3.html";
        });
        }
});