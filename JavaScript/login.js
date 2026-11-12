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

forma.addEventListener("submit", (event) => {
    event.preventDefault();

    const perfil = perfilSelecionado.value;

    if(perfil === "morador"){
        window.location.href = "DashboardMorador.html";
    }else{
        window.location.href = "DashboardFuncionario.html";
    }
});