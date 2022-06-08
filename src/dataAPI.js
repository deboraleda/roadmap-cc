// Os dados de cada trilha estão descritos em formato de grafo aqui mas
// eles devem ser servidos por uma API para melhor modularização do código.
// Enquanto a API não existe e por se tratar de pouco volume de dados
// eles são mantidos aqui.

// Os dados foram gerados a partir da pasta data/new-data e não estão lá
// pois o react tem bloqueios sobre import com dados fora do domínio de /src

let infraData = [
    {   
        codigo:1411174,
        nome:"Introdu\u00e7\u00e3o \u00e0 Computa\u00e7\u00e3o",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:"nan",
        periodo:"1",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/ic",
        sigla:"IC",
        child: "IC",
        parents: []
    },

    {
        codigo:1411327,
        nome:"Desenvolvimento de Software Integrado \u00e0 Infraestrutura",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411308],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:null,
        child: "Dev. de Soft",
        parents: []
    },
    {
        codigo:1411222,
        nome:"Sistemas Distribui\u0301dos",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:null,
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:"SD",
        child: "SD",
        parents: []
    },
    {
        codigo:1411310,
        nome:"Organiza\u00e7\u00e3o e Arquitetura de Computadores",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411174],
        periodo:"4",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/oac",
        sigla:"OAC",
        child: "OAC",
        parents: ["IC"]
    },
    {
        codigo:1411182,
        nome:"Laborat\u00f3rio de Organiza\u00e7\u00e3o e Arquitetura de Computadores",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411174],
        periodo:"4",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/loac",
        sigla:"LOAC",
        child: "LOAC",
        parents: ["IC"]
    },
    {
        codigo:1411190,
        nome:"Redes de Computadores",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411174],
        periodo:"5",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/redes",
        sigla:"REDES",
        child: "REDES",
        parents: ["IC"]
    },
    {
        codigo:1411192,
        nome:"Sistemas Operacionais",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411310],
        periodo:"5",
        trilha:"Infraestrutura",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/so",
        sigla:"SO",
        child: "SO",
        parents: ["OAC", "LOAC"]
    },
    {
        codigo:1411315,
        nome:"Programa\u00e7\u00e3o Concorrente",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411192],
        periodo:"6",
        trilha:"Infraestrutura",
        dica:null,
        sigla:"CONCO",
        child: "CONCO",
        parents: ["SO"]
    },
    {
        codigo:1411330,
        nome:"Gere\u0302ncia de Redes",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411190],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:"GR",
        child: "GR",
        parents: ["REDES"]
    },
    {
        codigo:1411340,
        nome:"Seguranc\u0327a de Sistemas",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411192,1411190],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:null,
        child: "Seg. de Sis.",
        parents: ["SO", "REDES"]
    },
    {
        codigo:1411331,
        nome:"Interconexa\u0303o de Redes de Computadores",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411190],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:"IRC",
        child: "IRC",
        parents: ["REDES"]
    },
    {
        codigo:1411217,nome:"Projeto de Redes de Computadores",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411190],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:null,
        child: "Proj. Redes",
        parents: ["REDES"]
    },
    {
        codigo:1411337,
        nome:"Provisionamento e Operac\u0327a\u0303o de Infraestrutura",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1411192],
        periodo:null,
        trilha:"Infraestrutura",
        dica:null,
        sigla:null,
        child: "POI",
        parents: ["SO"]
    } 
]

