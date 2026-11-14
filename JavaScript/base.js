// colocar menu
const menu = document.querySelector('.sidebar');
const perfil = localStorage.getItem("perfil");
menuMorador = `<div class="logo">
                <img src="../imagens/Logo_minimalista_meuAppe.png" alt="logo Minimalista do MeuAppê">
            </div>

            <nav>
                <a href="DashboardMorador.html">Dashboard</a>
                <a href="Comunicados.html">Comunicados</a>
                <a href="areaComum.html">Reservas</a>
                <a href="boletos.html">Boletos</a>
                <a href="enquentes.html">Enquetes</a>
                <a href="perfil.html">Perfil</a>
                
            </nav>
            <a href="../login.html" id="sair"><img src="../imagens/sair.png" alt=""><h5>Sair</h5></a>`;
menuFuncionario = `<div class="logo">
                <img src="../imagens/Logo_minimalista_meuAppe.png" alt="logo Minimalista do MeuAppê">
            </div>

            <nav>
                <a href="DashboardFuncionario.html">Dashboard</a>
                <a href="Comunicados.html">Comunicados</a>
                <a href="areaComum.html">Áreas Comuns</a>
                <a href="boletos.html">Boletos</a>
                <a href="enquentes.html">Enquetes</a>
                <a href="perfil.html">Perfil</a>
                
            </nav>
            <a href="../login.html" id="sair"><img src="../imagens/sair.png" alt=""><h5>Sair</h5></a>`;

if (perfil === "morador") {
    menu.innerHTML = menuMorador;
}

if (perfil === "funcionario") {
    menu.innerHTML = menuFuncionario;
}

//Abrir modal com regras
    const botoes = document.querySelectorAll(".regra-btn");
    const modal = document.getElementById("modal");
    const fechar = document.querySelector(".fechar");

    const titulo = document.getElementById("tituloModal");
    const conteudo = document.getElementById("conteudoModal");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const local = botao.dataset.local;

            titulo.textContent = areas[local].nome;
            conteudo.innerHTML = areas[local].conteudo;

            modal.style.display = "flex";
        });

    });

//Fechar modal com as regras
    fechar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });



//reserva da area comum
const params = new URLSearchParams(window.location.search);
const area = params.get("area");

//abrir comunicado 
function abriComunicado(id){

    const comunicado = document.getElementById(`comunicado${id}`);

    if(comunicado.style.display === "block"){
        comunicado.style.display = "none";
    }
    else{
        comunicado.style.display = "block";
    }

}

