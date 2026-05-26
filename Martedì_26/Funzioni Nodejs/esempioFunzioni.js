// Importo il file funzioni.js
const funzioni = require("./funzioni");

// Salvo il risultato della funzione massimo
let numeroMassimo = funzioni.massimo(10, 20);

console.log("Numero massimo:");
console.log(numeroMassimo);

// Controllo se il numero e pari
let controlloPari = funzioni.pari(8);

console.log("Numero pari?");
console.log(controlloPari);