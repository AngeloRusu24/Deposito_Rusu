// 1. Esempio di Fall-through (Cosa succede se dimentichi il break)
let valore = 2;

switch (valore) {
    case 1:
        console.log("Uno");
    case 2:
        console.log("Due"); // Essendo valore = 2, partirà da qui...
    case 3:
        console.log("Tre"); // ...e scivolerà anche qui perché sopra manca il break!
        break;
}

// 2. Esempio di Casi Multipli (Raggruppare più condizioni per lo stesso risultato)
let giorno = 6;

switch (giorno) {
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Giorno lavorativo");
}