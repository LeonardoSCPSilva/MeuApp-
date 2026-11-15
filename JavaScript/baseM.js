// Abrir modal com regras
const modal = document.getElementById("modal");
const titulo = document.getElementById("tituloModal");
const conteudo = document.getElementById("conteudoModal");

function abrirModalRegras(id) {

        const area = areas.find(area => area.id == id);
        console.log("Área selecionada:", area);
        if (!area) return;

        titulo.textContent = `Regras - ${area.nome}`;
        conteudo.innerHTML = area.regras;

        modal.style.display = "flex";
}

const fechar = document.querySelector(".fechar");



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

const reservasDash = JSON.parse(localStorage.getItem("reservas")) || [];
var totalReservas = reservasDash.length;
document.getElementById("reservasDash").textContent = totalReservas;

