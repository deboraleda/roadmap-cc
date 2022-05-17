
let graphData = {
  "nodes":[
      {"id": "Labarre", "group": 1},
      {"id": "Valjean", "group": 2},
      {"id": "Marguerite", "group": 3},
      {"id": "Mme.deR", "group": 4},
      {"id": "Isabeau", "group": 1},
      {"id": "Gervais", "group": 5},
      {"id": "Tholomyes", "group": 5},
      {"id": "Listolier", "group": 4},
      {"id": "Fameuil", "group": 1},
      {"id": "Blacheville", "group": 2},
      {"id": "Favourite", "group": 3},
      {"id": "Dahlia", "group": 4},
      {"id": "Zephine", "group": 1},
      {"id": "Fantine", "group": 2},
      {"id": "Mme.Thenardier", "group": 4},
      {"id": "Thenardier", "group": 3},
      {"id": "Cosette", "group": 5},
      {"id": "Javert", "group": 4},
      {"id": "Fauchelevent", "group": 3},
      {"id": "Bamatabois", "group": 5},
      {"id": "Toussaint", "group": 5},
      {"id": "Child1", "group": 4},
      {"id": "Child2", "group": 3},
      {"id": "Brujon", "group": 1},
      {"id": "Mme.Hucheloup", "group": 2}
    ],
    "links": [
      {"source":"Labarre","target":"Toussaint"},
      {"source":"Valjean","target":"Gervais"},
      {"source":"Valjean","target":"Gervais"},
      {"source":"Valjean","target":"Tholomyes"},
      {"source":"Valjean","target":"Listolier"},
      {"source":"Marguerite","target":"Tholomyes"},
      {"source":"Marguerite","target":"Mme.deR"},
      {"source":"Marguerite","target":"Fantine"},
      {"source":"Mme.deR","target":"Isabeau"},
      {"source":"Mme.deR","target":"Zephine"},
      {"source":"Gervais","target":"Listolier"},
      {"source":"Tholomyes","target":"Fantine"},
      {"source":"Listolier","target":"Mme.Thenardier"},
      {"source":"Listolier","target":"Blacheville"},
      {"source":"Fameuil","target":"Blacheville"},
      {"source":"Blacheville","target":"Favourite"},
      {"source":"Dahlia","target":"Zephine"},
      {"source":"Dahlia","target":"Child2"},
      {"source":"Dahlia","target":"Brujon"},
      {"source":"Zephine","target":"Brujon"},
      {"source":"Zephine","target":"Fantine"},
      {"source":"Fantine","target":"Javert"},
      {"source":"Fantine","target":"Mme.Thenardier"},
      {"source":"Mme.Thenardier","target":"Thenardier"},
      {"source":"Mme.Thenardier","target":"Cosette"},
      {"source":"Cosette","target":"Fauchelevent"},
      {"source":"Cosette","target":"Bamatabois"},
      {"source":"Javert","target":"Toussaint"},
      {"source":"Javert","target":"Mme.Hucheloup"},
      {"source":"Fauchelevent","target":"Bamatabois"},
      {"source":"Bamatabois","target":"Toussaint"},
      {"source":"Toussaint","target":"Mme.Hucheloup"},
      {"source":"Child1","target":"Mme.Hucheloup"},
      {"source":"Child2","target":"Mme.Hucheloup"},
      {"source":"Brujon","target":"Mme.Hucheloup"}
    ]
}

export default {graphData};
