// Definiamo tre stringhe booleane o flag per salvare quali ruoli l'utente accumula nelle 3 richieste
let haPlayer = false;
let haModerator = false;
let haAdmin = false;

// Usiamo un ciclo for che si ripete esattamente 3 volte (come richiesto esplicitamente dalla traccia)
for (let i = 1; i <= 3; i++) {
    // Chiediamo all'utente di inserire il ruolo per il controllo attuale (i indica il numero del tentativo)
    let ruoloInserito = prompt("Controllo " + i + " di 3. Inserisci un ruolo tra:\n- player\n- moderator\n- admin");

    // Convertiamo l'input in minuscolo per evitare problemi di case-sensitivity
    if (ruoloInserito !== null) {
        ruoloInserito = ruoloInserito.toLowerCase().trim();
    }

    // Switch per validare e attivare i ruoli accumulati contemporaneamente
    switch (ruoloInserito) {
        case "player":
            haPlayer = true;
            break;
        case "moderator":
            haModerator = true;
            break;
        case "admin":
            haAdmin = true;
            break;
        default:
            console.log("Tentativo " + i + ": Ruolo '" + ruoloInserito + "' sconosciuto. Applicato default (Nessun permesso speciale aggiunto).");
    }
}

// Finiti i 3 inserimenti, calcoliamo ed elenchiamo tutti i permessi associati ai ruoli accumulati
console.log("--- RIEPILOGO PERMESSI DI SISTEMA ---");

// Se l'utente ha accumulato il ruolo di Admin, mostriamo i suoi poteri specifici
if (haAdmin) {
    console.log("[RUOLO: ADMIN] -> Permesso di formattare il server e modificare il codice sorgente.");
}

// Se l'utente ha accumulato il ruolo di Moderator, mostriamo i suoi poteri specifici
if (haModerator) {
    console.log("[RUOLO: MODERATOR] -> Permesso di bannare utenti, mutare la chat e chiudere i ticket.");
}

// Se l'utente ha accumulato il ruolo di Player (o se non ha inserito nulla ma ha i permessi base)
if (haPlayer || (!haAdmin && !haModerator)) {
    console.log("[RUOLO: PLAYER] -> Permesso di muoversi nel mondo virtuale, chattare e ispezionare il proprio inventario.");
}

// Messaggio finale che mostra la combinazione esatta dei ruoli attivi contemporaneamente
let ruoliAttivi = [];
if (haPlayer) ruoliAttivi.push("Player");
if (haModerator) ruoliAttivi.push("Moderator");
if (haAdmin) ruoliAttivi.push("Admin");

if (ruoliAttivi.length === 0) {
    console.log("Stato Finale: Profilo Ospite (Nessun ruolo valido registrato nei 3 tentativi).");
} else {
    console.log("Stato Finale: Il tuo profilo possiede contemporaneamente i ruoli di: " + ruoliAttivi.join(" / "));
}