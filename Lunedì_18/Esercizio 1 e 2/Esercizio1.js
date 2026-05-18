// Chiediamo all'utente di scegliere la base del piatto tramite un menu numerato
let baseMenu = prompt("Scegli la base del tuo piatto:\n1. Piadina\n2. Panino\n3. Pokè");

// Definiamo una stringa vuota in cui accumuleremo la selezione iniziale e i condimenti
let ordineCompleto = "";

// Usiamo lo switch per gestire la scelta della base del piatto
switch (baseMenu) {
    case "1":
        ordineCompleto = "Hai scelto: Piadina";
        break; // Il break ferma lo switch per evitare di sovrascrivere la scelta
    case "2":
        ordineCompleto = "Hai scelto: Panino";
        break;
    case "3":
        ordineCompleto = "Hai scelto: Pokè";
        break;
    default:
        ordineCompleto = "Hai scelto una base non valida, ti assegniamo un Panino di default";
}

// Chiediamo all'utente il livello di condimento extra (da 1 a 3)
let livelloCondimento = prompt("Quanti condimenti extra vuoi aggiungere? Scegli un livello:\n3. Massimo (Salsa, Formaggio, Patatine)\n2. Medio (Salsa, Formaggio)\n1. Minimo (Solo Salsa)");

// Aggiungiamo un testo di intestazione alla stringa dei condimenti extra
ordineCompleto += " | Componenti extra aggiunti: ";

// Sfruttiamo intenzionalmente il FALL-THROUGH (senza break) per accumulare gli extra!
// Se l'utente preme 3, otterrà il condimento del caso 3 E ANCHE quelli del caso 2 e 1.
switch (livelloCondimento) {
    case "3":
        ordineCompleto += "Patatine, "; // Se seleziona 3, aggiunge Patatine e scivola giù
    case "2":
        ordineCompleto += "Formaggio fuso, "; // Aggiunge anche Formaggio e scivola giù
    case "1":
        ordineCompleto += "Salsa speciale."; // Caso finale comune a tutti i livelli
        break; // Qui mettiamo il break per fermare lo switch ed uscire correttamente
    default:
        ordineCompleto += "Nessun condimento extra valido selezionato.";
}

// Stampiamo in console il riepilogo totale contenente la selezione iniziale + i condimenti extra
console.log(ordineCompleto);
alert(ordineCompleto); // Opzionale: mostra un popup a schermo con il riepilogo