let ciencDadosData = [
    {
        codigo:1411311,
        nome:"Fundamentos de Matem\u00e1tica para Ci\u00eancia da Computa\u00e7\u00e3o I",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:"nan",
        periodo:"1",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/fmcc1",
        sigla:"FMCC1",
        child: "FMCC1",
        parents: []
    },
    {
        codigo:1411312,
        nome:"Fundamentos de Matem\u00e1tica para Ci\u00eancia da Computa\u00e7\u00e3o II",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411311],
        periodo:"2",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/fmcc2",
        sigla:"FMCC2",
        child: "FMCC2",
        parents: ["FMCC1"]
    },
    {
        codigo:1109126,
        nome:"Ca\u0301lculo Diferencial e Integral I",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411311],
        periodo:"2",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/calculo1",
        sigla:"CALC1",
        child: "CALC1",
        parents: ["FMCC1"]
    },
    {
        codigo:1109049,
        nome:"\u00c1lgebra Linear I",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411312],
        periodo:"3",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/linear",
        sigla:"LINEAR",
        child: "LINEAR",
        parents: ["FMCC2"]
    },
    {
        codigo:1109131,
        nome:"Ca\u0301lculo Diferencial e Integral II",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1109126],
        periodo:"3",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/calculo2",
        sigla:"CALC2",
        child: "CALC2",
        parents: ["CALC1"]
    },
    {
        codigo:1411307,
        nome:"L\u00f3gica para Computa\u00e7\u00e3o",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411312],
        periodo:"3",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/logica",
        sigla:"LOG",
        child: "LOG",
        parents: ["FMCC2"]
    },
    {
        codigo:1114129,
        nome:"Introdu\u00e7\u00e3o \u00e0 Probabilidade",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1109126,1411312],
        periodo:"4",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/probabilidade",
        sigla:"PROB",
        child: "PROB",
        parents: ["CALC1", "FMCC2"]
    },
    {
        codigo:1114222,
        nome:"Estat\u00edstica Aplicada",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1114129],
        periodo:"5",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/estatistica",
        sigla:"ESTAT",
        child: "ESTAT",
        parents: ["PROB"]
    },
    {
        codigo:1411171,
        nome:"Teoria da Computa\u00e7\u00e3o",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411309], // falar com leandra sobre isso
        periodo:"5",
        trilha:"Ci\u00eancia de Dados",
        dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/tc",
        sigla:"TC",
        child: "TC",
        parents: []
    },
    {
        codigo:1411316,
        nome:"Intelig\u00eancia Artificial",
        categoria:"Obrigat\u00f3rio",
        creditos:4,
        pre_requisito:[1411171],
        periodo:"6",
        trilha:"Ci\u00eancia de Dados",
        dica:null,
        sigla:"IA",
        child: "IA",
        parents: ["TC"]
    },
    {
        codigo:1411338,
        nome:"Reconhecimento de Padro\u0303es e Redes Neurais",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:[1114222,1411187],
        periodo:null,
        trilha:"Ci\u00eancia de Dados",
        dica:null,
        sigla:null,
        child: "Rec. de Pad. e Redes Neurais",
        parents: ["ESTAT"]
    },
    {
        codigo:1411339,
        nome:"Recuperac\u0327a\u0303o da Informac\u0327a\u0303o e Busca na Web",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:null,
        periodo:null,
        trilha:"Ci\u00eancia de Dados",
        dica:null,
        sigla:null,
        child: "Recup... Busca na Web",
        parents: []
    },
    {
        codigo:1411342,
        nome:"Sistemas de Apoio a\u0300 Decisa\u0303o",
        categoria:"Optativa Espec\u00edfica",
        creditos:4,
        pre_requisito:null,
        periodo:null,
        trilha:"Ci\u00eancia de Dados",
        dica:null,
        sigla:"SAD",
        child: "SAD",
        parents: []
    }
]

