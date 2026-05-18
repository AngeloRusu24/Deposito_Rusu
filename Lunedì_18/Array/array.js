// Importiamo il modulo integrato di Node.js per leggere l'input da terminale
const readline = require('readline');

// Configuriamo l'interfaccia per leggere dalla tastiera (stdin) e scrivere sul terminale (stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creiamo l'array vuoto per contenere tutti i numeri validi inseriti dall'utente
let numeriInseriti = [];

console.log("--- FASE 1: RACCOLTA E VALIDAZIONE DATI ---");
console.log("Inserisci un numero alla volta e premi Invio. Digita 0 per terminare.");

// Creiamo una funzione ricorsiva per chiedere continuamente i numeri all'utente
function chiediNumero() {
    rl.question("Inserisci un numero: ", (input) => {
        
        // Convertiamo l'input in numero decimale/intero
        let numero = parseFloat(input);

        // Controlliamo se l'utente ha inserito qualcosa di non numerico
        if (isNaN(numero)) {
            console.log(" Input ignorato: non hai inserito un numero valido.");
            chiediNumero(); // Richiamiamo la funzione per fare una nuova domanda
        } 
        // Se l'utente digita esattamente 0, interrompiamo l'inserimento e passiamo all'analisi
        else if (numero === 0) {
            rl.close(); // Chiudiamo l'interfaccia del terminale
            avviaAnalisiDati(); // Avviamo la fase di calcolo
        } 
        // Se il numero è valido e diverso da 0, lo salviamo nell'array principale
        else {
            numeriInseriti.push(numero);
            chiediNumero(); // Richiamiamo la funzione per chiedere il prossimo numero
        }
    });
}

// Funzione che racchiude tutta la logica di calcolo (eseguita alla fine dell'inserimento)
function avviaAnalisiDati() {
    console.log("\n--- FASE 2: ANALISI DEI DATI ---");

    // Gestiamo il caso limite: cosa succede se l'array è vuoto?
    if (numeriInseriti.length === 0) {
        console.log("Nessun numero valido è stato inserito (array vuoto). Impossibile fare l'analisi.");
    } else {
        // Prepariamo i due array separati per pari e dispari
        let numeriPari = [];
        let numeriDispari = [];
        
        // Prepariamo la variabile per la somma totale
        let sommaTotale = 0;
        
        // Per trovare il massimo e il minimo, partiamo usando come punto di riferimento il primissimo elemento
        let valoreMassimo = numeriInseriti[0];
        let valoreMinimo = numeriInseriti[0];

        // Usiamo il ciclo for-of per scorrere i VALORI dell'array uno alla volta
        for (let num of numeriInseriti) {
            
            // 1. Calcoliamo la somma parziale aggiungendo il numero corrente
            sommaTotale += num;

            // 2. Separiamo i pari dai dispari usando l'operatore modulo (%)
            if (num % 2 === 0) {
                numeriPari.push(num); // È pari, va nell'array dei pari
            } else {
                numeriDispari.push(num); // È dispari, va nell'array dei dispari
            }

            // 3. Controlliamo se il numero corrente è il nuovo massimo
            if (num > valoreMassimo) {
                valoreMassimo = num;
            }

            // 4. Controlliamo se il numero corrente è il nuovo minimo
            if (num < valoreMinimo) {
                valoreMinimo = num;
            }
        }

        console.log("--- FASE 3: OUTPUT DEI RISULTATI ---");
        // Stampiamo tutti i risultati richiesti esplicitamente dalle specifiche dell'esercizio
        console.log("Tutti i numeri validi inseriti:", numeriInseriti);
        console.log("Array dei numeri pari:", numeriPari);
        console.log("Array dei numeri dispari:", numeriDispari);
        console.log("La somma totale è:", sommaTotale);
        console.log("Il valore massimo presente è:", valoreMassimo);
        console.log("Il valore minimo presente è:", valoreMinimo);
    }
}

// Avviamo la prima richiesta per far partire il programma
chiediNumero();