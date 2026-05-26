const http = require("http");
const fs = require("fs");
const gestoreMessaggi = require("./gestore");

console.log("Avvio dell'applicazione...");
gestoreMessaggi.mostraMessaggio(); // Questo continua a stampare nel terminale

const server = http.createServer((req, res) => {
    

    // Quando l'utente carica la pagina principale
    if (req.url === "/") {
        // 1. Leggiamo il file HTML
        fs.readFile("index.html", "utf8", (erroreHtml, codiceHtml) => {
            if (erroreHtml) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Errore nel caricamento della pagina HTML");
                return;
            }
            
            // 2. Leggiamo il TUO file di testo messaggio.txt
            fs.readFile("messaggio.txt", "utf8", (erroreTxt, testoDelFile) => {
                if (erroreTxt) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Errore nel caricamento del file di testo messaggio.txt");
                    return;
                }
                
                // 3. FONDAMENTALE: Sostituiamo il segnaposto dell'HTML con il vero testo del file .txt
                let paginaFinale = codiceHtml.replace("{{MESSAGGIO_SEGRETO}}", testoDelFile);
                
                // 4. Spediamo la pagina unita al browser
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.end(paginaFinale);
            });
        });
    }
});

server.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
});