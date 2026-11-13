//Areas comum
const areas = {
        Piscina: {
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

        Quadra: {
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

        SalaoFesta: {
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

        EspacoGourmet: {
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
    };    