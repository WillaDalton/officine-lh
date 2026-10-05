const PAGES=[["index.html","Tableau de bord"],["commandes.html","Commandes reçues"],["achats.html","Achats"],["finances.html","Finances"],["subventions.html","Subventions"],["notes.html","Notes internes"],["stocks.html","Stocks"]];
const eur=n=>n.toLocaleString("fr-FR",{style:"currency",currency:"EUR"});
const fdate=d=>d.split("-").reverse().join("/");
const sum=o=>Object.values(o).reduce((a,b)=>a+b,0);
const byId=(arr,id)=>arr.find(x=>x.id===id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const tag=(s)=>{const c={"À préparer":"t-warn","En préparation":"t-info","Livrée":"t-ok","En cours":"t-info","Reçue":"t-ok","Soldée":"t-ok","Acompte reçu":"t-info","Dossier déposé":"t-info","À déposer":"t-warn"}[s]||"";return `<span class="tag ${c}">${esc(s)}</span>`};
function layout(title){
  const cur=location.pathname.split("/").pop()||"index.html";
  document.body.insertAdjacentHTML("afterbegin",`<nav><h1>🌿 Officine LH</h1>${PAGES.map(([u,t])=>`<a href="${u}" class="${u===cur?"on":""}">${t}</a>`).join("")}<small>Maquette – données fictives</small></nav>`);
  const m=document.querySelector("main");m.insertAdjacentHTML("afterbegin",`<h2>${title}</h2><div class="banner">Maquette : données fictives, aucune sauvegarde.</div>`);
}
function table(head,rows,numCols=[]){return `<table><tr>${head.map((h,i)=>`<th class="${numCols.includes(i)?"n":""}">${h}</th>`).join("")}</tr>${rows.map(r=>`<tr>${r.map((c,i)=>`<td class="${numCols.includes(i)?"n":""}">${c}</td>`).join("")}</tr>`).join("")}</table>`}
const openOrders=()=>DATA.orders.filter(o=>o.status!=="Livrée");
// Besoins en produits finis : commandes ouvertes - stock produits fini (au-delà du minimum requis)
function productPlan(){
  return DATA.products.map(p=>{
    const ordered=openOrders().reduce((a,o)=>a+(o.lines[p.id]||0),0);
    const stock=sum(p.stock);
    const toMake=Math.max(0,ordered+p.min-stock);
    return {p,ordered,stock,toMake};
  });
}
// Besoins en matières : fabrication nécessaire + stock minimum - stock - déjà commandé
function materialPlan(){
  const pp=productPlan();
  return DATA.materials.map(m=>{
    const need=pp.reduce((a,x)=>a+x.toMake*(x.p.recipe[m.id]||0),0);
    const stock=sum(m.stock);
    const toBuy=Math.max(0,Math.ceil((need+m.min-stock-m.ordered)*100)/100);
    return {m,need,stock,toBuy,cost:toBuy*m.price};
  });
}
