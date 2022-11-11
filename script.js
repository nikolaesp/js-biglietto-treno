/*
let distanza = prompt(`Inserisci kilometri: `);
let eta = prompt(`Inserisci la tua eta: `);
let costo = distanza * 0.21;
let prezzo;
if(eta<18){
    prezzo = costo*0.8;
}else{

if(eta>65){
    prezzo=costo*0.6;
}else{
    prezzo=costo;
}
}
*/
let btn = document.getElementById("btncalc");

btn.addEventListener('click',function(){

let distanza = document.getElementById("idistanza").value;
let eta = document.getElementById("ieta").value;
eta = parseInt(eta);
let costo = parseFloat( distanza * 0.21);
let prezzo;
if(eta<18){
    prezzo = costo*0.8;
}else{

if(eta>65){
    prezzo=costo * 0.6;
}else{
    prezzo=costo;
}
}
let tarifa = parseFloat(prezzo).toFixed(2);

document.getElementById("oprezzo").innerHTML = `Prezzo per viaggo:  `+ tarifa+`\u20AC`;
let display = `
--------------------------------
Eta :              ${eta} anni
Distanza :         ${distanza} km
Prezzo per viaggo: ${parseFloat(prezzo).toFixed(2)} \u20AC
--------------------------------`;

console.log(display);

});


