function carregarMoradores(lista = moradores) {

    const area = document.getElementById("listaMoradores");

    area.innerHTML = "";


    lista.forEach(morador => {
        let dataForm = morador.dataCadastro;
        let dataNasc = morador.dataNascimento;

        if (dataForm.includes("-")) {
            const [ano, mes, dia] = dataForm.split("-");
            dataForm = `${dia}/${mes}/${ano}`;
        }
        if (dataNasc.includes("-")) {
            const [ano, mes, dia] = dataNasc.split("-");
            dataNasc = `${dia}/${mes}/${ano}`;
        }
        area.innerHTML += `
    <div class="lista">
        <div><strong>Nome:</strong> ${morador.nome}</div>
        <div><strong>CPF:</strong> ${morador.cpf || "-"}</div>

        <div><strong>Bloco:</strong> ${morador.bloco || "-"}</div>
        <div><strong>Apartamento:</strong> ${morador.apartamento || "-"}</div>

        <div><strong>Telefone:</strong> ${morador.telefone || "-"}</div>
        <div><strong>Data de Nascimento:</strong> ${dataNasc || "-"}</div>

        <div><strong>Email:</strong> ${morador.email || "-"}</div>
        <div><strong>Data de Cadastro:</strong> ${dataForm || "-"}</div>

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

function buscarMoradores() {

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

function excluirMorador(id) {

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

function excluirMorador(id) {

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

function editarMorador(id) {

    const morador = moradores.find(
        morador => morador.id === id
    );

    const novoNome = prompt(
        "Novo nome:",
        morador.nome
    );
    const novoTelefone = prompt(
        "Novo telefone:",
        morador.telefone
    );

    if (novoNome) {

        morador.nome = novoNome;
        morador.telefone = novoTelefone;

        localStorage.setItem(
            "moradores",
            JSON.stringify(moradores)
        );

        carregarMoradores();
    }
}