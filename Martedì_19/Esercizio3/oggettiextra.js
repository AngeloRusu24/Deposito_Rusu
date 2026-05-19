const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Il nostro catalogo ora contiene prodotti di tipo diverso con proprietà miste
let catalogoProdotti = [
    // VERDURE (caratterizzate da peso e scadenza)
    { tipo: "verdura", nome: "Pomodori Ciliegino", prezzo: 2.50, peso: 1.2, scadenza: "2026-05-25" },
    { tipo: "verdura", nome: "Zucchine", prezzo: 1.80, peso: 0.8, scadenza: "2026-05-22" },
    { tipo: "verdura", nome: "Insalata Iceberg", prezzo: 1.20, peso: 0.3, scadenza: "2026-05-20" },
    
    // ARTICOLI CASA (caratterizzati da materiale e stanza)
    { tipo: "casa", nome: "Set 6 Bicchieri", prezzo: 15.00, materiale: "Vetro", stanza: "Cucina" },
    { tipo: "casa", nome: "Lampada da Scrivania", prezzo: 24.90, materiale: "Metallo", stanza: "Studio" },
    { tipo: "casa", nome: "Tappeto Bagno", prezzo: 12.50, materiale: "Cotone", stanza: "Bagno" }
];

console.log("--- GESTORE CATALOGO PRODOTTI MULTI-TIPO ---");

// =========================================================================
// FUNZIONI DI ELABORAZIONE E FILTRAGGIO
// =========================================================================

// 1. Calcolare il valore totale del magazzino (funziona per qualsiasi tipo perché tutti hanno prezzo)
function calcolaValoreMagazzino(prodotti) {
    let totale = 0;
    for (let prodotto of prodotti) {
        // Se è una verdura calcoliamo il prezzo in base al peso, se è un articolo casa lo prendiamo come pezzo singolo
        if (prodotto.tipo === "verdura") {
            totale += prodotto.prezzo * prodotto.peso;
        } else {
            totale += prodotto.prezzo; // Articolo casa singolo
        }
    }
    return totale;
}

// 2. Trovare il prodotto con il prezzo più alto (indipendentemente dal tipo)
function trovaProdottoPiuCaro(prodotti) {
    if (prodotti.length === 0) return null;
    
    let prodottoPiuCaro = prodotti[0]; // Controlla che si chiami così...
    for (let i = 1; i < prodotti.length; i++) {
        // ...che sia scritto uguale qui...
        if (prodotti[i].prezzo > prodottoPiuCaro.prezzo) {
            // ...e che sia scritto identico anche qui! (Senza "producto")
            prodottoPiuCaro = prodotti[i]; 
        }
    }
    return prodottoPiuCaro;
}

// 3. FUNZIONE CHIAVE: Filtra i prodotti in base al tipo selezionato ("verdura" o "casa")
function filtraPerTipo(prodotti, tipoSelezionato) {
    // Usiamo il metodo .filter() delle slide per isolare il tipo richiesto
    return prodotti.filter(prodotto => prodotto.tipo === tipoSelezionato.toLowerCase());
}

// 4. Estrae l'array dei soli nomi (funziona per tutti perché la proprietà 'nome' è in comune)
function estraiNomiProdotti(prodotti) {
    return prodotti.map(prodotto => prodotto.nome);
}

// =========================================================================
// INTERFACCIA UTENTE E MENU
// =========================================================================

function mostraMenu() {
    console.log("\n=================================");
    console.log("Scegli un'opzione dal menu:");
    console.log("1. Mostra il catalogo completo");
    console.log("2. Filtra e mostra solo le VERDURE");
    console.log("3. Filtra e mostra solo gli ARTICOLI CASA");
    console.log("4. Mostra statistiche generali (Valore totale e Più caro)");
    console.log("5. Esci dal programma");
    console.log("=================================");

    rl.question("Inserisci il numero della tua scelta: ", (scelta) => {
        switch (scelta.trim()) {
            case "1":
                console.log("\n --- CATALOGO COMPLETO ---");
                console.log(catalogoProdotti);
                mostraMenu(); // Rilancia il menu per non far chiudere il programma
                break;

            case "2":
                console.log("\n --- SOLO VERDURE ---");
                let verdure = filtraPerTipo(catalogoProdotti, "verdura");
                console.log(verdure);
                console.log("Nomi delle verdure in negozio:", estraiNomiProdotti(verdure));
                mostraMenu();
                break;

            case "3":
                console.log("\n --- SOLO ARTICOLI CASA ---");
                let articoliCasa = filtraPerTipo(catalogoProdotti, "casa");
                console.log(articoliCasa);
                console.log("Nomi degli articoli casa in negozio:", estraiNomiProdotti(articoliCasa));
                mostraMenu();
                break;

            case "4":
                console.log("\n --- STATISTICHE GENERALI ---");
                let valoreTotale = calcolaValoreMagazzino(catalogoProdotti);
                let prodottoCaro = trovaProdottoPiuCaro(catalogoProdotti);
                
                console.log(`• Valore stimato del magazzino: €${valoreTotale.toFixed(2)}`);
                console.log("• Il prodotto con il prezzo di listino più alto è:");
                console.log(prodottoCaro);
                mostraMenu();
                break;

            case "5":
                console.log("\n Uscita dal programma in corso... Arrivederci!");
                rl.close();
                break;

            default:
                console.log("\n Opzione non valida! Inserisci un numero da 1 a 5.");
                mostraMenu();
                break;
        }
    });
}

// Controlliamo il caso limite prima di far partire il menu interattivo
if (catalogoProdotti.length === 0) {
    console.log(" ERRORE: Il catalogo iniziale è vuoto.");
    rl.close();
} else {
    // Avviamo l'applicazione mostrando il menu per la prima volta
    mostraMenu();
}