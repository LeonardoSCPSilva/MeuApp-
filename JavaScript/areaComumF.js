function carregarAreas(listaa = areas) {

    const areaa = document.getElementById("listaAreas");

    areaa.innerHTML = "";

    listaa.forEach(areas => {

        areaa.innerHTML += `
<div class="lista">

    <div class="imagem-area">
        <img
            class="imgArea"
            src="${obterImagemArea(areas)}"
            alt="${areas.nome}">
    </div>

    <div class="dados-area">
        <div><strong>Id:</strong> ${areas.id}</div>
        <div><strong>Nome:</strong> ${areas.nome}</div>
        <div><strong>Regras:</strong> ${areas.regras}</div>

        <div>
            <strong>Horário de abertura:</strong>
            ${areas.horarioInicial || "-"}:00
        </div>

        <div>
            <strong>Horário de fechamento:</strong>
            ${areas.horarioFinal || "-"}:00
        </div>

        <div class="acoes">
            <button
                class="abrir"
                onclick="editarArea(${areas.id})">
                Editar
            </button>

            <button
                class="cancelar"
                onclick="excluirArea(${areas.id})">
                Excluir
            </button>
        </div>

    </div>

</div>
`;
    });

    document.getElementById("totalAreas").textContent = listaa.length;
    document.getElementById("ativas").textContent = listaa.length;
}

carregarAreas();

function buscarAreas() {

    const texto = document
        .getElementById("buscarAreas")
        .value
        .toLowerCase();

    const filtrados = areas.filter(area =>
        area.nome.toLowerCase().includes(texto) ||
        area.id.toString().includes(texto)
    );

    carregarAreas(filtrados);
}

function excluirArea(id) {

    const indice = areas.findIndex(
        area => area.id === id
    );

    areas.splice(indice, 1);

    localStorage.setItem(
        "areas",
        JSON.stringify(areas)
    );

    carregarAreas();
}

function excluirArea(id) {

    const indice = areas.findIndex(
        area => area.id === id
    );

    areas.splice(indice, 1);

    localStorage.setItem(
        "areas",
        JSON.stringify(areas)
    );

    carregarAreas();
}

function editarArea(id) {

    const area = areas.find(
        area => area.id === id
    );

    const novoNome = prompt(
        "Novo nome:",
        area.nome
    );
    const novoHorarioInicial = prompt(
        "Novo horário de abertura:",
        area.horarioInicial
    );
    const novoHorarioFinal = prompt(
        "Novo horário de fechamento:",
        area.horarioFinal
    );

    if (novoNome) {

        area.nome = novoNome;
        area.horarioInicial = novoHorarioInicial;
        area.horarioFinal = novoHorarioFinal;

        localStorage.setItem(
            "areas",
            JSON.stringify(areas)
        );

        carregarAreas();
    }
}