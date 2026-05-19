// Importiamo il modulo integrato di Node.js per interfacciarsi con il terminale
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Vettore principale in cui memorizzeremo le parole valide inserite dall'utente
let elencoParole = [];

console.log("--- FASE 1: RACCOLTA E VALIDAZIONE DATI ---");
console.log("Inserisci una parola alla volta e premi Invio. Digita 'fine' per terminare.");

// Funzione per verificare se la parola è valida (non vuota)
function IsParolaValida(parola) {
    return parola.trim().length > 0;
}

// Funzione per contare quante parole ci sono nell'array
function ContreParole(arrayTesto) {
    return arrayTesto.length;
}

// Funzione per trovare la parola più lunga
function TrovaParolaPiuLunga(arrayTesto) {
    if (arrayTesto.length === 0) return "";
    
    let piuLunga = arrayTesto[0];
    for (let i = 1; i < arrayTesto.length; i++) {
        if (arrayTesto[i].length > piuLunga.length) {
            piuLunga = arrayTesto[i];
        }
    }
    return piuLunga;
}

// Funzione per trovare la parola più corta
function TrovaParolaPiuCorta(arrayTesto) {
    if (arrayTesto.length === 0) return "";
    
    let piuCorta = arrayTesto[0];
    for (let i = 1; i < arrayTesto.length; i++) {
        if (arrayTesto[i].length < piuCorta.length) {
            piuCorta = arrayTesto[i];
        }
    }
    return piuCorta;
}

// Funzione per contare le parole che iniziano con una vocale
function ContaParoleConVocale(arrayTesto) {
    let contatore = 0;
    const vocali = "aeiouAEIOU";

    for (let parola of arrayTesto) {
        if (parola.length > 0) {
            let primoCarattere = parola.charAt(0);
            if (vocali.includes(primoCarattere)) {
                contatore++;
            }
        }
    }
    return contatore;
}

// Funzione per trasformare l'array in maiuscolo (usa il metodo .map delle slide)
function TrasformaInMaiuscolo(arrayTesto) {
    return arrayTesto.map(parola => parola.toUpperCase());
}

// Fase 2: Interazione con l'utente e utilizzo delle funzioni

function acquisisciInput() {
    rl.question("Inserisci una parola: ", (inputUtente) => {
        let parolaPulita = inputUtente.trim();

        // Controllo della stringa di stop "fine"
        if (parolaPulita.toLowerCase() === "fine") {
            rl.close();
            elaboraEStampaRisultati();
            return;
        }

        // Validazione e inserimento nell'array
        if (IsParolaValida(parolaPulita)) {
            elencoParole.push(parolaPulita);
        } else {
            console.log("Input non valido. Le parole vuote non verranno conteggiate.");
        }

        // Ripete il ciclo
        acquisisciInput();
    });
}

function elaboraEStampaRisultati() {
    console.log("\n--- RIEPILOGO STATISTICHE DATI ---");

    if (elencoParole.length === 0) {
        console.log("Nessun dato presente. L'array è vuoto.");
        return;
    };

    // Stampa del numero totale di parole    console.log(`Numero totale di parole inserite: ${ContreParole(elencoParole)}`);

    // Stampa della parola più lunga
    console.log(`La parola più lunga è: "${TrovaParolaPiuLunga(elencoParole)}"`);

    // Stampa della parola più corta
    console.log(`La parola più corta è: "${TrovaParolaPiuCorta(elencoParole)}"`);

    // Stampa del numero di parole che iniziano con una vocale
    console.log(`Numero di parole che iniziano con una vocale: ${ContaParoleConVocale(elencoParole)}`);

    // Stampa dell'array trasformato in maiuscolo
    console.log("Elenco parole in maiuscolo:");
    console.log(TrasformaInMaiuscolo(elencoParole));
}

// Avviamo l'acquisizione dei dati dall'utente
acquisisciInput();

// scrivere cd Martedì_19/Esercizio2
// node paroleinserite.js