let devWebData = [
    {
        codigo:1411167,
		nome:"Programa\u00e7\u00e3o I",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:"nan",
		periodo:"1",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/prog1",
		sigla:"P1",
		child:"P1", 
		parents: []
	},
		
    {
        codigo:1411180,
		nome:"Laborat\u00f3rio de Programa\u00e7\u00e3o I",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:"nan",
		periodo:"1",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/prog1",
		sigla:"LP1",
		child:"LP1", 
		parents: []
	},
		
    {
        codigo:1411168,
		nome:"Programa\u00e7\u00e3o II",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411167, 1411180],
		periodo:"2",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/prog2",
		sigla:"P2",
		child:"P2", 
		parents: ["LP1", "P1"]
	},
		
    {
        codigo:1411181,
		nome:"Laborat\u00f3rio de Programa\u00e7\u00e3o II",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411167, 1411180],
		periodo:"2",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/prog2",
		sigla:"LP2",
		child:"LP2", 
		parents: ["LP1", "P1"]
	},
		
    {
        codigo:1411305,
		nome:"Estrutura de Dados",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411168, 1411181],
		periodo:"3",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/eda_leda",
		sigla:"EDA",
		child:"EDA", 
		parents: ["LP2", "P2"]
	},
		
    {
        codigo:1411306,
		nome:"Laborat\u00f3rio de Estrutura de Dados",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411168, 1411181],
		periodo:"3",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/eda_leda",
		sigla:"LEDA",
		child:"LEDA", 
		parents: ["LP2", "P2"]
	},
		
    {
        codigo:1411308,
		nome:"Projeto de Software",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411167, 1411180],
		periodo:"4",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/psoft",
        sigla:"PSOFT",
		child:"PSOFT", 
		parents: ["P1", "LP1"]
	},
		
    {
        codigo:1411193,
		nome:"Banco de dados I",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411305],
		periodo:"4",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/bd",
		sigla:"BD",
		child:"BD", 
		parents: ["EDA"]
	},
		
    {
        codigo:1411313,
		nome:"An\u00e1lise de Sistemas",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411167, 1411180],
		periodo:"5",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/as",

        sigla:"AS",
		child:"AS", 
		parents: ["P1", "LP1"]
	},
		
    {
        codigo:1411314,
		nome:"Engenharia de Software",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411167, 1411180],
		periodo:"5",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/es",
        sigla:"ES",
		child:"ES", 
		parents: ["P1", "LP1"]
	},
		
    {
        codigo:1411187,
		nome:"An\u00e1lise e T\u00e9cnicas de Algoritmos",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411305, 1411306],
		periodo:"7",
		trilha:"Engenharia de Software",
		dica:"https:\/\/github.com\/OpenDevUFCG\/Tamburetei\/tree\/master\/atal",
		sigla:"ATAL",
		child:"ATAL", 
		parents: ["EDA", "LEDA"]
	},
		
    {
        codigo:1411185,
		nome:"Projeto em Computa\u00e7\u00e3o I",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411314],
		periodo:"8",
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"PROJ1",
		child:"PROJ1", 
		parents: ["ES"]
	},
		
    {
        codigo:1411348,
		nome:"Projeto em Computa\u00e7\u00e3o II",
		categoria:"Obrigat\u00f3rio",
		creditos:4,
		pre_requisito:[1411185],
		periodo:"9",
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"PROJ2",
		child:"PROJ2", 
		parents: ["PROJ1"]
	},
		
    {
        codigo:1411320,
		nome:"Administra\u00e7\u00e3o de Sistemas",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:null,
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:null,
        level: 5,
		child:"SysADM", 
		parents: []
	},
		
    {
        codigo:1411198,
		nome:"Administra\u00e7\u00e3o de Sistemas Gerenciadores de Bancos de Dados",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:[1411193],
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:null,
		child:"BD sysADM", 
		parents: ["BD"]
	},
		
    {
        codigo:1411321,
		nome:"Algoritmos Avan\u00e7ados I",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:null,
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"AA1",
        level:5,
		child:"AA1", 
		parents: []
	},
		
    {
        codigo:1411322,
		nome:"Algoritmos Avan\u00e7ados II",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:null,
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"AA2",
        level: 5,
		child:"AA2", 
		parents: []
	},
		
    {
        codigo:1411323,
		nome:"Algoritmos Avan\u00e7ados III",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:null,
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"AA3",
        level: 5,
		child:"AA3", 
		parents: []
	},
		
    {
        codigo:1411324,
		nome:"Algoritmos Avan\u00e7ados IV",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:null,
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"AA4",
        level: 5,
		child:"AA4", 
		parents: []
	},
		
    {
        codigo:1411325,
		nome:"Arquitetura de Software",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:[1411308],
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:null,
		child:"Arq Soft", 
		parents: ["PSOFT"]
	},
		
    {
        codigo:1411194,
		nome:"Banco de Dados II",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:[1411193],
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"BD2",
		child:"BD2", 
		parents: ["BD"]
	},
		
    {
        codigo:1411326,
		nome:"Desenvolvimento de Aplicac\u0327o\u0303es Corporativas Avanc\u0327adas",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:[1411308],
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"DACA",
		child:"DACA", 
		parents: ["PSOFT"]
	},
		
    {
        codigo:1411335,
		nome:"Princi\u0301pios de Desenvolvimento Web",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:[1411168],
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:null,
		child:"Princ. Dev. Web.", 
		parents: ["P2"]
	},
		
    {
        codigo:1411336,
		nome:"Programac\u0327a\u0303o em Banco de Dados",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:[1411193],
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:null,
		child:"Prog. BD", 
		parents: ["BD"]
	},
		
    {
        codigo:1411221,
		nome:"Sistemas de Informac\u0327a\u0303o Geogra\u0301fica",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:"nan",
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:null,
        level: 5,
		child:"Sist. de Info. Geografica", 
		parents: []
	},
		
    {
        codigo:1411343,
		nome:"Verifica\u00e7\u00e3o e Valida\u00e7\u00e3o de Software",
		categoria:"Optativa Espec\u00edfica",
		creditos:4,
		pre_requisito:[1411314],
		periodo:null,
		trilha:"Engenharia de Software",
		dica:null,
		sigla:"VVS",
        child:"VVS",
        parents: ["ES"]
    }
]

export default {infraData, ciencDadosData, devWebData};