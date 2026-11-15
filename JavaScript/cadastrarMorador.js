const formCadastroMorador = document.getElementById("formCadastroMorador");
const mensagemCadastro = document.getElementById("mensagemCadastro");

formCadastroMorador.addEventListener("submit", (event) => {
    event.preventDefault();

    const dadosFormulario = new FormData(formCadastroMorador);
    const novoMorador = {
        id: moradores.reduce((maiorId, morador) => Math.max(maiorId, morador.id), 0) + 1,
        nome: dadosFormulario.get("nome").trim(),
        cpf: dadosFormulario.get("cpf").trim(),
        email: dadosFormulario.get("email").trim(),
        telefone: dadosFormulario.get("telefone").trim(),
        dataNascimento: dadosFormulario.get("dataNascimento").trim(),
        dataCadastro: new Date().toISOString(),
        bloco: dadosFormulario.get("bloco").trim(),
        apartamento: dadosFormulario.get("apartamento").trim()
    };

    moradores.push(novoMorador);
    localStorage.setItem("moradores", JSON.stringify(moradores));

    formCadastroMorador.reset();
    mensagemCadastro.textContent = "Morador cadastrado com sucesso.";
});
