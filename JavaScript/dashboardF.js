
function atualizarDashboard() {
   
    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const encomendas = JSON.parse(localStorage.getItem("encomendas")) || [];
    const enquetes = JSON.parse(localStorage.getItem("enquetes")) || [];
    
    var totalMoradores = moradores.length;
    var totalFuncionarios = funcionarios.length;
    var totalReservas = reservas.length;
    var totalEncomendas = encomendas.length;
    var totalEnquetes = enquetes.length;

    document.getElementById("qtdMoradores").textContent = totalMoradores;
    document.getElementById("qtdFuncionarios").textContent = totalFuncionarios;
    document.getElementById("qtdReservas").textContent = totalReservas;
    document.getElementById("qtdEncomendas").textContent = totalEncomendas;
    document.getElementById("qtdEnquetes").textContent = totalEnquetes;
}

atualizarDashboard();
