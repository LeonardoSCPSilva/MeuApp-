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
                <a href="#">Encomendas</a>
                <a href="perfil.html">Perfil</a>
                
            </nav>
            <a href="../login.html" id="sair"><img src="../imagens/sair.png" alt=""><h5>Sair</h5></a>`;
menuFuncionario = `<div class="logo">
                <img src="../imagens/Logo_minimalista_meuAppe.png" alt="logo Minimalista do MeuAppê">
            </div>

            <nav>
                <a href="DashboardFuncionario.html">Dashboard</a>
                <a href="Moradores.html">Moradores</a>
                <a href="areasComum.html">Áreas Comuns</a>
                <a href="#">Boletos</a>
                <a href="#">Enquetes</a>
                <a href="#">Encomendas</a>
                <a href="#">Perfil</a>
                
            </nav>
            <a href="../login.html" id="sair"><img src="../imagens/sair.png" alt=""><h5>Sair</h5></a>`;

if (perfil === "morador") {
    menu.innerHTML = menuMorador;
}

if (perfil === "funcionario") {
    menu.innerHTML = menuFuncionario;
}