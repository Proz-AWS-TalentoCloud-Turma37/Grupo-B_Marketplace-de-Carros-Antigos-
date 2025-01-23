async function carregarCarros() {
    try {
        const response = await fetch('conexao/aluguel.json');
        const carros = await response.json();

        const container = document.getElementById('carros-aluguel-container');
        container.innerHTML = ''; // Limpa o conteúdo antes de carregar

        carros.slice(0, 4).forEach(carro => {
            const card = document.createElement('div');
            card.classList.add('col-md-3', 'mb-4');

            card.innerHTML = `
                        <div class="card">
                            <img src="${carro.imagem}" class="card-img-top" alt="Imagem de ${carro.modelo}">
                            <div class="card-body">
                                <h4 class="text-center">${carro.modelo} - ${carro.ano}</h4>
                                <div class="text-center">
                                    <button type="button" class="btn btn-lg btn-outline-info" data-bs-toggle="modal" data-bs-target="#modalAlugar${carro.id}">
                                        Visualizar
                                    </button>
                                    <button type="button" class="btn btn-lg btn-outline-success" onclick="alugarCarro(${carro.id})">
                                        Alugar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Bootstrap dentro do card -->
                        <div class="modal fade" id="modalAlugar${carro.id}" tabindex="-1" aria-labelledby="modalAlugarLabel${carro.id}" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header bg-blue">
                                    <h5 class="modal-title" id="modalAlugarLabel${carro.id}">Detalhes do Carro</h5>
                                     <button type="button" class="btn text-white" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg fs-5"></i></button>
                                </div>
                                <div class="modal-body">
                                    <img src="${carro.imagem}" class="img-fluid" alt="Imagem de ${carro.modelo}">
                                    <h4>${carro.modelo} - ${carro.ano}</h4>
                                    <h3>R$ ${carro.preco.toFixed(2)}</h3>
                                    <p>${carro.descricao}</p>
                                </div>
                                <div class="modal-footer text-center d-flex justify-content-center">
                                    <button type="button" class="btn btn-outline-danger me-2" data-bs-dismiss="modal">Voltar</button>
                                    <button type="button" class="btn btn-outline-success" onclick="alugarCarro(${carro.id})">
                                        Alugar
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
        document.getElementById('carros-container').innerHTML = `<p class="text-danger text-center">Erro ao carregar os dados.</p>`;
    }
}

function alugarCarro(id) {
    alert(`Você escolheu alugar o carro ID: ${id}`);
}

// Carrega os carros ao carregar a página
carregarCarros();