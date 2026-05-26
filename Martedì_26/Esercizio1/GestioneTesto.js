// Converte tutta la stringa passata in lettere maiuscole
function trasformaMaiuscolo(testo) {
    return testo.toUpperCase();
}

// Restituisce la lunghezza della stringa ovvero il numero di caratteri
function contaCaratteri(testo) {
    return testo.length;
}

// Controlla se la lettera indicata e presente dentro la stringa
function contieneLettera(testo, lettera) {
    return testo.includes(lettera);
}

// Esporto le tre funzioni per renderle disponibili ad altri file
module.exports = {
    trasformaMaiuscolo,
    contaCaratteri,
    contieneLettera
};