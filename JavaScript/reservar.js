const parametro = new URLSearchParams(window.location.search);
const areaSelecionada = parametro.get("area");
const nomeArea = areas[areaSelecionada].nome;

function cadastrarReserva(event){
    
    event.preventDefault();

    const area = nomeArea;
    const data = document.getElementById("dataReserva").value;
    const horaInicio = document.getElementById("horaInicio").value;
    const horaFim = document.getElementById("horaFim").value;

    if(horaInicio>=horaFim){
        alert("Horário Final menor que inicial")
    } 
    else
    {
        const novaReservaa = {
            id: Date.now(),
            area,
            data,
            horaInicio,
            horaFim
        };

        let reservas =
            JSON.parse(localStorage.getItem("reservas")) || [];
            
        const existe = reservas.some(item =>

            item.area === novaReservaa.area &&
            item.data === novaReservaa.data &&
            item.horaFim === novaReservaa.horaFim &&
            item.horaInicio === novaReservaa.horaInicio

        );

        if(existe){

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

document.getElementById("dataReserva").min = hoje;

// criar os horarios do formulario de acordo com horario de funcionamneto
const horaInicio = document.getElementById("horaInicio");
const horaFim = document.getElementById("horaFim");

for(let hora = areas[area].horarioInicial; hora <= areas[area].horarioFinal; hora++){

    const horario = `${hora.toString().padStart(2,'0')}:00`;

    horaInicio.innerHTML += `
        <option value="${horario}">
            ${horario}
        </option>
    `;

    horaFim.innerHTML += `
        <option value="${horario}">
            ${horario}
        </option>
    `;
}
