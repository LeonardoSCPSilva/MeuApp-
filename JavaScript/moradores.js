function carregarMoradores(lista = moradores){

    const area = document.getElementById("listaMoradores");

    area.innerHTML = "";

    lista.forEach(morador => {

        area.innerHTML += `
            <div class="lista">

                <h3>Nome:</h3>
                <p>${morador.nome}</p>

                <h3>Apartamento:</h3>
                <p>${morador.apartamento}</p>

                <h3>Telefone:</h3>
                <p>${morador.telefone}</p>

                <div class="acoes">
                    <button
                        class="abrir"
                        onclick="editarMorador(${morador.id})">
                        Editar
                    </button>

                    <button
                        class="cancelar"
                        onclick="excluirMorador(${morador.id})">
                        Excluir
                    </button>
                </div>

            </div>
        `;
    });

    document.getElementById("totalMoradores").textContent = moradores.length;
    document.getElementById("ativos").textContent = moradores.length;
}

carregarMoradores();

function buscarMoradores(){

    const texto = document
        .getElementById("buscarMorador")
        .value
        .toLowerCase();

    const filtrados = moradores.filter(morador =>
        morador.nome.toLowerCase().includes(texto) ||
        morador.apartamento.includes(texto)
    );

    carregarMoradores(filtrados);
}

function excluirMorador(id){

    const indice = moradores.findIndex(
        morador => morador.id === id
    );

    moradores.splice(indice, 1);

    localStorage.setItem(
        "moradores",
        JSON.stringify(moradores)
    );

    carregarMoradores();
}

function excluirMorador(id){

    const indice = moradores.findIndex(
        morador => morador.id === id
    );

    moradores.splice(indice, 1);

    localStorage.setItem(
        "moradores",
        JSON.stringify(moradores)
    );

    carregarMoradores();
}

function editarMorador(id){

    const morador = moradores.find(
        morador => morador.id === id
    );

    const novoNome = prompt(
        "Novo nome:",
        morador.nome
    );

    if(novoNome){

        morador.nome = novoNome;

        localStorage.setItem(
            "moradores",
            JSON.stringify(moradores)
        );

        carregarMoradores();
    }
}