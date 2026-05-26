// Restituisce il numero piu grande
function massimo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Controlla se un numero e pari
function pari(numero) {
    return numero % 2 === 0;
}

// Esporto tutte le funzioni per renderle utilizzabili in altri file
module.exports = {
    massimo,
    pari
};