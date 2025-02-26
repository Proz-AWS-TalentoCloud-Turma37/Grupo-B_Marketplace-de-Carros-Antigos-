
async function carregarCarros() {
try {
    const response = await fetch('conexao/vendas.json');
    const carroVendas = await response.json();

    const container = document.getElementById('carros-vendas-container');
    container.innerHTML = ''; // Limpa o conteúdo antes de carregar

    carroVendas.slice(0, 6).forEach(carroVendas => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4', 'col-12');

        const imagensAdicionais = carroVendas.imagensAdicionais || []; // Garante que seja um array

        card.innerHTML = `
        <div class="card">
            <div id="carouselVendas${carroVendas.id}" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${carroVendas.imagem}" class="d-block w-100" alt="Imagem de ${carroVendas.modelo}">
                    </div>
                    ${imagensAdicionais.map((imagem, index) => `
                        <div class="carousel-item">
                            <img src="${imagem}" class="d-block w-100" alt="Imagem adicional ${index + 1} de ${carroVendas.modelo}">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselVendas${carroVendas.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselVendas${carroVendas.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próximo</span>
                </button>
            </div>
            <div class="card-body">
                <h4 class="text-center">${carroVendas.modelo} - ${carroVendas.ano}</h4>
                <div class="text-center">
                    <button type="button" class="btn btn-lg mt-2 btn-outline-info" data-bs-toggle="modal" data-bs-target="#modalcarouselVendas${carroVendas.id}">
                       <i class="bi bi-eye"></i>
                    </button>
                    <button type="button" class="btn btn-lg mt-2 btn-outline-success" onclick="venderCarro(${carroVendas.id})">
                        <i class="bi bi-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal Bootstrap -->
        <div class="modal fade" id="modalcarouselVendas${carroVendas.id}" tabindex="-1" aria-labelledby="modalcarouselVendasLabel${carroVendas.id}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-blue">
                        <h5 class="modal-title" id="modalcarouselVendasLabel${carroVendas.id}">Detalhes do Carro</h5>
                        <button type="button" class="btn text-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg fs-5"></i></button>
                    </div>
                    <div class="modal-body">
                        <div id="modalcarouselVendas${carroVendas.id}" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${carroVendas.imagem}" class="d-block w-100" alt="Imagem de ${carroVendas.modelo}">
                                </div>
                                ${imagensAdicionais.map((imagem, index) => `
                                    <div class="carousel-item">
                                        <img src="${imagem}" class="d-block w-100" alt="Imagem adicional ${index + 1} de ${carroVendas.modelo}">
                                    </div>
                                `).join('')}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#modalcarouselVendas${carroVendas.id}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Anterior</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#modalcarouselVendas${carroVendas.id}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Próximo</span>
                            </button>
                        </div>
                        <h4>${carroVendas.modelo} - ${carroVendas.ano}</h4>
                        <h3>R$ ${carroVendas.preco.toFixed(2)}</h3>
                        <p>${carroVendas.descricao}</p>
                    </div>
                    <div class="modal-footer text-center d-flex justify-content-center">
                        <button type="button" class="btn btn-outline-danger me-2" data-bs-dismiss="modal"> 
                            <i class="bi bi-box-arrow-in-left"></i> Voltar
                        </button>
                        <button type="button" class="btn btn-outline-success" onclick="venderCarro(${carroVendas.id})">
                            <i class="bi bi-cart-plus"></i> Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

        container.appendChild(card);
    });
} catch (error) {
    console.error("Erro ao carregar os carros:", error);
    document.getElementById('carros-vendas-container').innerHTML = `<p class="text-danger text-center">Erro ao carregar os dados.</p>`;
}
}

function venderCarro(id) {
alert(`Você escolheu comprar o carro ID: ${id}`);
}

// Carrega os carros ao carregar a página
carregarCarros();
