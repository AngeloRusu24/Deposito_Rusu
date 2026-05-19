const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Il catalogo di oggetti originale
let catalogoProdotti = [
    { nome: "Laptop Gaming", prezzo: 1200, quantita: 5 },
    { nome: "Mouse Wireless", prezzo: 45, quantita: 15 },
    { nome: "Tastiera Meccanica", prezzo: 90, quantita: 0 }, 
    { nome: "Monitor 4K", prezzo: 350, quantita: 3 },
    { nome: "Cavo HDMI", prezzo: 12, quantita: 50 }
];

console.log("--- ESERCIZIO: GESTORE CATALOGO PRODOTTI ---");

// 1. Calcolare il valore totale del magazzino
function calcolaValoreMagazzino(prodotti) {
    let totale = 0;
    for (let prodotto of prodotti) {
        if (prodotto.prezzo !== undefined && prodotto.quantita !== undefined) {
            totale += prodotto.prezzo * prodotto.quantita; // Corretto "producto" in "prodotto"
        }
    }
    return totale;
}

// 2. Trovare il prodotto con il prezzo più alto
function trovaProdottoPiuCaro(prodotti) {
    if (prodotti.length === 0) return null;
    
    let prodottoPiuCaro = prodotti[0];
    for (let i = 1; i < prodotti.length; i++) {
        if (prodotti[i].prezzo > prodottoPiuCaro.prezzo) {
            prodottoPiuCaro = prodotti[i];
        }
    }
    return prodottoPiuCaro;
}

// 3. Filtrare i prodotti che hanno una quantità maggiore di 0
function filtraProdottiDisponibili(prodotti) {
    return prodotti.filter(prodotto => prodotto.quantita > 0);
}

// 4. Aggiungere dinamicamente una nuova proprietà disponibile (true/false)
function aggiornaDisponibilita(prodotti) {
    for (let prodotto of prodotti) {
        prodotto.disponibile = prodotto.quantita > 0;
    }
}

// 5. Creare un nuovo array contenente solo i nomi dei prodotti
function estraiNomiProdotti(prodotti) {
    return prodotti.map(prodotto => prodotto.nome);
}   

// La funzione principale che coordina tutto
function eseguiProgramma() {
    // Gestione caso limite: Array completamente vuoto
    if (catalogoProdotti.length === 0) {
        console.log("\n  ERRORE CRITICO: Il catalogo è vuoto. Impossibile calcolare le statistiche.");
        rl.close(); // Ricordati di chiudere l'interfaccia readline
        return;
    }

    // Tutto il codice deve stare dentro la funzione eseguiProgramma!
    
    // Eseguiamo l'aggiunta dinamica (usando il nome corretto della funzione)
    aggiornaDisponibilita(catalogoProdotti);

    // Eseguiamo i calcoli sfruttando le funzioni e i loro nomi corretti
    let valoreTotale = calcolaValoreMagazzino(catalogoProdotti);
    let prodottoCaro = trovaProdottoPiuCaro(catalogoProdotti);
    let listaDisponibili = filtraProdottiDisponibili(catalogoProdotti);
    let arrayNomi = estraiNomiProdotti(catalogoProdotti);

    // --- STAMPE IN OUTPUT ---

    // 1. l'elenco completo dei prodotti
    console.log("\nElenco completo dei prodotti:");
    console.log(catalogoProdotti);

    // 2. il valore totale del magazzino
    console.log(`\nValore totale del magazzino: €${valoreTotale}`);

    // 3. il prodotto più caro
    console.log("\nIl prodotto più caro è:");
    console.log(prodottoCaro);

    // 4. l'elenco dei prodotti disponibili
    console.log("\nElenco dei prodotti disponibili:");
    console.log(listaDisponibili);

    // 5. l'array dei soli nomi
    console.log("\nArray dei soli nomi dei prodotti:");
    console.log(arrayNomi);

    // Chiudiamo l'interfaccia di Node prima di uscire
    rl.close();
}

// Ora avviamo l'applicazione
eseguiProgramma();

// scrivere cd Martedì_19/Esercizio3
// node oggetti.js