// 1. SELEZIONE ELEMENTI
let bottone = document.getElementById("btnAvvia");
let output = document.getElementById("outputUtente");

// 2. PROMISE 
function operazioneConPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Definiamo tre variabili di testo classiche con le virgolette
            let nome = "Mirko Campari";
            let ruolo = "Studente";
            let stato = "Attivo";

            // Uniamo i testi con il + (Concatenazione classica)
            resolve("Nome: " + nome + "<br>Ruolo: " + ruolo + "<br>Stato: " + stato);
        }, 2000);
    });
}

// 3. ASYNC / AWAIT 
async function caricaDati() {
    output.textContent = "Caricamento in corso...";
    
    // Gestione delle classi CSS
    output.classList.remove("successo");
    output.classList.add("caricamento");
    
    try {
        // Aspetta 2 secondi che la Promise finisca
        let risultato = await operazioneConPromise();
        
        // Inserisce il testo unito nell'HTML dell'output
        output.innerHTML = risultato;
        
        // Cambia la classe CSS in successo
        output.classList.remove("caricamento");
        output.classList.add("successo");
        
    } catch (errore) {
        output.textContent = "Errore nel caricamento";
    }
}

// 4. ATTIVAZIONE AL CLICK
bottone.addEventListener("click", function() {
    caricaDati();
});