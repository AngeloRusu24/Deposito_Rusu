// Importa il modulo http per creare il server e il modulo fs per leggere i file
const http = require("http");
const fs = require("fs");

// Crea il server web che riceve la richiesta (req) e prepara la risposta (res)
const server = http.createServer((req, res) => {
    
    // Il modulo fs legge in modo asincrono il file index.html presente nel progetto
    fs.readFile("index.html", (errore, dati) => {
        
        // Se si verifica un errore (es. il file e stato cancellato o rinominato)
        if (errore) {
            // Imposta lo stato HTTP a 500 (Errore interno del server) e il tipo a testo semplice
            res.writeHead(500, { "Content-Type": "text/plain" });
            // Invia il messaggio di errore finale e blocca la funzione con il return
            res.end("Errore nel caricamento del file");
            return;
        }
        
        // Se il file viene trovato, imposta lo stato HTTP a 200 (Tutto OK)
        // Comunica al browser che i dati in arrivo sono di tipo codice HTML (text/html)
        res.writeHead(200, { "Content-Type": "text/html" });
        
        // Spedisce al browser il contenuto del file index.html letto dal disco
        res.end(dati);
    });
});

// Dice al server di rimanere attivo e in ascolto sulla porta numerica 3000
server.listen(3000, () => {
    // Stampa un messaggio di conferma nel terminale appena il server parte
    console.log("Server avviato su http://localhost:3000");
});