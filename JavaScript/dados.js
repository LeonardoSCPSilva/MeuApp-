//Areas comum
const areasPadrão = [
    {
        id: 1,
        regras: `
                <p> Funcionamento: 08h às 22h</p>
                <p> Proibido utilizar recipientes de vidro.</p>
                <p> Crianças devem estar acompanhadas por um responsável.</p>
            `,
        nome: "Piscina",
        horarioInicial: "08",
        horarioFinal: "20"
    },

    {
        id: 2,
        regras: `
                <p> Uso somente mediante reserva.</p>
                <p> Limite máximo de 10 pessoas por horário.</p>
                <p> Não é permitido consumir alimentos na área de jogo.</p>
            `,
        nome: "Quadra",
        horarioInicial: "08",
        horarioFinal: "22"
    },

    {
        id: 3,
        regras: `
                <p> Reserva deve ser realizada antecipadamente.</p>
                <p> O salão deve ser entregue limpo após o uso.</p>
                <p> Limite máximo de 50 convidados.</p>
            `,
        nome: "Salão de Festas",
        horarioInicial: "10",
        horarioFinal: "23"
    },

    {
        id: 4,
        regras: `
                <p> Reserva deve ser realizada antecipadamente.</p>
                <p> O espaço deve ser entregue limpo após o uso.</p>
                <p> Limite máximo de 20 convidados.</p>
            `,
        nome: "Espaço Gourmet",
        horarioInicial: "08",
        horarioFinal: "22"
    }
];

if (!localStorage.getItem("areas")) {
    localStorage.setItem(
        "areas",
        JSON.stringify(areasPadrão)
    );
}

const areas = JSON.parse(localStorage.getItem("areas")) || [];

function obterImagemArea(area) {
    return area.imagem || `../imagens/${area.id}.jpg`;
}

const moradoresPadrao = [
    {
        id: 1,
        nome: "Morador",
        apartamento: "101",
        telefone: "(11) 99999-99999",
        cpf: "000.000.000-00",
        email: "teste@teste.com",
        senha: "123456",
        dataNascimento: "2000-01-01",
        dataCadastro: "2026-01-01",
        bloco: "A"
    }

];

if (!localStorage.getItem("moradores")) {
    localStorage.setItem(
        "moradores",
        JSON.stringify(moradoresPadrao)
    );
}

const moradores = JSON.parse(localStorage.getItem("moradores")) || [];
