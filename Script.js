// Script de interatividade e melhoria de experiência para o usuário móvel
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site de Consórcios e Investimentos de Josias Filho carregado com sucesso!");

    // Efeito suave de rolagem para os links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
