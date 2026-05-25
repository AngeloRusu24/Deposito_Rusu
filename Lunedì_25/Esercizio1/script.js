// --- ELEMENTI DOM ---
const temaButton = document.getElementById("temaButton");
const salvaButton = document.getElementById("salvaButton");
const cancellaButton = document.getElementById("cancellaButton");

const nomeInput = document.getElementById("nomeGiocatore");
const giocoInput = document.getElementById("giocoPreferito");
const piattaformaInput = document.getElementById("piattaformaPreferita");

const visualizzazioneDati = document.getElementById("visualizzazioneDati");
const viewNome = document.getElementById("viewNome");
const viewGioco = document.getElementById("viewGioco");
const viewPiattaforma = document.getElementById("viewPiattaforma");

const body = document.body;

// --- CONTROLLO DATI SALVATI ALL'AVVIO ---
recuperaTema();
recuperaProfilo();

// --- CAMBIO TEMA GRAFICO ---
temaButton.addEventListener("click", function () {
    body.classList.toggle("dark"); // Attiva/disattiva la classe .dark sul body

    // Salva la scelta dell'utente nel Local Storage
    if (body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
});

// --- SALVATAGGIO DATI PROFILO ---
salvaButton.addEventListener("click", function () {
    const nome = nomeInput.value.trim(); // .trim() rimuove gli spazi vuoti accidentali
    const gioco = giocoInput.value.trim();
    const piattaforma = piattaformaInput.value;

    // Controllo validità: blocca il salvataggio se un campo è vuoto
    if (nome === "" || gioco === "" || piattaforma === "") {
        alert("Compila tutti i campi!");
        return; 
    } 
    
    // Salva i dati in modo permanente nel browser
    localStorage.setItem("nome", nome);
    localStorage.setItem("gioco", gioco);
    localStorage.setItem("piattaforma", piattaforma);

    // Mostra i dati appena salvati nella card del profilo
    mostraDatiGrafici(nome, gioco, piattaforma);
});

// --- CANCELLAZIONE DATI PROFILO (RESET) ---
cancellaButton.addEventListener("click", function () {
    // Rimuove le chiavi specifiche dal Local Storage
    localStorage.removeItem("nome");
    localStorage.removeItem("gioco");
    localStorage.removeItem("piattaforma");

    // Svuota i testi della card grafica
    viewNome.textContent = "Nome: ";
    viewGioco.textContent = "Gioco preferito: ";
    viewPiattaforma.textContent = "Piattaforma preferita: ";

    // Svuota i campi di inserimento del form
    nomeInput.value = "";
    giocoInput.value = "";
    piattaformaInput.value = "";

    visualizzazioneDati.classList.add("hidden"); // Nasconde la card
});

// --- FUNZIONE PER MOSTRARE I DATI GRAFICI ---
function mostraDatiGrafici(nome, gioco, piattaforma) {
    viewNome.textContent = "Nome: " + nome;
    viewGioco.textContent = "Gioco preferito: " + gioco;
    viewPiattaforma.textContent = "Piattaforma preferita: " + piattaforma;

    visualizzazioneDati.classList.remove("hidden"); // Rende visibile la card
}

// --- FUNZIONE RECUPERA TEMA ---
function recuperaTema() {
    const temaSalvato = localStorage.getItem("tema");

    // Ripristina il tema scuro all'avvio se era stato memorizzato
    if (temaSalvato === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
}

// --- FUNZIONE RECUPERA PROFILO ---
function recuperaProfilo() {
    const nomeSalvato = localStorage.getItem("nome");
    const giocoSalvato = localStorage.getItem("gioco");
    const piattaformaSalvata = localStorage.getItem("piattaforma");

    // Se i dati esistono, ripopola il form e mostra la card del profilo
    if (nomeSalvato && giocoSalvato && piattaformaSalvata) {
        nomeInput.value = nomeSalvato;
        giocoInput.value = giocoSalvato;
        piattaformaInput.value = piattaformaSalvata;
        
        mostraDatiGrafici(nomeSalvato, giocoSalvato, piattaformaSalvata);
    }
}