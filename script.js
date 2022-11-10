let distanza = prompt(`Inserisci kilometri da percorere: `);
let eta = prompt(`Inserisci la tua eta: `);
let costo = distanza * 0.21;
let prezzo;
if(eta<18){
    prezzo = costo*0.2;
}else{

if(eta>65){
    prezzo=costo * 0.4;
}else{
    prezzo=costo;
}
}

let display = `Eta : ${eta}
Distanza in km: ${distanza}
Prezzo per viaggo: ${prezzo}`;
console.log(display);