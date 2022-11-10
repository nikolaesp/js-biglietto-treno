let distanza = prompt(`Inserisci kilometri da percorere: `);
let eta = prompt(`Inserisci la tua eta: `);
let costo = distanza * 0.21;
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

let display = `
--------------------------------
Eta :              ${eta} anni
Distanza :         ${distanza} km
Prezzo per viaggo: ${parseFloat(prezzo).toFixed(2)} \u20AC
--------------------------------`;

console.log(display);