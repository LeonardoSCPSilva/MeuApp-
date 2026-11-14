
function atualizarDashboard() {

    const moradores = JSON.parse(localStorage.getItem("moradores")) || [];
    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const encomendas = JSON.parse(localStorage.getItem("encomendas")) || [];
    const enquetes = JSON.parse(localStorage.getItem("enquetes")) || [];

    document.getElementById("qtdMoradores").textContent = moradores.length;
    document.getElementById("qtdFuncionarios").textContent = funcionarios.length;
    document.getElementById("qtdReservas").textContent = reservas.length;
    document.getElementById("qtdEncomendas").textContent = encomendas.length;
    document.getElementById("qtdEnquetes").textContent = enquetes.length;
}

atualizarDashboard();

