// login, escolha se é morador ou funcionario

const botoesPerfil = document.querySelectorAll(".perfil");
const perfilSelecionado = document.getElementById("perfilSelecionado");

botoesPerfil.forEach(botao => {
    botao.addEventListener("click", () => {

        console.log("clicou");
        botoesPerfil.forEach(b => {
            b.classList.remove("ativo");
        });

        botao.classList.add("ativo");
        perfilSelecionado.value = botao.dataset.perfil;
    });
});

const forma = document.forms["frm_login"];
const modal = document.getElementById("modal");
const fechar = document.querySelector(".fechar");
const titulo = document.getElementById("tituloModal");
const conteudo = document.getElementById("conteudoModal");


forma.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    if (usuario == "" || senha == "") {


        titulo.textContent = "Erro";
        conteudo.innerHTML = "Campos em branco!";

        modal.style.display = "flex";
    } else {
        if (usuario == "teste@teste.com" || senha == "teste123") {
            const perfil = perfilSelecionado.value;

            if (perfil === "morador") {
                window.location.href = "morador/DashboardMorador.html";
                localStorage.setItem("perfil", "morador");
            } else {
                window.location.href = "funcionario/DashboardFuncionario.html";
                localStorage.setItem("perfil", "funcionario");
            }
        } else {
            titulo.textContent = "Erro";
            conteudo.innerHTML = "Usuário/senha incorreto ou não cadastrado!";

            modal.style.display = "flex";
        }
    }

});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

