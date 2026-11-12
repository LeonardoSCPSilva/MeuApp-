// colocar menu
const menu = document.querySelector('.sidebar');

menu.innerHTML = `<div class="logo">
                <img src="imagens/Logo_minimalista_meuAppe.png" alt="logo Minimalista do MeuAppê">
            </div>

            <nav>
                <a href="DashboardMorador.html">Dashboard</a>
                <a href="Comunicados.html">Comunicados</a>
                <a href="areaComum.html">Reservas</a>
                <a href="boletos.html">Boletos</a>
                <a href="enquentes.html">Enquetes</a>
                <a href="#">Perfil</a>
                
            </nav>
            <a href="login.html" id="sair"><img src="imagens/sair.png" alt=""><h5>Sair</h5></a>`;

//Trocar entre reservar e minhas reservas
    function troca(tipo){
        const Reservar = document.querySelector(".novaReserva");
        const Reservas = document.querySelector(".minhasReservas");

        const ativaReservar = document.getElementById("Reservar");
        const ativaReservas = document.getElementById("Reservas");
        
        if (tipo === "reservar") {
            ativaReservar.style.display = "block";
            ativaReservas.style.display = "none";
            Reservas.style.backgroundColor = "#FAFAFB";
            Reservas.style.color = "#01234E";
            Reservar.style.backgroundColor = "#6b7280";
            Reservar.style.color = "white";
            
        }

        if (tipo === "reservas") {
            ativaReservar.style.display = "none";
            ativaReservas.style.display = "block";
            Reservar.style.backgroundColor = "#FAFAFB";
            Reservar.style.color = "#01234E";
            Reservas.style.backgroundColor = "#6b7280";
            Reservas.style.color = "white";
        }  
    }

//Areas comum
const areas = {
        Piscina: {
            titulo: "Regras da Piscina",
            conteudo: `
                <p> Funcionamento: 08h às 22h</p>
                <p> Proibido utilizar recipientes de vidro.</p>
                <p> Crianças devem estar acompanhadas por um responsável.</p>
            `,
            nome: "Piscina",
            horarioInicial: "08",
            horarioFinal: "20"
        },

        Quadra: {
            titulo: "Regras da Quadra",
            conteudo: `
                <p> Uso somente mediante reserva.</p>
                <p> Limite máximo de 10 pessoas por horário.</p>
                <p> Não é permitido consumir alimentos na área de jogo.</p>
            `,
            nome: "Quadra",
            horarioInicial: "08",
            horarioFinal: "22"
        },

        SalaoFesta: {
            titulo: "Regras do Salão",
            conteudo: `
                <p> Reserva deve ser realizada antecipadamente.</p>
                <p> O salão deve ser entregue limpo após o uso.</p>
                <p> Limite máximo de 50 convidados.</p>
            `,
            nome: "Salão de Festas",
            horarioInicial: "10",
            horarioFinal: "23"
        },

        EspacoGourmet: {
            titulo: "Regras do Espaço Gourmet",
            conteudo: `
                <p> Reserva deve ser realizada antecipadamente.</p>
                <p> O espaço deve ser entregue limpo após o uso.</p>
                <p> Limite máximo de 20 convidados.</p>
            `,
            nome: "Espaço Gourmet",
            horarioInicial: "08",
            horarioFinal: "22"
        }
    };    

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

//Ao clicar no botão reservar abrir a pagina reservar.html

function abrirReserva (area) {
    window.location.href = `reservarArea.html?area=${area}`;
}

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

//mostrando as reservas na tela

const listasReservas = document.getElementById('lista-reservas');
const reservas =
    JSON.parse(localStorage.getItem("reservas")) || [];
if(reservas.length === 0){
    listasReservas.innerHTML = `
        <div class="itemB">
            <p>Não há nenhuma reserva</p>
        </div>
    `;
} else {
    let cards = "";
    console.log("Reservas:", reservas);
    reservas.forEach(reservas => {

        cards += `
            <div class="itemB">
                <h3>${reservas.area}</h3>

                <p>Data - ${reservas.data}</p>

                <p>Horário Inicio - ${reservas.horaInicio}</p>
                <p>Horário Final - ${reservas.horaFim}</p>
                <div class="acoes">
                    <button class="editar">
                        Editar
                    </button>

                    <button class="cancelar">
                        Cancelar
                    </button>
                </div>
            </div>
        `;

    });

    listasReservas.innerHTML = cards;
}


