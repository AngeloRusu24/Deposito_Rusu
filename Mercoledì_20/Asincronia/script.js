// 1. SELEZIONE DEGLI ELEMENTI DAL DOM 
let bottone = document.getElementById("btnAvvia"); // Il bottone per avviare
let output = document.getElementById("outputUtente"); // L'area di output


// 2. LA PROMISE CON IL SETTIMEOUT
// Simula un'operazione lenta di 2 secondi e restituisce i dati dell'utente
function operazioneConPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Stringa contenente i dati richiesti dall'esercizio: nome, ruolo e stato
            resolve("Nome: Mirko Campari <br> Ruolo: Sviluppatore <br> Stato: Attivo");
        }, 2000);
    });
}


// 3. LA FUNZIONE ASINCRONA ASYNC / AWAIT 
async function caricaDati() {
    // Applica subito il testo di caricamento
    output.textContent = "Caricamento in corso...";
    
    // Gestione classi CSS tramite classList (richiesta dall'esercizio)
    output.classList.remove("successo"); // Resetta l'eventuale successo precedente
    output.classList.add("caricamento"); // Aggiunge la classe di caricamento giallo/arancione
    
    try {
        // Blocca temporaneamente l'esecuzione per 2 secondi aspettando la Promise
        let risultato = await operazioneConPromise();
        
        // Se va a buon fine, mostra il risultato con nome, ruolo e stato
        output.innerHTML = risultato;
        
        // Modifica nuovamente il CSS rimuovendo la classe di caricamento e mettendo successo (verde)
        output.classList.remove("caricamento");
        output.classList.add("successo");
        
    } catch (errore) {
        // Se fallisce, mostra l'errore
        output.textContent = "Errore nel caricamento";
    }
}


// 4. ATTIVAZIONE AL CLICK (Identica alla struttura della tua slide)
bottone.addEventListener("click", function() {
    caricaDati();
});