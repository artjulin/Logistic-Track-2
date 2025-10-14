document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Inicializa o gráfico de Desempenho (Chart.js)
    const ctx = document.getElementById('deliveriesChart').getContext('2d');
    
    // Dados simulados
    const labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const data = [350, 480, 400, 520, 650, 450]; // Número simulado de entregas

    const deliveriesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Entregas Concluídas',
                data: data,
                backgroundColor: 'rgba(52, 152, 219, 0.8)', // Cor Azul (accent-blue)
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1000,
                    ticks: {
                        color: 'var(--text-subtle)' // Cor para os números no eixo Y
                    },
                    grid: {
                        color: '#495057' // Cor das linhas da grade
                    }
                },
                x: {
                    ticks: {
                        color: 'var(--text-subtle)' // Cor para as etiquetas do eixo X
                    },
                    grid: {
                        display: false // Remover linhas verticais
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Ocultar a legenda
                }
            }
        }
    });
    
    // 2. Lógica para alternar a classe 'active' da Sidebar
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos os itens
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
            
            // Em um projeto real, aqui você carregaria o novo conteúdo dinamicamente.
        });
    });
});
