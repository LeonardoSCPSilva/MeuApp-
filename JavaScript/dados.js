//Areas comum
const areasPadrão = [
    {
        id: 1,
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

    {
        id: 2,
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

    {
        id: 3,
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

    {
        id: 4,
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
        nome: "teste",
        apartamento: "101",
        telefone: "(11) 99999-1111"
    },
    {
        id: 2,
        nome: "teste",
        apartamento: "101",
        telefone: "(11) 99999-1111"
    }

];

if (!localStorage.getItem("moradores")) {
    localStorage.setItem(
        "moradores",
        JSON.stringify(moradoresPadrao)
    );
}

const moradores = JSON.parse(localStorage.getItem("moradores")) || [];
