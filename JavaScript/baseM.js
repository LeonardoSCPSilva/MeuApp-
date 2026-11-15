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

