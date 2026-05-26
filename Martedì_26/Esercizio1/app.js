// Importo il modulo nativo di Node.js per leggere gli input da console
const readline = require("readline");

// Importo il modulo personalizzato con le funzioni di gestione testo
const gestione = require("./GestioneTesto");

// Configuro l'interfaccia di comunicazione per leggere e scrivere in console
const interfaccia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Chiedo all'utente di inserire una frase tramite la console
interfaccia.question("Inserisci una frase da analizzare: ", function(fraseUtente) {
    
    // Definisco una lettera di prova da cercare nella frase
    const letteraDaCercare = "a";
    
    // Utilizzo le funzioni del modulo importato passando la frase dell'utente
    const testoMaiuscolo = gestione.trasformaMaiuscolo(fraseUtente);
    const numeroCaratteri = gestione.contaCaratteri(fraseUtente);
    const haLaLettera = gestione.contieneLettera(fraseUtente, letteraDaCercare);
    
    // Stampo i risultati richiesti dalla traccia dell'esercizio
    console.log("\n--- RISULTATI DELL'ANALISI ---");
    console.log("Testo originale: " + fraseUtente);
    console.log("Testo in maiuscolo: " + testoMaiuscolo);
    console.log("Numero di caratteri: " + numeroCaratteri);
    console.log("Contiene la lettera '" + letteraDaCercare + "'?: " + (haLaLettera ? "Si" : "No"));
    
    // Chiudo l'interfaccia di lettura per terminare il programma Node.js
    interfaccia.close();
});