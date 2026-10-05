// Données fictives de la maquette
const DATA={
 storages:["Atelier","Réserve","Cave","Boutique"],
 materials:[ // stock par lieu, minimum requis, prix unitaire, commande en cours
  {id:"M1",name:"Cire d'abeille",unit:"kg",min:20,price:18,ordered:0,stock:{Atelier:6,Réserve:10,Cave:0,Boutique:0}},
  {id:"M2",name:"Huile d'olive",unit:"L",min:30,price:9,ordered:20,stock:{Atelier:5,Réserve:12,Cave:3,Boutique:0}},
  {id:"M3",name:"Lavande séchée",unit:"kg",min:10,price:25,ordered:0,stock:{Atelier:2,Réserve:3,Cave:0,Boutique:0}},
  {id:"M4",name:"Pots en verre 100ml",unit:"pcs",min:200,price:0.8,ordered:0,stock:{Atelier:60,Réserve:150,Cave:0,Boutique:0}},
  {id:"M5",name:"Alcool 96°",unit:"L",min:15,price:7,ordered:0,stock:{Atelier:4,Réserve:2,Cave:8,Boutique:0}},
  {id:"M6",name:"Miel",unit:"kg",min:25,price:12,ordered:10,stock:{Atelier:5,Réserve:9,Cave:4,Boutique:0}}],
 // recette : matière -> quantité par unité de produit
 products:[
  {id:"P1",name:"Baume à la lavande",price:12,min:15,recipe:{M1:0.03,M2:0.02,M3:0.01,M4:1},stock:{Atelier:5,Réserve:4,Cave:0,Boutique:6}},
  {id:"P2",name:"Savon au miel",price:6,min:30,recipe:{M2:0.05,M6:0.03},stock:{Atelier:10,Réserve:12,Cave:0,Boutique:15}},
  {id:"P3",name:"Teinture mère",price:15,min:10,recipe:{M5:0.1,M3:0.02,M4:1},stock:{Atelier:2,Réserve:3,Cave:2,Boutique:3}},
  {id:"P4",name:"Bougie à la cire d'abeille",price:14,min:12,recipe:{M1:0.25},stock:{Atelier:3,Réserve:2,Cave:0,Boutique:4}}],
 orders:[
  {id:"C-1042",client:"Pharmacie du Centre",date:"2026-10-01",due:"2026-10-08",status:"À préparer",lines:{P1:20,P3:10}},
  {id:"C-1043",client:"Marché de Noël – Lyon",date:"2026-10-02",due:"2026-10-20",status:"À préparer",lines:{P2:60,P4:25}},
  {id:"C-1044",client:"Mme Durand",date:"2026-10-03",due:"2026-10-06",status:"En préparation",lines:{P1:3,P2:4}},
  {id:"C-1041",client:"Biocoop Vert",date:"2026-09-25",due:"2026-10-02",status:"Livrée",lines:{P2:40}}],
 purchases:[
  {id:"A-310",supplier:"Rucher des Collines",date:"2026-10-02",status:"En cours",lines:[["M6",10]]},
  {id:"A-311",supplier:"Moulin Provence",date:"2026-10-03",status:"En cours",lines:[["M2",20]]},
  {id:"A-305",supplier:"Verrerie Martin",date:"2026-09-20",status:"Reçue",lines:[["M4",300]]}],
 suppliers:["Rucher des Collines","Moulin Provence","Verrerie Martin","Herboristerie du Sud","Chimie Pro"],
 bank:12480.35,
 payables:[ // factures à honorer
  {ref:"F-A-8812",who:"Moulin Provence",amount:180,due:"2026-10-10"},
  {ref:"F-A-8820",who:"Verrerie Martin",amount:240,due:"2026-10-15"},
  {ref:"EDF-1002",who:"EDF",amount:96.4,due:"2026-10-07"},
  {ref:"LOY-10",who:"Loyer atelier",amount:650,due:"2026-10-05"}],
 receivables:[ // factures en attente de paiement par un tiers
  {ref:"F-2026-091",who:"Biocoop Vert",amount:480,due:"2026-10-12"},
  {ref:"F-2026-089",who:"Pharmacie du Centre",amount:1150,due:"2026-09-30"},
  {ref:"F-2026-092",who:"Mme Durand",amount:57,due:"2026-10-20"}],
 transactions:[
  {date:"2026-10-04",label:"Vente marché",cat:"Vente",amount:342},
  {date:"2026-10-03",label:"Achat miel",cat:"Achat matière",amount:-120},
  {date:"2026-10-02",label:"Virement Biocoop",cat:"Vente",amount:480},
  {date:"2026-10-01",label:"Assurance",cat:"Frais fixes",amount:-85},
  {date:"2026-09-30",label:"Subvention région (acompte)",cat:"Subvention",amount:2000},
  {date:"2026-09-28",label:"Achat verrerie",cat:"Achat matière",amount:-240}],
 grants:[
  {name:"Aide régionale artisanat",body:"Région",amount:6000,received:2000,status:"Acompte reçu",deadline:"2026-12-15",note:"Rapport d'activité à fournir"},
  {name:"Fonds innovation verte",body:"ADEME",amount:4500,received:0,status:"Dossier déposé",deadline:"2027-01-31",note:"Réponse attendue en novembre"},
  {name:"Aide à l'embauche",body:"État",amount:3000,received:3000,status:"Soldée",deadline:"2026-06-30",note:""},
  {name:"Subvention locale marché",body:"Commune",amount:800,received:0,status:"À déposer",deadline:"2026-10-31",note:"Formulaire à remplir"}],
 notes:[
  {date:"2026-10-04",author:"Léa",text:"Penser à commander des étiquettes avant le marché de Noël."},
  {date:"2026-10-03",author:"Hugo",text:"Alambic en révision jeudi, pas de distillation ce jour-là."}],
 staff:[
  {name:"Léa Martin",role:"Préparation",today:"08:00–16:00",tomorrow:"08:00–12:00"},
  {name:"Hugo Petit",role:"Distillation",today:"09:00–17:00",tomorrow:"—"},
  {name:"Sara Benali",role:"Boutique",today:"—",tomorrow:"10:00–18:00"},
  {name:"Willa Dalton",role:"Gestion",today:"10:00–15:00",tomorrow:"10:00–15:00"}]
};
