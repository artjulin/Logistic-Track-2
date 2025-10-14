document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    // Mapeamento de data-module para o nome do arquivo HTML correspondente
    const pageMap = {
        'visao-geral': 'index.html',
        'motoristas': 'motoristas.html',
        'veiculos': 'veiculos.html',
        'entregas': 'entregas.html',
        'rotas': 'rotas.html'
    };

    menuItems.forEach(item => {
        // Lógica de Ativação (Mantém o item da página atual como 'active')
        // Embora 'active' seja definido no HTML, esta lógica garante que o estado 
        // seja persistente se a página for recarregada.

        const dataModule = item.getAttribute('data-module');
        const fileName = pageMap[dataModule];

        // Adiciona a lógica de clique para simular a navegação (troca de página)
        item.addEventListener('click', function() {
            if (fileName) {
                // Redireciona para o arquivo HTML correspondente
                window.location.href = fileName;
            } else {
                console.warn('Módulo não mapeado:', dataModule);
            }
        });
    });
});
