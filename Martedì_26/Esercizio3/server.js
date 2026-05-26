const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    
    // CASO SPECIALI: Il browser richiede lo stile CSS per colorare le pagine
    if (req.url === "/style.css") {
        fs.readFile("style.css", (errore, dati) => {
            if (errore) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("File CSS non trovato");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(dati);
        });
    }
    // CASO A: L'utente scrive / oppure /a -> gli leggiamo index.html
    else if (req.url === "/" || req.url === "/a") {
        fs.readFile("index.html", (errore, dati) => {
            if (errore) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Errore nel caricamento della Home");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(dati);
        });
    }
    // CASO B: L'utente scrive /b -> gli leggiamo info.html
    else if (req.url === "/b") {
        fs.readFile("info.html", (errore, dati) => {
            if (errore) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Errore nel caricamento delle Info");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(dati);
        });
    }
    // CASO C: L'utente scrive /c -> gli leggiamo calcolatrice.html
    else if (req.url === "/c") {
        fs.readFile("calcolatrice.html", (errore, dati) => {
            if (errore) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Errore nel caricamento della Calcolatrice");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(dati);
        });
    }
    // Rotta non valida
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Pagina non trovata. Scegli tra /a, /b o /c");
    }
});

server.listen(3000, () => {
    console.log("Server in ascolto su http://localhost:3000");
});