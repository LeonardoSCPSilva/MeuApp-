const params = new URLSearchParams(window.location.search);
const idArea = Number(params.get("area"));

const areaSelecionada = areas.find(
    area => area.id === idArea
);

const form = document.querySelector(".form-reserva");

form.addEventListener("submit", cadastrarReserva);

// Se a área não existir
if (!areaSelecionada) {
    alert("Área não encontrada!");
    window.location.href = "AreaComum.html";
}

// Título
document.getElementById("tituloArea").textContent =
    `Reserva - ${areaSelecionada.nome}`;

// Informações
document.getElementById("infoArea").textContent =
    `Funcionamento: ${areaSelecionada.horarioInicial}:00 às ${areaSelecionada.horarioFinal}:00`;

// Foto
document.getElementById("fotoArea").src =
    obterImagemArea(areaSelecionada);

// Data mínima = hoje
const hoje = new Date().toISOString().split("T")[0];
document.getElementById("dataReserva").min = hoje;

// Horários disponíveis
const select = document.getElementById("faixaHorario");

for (
    let hora = parseInt(areaSelecionada.horarioInicial);
    hora < parseInt(areaSelecionada.horarioFinal);
    hora++
) {
    const inicio = `${hora.toString().padStart(2, "0")}:00`;
    const fim = `${(hora + 1).toString().padStart(2, "0")}:00`;

    select.innerHTML += `
        <option value="${inicio}-${fim}">
            ${inicio} às ${fim}
        </option>
    `;
}

function cadastrarReserva(event) {

    event.preventDefault();

    const area = areaSelecionada.nome;

    const data = document.getElementById("dataReserva").value;

    const horarioMarcado =
        document.getElementById("faixaHorario").value;

    if (!data) {

        alert("Escolha uma data!");
        return;

    }

    const novaReserva = {
        id: Date.now(),
        area,
        data,
        horarioMarcado
    };

    let reservas =
        JSON.parse(localStorage.getItem("reservas")) || [];

    const existe = reservas.some(item =>

        item.area === novaReserva.area &&
        item.data === novaReserva.data &&
        item.horarioMarcado === novaReserva.horarioMarcado

    );

    if (existe) {

        alert("Horário já reservado!");
        return;

    }

    reservas.push(novaReserva);

    localStorage.setItem(
        "reservas",
        JSON.stringify(reservas)
    );

    alert("Reserva realizada!");

    window.location.href = "AreaComum.html";
}