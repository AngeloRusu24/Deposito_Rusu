// Selezione dell'elemento HTML in cui stampare i risultati
const output = document.getElementById("output");

// Oggetto JavaScript di partenza (attivo nella memoria del browser)
const studente = {
    nome: "Marco",
    cognome: "Rossi",
    eta: 21,
    corso: "Web Development"
};

// --- SERIALIZZAZIONE ---
document.getElementById("serializzaBtn").addEventListener("click", function() {
    // Trasforma l'oggetto software in una stringa di testo JSON
    const jsonString = JSON.stringify(studente);
    
    // Stampa la stringa di testo nel riquadro output
    output.textContent = jsonString;
});

// --- DE-SERIALIZZAZIONE ---
document.getElementById("deserializzaBtn").addEventListener("click", function() {
    // Stringa di testo JSON di partenza (simula dati in arrivo da un server)
    const jsonString = '{"nome":"Marco","cognome":"Rossi","eta":21,"corso":"Web Development"}';
    
    // Trasforma la stringa di testo in un vero oggetto JavaScript accessibile
    const oggettoStudente = JSON.parse(jsonString);
    
    // Estrae i singoli valori usando la sintassi con il punto (.) e li stampa
    output.textContent = 
        "Nome: " + oggettoStudente.nome + "\n" +
        "Cognome: " + oggettoStudente.cognome + "\n" +
        "Età: " + oggettoStudente.eta + "\n" +
        "Corso: " + oggettoStudente.corso;
});