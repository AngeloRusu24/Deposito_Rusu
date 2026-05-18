// Chiediamo all'utente di inserire un numero intero positivo tramite prompt
let inputUtente = prompt("Inserisci un numero intero positivo N:");

// Convertiamo la stringa ricevuta dal prompt in un numero intero reale
let N = parseInt(inputUtente);

// VALIDAZIONE DELL'INPUT:
// Controlliamo se il valore NON è un numero (isNaN) oppure se è minore o uguale a zero
if (isNaN(N) || N <= 0) {
    // Se la condizione è vera, segnaliamo l'errore all'utente come richiesto dalla traccia
    console.error("Errore: Il valore inserito non è valido. Devi inserire un numero intero maggiore di 0.");
    alert("Errore: Inserisci un numero intero positivo valido!");
} else {
    // Se il numero è valido, prepariamo i due contatori per i numeri pari e dispari
    let contatorePari = 0;
    let contatoreDispari = 0;

    // Utilizziamo un ciclo 'for' per analizzare tutti i numeri partendo da 1 fino a N compreso
    for (let i = 1; i <= N; i++) {
        
        // Usiamo l'operatore modulo (%) per controllare il resto della divisione per 2.
        // Se il resto è esattamente 0, significa che il numero 'i' è pari.
        if (i % 2 === 0) {
            contatorePari++; // Incrementiamo di 1 il contatore dei numeri pari
        } else {
            // Se il resto non è 0, il numero 'i' è inevitabilmente dispari
            contatoreDispari++; // Incrementiamo di 1 il contatore dei numeri dispari
        }
    }

    // Al termine del ciclo, stampiamo in output i risultati finali accumulati
    console.log("--- ANALISI COMPLETATA ---");
    console.log("Valore massimo inserito (N): " + N);
    console.log("Totale numeri PARI trovati: " + contatorePari);
    console.log("Totale numeri DISPARI trovati: " + contatoreDispari);
}