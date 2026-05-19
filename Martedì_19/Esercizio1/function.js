// Importiamo il modulo per leggere l'input da terminale con Node.js
const readline = require('readline');   

const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});


// Array in cui salveremo tutti i risultati delle operazioni effettuate
let storicoRisultati = [];

console.log("--- CALCOLATRICE JS A FUNZIONI ISOLATE ---");

// --- FASE 1: DEFINIZIONE DELLE 4 FUNZIONI ISOLATE RICHIESTE ---

// Funzione dichiarativa isolata per l'addizione
function addizione(a, b) {
    return a + b;
}

// Funzione dichiarativa isolata per la sottrazione
function sottrazione(a, b) {
    return a - b;
}

// Funzione dichiarativa isolata per la moltiplicazione
function moltiplicazione(a, b) {
    return a * b;
}

// Funzione dichiarativa isolata per la divisione
function divisione(a, b) {
    if (b === 0) {
        console.log("Errore: divisione per zero non consentita.");
        return null; // Ritorniamo null o potremmo anche lanciare un'eccezione
    }
    return a / b;
}

// --- FASE 2: INTERAZIONE CON L'UTENTE E UTILIZZO DELLE FUNZIONI ---

// Funzione per chiedere all'utente i numeri e l'operazione da eseguire
function chiediOperazione() {
    rl.question("Inserisci il primo numero: ", (input1) => {
        let num1 = parseFloat(input1);
        
        if (isNaN(num1)) {
            console.log("Input non valido. Per favore, inserisci un numero.");
            chiediOperazione(); // Richiamiamo la funzione per fare una nuova domanda
            return;
        }

        rl.question("Inserisci il secondo numero: ", (input2) => {
            let num2 = parseFloat(input2);
            
            if (isNaN(num2)) {
                console.log("Input non valido. Per favore, inserisci un numero.");
                chiediOperazione(); // Richiamiamo la funzione per fare una nuova domanda
                return;
            }

            rl.question("Scegli l'operazione (addizione, sottrazione, moltiplicazione, divisione): ", (operazione) => {
                let risultato;

                switch (operazione.toLowerCase()) {
                    case "addizione":
                        risultato = addizione(num1, num2);
                        break;
                    case "sottrazione":
                        risultato = sottrazione(num1, num2);
                        break;
                    case "moltiplicazione":
                        risultato = moltiplicazione(num1, num2);
                        break;
                    case "divisione":
                        risultato = divisione(num1, num2);
                        if (risultato === null) {
                            chiediOperazione(); // Se c'è stato un errore di divisione per zero, chiediamo di nuovo
                            return;
                        }
                        break;
                    default:
                        console.log("Operazione non valida. Per favore, scegli tra addizione, sottrazione, moltiplicazione o divisione.");
                        chiediOperazione(); // Richiamiamo la funzione per fare una nuova domanda
                        return;
                }

                console.log(`Il risultato di ${operazione} tra ${num1} e ${num2} è: ${risultato}`);
                storicoRisultati.push({ operazione, num1, num2, risultato }); // Salviamo il risultato nello storico
                chiediOperazione(); // Chiediamo se vogliono fare un'altra operazione
            });
        });
    });
}

// Avviamo l'interazione con l'utente
chiediOperazione();