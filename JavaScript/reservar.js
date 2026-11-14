const form = document.querySelector(".form-reserva")
form.addEventListener("submit", cadastrarReserva);

// abrir de acordo com area
if (areas[area]) {

    document.getElementById("tituloArea").textContent =
        `Reserva - ${areas[area].nome}`;

}
document.getElementById("infoArea").textContent =
    `Funcionamento: ${areas[area].horarioInicial}:00 às ${areas[area].horarioFinal}:00`;

document.getElementById("fotoArea").src =
    `../imagens/${area}.jpg`;
// calendario começar a partir do dia de hoje
const hoje = new Date().toISOString().split("T")[0];

// bloqueia as datas menores que dia atual
document.getElementById("dataReserva").min = hoje;

// criar os horarios do formulario de acordo com horario de funcionamneto
const select = document.getElementById("faixaHorario");

for (
    let hora = parseInt(areas[area].horarioInicial);
    hora < parseInt(areas[area].horarioFinal);
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

// salva na memoria do navegador
const parametro = new URLSearchParams(window.location.search);
const areaSelecionada = parametro.get("area");
const nomeArea = areas[areaSelecionada].nome;

function cadastrarReserva(event) {

    event.preventDefault();

    const area = nomeArea;
    const data = document.getElementById("dataReserva").value;
    const horarioMarcado = document.getElementById("faixaHorario").value;


    if (data == "") {
        alert("Escolha uma data!");

        return;
    } else {
        const novaReservaa = {
            id: Date.now(),
            area,
            data,
            horarioMarcado
        };

        let reservas =
            JSON.parse(localStorage.getItem("reservas")) || [];

        const existe = reservas.some(item =>

            item.area === novaReservaa.area &&
            item.data === novaReservaa.data &&
            item.horarioMarcado === novaReservaa.horarioMarcado

        );

        if (existe) {

            alert("Horário já reservado!");

            return;
        }

        reservas.push(novaReservaa);

        localStorage.setItem(
            "reservas",
            JSON.stringify(reservas)
        );

        alert("Reserva realizada!");
        window.location.href = "AreaComum.html"
    }

}


