// Selezione degli elementi dell'interfaccia dal DOM
const temaButton = document.getElementById("temaButton");
const carrelloButton = document.getElementById("carrelloButton");
const resetButton = document.getElementById("resetButton");

const temaTesto = document.getElementById("temaTesto");
const carrelloTesto = document.getElementById("carrelloTesto");

const body = document.body;

// =========================================================================
// LOCAL STORAGE — TEMA
// Spiegazione della slide: Il Local Storage viene generalmente utilizzato per 
// salvare preferenze permanenti dell'utente (tema chiaro/scuro, lingua, ecc.).
// Questi dati restano disponibili anche dopo il refresh della pagina, 
// la chiusura del browser o il riavvio del computer.
// =========================================================================

// Recupero lo stato del tema precedentemente memorizzato (se esiste)
const temaSalvato = localStorage.getItem("tema");

// Se il valore salvato è "dark", applico la classe per mantenere la scelta dell'utente
if (temaSalvato === "dark") {
    body.classList.add("dark");
}

// Gestione del cambio tema al click del pulsante
temaButton.addEventListener("click", function () {
    // Alterno la classe .dark sul body
    body.classList.toggle("dark");

    // Salvo la scelta in modo permanente nel Local Storage del browser
    if (body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }

    // Aggiorno i testi informativi a schermo
    aggiornaTesti();
});

// =========================================================================
// SESSION STORAGE — CARRELLO
// Spiegazione della slide: Il Session Storage viene usato per informazioni 
// temporanee legate alla singola sessione della scheda aperta (es. carrello).
// I dati rimangono disponibili durante la sessione corrente, ma vengono
// eliminati automaticamente quando la scheda o il browser vengono chiusi.
// =========================================================================

// Recupero il valore del carrello memorizzato nella sessione attuale
let carrello = sessionStorage.getItem("carrello");

// Se non esiste ancora un carrello, lo inizializzo a 0, altrimenti converto la stringa in numero
if (carrello === null) {
    carrello = 0;
} else {
    carrello = Number(carrello);
}

// Incremento del carrello all'aggiunta di un prodotto
carrelloButton.addEventListener("click", function () {
    carrello++;
    
    // Salvo il valore temporaneo nella sessione corrente
    sessionStorage.setItem("carrello", carrello);
    
    aggiornaTesti();
});

// Svuotamento completo del carrello temporaneo
resetButton.addEventListener("click", function () {
    // Rimuovo la chiave "carrello" dal Session Storage
    sessionStorage.removeItem("carrello");
    
    carrello = 0;
    aggiornaTesti();
});

// =========================================================================
// FUNZIONE DI AGGIORNAMENTO TESTI (Interfaccia Utente)
// =========================================================================
function aggiornaTesti() {
    // Leggo lo stato attuale dal Local Storage per scrivere il testo del tema
    temaTesto.innerText = "Tema salvato: " + localStorage.getItem("tema");
    
    // Mostro il numero corrente di prodotti salvati nella sessione
    carrelloTesto.innerText = "Prodotti nel carrello: " + carrello;
}

// Eseguo un primo avvio della funzione per mostrare i dati corretti al caricamento della pagina
aggiornaTesti();