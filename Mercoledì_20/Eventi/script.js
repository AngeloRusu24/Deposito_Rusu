// =========================================================================
// SPIEGAZIONE DELLA SLIDE:
// In questo esempio, JavaScript registra un event listener sul bottone.
// Quando l'utente clicca, viene eseguita la funzione associata:
// il programma legge il valore inserito nell'input, verifica tramite una
// condizione se è vuoto e aggiorna dinamicamente il contenuto del paragrafo nel DOM.
// =========================================================================

// 1. Selezione elementi dal DOM tramite il loro ID specifico
let input = document.getElementById("nome");
let bottone = document.getElementById("btn");
let output = document.getElementById("output");

// 2. Aggiunta event listener per intercettare il click dell'utente
bottone.addEventListener("click", function() {
    
    // Legge il valore testuale attualmente inserito nel campo di input
    let nome = input.value; // input utente

    // Controllo condizionale: verifica se l'utente ha lasciato il campo vuoto
    if (nome === "") {
        // Se è vuoto, aggiorna il testo del paragrafo segnalando l'errore
        output.textContent = "Inserisci un nome";
    } else {
        // Se contiene testo, aggiorna dinamicamente il DOM con il messaggio di saluto
        output.textContent = "Ciao " + nome;
    }
});