// colocar menu
const menu = document.querySelector('.sidebar');

menuFuncionario = `<div class="logo">
                <img src="../imagens/Logo_minimalista_meuAppe.png" alt="logo Minimalista do MeuAppê">
            </div>

            <nav>
                <a href="DashboardFuncionario.html">Dashboard</a>
                <a href="moradores.html">Moradores</a>
                <a href="areaComum.html">Áreas Comuns</a>
                <a href="boletos.html">Boletos</a>
                <a href="enquentes.html">Enquetes</a>
                <a href="perfil.html">Perfil</a>
                
            </nav>
            <a href="../login.html" id="sair"><img src="../imagens/sair.png" alt=""><h5>Sair</h5></a>`;

menu.innerHTML = menuFuncionario;
