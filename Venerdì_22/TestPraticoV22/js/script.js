
// Selezioniamo il pulsante della Home Page tramite il suo ID univoco
let btnEsplora = document.getElementById("btnEsplora");

// Aggiungiamo un controllo di sicurezza: la logica si attiva solo se il bottone esiste nella pagina corrente
if (btnEsplora) {
    // Intercettiamo l'evento del click sul pulsante
    btnEsplora.addEventListener("click", function() {
        // Quando l'utente clicca, usiamo l'oggetto window.location per reindirizzarlo alla pagina dei cani
        window.location.href = "cani.html";
    });
}