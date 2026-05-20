// 1. Selezioniamo il bottone e il paragrafo tramite i loro ID
let bottone = document.getElementById("btn");
let testo = document.getElementById("testo");

// 4. Registriamo l'evento click sul bottone
bottone.addEventListener("click", function() {
    
    // 6. AGGIUNGE O RIMUOVE LA CLASSE CSS
    // Se la classe "evidenziato" non c'è sul tag <p>, togglela aggiunge.
    // Se c'è già, toggle la rimuove. Fa da interruttore!
    testo.classList.toggle("evidenziato");
    
});