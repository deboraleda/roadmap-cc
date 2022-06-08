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
		parents: ["LP1", "P1"]
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
		parents: []
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
		parents: []
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
		parents: ["PSFOT"]
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