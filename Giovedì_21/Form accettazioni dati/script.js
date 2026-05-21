// Selezione del form tramite ID
const formZoo = document.getElementById("formZoo");

// Selezione del contenitore risultato
const risultato = document.getElementById("risultato");

// Evento submit del form per intercettare l'invio
formZoo.addEventListener("submit", function(event) {
    
    // Blocco il refresh automatico della pagina (Regola fondamentale!)
    event.preventDefault();

    // Recupero i valori scritti dall'utente nei campi input tramite .value
    const nomeAnimale = document.getElementById("nomeAnimale").value;
    const specie = document.getElementById("specie").value;

    // Inserimento dinamico del risultato tramite concatenazione semplice (+)
    risultato.innerHTML = '<h2>Animale registrato</h2>' + 
                          '<p><strong>Nome:</strong> ' + nomeAnimale + '</p>' + 
                          '<p><strong>Specie:</strong> ' + specie + '</p>';
});