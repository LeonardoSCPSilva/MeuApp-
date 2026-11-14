function cancelarReserva(id) {

    const confirmar = confirm(
        "Deseja realmente cancelar esta reserva?"
    );

    if (!confirmar) {
        return;
    }

    let reservas = JSON.parse(
        localStorage.getItem("reservas")
    ) || [];

    reservas = reservas.filter(
        reserva => reserva.id !== id
    );

    localStorage.setItem(
        "reservas",
        JSON.stringify(reservas)
    );

    alert("Reserva cancelada!");

    location.reload();
}
//Trocar entre reservar e minhas reservas
function troca(tipo) {
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
        let dataFormatada = reservas.data;

        if (reservas.data.includes("-")) {
            const [ano, mes, dia] = reservas.data.split("-");
            dataFormatada = `${dia}/${mes}/${ano}`;
        }

        cards += `
            <div class="itemB">
                <h3>${reservas.area}</h3>

                <p>Data: ${dataFormatada}</p>

                <p>Horário: ${reservas.horarioMarcado}</p>
                <div class="acoes">
                    <button class="editar">
                        Editar
                    </button>

                    <button class="cancelar" onclick="cancelarReserva(${reservas.id})">
                        Cancelar
                    </button>
                </div>
            </div>
        `;

    });

    listasReservas.innerHTML = cards;
}


//Ao clicar no botão reservar abrir a pagina reservar.html

function abrirReserva (area) {
    window.location.href = `reservarArea.html?area=${area}`;
}