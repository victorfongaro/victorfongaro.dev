document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio carregado com sucesso!");

    const cards = document.querySelectorAll('.animate-card');
    const cardHardXP = document.getElementById("hardxp");

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
            // Abre o link do projeto em uma nova aba
            window.open("projetos/projeto1.html", "_blank");
        });
    }
});